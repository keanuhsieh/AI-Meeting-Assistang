# Agent Factory 專案技術規格書

---
- **專案名稱:** Gemini 會議記錄 APP 升級承接頁 (Osmi Migration Landing Page)
- **文件版本:** 2.0.0
- **最後更新:** 2026-10-10
- **基於專案:** AI 會議助理一頁式銷售網站 (Project A, v1.0.25)
---

> **[文件維護指南]** 關於如何撰寫、維護此文件，或基於此文件建立新專案，請參閱 [技術文件撰寫指南 (WRITING_GUIDE.md)](./WRITING_GUIDE.md)。

## 1. 專案總覽 (Project Overview)

- **專案定位:** 原「Gemini 會議記錄 APP」一頁式銷售頁全面轉型為「舊產品升級為 Osmi」的品牌承接與導流網站。
- **核心目標:**
  1. 保留舊站既有的自然搜尋價值（Gemini 會議記錄、會議記錄 APP、AI 錄音轉文字、AI 逐字稿、Plaud AI 替代方案、會議紀錄軟體）。
  2. 清楚且自然地告知訪客：「Gemini 會議記錄 APP」的新一代產品現在叫 Osmi。
  3. 建立連續性與信任感，引導訪客前往 `https://osmi.bookai.com/zh-TW/`。
  4. 嚴格不自動轉址，所有前往 Osmi 的動作均由使用者主動點擊。
- **真實產品定位:**
  - Osmi 是「Gemini 會議記錄 APP」的新一代產品。
  - 使用者把已經錄好的錄音、影片或錄音筆檔案交給 Osmi（不宣稱由 Osmi 直接替使用者錄音）。
  - Osmi 會先詢問講者、人名、術語與紀錄語言，再撰寫會議紀錄。
  - 產出包含重點、時序摘要、行動事項與完整逐字稿。
  - 支援 iPhone、Android 與電腦網頁，同一個帳號跨平台使用。
  - 支援 21 種介面與紀錄語言；支援手機錄音、影片與 10 種以上舊錄音筆格式。
  - 電腦網頁單場最長可處理 12 小時。
  - 沒有訂閱、自動續費或月租；依需要購買分鐘，已購買分鐘不過期；拿到逐字稿才扣分鐘。
  - 新帳號送 60 分鐘，不綁信用卡。
  - 營運與資安事實：台灣公司營運、錄音暫存在 Google Cloud 台灣區處理完成後刪除、帳號資料使用 Supabase 東京區、使用 Google 官方 Gemini API（依 Google 適用條款，提交內容不被用來訓練 Google 產品）。

## 2. 全站禁止內容 (Prohibited Content Policy)

全站嚴格移除或禁止以下字句：
- 「資料 100% 只存在使用者自己的 Google Drive」
- 「我們完全不經手資料」、「沒有經過任何第三方」
- 「絕對安全」、「零資安風險」、「完全杜絕外洩」
- 「符合政府資安指引」（除非有正式證明）
- 「一次買斷、無限使用」、「終身更新」
- 「3 分鐘完成」或任何固定完成時間保證
- 「一年省下 120 天」等無依據誇大計算
- 虛構之「4.9 分、68 則評論」及林經理、王律師等人物見證
- AggregateRating 與 Review 結構化資料
- 舊價格、舊購買按鈕及舊 ECPay (綠界) 結帳入口
- 「中資硬體」「無中資」等攻擊或暗示競品國籍之說法
- 將 Plaud 描述成高風險或不安全
- 舊 SSL badge、SSL security seal 與相關誇大文案
- Unsplash 或其他一般會議圖庫主視覺；任何 AI 生成產品畫面

## 3. 技術棧與架構 (Tech Stack & Architecture)

- **前端框架:** React 19, TypeScript
- **樣式方案:** Tailwind CSS (支援 WCAG AA、prefers-reduced-motion、響應式)
- **檔案架構 (扁平式 Flat Structure):**
  - `./components`: 存放各區段 React 元件 (`Announcement.tsx`, `Header.tsx`, `Hero.tsx`, `BrandContinuity.tsx`, `ProcessSteps.tsx`, `DesktopShowcase.tsx`, `CoreFeatures.tsx`, `DataTrust.tsx`, `Pricing.tsx`, `FAQ.tsx`, `FinalCTA.tsx`, `Footer.tsx`)
  - `./utils`: 追蹤公用函式 (`analytics.ts`)
  - `App.tsx`: 頁面主佈局
  - `index.html`: 入口與 SEO / JSON-LD / GTM 設定
  - `/public/pix`: 官方真實截圖與素材（以 `/pix/檔名` 引用）
  - `/public/wordmark.svg`: 橫式官方標準字

