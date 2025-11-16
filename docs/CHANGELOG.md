# 版本變更日誌

所有此專案的重要變更都將記錄在此檔案中。

## [1.0.17] - 2025-11-15

### Added
- **AEO: FAQ Section:** 新增全新的 `FAQ.tsx` 元件與對應的 `FAQPage` JSON-LD 結構化資料，直接回答用戶關於安全性、費用、使用方式與競品比較的四大核心問題。
- **SEO: Organization Schema:** 在 `index.html` 中新增 `Organization` 結構化資料，以建立品牌權威性。
- **SEO: Canonical Tag:** 在 `index.html` 中新增 `rel="canonical"` 標籤，以避免重複內容問題。

### Changed
- **AEO: Direct Answer:** 重構 `Hero.tsx`，將 H1 下方的副標題與說明文字整合為一個更明確的「答案置頂」元件，以優化答案引擎擷取。
- **SEO: Semantic HTML:** 將 `Trust.tsx` 中的比較表從 `div` 佈局重構為語意化的 `<table>` 結構，提升了可訪問性與爬蟲可讀性，同時保持視覺外觀不變。
- **SEO: Image Optimization:** 為 `Testimonials.tsx` 中的所有用戶頭像 `<img>` 標籤添加了 `width`, `height` 和 `loading="lazy"` 屬性，以改善 Core Web Vitals (CLS & LCP)。
- **AEO: Review Schema:** 在 `SoftwareApplication` 結構化資料中，嵌入了前三則客戶見證作為 `Review` 項目，以增強信任訊號。

## [1.0.16] - 2025-11-14

### Changed
- **Trust Section:** 強化了 `Trust.tsx` 中的比較表，新增「你現在的記錄方式」一欄，以突顯與人工逐字稿的對比。
- **Trust Section:** 將「總使用成本」列替換為更具體的「一年總成本」列，明確揭示了手動工作的巨大隱藏勞動成本。

## [1.0.15] - 2025-11-13

### Added
- **Component:** 建立了一個全新的、可自適應背景的 `Logo.tsx` 元件，包含 `default` (全彩) 和 `outline` (線條) 兩種模式。

### Changed
- **Brand Identity:** 全面將新的自適應 Logo 應用於網站所有主要區塊的標題前，以極大化品牌視覺的一致性與重複性。
- **Refactor:** 重構 `Header` 與 `Solution` 元件，改為使用新的 `Logo` 元件，以簡化維護。

## [1.0.14] - 2025-11-13

### Added
- **Brand Identity:** 導入全新的「橘色筆記本」全彩 Logo，以建立統一且專業的品牌視覺識別。

### Changed
- **UI Update:** 全面將網站的 Logo 更新為新的品牌標識，包含頂部導覽列 (`Header`)、瀏覽器分頁圖示 (`Favicon`)，以及 `Solution` 區塊中的「智慧摘要」圖示。

## [1.0.13] - 2025-11-13

### Changed
- **SEO Enhancement:** 全面優化網站的 SEO 元素以對齊新品牌名稱「Gemini 會議記錄 APP」。更新了 `index.html` 的 Title, Meta Description, JSON-LD，以及 Hero 區塊的 H1 標籤，以最大化搜尋引擎可見度。

## [1.0.12] - 2025-11-13

### Changed
- **Header Design Finalized:** 根據手動微調結果，將 Header 的「磨砂玻璃」效果定為最終版本。此版本包含客製化的背景透明度 (`bg-white/50`)、模糊度 (`backdrop-blur-2xl`)、陰影 (`shadow-2xl`) 以及帶有品牌色的反光光澤 (`via-orange-200/85`)。此設計正式成為專案的標準規範。

## [1.0.11] - 2025-11-13

### Changed
- **Header Visuals:** 將 Header 的設計升級為高質感的磨砂玻璃效果。透過增強模糊與不透明度，並用微妙的漸層高光取代簡單的底部邊框，來模擬真實、帶有光澤的玻璃邊緣。

## [1.0.10] - 2025-11-13

