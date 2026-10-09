import React from 'react';
import { trackOsmiClick } from '../utils/tracking';

const PRICING_TRIAL_URL =
  'https://osmi.bookai.com/app?hl=zh-TW&utm_source=hfcc_oldsite&utm_medium=referral&utm_campaign=osmi_migration&utm_content=pricing';
const PRICING_MORE_URL =
  'https://osmi.bookai.com/zh-TW/pricing/?utm_source=hfcc_oldsite&utm_medium=referral&utm_campaign=osmi_migration&utm_content=pricing_more';

const pricePlans = [
  { minutes: '60 分鐘', price: 'NT$39' },
  { minutes: '180 分鐘', price: 'NT$99', popular: true },
  { minutes: '600 分鐘', price: 'NT$300' },
];

const FinalCTA: React.FC = () => {
  const handleTrialClick = () => {
    trackOsmiClick(PRICING_TRIAL_URL, 'pricing');
  };

  const handleMoreClick = () => {
    trackOsmiClick(PRICING_MORE_URL, 'pricing');
  };

  return (
    <section
      id="pricing"
      aria-label="Osmi 方案與試用"
      className="py-20 md:py-28 bg-slate-100 border-t border-slate-200"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            想繼續用 AI 整理會議？看看新一代 Osmi。
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            新帳號送 60 分鐘，不綁卡。Osmi 沒有訂閱或自動續費，需要多少再買多少。
          </p>

          {/* Pricing cards */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl mx-auto">
            {pricePlans.map((plan, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-xl border bg-white shadow-sm flex flex-col justify-center items-center ${
                  plan.popular
                    ? 'border-[#81BDD6] ring-2 ring-[#81BDD6]/40'
                    : 'border-slate-200'
                }`}
              >
                <span className="text-sm font-medium text-slate-500">
                  {plan.minutes}
                </span>
                <span className="mt-1 text-2xl font-extrabold text-slate-900">
                  {plan.price}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-4 text-sm font-semibold text-slate-600">
            已購買的分鐘不過期。
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={PRICING_TRIAL_URL}
              onClick={handleTrialClick}
              className="w-full sm:w-auto inline-flex items-center justify-center bg-[#134e6f] hover:bg-[#0c3952] text-white text-lg font-bold px-10 py-4 rounded-xl shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#81BDD6] focus:ring-offset-2"
            >
              免費試用 Osmi
            </a>
            <a
              href={PRICING_MORE_URL}
              onClick={handleMoreClick}
              className="text-sm font-bold text-[#134e6f] hover:underline px-4 py-2"
            >
              查看完整價格 →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
