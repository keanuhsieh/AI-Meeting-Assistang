
// scripts/verify-price.mjs
// 執行指令: node scripts/verify-price.mjs

const FORM_ID = 'dfU0';
// 更新為新版 API
const API_URL = `https://form.cashier.ecpay.com.tw/api/orders/${FORM_ID}`;

async function fetchPrice() {
  console.log(`[Info] 正在模擬瀏覽器請求: ${API_URL}`);

  try {
    const response = await fetch(API_URL, {
      method: 'GET',
      headers: {
        // 1. 來源偽裝 (New Domain)
        'Referer': `https://form.cashier.ecpay.com.tw/${FORM_ID}`,
        'Origin': 'https://form.cashier.ecpay.com.tw',
        
        // 2. 瀏覽器身份
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        
        // 3. 格式
        'Accept': 'application/json, text/plain, */*',
        
        // 4. Headers
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Dest': 'empty',
        'Accept-Language': 'zh-TW,zh;q=0.9,en-US;q=0.8,en;q=0.7'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status} (可能是需要 Token 或 API 路徑錯誤)`);
    }

    const json = await response.json();
    console.log('[Info] API 回傳結構 (前 200 字):', JSON.stringify(json).substring(0, 200) + '...');

    // --- 新版 JSON 解析邏輯 (form.cashier) ---
    
    if (!json.data || !json.data.goods) {
        throw new Error('API 回傳格式不符：找不到 data.goods');
    }

    const goods = json.data.goods;
    console.log(`[Info] 偵測到 ${goods.length} 個商品項目。\n`);

    const validPrices = [];

    goods.forEach((good, index) => {
        const name = good.name;
        console.log(`  商品 ${index + 1}: [${name}]`);

        if (good.specifications && good.specifications.length > 0) {
            good.specifications.forEach((spec, sIndex) => {
                const price = Number(spec.price);
                const specName = spec.spec_name || '預設規格';
                console.log(`    - 規格 ${sIndex + 1}: ${specName} | $${price}`);
                if (price > 0) validPrices.push(price);
            });
        } else {
             const price = Number(good.price);
             console.log(`    - 價格: $${price}`);
             if (price > 0) validPrices.push(price);
        }
    });

    if (validPrices.length > 0) {
      const minPrice = Math.min(...validPrices);
      console.log('\n------------------------------------------------');
      console.log(`[Success] 🎉 目前最低入手價: NT$ ${minPrice}`);
      console.log('------------------------------------------------');
    } else {
      console.log('\n------------------------------------------------');
      console.log('[Info] 😭 找不到有效價格。');
      console.log('------------------------------------------------');
    }

  } catch (error) {
    console.error('[Error] 執行失敗:', error.message);
    console.log('[Tip] 新版表單可能需要 Session Token。若此失敗，網站將自動降級顯示預設價格。');
  }
}

fetchPrice();
