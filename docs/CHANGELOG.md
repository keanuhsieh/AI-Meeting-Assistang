# 版本變更日誌

所有此專案的重要變更都將記錄在此檔案中。

## [1.0.22] - 2025-11-15

### Fixed
- **Google Search Icon:** 修復 Google 搜尋結果無法抓取網站圖示的問題。新增 `apple-touch-icon` 與 `mask-icon` 宣告，並優化 `favicon.svg` 的引用屬性 (`sizes="any"`)，強制 Googlebot 將其識別為高品質來源。

## [1.0.21] - 2025-11-15

### Fixed
- **Hero Testimonial Bug:** 修復 Hero CTA 按鈕下方見證翻轉時出現的「空白期」與「重置跳動」問題。改用 **Cross-fade (淡入淡出)** 邏輯，確保在不同解析度下皆能優雅切換。
- **Layout Consistency:** 解決絕對定位元件在切換時可能產生的寬度溢出與閃爍問題。

### Changed
- **Authority Scoring Optimization:** 根據「4.9/5 顆星」的總體設定，調整了見證區塊的個別評分權重。將關鍵專業人士（經理、律師、政府主管）調至 5.0 滿分，以確保數據逻辑的一致性與視覺震撼力。
- **Star Alignment:** 修正 Hero 見證中星星與評分數字的對齊，提升整體視覺質感。

## [1.0.20] - 2025-11-15

### Added
- **Conversion Optimization (Hero Section):** 在 Hero CTA 按鈕下方新增自動翻轉的「微型見證」與動態評分顯示，降低陌生客的第一眼猶豫感。
- **Conversion Optimization (Final CTA):** 在底部 CTA 區塊新增來自蔡顧問的強力見證文案，強化「一次性付費」對比「Plaud 年費」的心理優勢。
- **Social Proof Density:** 在見證區塊上方新增「4.9/5 顆星」信任標籤 (Trust Badge)，建立立即的專業權威感。

... (其餘內容保持不變)