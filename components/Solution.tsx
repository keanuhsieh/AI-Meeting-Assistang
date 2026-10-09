import React from 'react';
import Logo from './Logo';

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}> = ({ icon, title, children }) => (
  <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 transition-transform transform hover:-translate-y-1">
    <div className="flex items-center space-x-4">
      <div className="bg-orange-100 text-orange-600 rounded-xl p-3 flex-shrink-0">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900">{title}</h3>
    </div>
    <p className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
      {children}
    </p>
  </div>
);

const Solution: React.FC = () => {
  return (
    <section id="solution" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex justify-center items-center space-x-3 mb-4">
            <Logo variant="outline" className="w-10 h-10 text-orange-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              用 AI 將會議錄音轉化為結構化紀錄
            </h2>
          </div>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            你只需要提供錄音檔或語音紀錄。AI 將自動為你梳理脈絡並完成繁複整理：
          </p>
        </div>

        {/* Workflow Diagram */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-14 h-14 rounded-2xl bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-600">
              <svg
                className="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                />
              </svg>
            </div>
            <span className="font-bold text-base sm:text-lg text-slate-900">
              錄音檔案 (mp3 / m4a)
            </span>
          </div>

          <svg
            className="w-8 h-8 text-slate-400 transform sm:rotate-0 rotate-90"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>

          <div className="flex flex-col items-center space-y-2">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
              <svg
                className="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <span className="font-bold text-base sm:text-lg text-slate-900">
              AI 智慧語意理解
            </span>
          </div>

          <svg
            className="w-8 h-8 text-slate-400 transform sm:rotate-0 rotate-90"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>

          <div className="flex flex-col items-center space-y-2">
            <div className="w-14 h-14 rounded-2xl bg-green-50 border border-green-200 flex items-center justify-center text-green-600">
              <svg
                className="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <span className="font-bold text-base sm:text-lg text-slate-900">
              重點摘要與待辦事項
            </span>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="mt-16 max-w-5xl mx-auto grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Logo className="w-6 h-6 text-orange-600" />}
            title="智慧摘要與決策提煉"
          >
            告別冗長逐字稿堆疊。AI 自動萃取關鍵討論、會議共識與後續行動事項，方便團隊快速掌握結論。
          </FeatureCard>

          <FeatureCard
            icon={
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            }
            title="結構化文件輸出"
          >
            產出分段清楚、重點分明的文件格式，可直接複製、匯出或整理至雲端筆記中進行後續編輯與協同合作。
          </FeatureCard>

          <FeatureCard
            icon={
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h-3.234c-.966 0-1.631-.762-1.631-1.631V14.513c0-.966.665-1.631 1.631-1.631h.54M9 11a1 1 0 11-2 0 1 1 0 012 0z"
                />
              </svg>
            }
            title="支援中英夾雜情境"
          >
            使用手機錄音即可，不需額外硬體。專為台灣常見的工作情境設計，順暢解析商務、學術與跨領域的混雜語彙。
          </FeatureCard>
        </div>
      </div>
    </section>
  );
};

export default Solution;
