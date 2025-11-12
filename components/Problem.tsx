import React from 'react';

const Problem: React.FC = () => {
  return (
    <section id="problem" className="py-20 md:py-28 bg-slate-100">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">在考慮 Plaud ai？先看做會議記錄的成本有多高</h2>
        </div>

        <div className="mt-16 max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
                <p className="text-lg text-slate-600"> 1 場會議 x 4 小時整理</p>
                <p className="text-3xl font-bold text-red-500 mt-2">= 浪費 4 小時</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
                <p className="text-lg text-slate-600">20 場會議/月 x 4 小時 </p>
                <p className="text-3xl font-bold text-red-600 mt-2">= 浪費 80 小時/月</p>
                <p className="text-base text-slate-500 mt-1">= 每個月耗 10 天做會議記錄</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 scale-105">
                <p className="text-lg text-slate-600">10 天/月 x 12 個月</p>
                <p className="text-4xl font-extrabold text-red-700 mt-2">= 每年浪費 120 天</p>
            </div>
        </div>

        <div className="mt-16 grid md:grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-slate-800">對個人、獨立工作者、業務員：</h3>
                <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                    「每年 120 天，您都在做 AI 能做的事。這不是在工作，這是
                    <strong className="text-orange-600">浪費生命做重複無意義工作、打逐字稿</strong>。
                    您該用這些時間去接更多案子、去進修或是休息。」
                </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
                 <h3 className="text-2xl font-bold text-slate-800">對公司、政府機關、NPO、NGO：</h3>
                <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                    「一個員工 120 天，您付出的會議記錄成本高達
                    <strong className="text-orange-600"> 182,400 </strong>。
                    給他一個 AI 會議助理 能將這筆昂貴的成本幾乎降至為零。」
                </p>
            </div>
            <div className="bg-slate-800 text-white p-8 rounded-lg shadow-2xl border-2 border-amber-400">
                <div className="flex items-center space-x-3">
                   <svg className="w-8 h-8 text-amber-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                   <h3 className="text-2xl font-bold text-white">Plaud AI 的真實成本</h3>
                </div>
                <p className="mt-4 text-sm text-slate-300">
                    情境：每月 20 場會議 (共 40 小時)
                </p>
                <div className="mt-4 space-y-2 text-slate-200">
                    <p>硬體錄音卡 (原價): <span className="font-semibold float-right">$5,490</span></p>
                    <p>專業版年費訂閱: <span className="font-semibold float-right">$3,300</span></p>
                    <p>超時加購包 (14,400分鐘): <span className="font-semibold float-right">$7,970</span></p>
                    <p>資訊安全 (洩漏風險): <span className="font-semibold float-right">$無價</span></p>
                </div>
                <div className="mt-4 border-t border-slate-600 pt-4">
                     <p className="text-lg">年支出總計：<span className="font-extrabold text-3xl text-amber-400 float-right"> 約 $17,000 </span></p>
                </div>
                 <p className="mt-4 text-center text-sm bg-slate-700 p-2 rounded">
                    我們的APP：<strong className="text-amber-400">一次付費，無限使用</strong>。
                </p>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Problem;