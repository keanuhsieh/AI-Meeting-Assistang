# Agent Factory 專案技術規格書

---
- **專案名稱:** AI 會議助理一頁式銷售網站 (Project A)
- **文件版本:** 1.0.6
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
- **可變動項目:** 允許修改 Logo (`<Logo />` 元件)、產品名稱文字、CTA 連結，以及磨砂玻璃效果的**顏色與強度**，以適應不同專案的品牌風格。

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
    <h3 className="text-2xl font-bold text-center text-slate-800">我們的金流安全夥伴：綠界科技</h3>
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
                <div className="flex items-center space-x-3">
                    <Logo variant="outline" className="w-10 h-10 text-orange-600" />
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">我們是 Agent Factory ，您的 Gemini 應用專家</h2>
                </div>
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
            <div className="flex justify-center items-center space-x-3">
                <Logo variant="outline" className="w-10 h-10 text-orange-600" />
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">專業保證與採購方案</h2>
            </div>
            <p className="mt-4 text-lg text-slate-600">
                我們提供企業與組織最安心的選擇，無論是報帳或大量導入，都為您準備好了。
            </p>
        </div>
        <div className="mt-16 max-w-5xl mx-auto grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            <AssuranceCard
                        icon={<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                        title="台灣在地團隊研發"
                    >
                        我們是依法註冊的台灣公司，您的每一筆消費都可開立發票，方便您報帳核銷。
            </AssuranceCard>
            <AssuranceCard
                        icon={<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>}
                        title="歡迎大量採購"
                    >
                        支援政府、企業、機關團體的大量採購方案 ( 50 組以上) ，請聯繫我們 LINE 取得客製化報價單。
            </AssuranceCard>
            <AssuranceCard
                        icon={<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" /></svg>}
                        title="贈送企業內部訓練"
                    >
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
- **託管平台:** 所有專案使用的行銷圖片（例如 Hero 背景、團隊照片、用戶照片）**必須**統一託管於 Wix 平台的媒體庫中，以確保資源的集中管理與載入效能。

#### 5.2.1 圖片更新工作流程 (Image Update Workflow)
為確保圖片資源的一致性與順暢的協作，所有圖片的替換作業**必須**遵循以下流程：

1.  **建立專屬資料夾:** 由專案關係人（客戶、PM）在 Wix 媒體庫中，為該專案建立一個專屬的資料夾。
2.  **上傳圖片:** 專案關係人將所有最終版圖片上傳至該專屬資料夾。
3.  **提供網址:** 專案關係人將每張圖片的公開存取網址（URL）整理好，提供給開發者。
4.  **程式碼替換:** 開發者根據收到的網址清單，逐一替換掉專案程式碼中對應的佔位圖片或舊圖片。

### 5.3 品牌 Logo (Brand Logo)
- **用途:** 作為「Gemini 會議記錄 APP」的官方品牌識別標誌。
- **實作方式:** 使用一個可重複使用的 `Logo.tsx` 元件，以確保全站視覺統一。

#### 5.3.1 實作規範 (Implementation Mandate)
- **強制使用元件:** 所有需要顯示 Logo 的地方 **必須** 使用 `<Logo />` 元件。
- **元件 API:**
  - `variant?: 'default' | 'outline'`:
    - `'default'` (預設): **橘色填充、白色線條**。適用於深色或有色背景 (如 Header)。
    - `'outline'`: **透明填充、橘色外框、深灰內線**。適用於淺色背景 (如各 Section 標題前)。
  - `className?: string`: 用於傳遞 Tailwind CSS class，主要用於控制尺寸 (e.g., `w-8 h-8`) 和顏色 (`text-orange-600`)。
- **程式碼 (`components/Logo.tsx`):**
  ```jsx
  import React from 'react';

  interface LogoProps {
    variant?: 'default' | 'outline';
    className?: string;
  }

  const Logo: React.FC<LogoProps> = ({ variant = 'default', className = 'w-8 h-8' }) => {
    if (variant === 'outline') {
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24">
          <rect x="6" y="4" width="13" height="17" rx="2" stroke="currentColor" strokeWidth="1.2"/>
          <path d="M15 10V8" stroke="#334155" strokeWidth="1.2" strokeLinecap="round"/>
          <path d="M4 9H8" stroke="#334155" strokeWidth="1.2" strokeLinecap="round"/>
          <path d="M4 13H8" stroke="#334155" strokeWidth="1.2" strokeLinecap="round"/>
          <path d="M4 17H8" stroke="#334155" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
      );
    }

    // Default variant
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24">
          <rect x="6" y="4" width="13" height="17" rx="2" fill="currentColor"/>
          <path d="M15 10V8" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
          <path d="M4 9H8" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
          <path d="M4 13H8" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
          <path d="M4 17H8" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    );
  };

  export default Logo;
  ```

#### 5.3.2 LOGO 設計流程 (LOGO Design Workflow)
1. **靈感來源 (Inspiration Source):** 所有 Logo 與 SVG 設計，應優先參考 [Let's Duotone Line Icons collection](https://www.svgrepo.com/collection/lets-duotone-line-icons/) 作為設計基礎。
2. **基礎選定 (Base Selection):** 與專案關係人（客戶、PM）溝通，提供上述連結，由其挑選最符合專案精神的 SVG 圖示。
3. **資源匯入 (Asset Import):** 將選定的 SVG 檔案下載並上傳至專案的根目錄，作為後續修改的原始檔。
4. **客製化調整 (Customization):** 基於匯入的 SVG 檔案，根據專案的設計系統（顏色、風格）進行調整，例如修改填充色、線條顏色與粗細，最終完成 `Logo.tsx` 元件的程式碼。

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