# Agent Factory 專案技術規格書

---
- **專案名稱:** AI 會議助理一頁式銷售網站 (Project A)
- **文件版本:** 1.0.8
- **最後更新:** 2025-11-15
- **基於專案:** N/A (此為初始專案)
---

> **[文件維護指南]** 關於如何撰寫、維護此文件，或基於此文件建立新專案，請參閱 [技術文件撰寫指南 (WRITING_GUIDE.md)](./WRITING_GUIDE.md)。

## 1. 專案總覽 (Project Overview)

- **目標使用者:** 公務員、法律專業人士、研究生、企業 PM 等需要處理大量會議記錄的專業人士。
- **核心價值主張:** 安全、高效地將機密會議錄音轉化為 Google 文件摘要，節省時間，保護資料隱私。
- **產品正式名稱:** Gemini 會議記錄 APP

## 2. 技術棧與架構 (Tech Stack & Architecture)

- **前端框架:** React 19, TypeScript
- **樣式方案:** Tailwind CSS (via CDN)
- **部署平台:** Netlify (CI/CD via GitHub)
- **檔案結構:**
  - `/src/components`: 存放所有 React 元件。
  - `App.tsx`: 組合所有頁面級元件 (Sections) 的主佈局檔案。
  - `index.html`: 應用程式進入點，包含全域設定、追蹤碼。
  - `/docs`: 存放所有技術與規格文件。

### 2.1 命名規範 (Naming Conventions)
- **元件命名:** 所有元件檔案和匯出的 React 元件 **必須** 使用 `PascalCase` (例如: `FeatureCard.tsx`, `FinalCTA.tsx`)。
- **語意化:** 元件名稱應具備語意，清晰描述其功能或內容 (例如: `Problem`, `Solution`, `Trust`)。

## 3. 設計系統 (Design System) - "Design Tokens"

### 3.1 色彩 (Colors)
| 用途 | Token Name | Tailwind Class(es) | 備註 |
|---|---|---|---|
| 主色 (CTA) | `primary` | `orange-600` | 用於按鈕、重點強調 |
| 主色 (Hover) | `primary-hover` | `orange-700` | 按鈕懸停效果 |
| 主色 (亮) | `primary-light` | `orange-100` | Icon 背景 |
| 主色 (點綴) | `primary-accent`| `orange-400` | Hero 標題亮點 |
| 點綴 (競品分析) | `accent-competitor` | `amber-400` | Problem Section 卡片 |
| 文字 (標題) | `text-heading`| `slate-900` | 主要標題 |
| 文字 (內文) | `text-body` | `slate-800`, `slate-700` | 主要內文 |
| 文字 (輔助) | `text-muted` | `slate-600`, `slate-500` | 次要說明文字 |
| 文字 (反色) | `text-inverted`| `white`, `slate-200`, `slate-300`| 用於深色背景 |
| 背景 (預設) | `bg-default` | `slate-50` | 頁面主要背景 |
| 背景 (次級) | `bg-subtle` | `slate-100` | 區塊間隔背景 |
| 背景 (表面) | `bg-surface` | `white` | 卡片、浮動元素 |
| 背景 (深色) | `bg-dark` | `slate-800` | Problem Section 卡片 |
| 邊框 | `border-default`| `slate-200` | 卡片、表格邊框 |
| 狀態 (危險) | `status-danger`| `red-500` `red-600` `red-700`| Problem Section |
| 狀態 (成功) | `status-success`| `green-600` | Assurance Section |
| 點綴 (高亮) | `accent-highlight`|`yellow-300` | Hero 內文高亮 |


### 3.2 字體排版 (Typography)
| 用途 | Tailwind Class(es) | 字重 | 備註 |
|---|---|---|---|
| Display | `text-4xl md:text-6xl` | `font-extrabold` | Hero Section H1 |
| Heading 2 | `text-3xl md:text-4xl` | `font-bold` | 各 Section H2 |
| Heading 3 | `text-2xl` | `font-bold` | 卡片、區塊內標題 |
| Body Large | `text-lg md:text-xl` | `font-normal` | 主要段落文字 |
| Body Normal | `text-base` | `font-normal` | 次要段落文字 |

### 3.3 間距 (Spacing) & 佈局 (Layout)
- **容器寬度:** `.container.mx-auto.px-6`
- **Section 垂直間距:** `py-20 md:py-28`
- **網格間距:** `gap-8`, `gap-12`

### 3.4 視覺效果 (Effects)
- **圓角:** `rounded-lg`, `rounded-xl`, `rounded-full`
- **陰影:** `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-xl`, `shadow-2xl`