### Changed
- **Visual Tweak:** 在 `About` 區塊中，將「一次性付費」特點的美元符號圖示尺寸放大 1.5 倍，以提升視覺清晰度與強調效果。

## [1.0.9] - 2025-11-13

### Changed
- **Icon Update:** 在 `About` 區塊中，將「一次性付費」特點的圖示更換為更具象的美元符號 SVG，以強化視覺傳達效果。

## [1.0.8] - 2025-11-13

### Added
- **Plaud Note Cost Analysis:** 在「痛點」區塊 (`Problem.tsx`) 新增一張高對比的成本分析卡片。此卡片根據高用量情境計算出 Plaud Note 的真實年度持有成本，以凸顯我們方案的價格優勢。

### Changed
- **Branding:** 根據市場策略，將網站中主要的產品名稱從「AI 會議助理」更新為「Gemini 會議記錄 APP」，以提升品牌辨識度與市場區隔。

## [1.0.7] - 2024-08-02

### Changed
- **Asset Update:** 更新 Hero 區塊的背景圖片。
- **Asset Update:** 更新 About 區塊的團隊協作圖片。

## [1.0.6] - 2024-08-02

### Changed
- **Header Behavior:** 修改頂部導覽列，使其在使用者向下滾動時自動隱藏，向上滾動時平滑顯示，以提供更沉浸的內容瀏覽體驗。此功能在桌面與行動裝置上皆可運作。

## [1.0.5] - 2024-08-02

### Added
- **About Section:** 新增一個區塊來介紹「Agent Factory」的品牌使命與核心價值，並為此建立了新的 `About.tsx` 元件。

## [1.0.4] - 2024-08-02

### Changed
- **SEO Optimization:** 根據 SEO 專家建議，全面更新網站的 `<title>`, `<meta>` 標籤, 以及頁面 `H1`, `H2` 標題，以「Plaud ai 替代方案」為核心關鍵字進行優化。
- **Added Schema.org:** 在 `index.html` 中新增 `SoftwareApplication` 類型的 JSON-LD 結構化資料，以增強搜尋結果的豐富性。
- **Footer Links:** 在頁尾新增「隱私權政策」、「服務條款」等連結，提升網站信任度。

## [1.0.3] - 2024-08-01

### Added
- **SPECIFICATION.md:** 在「部署與營運」章節中，明確新增「購買連結」為必須設定的外部連結。
- **WRITING_GUIDE.md:** 在「A -> B 專案工作流程」中，新增一個明確的檢查清單，提醒開發者在建立新專案時，必須更新 GTM/Pixel ID 與購買連結。

### Changed
- **SPECIFICATION.md:** 重新組織「部署與營運」章節，使其更清晰地標示出需要為每個專案單獨設定的外部服務 ID 與連結。

## [1.0.2] - 2024-07-31

### Changed
- **SPECIFICATION.md:**
  - 新增命名規範，要求元件使用 `PascalCase`。
  - 將 SVG 圖示和圖片的使用方式（硬編碼/外連）從「問題」改為正式的「慣例」。
  - 強制規定 `Trust` 元件的結構與金流安全區塊的程式碼必須被完整複製，並提供程式碼片段。

- **WRITING_GUIDE.md:**
  - 新增「專案特定規範」的說明，強調 SPEC 文件中的強制規定優先級高於通用實踐。

## [1.0.1] - 2024-07-31

### Added
- 建立技術文件撰寫指南 (`docs/WRITING_GUIDE.md`)，定義文件維護與衍生專案的標準流程。

### Changed
- 在 `SPECIFICATION.md` 中新增指向撰寫指南的連結，並更新文件版本。

## [1.0.0] - 2024-07-30

### Added
- 專案初始版本建立。
- 建立完整的一頁式銷售網站，包含以下區塊：
  - Header
  - Hero
  - Problem
  - Solution
  - Testimonials
  - Trust
  - UseCases
  - Assurance
  - FinalCTA
  - Footer
- 整合 Google Tag Manager 與 Meta Pixel 進行行銷追蹤。
- 建立第一版技術規格書 (`docs/SPECIFICATION.md`)。