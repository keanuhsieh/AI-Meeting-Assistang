import React from 'react';

const IMPROVEMENTS = [
  {
    title: 'AI 先問再寫',
    desc: '先確認講者和術語，才開始撰寫。',
  },
  {
    title: '手機、電腦接著做',
    desc: '手機交出錄音，電腦校稿，完成後再回手機匯出。',
  },
  {
    title: '完成會通知你',
    desc: '不用一直開著頁面等待處理。',
  },
  {
    title: '沒有訂閱',
    desc: '需要多少再買多少，已購買的分鐘不過期。',
  },
];

export default function BrandContinuity() {
  return (
    <section className="py-16 md:py-24 bg-white border-y border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            不是換一個名字而已。
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            過去的 Gemini 會議記錄 APP，證明了錄音可以很快變成有用的會議紀錄。Osmi 把這件事做成完整產品：不用再搬提示詞、整理檔案或守著處理進度，一個帳號就能在手機和電腦間接續工作。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: 4 key improvements */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {IMPROVEMENTS.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 transition-shadow hover:shadow-md"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-6 h-6 rounded-full bg-[#EBF4F8] text-[#165A79] font-bold text-xs flex items-center justify-center">
                    0{idx + 1}
                  </span>
                  <h3 className="font-semibold text-slate-900 text-lg">
                    {item.title}
                  </h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed pl-9">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Right: 01-list screenshot */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-[300px] sm:max-w-[320px]">
              <div className="rounded-[28px] overflow-hidden shadow-lg border border-slate-200 bg-white">
                <img
                  src="/pix/01-list.png"
                  alt="Osmi iPhone App 的會議與錄音列表"
                  width={320}
                  height={692}
                  loading="lazy"
                  className="w-full h-auto block object-contain"
                />
              </div>
              <p className="mt-2.5 text-center text-xs text-slate-500">
                Osmi App 會議列表：手機接收通知與接續工作
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
