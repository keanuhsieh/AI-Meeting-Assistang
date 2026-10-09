import React from 'react';

const AssuranceCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}> = ({ icon, title, children }) => (
  <div
    className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 text-center"
    data-gtm-id="assurance-card"
    data-gtm-id-assurance={title}
  >
    <div className="mx-auto bg-green-100 text-green-700 rounded-xl h-14 w-14 flex items-center justify-center">
      {icon}
    </div>
    <h3 className="mt-5 text-xl font-bold text-slate-900">{title}</h3>
    <p className="mt-2.5 text-slate-600 leading-relaxed text-sm sm:text-base">
      {children}
    </p>
  </div>
);

const Assurance: React.FC = () => {
  return (
    <section id="assurance" className="py-20 md:py-28 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            採購支援與服務保障
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            為機關團體與企業提供合法報帳與導入諮詢服務。
          </p>
        </div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          <AssuranceCard
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
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            }
            title="合法開立發票"
          >
            依法可開立統一發票，包含統一編號與抬頭，方便公務機關、公司行號報帳核銷。
          </AssuranceCard>
          <AssuranceCard
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
            title="團體與企業採購"
          >
            支援政府、企業與學研單位的多帳號採購需求，請來信 support@bookai.com 諮詢專屬方案。
          </AssuranceCard>
          <AssuranceCard
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
                  d="M12 14l9-5-9-5-9 5 9 5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
              </svg>
            }
            title="專業諮詢支援"
          >
            若在導入流程或特定格式整理上有任何疑問，團隊隨時提供售前與技術支援協助。
          </AssuranceCard>
        </div>
      </div>
    </section>
  );
};

export default Assurance;
