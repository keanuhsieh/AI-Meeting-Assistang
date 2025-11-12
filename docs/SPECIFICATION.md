# Agent Factory 專案技術規格書

---
- **專案名稱:** AI 會議助理一頁式銷售網站 (Project A)
- **文件版本:** 1.0.4
- **最後更新:** 2025-11-13
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
- **可變動項目:** 允許修改 Logo (SVG)、產品名稱文字、CTA 連結，以及磨砂玻璃效果的**顏色與強度**，以適應不同專案的品牌風格。

### 4.2 Problem
- **用途:** 呈現使用者痛點，並透過成本分析卡片凸顯競品 (Plaud Note) 的長期持有成本。
- **結構:**
    - 頂部為三欄式成本累加卡片。
    - 底部為三欄式情境說明卡片，其中右側卡片為深色背景，用於成本分析。

### 4.3 Testimonials (跑馬燈)
- **用途:** 輪播展示客戶見證。
- **行為:** 使用 CSS `@keyframes` 實現無限輪播。陣列資料被複製一次以達成無縫滾動。左右兩側有漸變遮罩。

### 4.4 Trust (比較表)
- **用途:** 透過表格比較我方與他牌服務的優劣，並展示金流安全認證。

#### 4.4.1 實作規範 (Implementation Mandate)
為確保品牌信任感與金流安全性的一致性，`Trust` 元件的結構 **必須** 在所有衍生專案中保持固定。

**金流安全夥伴區塊程式碼片段 (Required Snippet):**
```jsx
<div className="mt-16 max-w-4xl mx-auto">
    <h3 className="text-2xl font-bold text-center text-slate-800">金流安全夥伴</h3>
      <div className="mt-8 bg-white p-8 rounded-xl shadow-lg border border-slate-200 flex flex-col sm:flex-row justify-center items-center gap-x-12 gap-y-6">
        <div className="text-center">
            <img src="https://www.ecpay.com.tw/Content/images/gw_ssl_2.png" alt="ECPay Logo" className="h-16"/>
        </div>
        <div className="flex items-center gap-8">
            {/* ... SslIcon and PCI-DSS Icon ... */}
        </div>
    </div>
</div>
```

### 4.5 About
- **用途:** 介紹 Agent Factory 的品牌故事、理念與核心價值。

#### 4.5.1 實作規範 (Implementation Mandate)
`About` 元件的版面配置、文案與圖片 **必須** 在所有專案中保持一致，以傳達統一的品牌形象。

**About 元件程式碼片段 (Required Snippet):**
```jsx
<section id="about" className="py-20 md:py-28 bg-white">
    <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 md:order-1">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">我們是 Agent Factory ，您的 Gemini 應用專家</h2>
                <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                    我們專注於正體中文的台灣 AI 應用，致力在 Google 生態系中，為您打造解決「人手不夠、沒時間、嫌麻煩」的 AI 工作夥伴。
                </p>
                <div className="mt-8 space-y-6">
                    {/* ... FeatureItem components ... */}
                </div>
            </div>
            <div className="order-1 md:order-2">
                <img 
                    src="https://static.wixstatic.com/media/0f9583_76686e20242b477ebb16514391caf076~mv2.png"
                    alt="Agent Factory Team Collaboration"
                    className="rounded-xl shadow-2xl w-full h-full object-cover"
                />
            </div>
        </div>
    </div>
</section>
```

### 4.6 Assurance
- **用途:** 提供專業保證與大量採購方案，建立企業客戶的信任感。

#### 4.6.1 實作規範 (Implementation Mandate)
`Assurance` 元件的三大保證內容與聯繫方式 **必須** 保持固定，以確保服務承諾的一致性。

**Assurance 元件程式碼片段 (Required Snippet):**
```jsx
<section id="assurance" className="py-20 md:py-28 bg-slate-100">
    <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">專業保證與採購方案</h2>
            <p className="mt-4 text-lg text-slate-600">
                我們提供企業與組織最安心的選擇，無論是報帳或大量導入，都為您準備好了。
            </p>
        </div>
        <div className="mt-16 max-w-5xl mx-auto grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            <AssuranceCard title="台灣公司，正派經營">
                我們是依法註冊的台灣公司，您的每一筆消費都可開立發票，方便您報帳核銷。
            </AssuranceCard>
            <AssuranceCard title="歡迎大量採購">
                支援政府、企業、機關團體的大量採購方案 ( 50 組以上) ，請聯繫我們 LINE 取得客製化報價單。
            </AssuranceCard>
            <AssuranceCard title="贈送企業內部訓練">
                單一機關或企業採購達 200 組以上，我們將免費提供一場內部線上訓練，確保導入效益最大化。
            </AssuranceCard>
        </div>
    </div>
</section>
```

## 5. 靜態資源管理 (Asset Management)

### 5.1 圖示 (Icons)
- **慣例:** 為求開發簡潔與直接控制，專案內的 SVG 圖示 **應** 以 React 元件的形式直接撰寫在 `.tsx` 檔案中。

### 5.2 圖片 (Images)
- **慣例:** 本專案系列允許使用外部圖片連結 (例如 `wixstatic.com`, `pravatar.cc`, `ecpay.com.tw`)。

## 6. 部署與營運 (Deployment & Operations)
- **部署流程:** Push to `main` branch on GitHub -> Triggers Netlify build & deploy.
- **環境變數:** 無。

### 6.1 外部服務設定 (External Service Configuration)
以下 ID 與連結為專案 A 的設定值。在建立衍生專案時，**必須** 更新為新專案的對應值。

- **分析追蹤 (Analytics Tracking):**
  - **GTM ID:** `GTM-TXQBC2JD`
  - **Meta Pixel ID:** `1130014905781848`
  - **事件追蹤:** 使用 `data-gtm-id` 屬性標記關鍵互動元素。

- **購買連結 (Purchase Link):**
  - **用途:** CTA 按鈕 (`Header`, `Hero`, `FinalCTA`) 指向的購買頁面。
  - **目前連結:** `https://page.cashier.ecpay.com.tw/forms/cPy2`