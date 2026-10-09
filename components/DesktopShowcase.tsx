import React from 'react';

export default function DesktopShowcase() {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#165A79] bg-[#EBF4F8] px-3 py-1 rounded-full border border-[#D0E5F0]">
            跨平台協同
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            手機交出錄音，電腦把關內容。
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            同一個帳號跨平台使用。手機適合把錄音交出去、接收通知與匯出；電腦適合回答問題、核對逐字稿和調整會議紀錄。
          </p>
        </div>

        {/* Primary Desktop Screenshots (D1 & D2) */}
        <div className="space-y-10">
          {/* Main D1 Overview */}
          <div className="rounded-2xl border border-slate-200 shadow-md overflow-hidden bg-slate-50">
            <div className="bg-slate-100/80 px-4 py-2 border-b border-slate-200 flex items-center justify-between">
              <span className="text-xs font-medium text-slate-600">
                Osmi 電腦版工作台：會議、問答與逐字稿完整概覽
              </span>
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
              </div>
            </div>
            <img
              src="/pix/D1-overview.png"
              alt="Osmi 電腦版的會議、問答與逐字稿工作畫面"
              width={1200}
              height={750}
              loading="lazy"
              className="w-full h-auto block object-contain"
            />
          </div>

          {/* Secondary D2 Notes & Transcript */}
          <div className="rounded-2xl border border-slate-200 shadow-md overflow-hidden bg-slate-50">
            <div className="bg-slate-100/80 px-4 py-2 border-b border-slate-200 flex items-center justify-between">
              <span className="text-xs font-medium text-slate-600">
                會議紀錄與完整逐字稿雙欄並排，輕鬆對照核對原話
              </span>
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
              </div>
            </div>
            <img
              src="/pix/D2-notes-transcript.png"
              alt="Osmi 電腦版並排顯示會議紀錄與逐字稿"
              width={1200}
              height={750}
              loading="lazy"
              className="w-full h-auto block object-contain"
            />
          </div>

          {/* Auxiliary Features (D5 & D7) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            {/* D5: Export */}
            <div className="rounded-2xl border border-slate-200 shadow-sm overflow-hidden bg-slate-50">
              <div className="bg-slate-100/80 px-4 py-2 border-b border-slate-200">
                <span className="text-xs font-medium text-slate-600">
                  靈活匯出會議紀錄
                </span>
              </div>
              <img
                src="/pix/D5-export.png"
                alt="Osmi 電腦版匯出會議紀錄"
                width={600}
                height={380}
                loading="lazy"
                className="w-full h-auto block object-contain"
              />
              <div className="p-4 bg-white border-t border-slate-200">
                <p className="text-xs text-slate-600">
                  支援一鍵匯出重點摘要與逐字稿，方便分享團隊交付。
                </p>
              </div>
            </div>

            {/* D7: Multifile */}
            <div className="rounded-2xl border border-slate-200 shadow-sm overflow-hidden bg-slate-50">
              <div className="bg-slate-100/80 px-4 py-2 border-b border-slate-200">
                <span className="text-xs font-medium text-slate-600">
                  多檔案合併同一場會議
                </span>
              </div>
              <img
                src="/pix/D7-multifile.png"
                alt="Osmi 將多個錄音檔合併成同一場會議"
                width={600}
                height={380}
                loading="lazy"
                className="w-full h-auto block object-contain"
              />
              <div className="p-4 bg-white border-t border-slate-200">
                <p className="text-xs text-slate-600">
                  上下半場錄音或多段音檔，直接合併成同一份完整會議紀錄。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
