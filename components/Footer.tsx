import React from 'react';
import { trackOsmiClick } from '../utils/tracking';

const FOOTER_OSMI_SITE =
  'https://osmi.bookai.com/zh-TW/?utm_source=hfcc_oldsite&utm_medium=referral&utm_campaign=osmi_migration&utm_content=footer';
const FOOTER_OSMI_TRIAL =
  'https://osmi.bookai.com/app?hl=zh-TW&utm_source=hfcc_oldsite&utm_medium=referral&utm_campaign=osmi_migration&utm_content=footer_trial';
const FOOTER_OSMI_PRICING =
  'https://osmi.bookai.com/zh-TW/pricing/?utm_source=hfcc_oldsite&utm_medium=referral&utm_campaign=osmi_migration&utm_content=footer_pricing';
const FOOTER_OSMI_DATA =
  'https://osmi.bookai.com/zh-TW/data/?utm_source=hfcc_oldsite&utm_medium=referral&utm_campaign=osmi_migration&utm_content=footer_data';
const TERMS_URL =
  'https://www.bookai.com/en/blog/Meeting-Note-Terms-of-Service';
const PRIVACY_URL =
  'https://www.bookai.com/en/blog/Meeting-Note-Privacy-Policy';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-14 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Identity continuity declaration */}
          <div className="space-y-1.5 pb-6 border-b border-slate-800">
            <p className="text-base sm:text-lg font-bold text-white">
              你現在看到的是 Gemini 會議記錄 APP 的原網站。
            </p>
            <p className="text-sm sm:text-base text-[#81BDD6] font-medium">
              新一代產品 Osmi 已推出。
            </p>
          </div>

          {/* Links navigation */}
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-sm">
            <a
              href={FOOTER_OSMI_SITE}
              onClick={() => trackOsmiClick(FOOTER_OSMI_SITE, 'footer')}
              className="text-slate-300 hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              Osmi 官網
            </a>
            <a
              href={FOOTER_OSMI_TRIAL}
              onClick={() => trackOsmiClick(FOOTER_OSMI_TRIAL, 'footer')}
              className="text-slate-300 hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              免費試用
            </a>
            <a
              href={FOOTER_OSMI_PRICING}
              onClick={() => trackOsmiClick(FOOTER_OSMI_PRICING, 'footer')}
              className="text-slate-300 hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              價格
            </a>
            <a
              href={FOOTER_OSMI_DATA}
              onClick={() => trackOsmiClick(FOOTER_OSMI_DATA, 'footer')}
              className="text-slate-300 hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              資料去哪裡
            </a>
            <a
              href={TERMS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-200 transition-colors underline-offset-4 hover:underline"
            >
              使用條款
            </a>
            <a
              href={PRIVACY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-200 transition-colors underline-offset-4 hover:underline"
            >
              隱私權政策
            </a>
          </div>

          {/* Contact & Copyright */}
          <div className="pt-4 text-xs text-slate-500 space-y-2">
            <p>
              聯絡方式：
              <a
                href="mailto:support@bookai.com"
                className="text-slate-400 hover:text-white underline ml-1"
              >
                support@bookai.com
              </a>
            </p>
            <p>
              &copy; {new Date().getFullYear()} Agent Factory / Osmi. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;