## 4. 元件庫 (Component Library)

### 4.1 Header
- **用途:** 網站頂部導覽列，包含 Logo、產品名稱和 CTA 按鈕。
- **行為:**
  - **自動隱藏:** 使用者向下滾動時自動向上滑動隱藏，向上滾動時滑動出現。
  - **固定定位:** 使用 `fixed` 定位，確保在螢幕頂部。

#### 4.1.1 視覺風格：磨砂玻璃 (Visual Style: Frosted Glass)
- **用途:** 創造一個精緻、現代且具備厚實感的導覽列。
- **實作細節:** 透過組合以下 Tailwind CSS class 實現。
  - **背景與透明度:** `bg-white/{opacity}` (建議值: 50-75)
  - **背景模糊:** `backdrop-blur-{level}` (建議值: xl or 2xl)
  - **陰影:** `shadow-{level}` (建議值: lg or xl)
  - **邊緣光澤:** 使用 `after:` 偽元素與 `bg-gradient-to-r` 創造模擬反光的細線。
- **調整指南:**
  - **透明度:** 修改 `bg-white/50` 中的 `50`。數值越低，越透明，模糊效果越明顯。
  - **模糊度:** 修改 `backdrop-blur-2xl` 中的 `2xl`。可選 `xl`, `lg`, `md`。
  - **陰影:** 修改 `shadow-2xl`。可選 `xl`, `lg`, `md`。
  - **光澤:** 修改 `after:via-orange-200/85` 中的顏色 (`orange-200`) 與亮度 (`85`)。

#### 4.1.2 實作規範 (Implementation Mandate)
- **結構與行為固定:** Header 的 JSX 結構、自動隱藏的邏輯 **必須** 保持固定。
- **可變動項目:** 允許修改 Logo (`<Logo />` 元件)、產品名稱文字、CTA 連結，以及磨砂玻璃效果的**顏色與強度**，以適應不同專案的品牌風格。

### 4.2 Problem
- **用途:** 呈現使用者痛點，並透過成本分析卡片凸顯競品 (Plaud Note) 的長期持有成本。
- **結構:**
    - 頂部為三欄式成本累加卡片。
    - 底部為三欄式情境說明卡片，其中右側卡片為深色背景，用於成本分析。

### 4.3 Testimonials (靜態網格)
- **用途:** 展示客戶見證，建立社會認同。
- **行為:** 使用 **3x3 靜態網格** (Desktop) 或垂直堆疊 (Mobile) 以增加閱讀深度。
- **規範:** 頂部必須包含「信任標籤 (Trust Badge)」，顯示評分（例如：4.9/5 顆星）與評價總數。

### 4.4 Trust (比較表)
- **用途:** 透過表格比較我方與他牌服務的優劣，並展示金流安全認證。

#### 4.4.1 實作規範 (Implementation Mandate)
為確保品牌信任感與金流安全性的一致性，`Trust` 元件的結構 **必須** 在所有衍生專案中保持固定。

### 4.5 About
- **用途:** 介紹 Agent Factory 的品牌故事、理念與核心價值。

#### 4.5.1 實作規範 (Implementation Mandate)
`About` 元件的版面配置、文案與圖片 **必須** 在所有專案中保持一致。

### 4.6 Assurance
- **用途:** 提供專業保證與大量採購方案，建立企業客戶的信任感。

#### 4.6.1 實作規範 (Implementation Mandate)
`Assurance` 元件的三大保證內容與聯繫方式 **必須** 保持固定。

## 5. 靜態資源管理 (Asset Management)

### 5.1 圖示 (Icons)
- **慣例:** SVG 圖示以 React 元件形式直接撰寫在 `.tsx` 檔案中。

### 5.2 圖片 (Images)
- **慣例:** 統一託管於 Wix 平台的媒體庫中。

### 5.3 品牌 Logo (Brand Logo)
- **要求:** 強制使用 `<Logo />` 元件。

### 5.4 網站圖示 (Favicon)
- **要求:** 必須以實體檔案（`.svg` 或 `.png`）的形式存在於 `public/` 目錄下。
- **SEO 規範:** 為了確保 Google 搜尋結果能正確顯示圖示，`index.html` 必須包含 `apple-touch-icon` (指向 SVG 或高品質 PNG) 以及 `mask-icon` (針對 Safari)。

## 6. 部署與營運 (Deployment & Operations)
- **部署流程:** Push to `main` branch on GitHub -> Triggers Netlify build & deploy.