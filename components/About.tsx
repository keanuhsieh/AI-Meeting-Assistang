import React from 'react';
import Logo from './Logo';

const FeatureItem: React.FC<{
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}> = ({ icon, title, children }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 bg-orange-100 text-orange-600 rounded-xl p-2.5 flex items-center justify-center w-11 h-11">
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-bold text-slate-800">{title}</h3>
      <p className="mt-1 text-slate-600 text-sm sm:text-base leading-relaxed">
        {children}
      </p>
    </div>
  </div>
);

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white border-t border-slate-200">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          <div className="order-2 md:order-1">
            <div className="flex items-center space-x-3 mb-4">
              <Logo variant="outline" className="w-10 h-10 text-orange-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                我們是 Agent Factory
              </h2>
            </div>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Agent Factory 是孵大學的 AI 業務之一，專注於正體中文的 AI 應用研發，致力為專業工作者打造解決「人手不夠、沒時間、重複繁瑣」的高效工作夥伴。
            </p>
            <div className="mt-8 space-y-6">
              <FeatureItem
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                }
                title="專注正體中文的 AI 工具"
              >
                針對台灣工作情境與混雜語言習慣優化，致力於讓產出的文字記錄流暢、精準且可直接交付。
              </FeatureItem>

              <FeatureItem
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
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                }
                title="直覺的工作流整合"
              >
                簡化傳統操作繁瑣的步驟，讓你可以把精力放在開會討論與決策推進，而非排版與瑣碎手動謄寫。
              </FeatureItem>

              <FeatureItem
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
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                }
                title="在地化思維，為您而生"
              >
                深刻理解各行各業的行政與會議溝通流程，持續打造更貼近台灣使用者真實情境的產品。
              </FeatureItem>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="https://static.wixstatic.com/media/0f9583_76686e20242b477ebb16514391caf076~mv2.png"
              alt="Agent Factory 團隊與產品理念"
              width={600}
              height={450}
              loading="lazy"
              className="rounded-xl shadow-xl w-full h-auto object-cover border border-slate-200"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
