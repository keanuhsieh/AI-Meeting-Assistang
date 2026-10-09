import React from 'react';
import { trackOsmiClick } from '../utils/tracking';
import { MacBookFrame, IPhoneFrame } from './DeviceFrames';
import { useLightbox } from '../context/LightboxContext';

const CONTINUITY_URL =
  'https://osmi.bookai.com/zh-TW/?utm_source=hfcc_oldsite&utm_medium=referral&utm_campaign=osmi_migration&utm_content=continuity';

const improvements = [
  {
    title: 'AI 先問再寫',
    desc: '先確認講者、人名與術語，再開始整理。',
    badge: '1',
  },
  {
    title: '手機、電腦接著做',
    desc: '手機上傳錄音檔，電腦核對內容，完成後再回手機匯出。',
    badge: '2',
  },
  {
    title: '完成會通知你',
    desc: '不用一直開著頁面等待。',
    badge: '3',
  },
  {
    title: '沒有訂閱',
    desc: '需要多少再買多少，已購買的分鐘不過期。',
    badge: '4',
  },
];

const osmiKeyFeatures = [
  {
    number: '1',
    text: '業界最長，支援 12 個小時會議錄音。( 4小時以下會議品質保證)',
  },
  {
    number: '2',
    text: '支援台語辨識，可紀錄台羅、漢字、華話',
  },
  {
    number: '3',
    text: '辨識超過 8 個 發話者，可以記錄多達21個語言',
  },
  {
    number: '4',
    text: '免訂閱，不需買設備，有需要再儲值',
  },
  {
    number: '5',
    text: '跨平台：從手機上傳、在電腦與 Osmi 工作、在手機分享',
  },
  {
    number: '6',
    text: '與 Google 官方 Gemini 合作，我們不儲存你的資料、不訓練、最透明',
  },
];

const OsmiContinuity: React.FC = () => {
  const { openLightbox } = useLightbox();

  const handleClick = () => {
    trackOsmiClick(CONTINUITY_URL, 'continuity');
  };

  const desktopImageSrc = '/pix/D1-overview.png';
  const desktopImageAlt = 'Osmi 電腦版的會議、問答與逐字稿工作畫面';

  const mobileImageSrc = '/pix/01-list.png';
  const mobileImageAlt = 'Osmi iPhone App 的會議與錄音列表';

  return (
    <section
      id="osmi-continuity"
      className="py-16 md:py-24 bg-gradient-to-b from-white via-slate-50 to-white border-b border-slate-200"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-sm font-bold tracking-wider text-[#134e6f] uppercase mb-2">
            從 Gemini 會議記錄 APP 到 Osmi
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            不是把舊工具換個名字，
            <br className="hidden sm:inline" />
            而是把整套流程做成產品。
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            原本，你需要在 Gemini 裡準備檔案、操作提示與整理結果。Osmi 把這些步驟接起來：上傳錄音檔、回答幾個問題、拿到整理好的紀錄。手機和電腦使用同一個帳號，處理完成也會通知你。
          </p>
        </div>

        {/* 4 Improvements Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
          {improvements.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-[#81BDD6] transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-[#81BDD6]/20 text-[#134e6f] font-bold flex items-center justify-center text-sm mb-3">
                {item.badge}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Screenshots showcase: 電腦套上 iMac 樣子，手機套上 iPhone 樣子，點擊皆可滿版觀看 */}
        <div className="max-w-5xl mx-auto bg-slate-900/5 p-4 sm:p-8 rounded-2xl border border-slate-200">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            {/* MacBook 電腦截圖 */}
            <div className="md:col-span-8 flex justify-center">
              <MacBookFrame
                src={desktopImageSrc}
                alt={desktopImageAlt}
                onClick={() => openLightbox(desktopImageSrc, desktopImageAlt)}
              />
            </div>

            {/* iPhone 手機截圖 */}
            <div className="md:col-span-4 flex justify-center">
              <IPhoneFrame
                src={mobileImageSrc}
                alt={mobileImageAlt}
                maxWidthClass="max-w-[220px] sm:max-w-[250px]"
                onClick={() => openLightbox(mobileImageSrc, mobileImageAlt)}
              />
            </div>
          </div>
        </div>

        {/* 吸收回饋與全新 6 大特色區塊 */}
        <div className="mt-16 max-w-5xl mx-auto bg-slate-900 text-white rounded-2xl p-6 sm:p-10 shadow-xl border border-slate-800">
          <div className="border-l-4 border-[#81BDD6] pl-4 sm:pl-5 mb-8">
            <p className="text-base sm:text-lg md:text-xl font-bold text-slate-100 leading-snug">
              Gemini 會議紀錄 APP 吸收了大家的回饋與需求，我們打造 Osmi：更高品質的輸出，徹底解決長會議不穩定的問題。
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {osmiKeyFeatures.map((feat) => (
              <div
                key={feat.number}
                className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-5 hover:border-[#81BDD6]/60 transition-colors flex items-start gap-3.5"
              >
                <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-[#81BDD6] text-slate-950 font-extrabold text-sm flex items-center justify-center mt-0.5">
                  {feat.number}
                </span>
                <p className="text-sm text-slate-200 leading-relaxed font-medium">
                  {feat.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Action button */}
        <div className="mt-12 text-center">
          <a
            href={CONTINUITY_URL}
            onClick={handleClick}
            className="inline-flex items-center justify-center bg-[#134e6f] hover:bg-[#0c3952] text-white text-base font-bold px-8 py-3.5 rounded-xl shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-[#81BDD6] focus:ring-offset-2"
          >
            看看 Osmi 怎麼運作
          </a>
        </div>
      </div>
    </section>
  );
};

export default OsmiContinuity;
