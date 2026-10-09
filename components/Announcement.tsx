import React from 'react';
import { trackOsmiOutbound } from '../utils/analytics';

const ANNOUNCEMENT_URL =
  'https://osmi.bookai.com/zh-TW/?utm_source=hfcc_oldsite&utm_medium=referral&utm_campaign=osmi_migration&utm_content=announcement';

export default function Announcement() {
  const handleClick = () => {
    trackOsmiOutbound(ANNOUNCEMENT_URL, 'announcement');
  };

  return (
    <aside
      aria-label="品牌升級公告"
      className="bg-[#EBF4F8] border-b border-[#D2E7F0] text-slate-800 text-sm py-2.5 px-4"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 sm:gap-2">
          <span className="font-semibold text-slate-900 tracking-tight">
            Gemini 會議記錄 APP 已升級為 Osmi
          </span>
          <span className="hidden sm:inline text-slate-400">|</span>
          <span className="text-slate-600">
            新一代產品有自己的網站，也能在 iPhone、Android 和電腦上使用。
          </span>
        </div>
        <a
          href={ANNOUNCEMENT_URL}
          onClick={handleClick}
          className="inline-flex items-center gap-1 font-medium text-[#165A79] hover:text-[#0F3D52] hover:underline whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#81BDD6] rounded px-1.5 py-0.5"
        >
          <span>認識 Osmi</span>
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </aside>
  );
}
