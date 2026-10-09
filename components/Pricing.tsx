import React from 'react';
import { trackOsmiOutbound } from '../utils/analytics';

const PRICING_CTA_URL =
  'https://osmi.bookai.com/app?hl=zh-TW&utm_source=hfcc_oldsite&utm_medium=referral&utm_campaign=osmi_migration&utm_content=pricing_cta';
const PRICING_MORE_URL =
  'https://osmi.bookai.com/zh-TW/pricing/?utm_source=hfcc_oldsite&utm_medium=referral&utm_campaign=osmi_migration&utm_content=pricing_more';

const PLANS = [
  {
    minutes: '60 分鐘',
    price: 'NT$39',
    unitPrice: '約 NT$0.65 / 分',
    highlight: false,
  },
  {
    minutes: '180 分鐘',
    price: 'NT$99',
    unitPrice: '約 NT$0.55 / 分',
    highlight: false,
  },
  {
    minutes: '600 分鐘',
    price: 'NT$300',
    unitPrice: '約 NT$0.50 / 分',
    highlight: true,
  },
];

export default function Pricing() {
  return (
    <section className="py-16 md:py-24 bg-[#F8FAFC]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#165A79] bg-[#EBF4F8] px-3 py-1 rounded-full border border-[#D0E5F0]">
          計費方式
        </span>
        <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
          為實際使用的分鐘付費，不為月份付費。
        </h2>

        {/* Pricing Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {PLANS.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 sm:p-8 bg-white border text-center transition-all flex flex-col justify-between ${
                plan.highlight
                  ? 'border-[#81BDD6] shadow-md ring-1 ring-[#81BDD6]/50'
                  : 'border-slate-200 shadow-sm'
              }`}
            >
              <div>
                {plan.highlight && (
                  <span className="inline-block text-xs font-semibold text-[#165A79] bg-[#EBF4F8] px-2.5 py-0.5 rounded-full mb-3">
                    最多人選擇
                  </span>
                )}
                <h3 className="text-xl font-bold text-slate-900">{plan.minutes}</h3>
                <div className="mt-4 flex items-baseline justify-center gap-1">
                  <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                    {plan.price}
                  </span>
                </div>
                <p className="mt-2 text-xs text-slate-500">{plan.unitPrice}</p>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-100 text-xs text-slate-600">
                拿到逐字稿才扣分鐘
              </div>
            </div>
          ))}
        </div>

        {/* Clarifications */}
        <div className="mt-10 max-w-xl mx-auto space-y-2">
          <p className="text-sm font-medium text-slate-800">
            沒有訂閱、不自動扣款；已購買的分鐘不過期。
          </p>
          <p className="text-sm text-slate-600">
            新帳號送 60 分鐘，不綁卡。
          </p>
        </div>

        {/* CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={PRICING_CTA_URL}
            onClick={() => trackOsmiOutbound(PRICING_CTA_URL, 'pricing')}
            className="w-full sm:w-auto inline-flex items-center justify-center bg-[#165A79] hover:bg-[#114862] text-white text-base font-semibold px-6 py-3.5 rounded-xl shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#165A79]"
          >
            先用送的 60 分鐘試試
          </a>
          <a
            href={PRICING_MORE_URL}
            onClick={() => trackOsmiOutbound(PRICING_MORE_URL, 'pricing')}
            className="inline-flex items-center gap-1 font-semibold text-slate-700 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#81BDD6] rounded px-2 py-1 text-sm"
          >
            <span>查看完整價格與計費方式</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
