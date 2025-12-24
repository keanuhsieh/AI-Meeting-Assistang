
exports.handler = async function(event, context) {
  const FORM_ID = 'cPy2';
  const API_URL = `https://page.cashier.ecpay.com.tw/private/api/forms/${FORM_ID}`;

  try {
    const response = await fetch(API_URL, {
      method: 'GET',
      headers: {
        // 1. 來源偽裝
        'Referer': `https://page.cashier.ecpay.com.tw/forms/${FORM_ID}`,
        // 2. 瀏覽器身份
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        // 3. 接收格式
        'Accept': 'application/json, text/plain, */*',
        // 4. 標準 Header
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Dest': 'empty',
        'Accept-Language': 'zh-TW,zh;q=0.9,en-US;q=0.8,en;q=0.7'
      }
    });

    if (!response.ok) {
      return { 
        statusCode: response.status, 
        body: JSON.stringify({ error: `External API Error: ${response.status}` }) 
      };
    }

    const json = await response.json();

    // 驗證資料結構
    if (!json.response || !json.response.elements) {
        return { statusCode: 500, body: JSON.stringify({ error: 'Invalid API Response Format' }) };
    }

    // 1. 找到商品區塊 (uf_product)
    const productElement = json.response.elements.find(el => el.elem_type === 'uf_product');
    
    if (!productElement) {
        return { statusCode: 404, body: JSON.stringify({ error: 'Product Not Found' }) };
    }

    // 2. 取得商品選項
    const productOption = productElement.elem_data.options[0];
    if (!productOption || !productOption.assorts) {
        return { statusCode: 500, body: JSON.stringify({ error: 'No Product Options Found' }) };
    }

    // 3. 過濾有庫存且價格有效的項目
    const validPrices = productOption.assorts
        .filter(item => item.amount > 0 && Number(item.sale_price) > 0)
        .map(item => Number(item.sale_price));

    if (validPrices.length === 0) {
        return { statusCode: 404, body: JSON.stringify({ error: 'Out of Stock' }) };
    }

    // 4. 取得最低價
    const minPrice = Math.min(...validPrices);

    return {
      statusCode: 200,
      headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'public, max-age=300' // 快取 5 分鐘，避免過度頻繁請求
      },
      body: JSON.stringify({ price: minPrice }),
    };

  } catch (error) {
    console.error('Function Execution Error:', error);
    return { 
      statusCode: 500, 
      body: JSON.stringify({ error: error.message }) 
    };
  }
};
