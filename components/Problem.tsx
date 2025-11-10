import React from 'react';

const Problem: React.FC = () => {
  return (
    <section id="problem" className="py-20 md:py-28 bg-slate-100">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">您一年花了多少「生命」在會議記錄上？</h2>
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

        <div className="mt-16 grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-slate-800">對個人、獨立工作者、業務員：</h3>
                <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                    「每年 120 天，您都在做 AI 能做的事。這不是在工作，這是
                    <strong className="text-orange-600">浪費生命做重複無意義勞動</strong>。
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
        </div>

      </div>
    </section>
  );
};

export default Problem;