# 版本變更日誌

所有此專案的重要變更都將記錄在此檔案中。

## [2.0.0] - 2026-10-10

### Major Migration & Brand Evolution
- **Brand Transition:** 網站全面由「Gemini 會議記錄 APP」一頁式直售轉型為「舊產品升級為 Osmi」的品牌承接與導流站。
- **Visual Design:** 導入 Osmi 官方品牌色系（蔚藍標記 `#81BDD6`、深藍高對比 CTA `#165A79`、無漸層深色文字 `#0F172A` 與淺藍灰 `#F8FAFC` 背景），移除舊站橘色強促購風格。
- **Truth-in-Advertising & Compliance:**
  - 徹底移除未經證實之評價 (4.9分/68則評論/林經理、王律師等虛構人物見證)。
  - 移除「100% 存在個人 Drive」、「我們不經手」、「絕對安全」、「零資安風險」、「一次買斷無限使用」等宣稱。
  - 移除中資攻擊、競品風險暗示與舊 SSL 安全盾牌貼紙。
  - 建立嚴格的「資料與信任」事實表（台灣公司營運、Gemini API 條款、台灣 GCP 暫存刪除、東京 Supabase、處理後刪除）。
- **Pricing & Checkout:**
  - 停用舊 ECPay 結帳連結與 `usePrice.ts` 爬價邏輯，不再向 Netlify Function 發送即時爬價請求。
  - 改為展示真實 Osmi 分鐘計價方案 (60分 NT$39, 180分 NT$99, 600分 NT$300) 與新帳號贈送 60 分鐘。
- **Component Architecture:**
  - 建立 12 個全新 Section 元件：`Announcement`, `Header`, `Hero`, `BrandContinuity`, `ProcessSteps`, `DesktopShowcase`, `CoreFeatures`, `DataTrust`, `Pricing`, `FAQ`, `FinalCTA`, `Footer`。
  - 全面使用真實原圖截圖：`01-list.png`, `04-ask-speakers.png`, `07-doc-top.png`, `16-share-in.png`, `D1-overview.png`, `D2-notes-transcript.png`, `D5-export.png`, `D7-multifile.png`, `AppIcon-1024.png`, `wordmark.svg`。
- **SEO & Structured Data:**
  - 修正 Canonical (`https://meeting.hfcc.com.tw/`)、Robots 與 Meta Tags。
  - 清理不實 Review 與 AggregateRating 結構化資料，替換為合法標準之 `Organization`, `SoftwareApplication`, `FAQPage` JSON-LD。
- **Analytics:** 實作 GTM `osmi_outbound_click` 事件發送機制，記錄目標網址與版位 (placement)。

## [1.0.25] - 2026-02-09

### Changed
- **Payment Link Update:** 更新綠界 (ECPay) 結帳表單連結。
    - **Frontend:** `Header`, `Hero`, `FinalCTA` 的購買連結皆更新為短網址 `https://a.ecpay.tw/dfU0`。
    - **Backend Logic:** 因應新版表單 (`form.cashier`) 為 SPA 架構，重寫 `netlify/functions/get-price.js` 邏輯，改為嘗試呼叫 `/api/orders/{ID}`。
    - **Developer Tools:** 同步更新 `scripts/verify-price.mjs` 以驗證新版 API。

## [1.0.24] - 2025-12-25
... (歷程保留)
