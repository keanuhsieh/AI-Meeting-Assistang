import React from 'react';

const FEATURES = [
  {
    title: '發言者、術語寫對',
    desc: '改過一次，下次就記得。',
  },
  {
    title: '有重點，也有完整逐字稿',
    desc: '快速讀完結論，需要時再回到原話。',
  },
  {
    title: '行動事項整理好',
    desc: '誰負責、做什麼、什麼時候完成，一眼看清楚。',
  },
  {
    title: '21 種語言',
    desc: '介面與紀錄支援 21 種語言，中台英夾雜也能照實記。',
  },
  {
    title: '舊錄音筆也能用',
    desc: '支援手機、影片與 10 種以上傳統錄音格式。',
  },
  {
    title: '長會議不用拆成好多場',
    desc: '電腦網頁單場最長 12 小時，多個檔案可以合併處理。',
  },
  {
    title: '沒有訂閱',
    desc: '需要時購買分鐘，不自動續費。',
  },
  {
    title: '跨平台',
    desc: 'iPhone、Android、電腦共用同一個帳號。',
  },
];

export default function CoreFeatures() {
  return (
    <section className="py-16 md:py-24 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#165A79] bg-[#EBF4F8] px-3 py-1 rounded-full border border-[#D0E5F0]">
            功能亮點
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            它做得到的事
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm transition-all hover:border-slate-300 hover:shadow-md"
            >
              <div className="w-8 h-8 rounded-lg bg-[#EBF4F8] text-[#165A79] flex items-center justify-center font-bold text-sm mb-4">
                ✓
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
