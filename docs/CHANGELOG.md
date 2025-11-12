# 版本變更日誌

所有此專案的重要變更都將記錄在此檔案中。

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
