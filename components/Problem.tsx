import React from 'react';

const Problem: React.FC = () => {
  return (
    <section id="problem" className="py-20 md:py-28 bg-slate-100">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            會議結束後，你還在花數小時手動打逐字稿嗎？
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            整理會議紀錄真正的痛點，不是缺乏錄音，而是事後耗費大量專注力聽寫與彙整。
          </p>
        </div>

        {/* 3 Practical Comparison Cards */}
        <div className="mt-14 max-w-5xl mx-auto grid md:grid-cols-3 gap-6 sm:gap-8">
          <div className="bg-white p-7 rounded-xl shadow-sm border border-slate-200">
            <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center font-bold mb-4">
              01
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              重複聽打耗時費力
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              一場一小時的會議，手動聽打與反覆倒帶往往耗費兩到三倍時間，排擠真正需要深度思考的核心業務。
            </p>
          </div>

          <div className="bg-white p-7 rounded-xl shadow-sm border border-slate-200">
            <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center font-bold mb-4">
              02
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              重點摘要難以萃取
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              單純產出大段純文字逐字稿並不等於有效紀錄；團隊真正需要的是決策重點、行動事項與分工負責人。
            </p>
          </div>

          <div className="bg-white p-7 rounded-xl shadow-sm border border-slate-200">
            <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center font-bold mb-4">
              03
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              不需綁定專屬硬體
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              使用你現有的手機錄音或會議錄音筆即可，毋須隨身攜帶額外的專用錄音卡或支付昂貴的硬體門檻。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