### 3.1 設計系統 (Design Tokens)

| 用途 | Token Name | Class / 數值 | 備註 |
|---|---|---|---|
| 品牌蔚藍 (Brand Azure) | `brand-azure` | `#81BDD6` | Osmi 品牌標記專用色 |
| 主要互動 (Primary CTA) | `cta-primary` | `#165A79` / `hover:#114862` | 高對比深藍，對比度 > 4.5:1 (符合 WCAG AA) |
| 次要互動 (Secondary CTA) | `cta-secondary` | `#F1F5F9` / 邊框 `#CBD5E1` | 淺灰藍按鈕 |
| 頁面背景 | `bg-default` | `#F8FAFC` 至 `#FFFFFF` | 淺藍灰/白背景，大量留白 |
| 容器背景 | `bg-card` | `#FFFFFF` | 白色卡片，輕微邊框與微陰影 |
| 主要文字 | `text-heading` | `#0F172A` (Slate 900) | 深色標題文字，嚴禁大面積彩度漸層 |
| 內文文字 | `text-body` | `#334155` (Slate 700) | 主要段落 |
| 輔助文字 | `text-muted` | `#64748B` (Slate 500) | 輔助說明小字 |
| 邊框線條 | `border-default` | `#E2E8F0` (Slate 200) | 區塊與事實表格線 |

## 4. 頁面區塊順序 (Page Section Order)

1. **品牌升級公告列 (Announcement):** 置頂橫條，文字「Gemini 會議記錄 APP 已升級為 Osmi」，不可關閉、不自動跳轉，帶有導流連結。
2. **頁首導覽 (Header):** 左側 Osmi wordmark，右側「新一代 Osmi」、「看 30 秒範例」、「免費試用」按鈕。Sticky 定位且不遮擋內文。
3. **Hero (首屏核心):** 單一 H1「會議記錄 APP，現在叫 Osmi。」，副標說明「AI 先問再寫」，雙 CTA 按鈕，右側完整呈現 `/pix/04-ask-speakers.png`。
4. **品牌延續說明 (BrandContinuity):**「不是換一個名字而已。」說明四項改進，搭配 `/pix/01-list.png`。
5. **三步驟流程 (ProcessSteps):**「交出錄音」(`/pix/16-share-in.png`) ➔「回答幾個問題」(`/pix/04-ask-speakers.png`) ➔「拿走整理好的紀錄」(`/pix/07-doc-top.png`)。
6. **電腦版工作畫面 (DesktopShowcase):** 主圖 `/pix/D1-overview.png`、`/pix/D2-notes-transcript.png`，輔助圖 `/pix/D5-export.png`、`/pix/D7-multifile.png`。
7. **核心能力 (CoreFeatures):** 8 項真實產品能力。
8. **資料與信任 (DataTrust):** 5 項事實表格與「查看完整資料地圖 →」連結。
9. **價格方案 (Pricing):** 60、180、600 分鐘非訂閱買點數方案與試用說明。
10. **常見問題 (FAQ):** 6 組依規格撰寫之問答，鍵盤存取支援。
11. **最後行動 (FinalCTA):**「下一場會議，你只要把關。」雙 CTA 導流。
12. **頁腳資訊 (Footer):** 品牌承接宣示、各項官方服務與條款連結。

## 5. 分析與追蹤規範 (Analytics)

- 保持既有 GTM 容器 (`GTM-TXQBC2JD`) 與 Meta Pixel (`PageView`)。
- 所有連往 `osmi.bookai.com` 之連結，必須透過全域公用函式發送：
  ```javascript
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'osmi_outbound_click',
    destination: '完整網址',
    placement: 'announcement' | 'nav' | 'hero' | 'flow' | 'data' | 'pricing' | 'final' | 'footer'
  });
  ```
- 追蹤失敗絕不得阻擋使用者瀏覽或造成連結失效。
