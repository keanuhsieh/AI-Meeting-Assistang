// scripts/verify-price.mjs
// 執行指令: node scripts/verify-price.mjs

const FORM_ID = 'cPy2';
const API_URL = `https://page.cashier.ecpay.com.tw/private/api/forms/${FORM_ID}`;

async function fetchPrice() {
  console.log(`[Info] 正在模擬瀏覽器請求: ${API_URL}`);

  try {
    const response = await fetch(API_URL, {
      method: 'GET',
      headers: {
        // 1. 來源偽裝 (最重要，告訴伺服器我是從表單頁面來的)
        'Referer': `https://page.cashier.ecpay.com.tw/forms/${FORM_ID}`,
        
        // 2. 瀏覽器身份 (複製您截圖中的 User-Agent)
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        
        // 3. 告訴伺服器我們看得懂什麼格式 (根據您的截圖修正)
        'Accept': 'application/json, text/plain, */*',
        
        // 4. 其他標準 Header (讓請求看起來更自然)
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Dest': 'empty',
        'Accept-Language': 'zh-TW,zh;q=0.9,en-US;q=0.8,en;q=0.7'
      }
    });

    if (!response.ok) {
      // 如果這裡報錯 (例如 403)，我們才需要考慮把 Cookie 放進去
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const json = await response.json();

    // --- JSON 解析邏輯 (針對綠界結構) ---
    
    if (!json.response || !json.response.elements) {
        throw new Error('API 回傳格式不符：找不到 response.elements');
    }

    // 1. 找到商品區塊 (uf_product)
    const productElement = json.response.elements.find(el => el.elem_type === 'uf_product');
    
    if (!productElement) {
        throw new Error('找不到商品元件 (uf_product)，表單可能已下架');
    }

    // 2. 取得商品選項
    const productOption = productElement.elem_data.options[0];
    if (!productOption || !productOption.assorts) {
        throw new Error('找不到商品規格列表 (assorts)');
    }

    const items = productOption.assorts;
    console.log(`[Info] 成功讀取商品：${productOption.product_name}`);
    console.log(`[Info] 偵測到 ${items.length} 個價格方案。\n`);

    const validPrices = [];

    items.forEach((item, index) => {
      const name = item.assort_name;
      const price = Number(item.sale_price);
      const stock = item.amount; // amount 是庫存

      // 判斷庫存 (amount <= 0 代表沒貨)
      const isOutOfStock = stock <= 0;
      const statusIcon = isOutOfStock ? '❌ 缺貨' : '✅ 有貨';
      
      console.log(`  方案 ${index + 1}: [${name}]`);
      console.log(`     價格: $${price} | 庫存: ${stock} | 狀態: ${statusIcon}`);

      if (!isOutOfStock && price > 0) {
        validPrices.push(price);
      }
    });

    if (validPrices.length > 0) {
      const minPrice = Math.min(...validPrices);
      console.log('\n------------------------------------------------');
      console.log(`[Success] 🎉 目前最低入手價: NT$ ${minPrice}`);
      console.log('------------------------------------------------');
    } else {
      console.log('\n------------------------------------------------');
      console.log('[Info] 😭 所有方案皆已售完。');
      console.log('------------------------------------------------');
    }

  } catch (error) {
    console.error('[Error] 執行失敗:', error.message);
    console.log('[Tip] 如果出現 403 Forbidden，代表綠界強制檢查 Cookie，請告訴我，我們再加一步驟。');
  }
}

fetchPrice();