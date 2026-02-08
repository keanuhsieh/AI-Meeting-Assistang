
exports.handler = async function(event, context) {
  const FORM_ID = 'dfU0';
  // 更新為新版 API 路徑，這是 SPA 前端用來獲取資料的接口
  const API_URL = `https://form.cashier.ecpay.com.tw/api/orders/${FORM_ID}`;

  try {
    const response = await fetch(API_URL, {
      method: 'GET',
      headers: {
        // 1. 來源偽裝 (必須對應新版網域)
        'Referer': `https://form.cashier.ecpay.com.tw/${FORM_ID}`,
        'Origin': 'https://form.cashier.ecpay.com.tw',
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

    // --- 新版 API (form.cashier) 的資料結構解析 ---
    // 預期結構: json.data.goods[0].specifications[0].price
    
    if (!json.data || !json.data.goods) {
        return { statusCode: 500, body: JSON.stringify({ error: 'Invalid New API Response Format' }) };
    }

    // 1. 取得商品列表
    const goods = json.data.goods;
    if (!goods || goods.length === 0) {
        return { statusCode: 404, body: JSON.stringify({ error: 'Product Not Found' }) };
    }

    const validPrices = [];

    // 2. 遍歷商品
    goods.forEach(good => {
        if (good.specifications) {
            good.specifications.forEach(spec => {
                // 檢查是否有庫存 (有些欄位可能是 stock, amount 或 limit)
                // 這裡假設 buy_limit_count 或 stock, 若無欄位則假設有貨
                const price = Number(spec.price);
                if (price > 0) {
                     validPrices.push(price);
                }
            });
        } else {
             // 無規格商品
             const price = Number(good.price);
             if (price > 0) validPrices.push(price);
        }
    });


    if (validPrices.length === 0) {
        return { statusCode: 404, body: JSON.stringify({ error: 'No Valid Prices Found' }) };
    }

    // 3. 取得最低價
    const minPrice = Math.min(...validPrices);

    return {
      statusCode: 200,
      headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'public, max-age=300' // 快取 5 分鐘
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