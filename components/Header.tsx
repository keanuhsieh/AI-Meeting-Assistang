import React from 'react';
import Logo from './Logo';
import AnnouncementBar from './AnnouncementBar';
import { trackOsmiClick } from '../utils/tracking';

const NAV_URL =
  'https://osmi.bookai.com/zh-TW/?utm_source=hfcc_oldsite&utm_medium=referral&utm_campaign=osmi_migration&utm_content=nav';

const Header: React.FC = () => {
  const handleNavClick = () => {
    trackOsmiClick(NAV_URL, 'nav');
  };

  return (
    <header className="sticky top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200">
      <AnnouncementBar />
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-3.5 flex justify-between items-center">
        {/* Left: Original product identity + relation marker (clean tag, no pill) */}
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
          <div className="flex items-center space-x-2">
            <Logo className="w-7 h-7 sm:w-8 sm:h-8 text-orange-600 flex-shrink-0" />
            <span className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
              Gemini 會議記錄 APP
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-300">
            <span>新一代：Osmi</span>
            <img
              src="/wordmark.svg"
              alt="Osmi Logo"
              className="h-3.5 w-auto"
              width="48"
              height="14"
            />
          </div>
        </div>

        {/* Right: Primary CTA pointing to Osmi */}
        <div className="flex items-center">
          <a
            href={NAV_URL}
            onClick={handleNavClick}
            className="inline-flex items-center justify-center bg-[#134e6f] hover:bg-[#0d3b55] text-white text-xs sm:text-sm font-semibold px-3.5 sm:px-5 py-2 rounded-lg transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-[#134e6f] focus:ring-offset-2"
          >
            看看新一代 Osmi
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;