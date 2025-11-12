# 版本變更日誌

所有此專案的重要變更都將記錄在此檔案中。

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