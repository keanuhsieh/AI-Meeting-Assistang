import React from 'react';
import Logo from './Logo';

const UseCaseCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}> = ({ icon, title, children }) => (
  <div
    className="bg-white p-7 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center text-center transition-transform transform hover:-translate-y-1"
    data-gtm-id="use-case-card"
    data-gtm-id-category={title}
  >
    <div className="bg-orange-100 text-orange-600 rounded-xl p-3.5 mb-4 flex-shrink-0">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900">{title}</h3>
    <p className="mt-3 text-slate-600 leading-relaxed text-sm sm:text-base">
      {children}
    </p>
  </div>
);

const UseCases: React.FC = () => {
  return (
    <section id="use-cases" className="py-20 md:py-28 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex justify-center items-center space-x-3 mb-3">
            <Logo variant="outline" className="w-9 h-9 text-orange-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              多元實務場景，隨時隨地整理會議
            </h2>
          </div>
          <p className="mt-2 text-base sm:text-lg text-slate-600">
            無論是政府機關、法律諮詢、學術研究或商務會議，都能直接運用手邊錄音檔快速完成紀錄。
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <UseCaseCard
            icon={
              <svg
                className="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            }
            title="公務機關"
          >
            快速整理冗長的委員會、內部研商與專案會議記錄，確保討論結論與列管事項清晰明確。
          </UseCaseCard>

          <UseCaseCard
            icon={
              <svg
                className="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            }
            title="法律專業"
          >
            協助整理當事人會談、法律諮詢與會議討論要點，迅速梳理關鍵時間軸與爭點。
          </UseCaseCard>

          <UseCaseCard
            icon={
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            }
            title="學術研究"
          >
            轉錄深度訪談、焦點座談與演講音訊，協助研究者快速檢索引文，專注於質性分析。
          </UseCaseCard>

          <UseCaseCard
            icon={
              <svg
                className="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            }
            title="企業會議"
          >
            跨部門例會與專案對焦自動彙整待辦清單與指派對象，確保決策進度無縫追蹤。
          </UseCaseCard>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
