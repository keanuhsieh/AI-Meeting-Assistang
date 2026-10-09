import React from 'react';
import { trackOsmiClick } from '../utils/tracking';
import { IPhoneFrame } from './DeviceFrames';
import { useLightbox } from '../context/LightboxContext';

const HERO_URL =
  'https://osmi.bookai.com/zh-TW/?utm_source=hfcc_oldsite&utm_medium=referral&utm_campaign=osmi_migration&utm_content=hero';
const HERO_TRIAL_URL =
  'https://osmi.bookai.com/app?hl=zh-TW&utm_source=hfcc_oldsite&utm_medium=referral&utm_campaign=osmi_migration&utm_content=hero_trial';

const Hero: React.FC = () => {
  const { openLightbox } = useLightbox();

  const handlePrimaryClick = () => {
    trackOsmiClick(HERO_URL, 'hero');
  };

  const handleTrialClick = () => {
    trackOsmiClick(HERO_TRIAL_URL, 'hero');
  };

  const heroImageSrc = '/pix/04-ask-speakers.png';
  const heroImageAlt = 'Osmi 在撰寫會議紀錄前確認講者與術語';

  return (
    <section
      id="hero"
      aria-label="主要介紹"
      className="relative py-16 md:py-24 bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "url('https://static.wixstatic.com/media/0f9583_8c57f64f5cb14700ab6c979602e9e674~mv2.avif')",
      }}
    >
      {/* 原版照片乾淨深色遮罩 */}
      <div className="absolute inset-0 bg-slate-900/70 z-10" />

      <div className="relative z-20 container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center max-w-6xl mx-auto">
          {/* Left Column: Text & Actions */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Eyebrow */}
            <div className="text-sm font-bold tracking-wider text-orange-400 uppercase mb-4">
              Gemini 會議記錄 APP 的下一代產品
            </div>

            {/* Sole H1 on page */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              把錄音變成會議紀錄，
              <br className="hidden sm:inline" />
              現在有了新一代 Osmi。
            </h1>

            {/* Main copy */}
            <p className="mt-6 text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              過去，我們用 Gemini 幫你把錄音整理成重點與待辦。現在，我們把這套流程做成完整產品 Osmi：AI 先確認講者、人名與術語，再撰寫可以直接交付的會議紀錄。
            </p>

            {/* CTAs */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 justify-center lg:justify-start">
              <a
                href={HERO_URL}
                onClick={handlePrimaryClick}
                className="inline-flex items-center justify-center bg-[#134e6f] hover:bg-[#0c3952] text-white text-base font-bold px-7 py-3.5 rounded-xl shadow-lg border border-[#81BDD6]/40 transition-colors focus:outline-none focus:ring-2 focus:ring-[#81BDD6] focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                認識新一代 Osmi
              </a>
              <a
                href={HERO_TRIAL_URL}
                onClick={handleTrialClick}
                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white text-base font-semibold px-6 py-3.5 rounded-xl border border-white/25 backdrop-blur-sm transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                免費試用 Osmi（送 60 分鐘）
              </a>
            </div>

            {/* Subtext under buttons */}
            <p className="mt-4 text-xs sm:text-sm text-slate-300 tracking-wide">
              沒有訂閱・不綁卡・手機、錄音筆、會議錄影都可以
            </p>
          </div>

          {/* Right Column: Screenshot 套上 iPhone 樣式，可點擊滿版放大 */}
          <div className="lg:col-span-5 flex justify-center">
            <IPhoneFrame
              src={heroImageSrc}
              alt={heroImageAlt}
              onClick={() => openLightbox(heroImageSrc, heroImageAlt)}
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
