# Agent Factory 專案技術規格書

---
- **專案名稱:** AI 會議助理一頁式銷售網站 (Project A)
- **文件版本:** 1.0.3
- **最後更新:** 2024-08-01
- **基於專案:** N/A (此為初始專案)
---

> **[文件維護指南]** 關於如何撰寫、維護此文件，或基於此文件建立新專案，請參閱 [技術文件撰寫指南 (WRITING_GUIDE.md)](./WRITING_GUIDE.md)。

## 1. 專案總覽 (Project Overview)

- **目標使用者:** 公務員、法律專業人士、研究生、企業 PM 等需要處理大量會議記錄的專業人士。
- **核心價值主張:** 安全、高效地將機密會議錄音轉化為 Google 文件摘要，節省時間，保護資料隱私。

## 2. 技術棧與架構 (Tech Stack & Architecture)

- **前端框架:** React 19, TypeScript
- **樣式方案:** Tailwind CSS (via CDN)
  - **[規範]** 目前版本為求快速開發使用 CDN。正式專案或後續版本應改為 PostCSS 建置流程，以啟用 `purge` 功能並最小化 CSS 檔案。
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
| 文字 (標題) | `text-heading`| `slate-900` | 主要標題 |
| 文字 (內文) | `text-body` | `slate-800`, `slate-700` | 主要內文 |
| 文字 (輔助) | `text-muted` | `slate-600`, `slate-500` | 次要說明文字 |
| 文字 (反色) | `text-inverted`| `white`, `slate-200`, `slate-300`| 用於深色背景 |
| 背景 (預設) | `bg-default` | `slate-50` | 頁面主要背景 |
| 背景 (次級) | `bg-subtle` | `slate-100` | 區塊間隔背景 |
| 背景 (表面) | `bg-surface` | `white` | 卡片、Header 等浮動元素 |
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
- **用途:** 網站頂部導覽列，包含 Logo 和 CTA 按鈕。
- **行為:** 隨頁面滾動時固定在頂部 (`sticky`)，帶背景模糊效果 (`backdrop-blur-lg`)。
- **Props API:** 無。

### 4.2 Card (基礎概念)
- **用途:** 承載獨立資訊區塊的容器。
- **基礎樣式:** `bg-white`, `p-8`, `rounded-xl`, `shadow-lg`, `border`, `border-slate-200`
- **變體 (Variants):**
  - **FeatureCard:** Icon 在左，標題和內容在右。
  - **UseCaseCard:** Icon 置頂居中，標題和內容在下。
  - **AssuranceCard:** Icon 置頂居中 (綠色背景)，標題和內容在下。
  - **TestimonialCard:** 無 Icon，包含引言、頭像、姓名、職稱。

### 4.3 Testimonials (跑馬燈)
- **用途:** 輪播展示客戶見證。
- **行為:** 使用 CSS `@keyframes` 實現無限輪播。陣列資料被複製一次以達成無縫滾動。左右兩側有漸變遮罩。
- **速度:** `animation: marquee 40s linear infinite;`
- **[規範]** 動畫速度不應硬編碼。建議移至 `tailwind.config.js` 中定義為自訂 `animation` utility。

### 4.4 Trust (比較表)
- **用途:** 透過表格比較我方與他牌服務的優劣，並展示金流安全認證。
- **特色:** 中間欄位有特別的背景色 (`bg-orange-50`, `bg-orange-100`) 和陰影，以凸顯我方服務。

### **實作規範 (Implementation Mandate)**
為確保品牌信任感與金流安全性的一致性，`Trust` 元件的結構 **必須** 在所有衍生專案中保持固定。這包括比較表的資料結構和下方的「金流安全夥伴」區塊。

**金流安全夥伴區塊程式碼片段 (Required Snippet):**
在實作時，應直接複製並使用以下 JSX 程式碼來呈現金流安全夥伴區塊。

```jsx
<div className="mt-16 max-w-4xl mx-auto">
    <h3 className="text-2xl font-bold text-center text-slate-800">金流安全夥伴</h3>
      <div className="mt-8 bg-white p-8 rounded-xl shadow-lg border border-slate-200 flex flex-col sm:flex-row justify-center items-center gap-x-12 gap-y-6">
        <div className="text-center">
            <img src="https://www.ecpay.com.tw/Content/images/gw_ssl_2.png" alt="ECPay Logo" className="h-16"/>
        </div>
        
        <div className="flex items-center gap-8">
            <div className="text-center">
                <SslIcon className="h-12 w-auto mx-auto" />
                <p className="mt-2 text-sm font-semibold text-slate-600">SSL 加密</p>
            </div>
            <div className="text-center">
               <svg className="w-12 h-12 mx-auto text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" /></svg>
                <p className="mt-2 text-sm font-semibold text-slate-600">PCI-DSS</p>
            </div>
        </div>
    </div>
</div>
```

## 5. 靜態資源管理 (Asset Management)

### 5.1 圖示 (Icons)
- **慣例:** 為求開發簡潔與直接控制，專案內的 SVG 圖示 **應** 以 React 元件的形式直接撰寫在 `.tsx` 檔案中。例如 `Trust.tsx` 中的 `SslIcon` 元件。這確保了圖示與元件邏輯的緊密耦合，無需額外的建置步驟。

### 5.2 圖片 (Images)
- **慣例:** 本專案系列允許使用外部圖片連結 (例如 `unsplash.com`, `pravatar.cc`, `ecpay.com.tw`)。
- **[注意]** 雖然這簡化了資源管理，但團隊應意識到外部服務可能存在中斷或變更的風險。在關鍵的商業專案中，應評估將核心圖片本地化的可行性。

## 6. 部署與營運 (Deployment & Operations)
- **部署流程:** Push to `main` branch on GitHub -> Triggers Netlify build & deploy.
- **環境變數:** 無。

### 6.1 外部服務設定 (External Service Configuration)
以下 ID 與連結為專案 A 的設定值。在建立衍生專案時，**必須** 更新為新專案的對應值。

- **分析追蹤 (Analytics Tracking):**
  - **GTM ID:** `GTM-TXQBC2JD`
  - **Meta Pixel ID:** `1130014905781848`
  - **事件追蹤:** 使用 `data-gtm-id` 屬性標記關鍵互動元素 (如 CTA 按鈕)。

- **購買連結 (Purchase Link):**
  - **用途:** CTA 按鈕 (`Header`, `Hero`, `FinalCTA`) 指向的購買頁面。
  - **目前連結:** `https://page.cashier.ecpay.com.tw/forms/cPy2`
