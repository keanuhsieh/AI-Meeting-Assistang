import React from 'react';
import { trackOsmiClick } from '../utils/tracking';

const ANNOUNCEMENT_URL =
  'https://osmi.bookai.com/zh-TW/?utm_source=hfcc_oldsite&utm_medium=referral&utm_campaign=osmi_migration&utm_content=announcement';

const AnnouncementBar: React.FC = () => {
  const handleClick = () => {
    trackOsmiClick(ANNOUNCEMENT_URL, 'announcement');
  };

  return (
    <div
      role="banner"
      aria-label="品牌公告"
      className="bg-[#81BDD6] text-slate-900 py-2.5 px-4 text-xs sm:text-sm font-medium border-b border-[#6baac5]"
    >
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 text-center">
        <span className="font-bold tracking-wide">
          我們推出了新一代產品 Osmi
        </span>
        <span className="hidden md:inline text-slate-800">·</span>
        <span className="text-slate-800">
          把錄音整理成會議紀錄的完整 App，現在可在手機和電腦使用。
        </span>
        <a
          href={ANNOUNCEMENT_URL}
          onClick={handleClick}
          className="inline-flex items-center font-bold text-slate-950 underline underline-offset-4 hover:text-black hover:opacity-80 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-1 rounded px-1"
        >
          認識 Osmi →
        </a>
      </div>
    </div>
  );
};

export default AnnouncementBar;
