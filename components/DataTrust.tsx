import React from 'react';
import { trackOsmiOutbound } from '../utils/analytics';

const DATA_MAP_URL =
  'https://osmi.bookai.com/zh-TW/data/?utm_source=hfcc_oldsite&utm_medium=referral&utm_campaign=osmi_migration&utm_content=data';

const FACTS = [
  {
    category: '營運主體',
    content: 'Osmi 由台灣公司營運。',
  },
  {
    category: 'AI 核心',
    content:
      '使用 Google 官方 Gemini API。依 Google 適用條款，提交內容不會被用來訓練 Google 的產品。',
  },
  {
    category: '錄音存放',
    content: '錄音暫存在 Google Cloud 台灣區，供本次處理使用。',
  },
  {
    category: '帳號資料',
    content: '帳號與服務資料使用 Supabase 東京區。',
  },
  {
    category: '自動清除',
    content: '錄音在整場完成後刪除；紀錄依服務公布的保留時間自動清除。',
  },
];

export default function DataTrust() {
  return (
    <section className="py-16 md:py-24 bg-white border-y border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="mb-10 text-left">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#165A79] bg-[#EBF4F8] px-3 py-1 rounded-full border border-[#D0E5F0]">
            資料透明度
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            資料去了哪裡，清楚告訴你。
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            不使用誇張宣稱，將資料存放位置與處理機制坦誠說明。
          </p>
        </div>

        {/* Fact Table */}
        <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm bg-white divide-y divide-slate-200">
          {FACTS.map((fact, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 items-baseline hover:bg-slate-50/60 transition-colors"
            >
              <div className="sm:col-span-4">
                <span className="font-semibold text-slate-900 text-sm sm:text-base">
                  {fact.category}
                </span>
              </div>
              <div className="sm:col-span-8">
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  {fact.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-left">
          <a
            href={DATA_MAP_URL}
            onClick={() => trackOsmiOutbound(DATA_MAP_URL, 'data')}
            className="inline-flex items-center gap-1.5 font-semibold text-[#165A79] hover:text-[#0F3D52] hover:underline focus:outline-none focus:ring-2 focus:ring-[#81BDD6] rounded px-2 py-1 text-base"
          >
            <span>查看完整資料地圖</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
