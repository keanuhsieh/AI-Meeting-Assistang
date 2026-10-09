import React from 'react';
import { IPhoneFrame } from './DeviceFrames';
import { useLightbox } from '../context/LightboxContext';

const OsmiProcess: React.FC = () => {
  const { openLightbox } = useLightbox();

  const step1ImageSrc = '/pix/16-share-in.png';
  const step1ImageAlt = '從 iPhone 錄音分享至 Osmi';

  const step2ImageSrc = '/pix/04-ask-speakers.png';
  const step2ImageAlt = 'Osmi 在撰寫會議紀錄前確認講者與術語';

  const step3ImageSrc = '/pix/07-doc-top.png';
  const step3ImageAlt = 'Osmi 整理完成的重點摘要與行動事項';

  return (
    <section
      id="osmi-process"
      className="py-16 md:py-24 bg-white border-b border-slate-200"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Osmi 怎麼使用？
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            三個直覺步驟，從零散錄音到可交付的會議文件。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
          {/* Step 1 */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#81BDD6] text-slate-950 font-bold text-sm mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                上傳錄音檔
              </h3>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                手機錄音、錄音筆、會議錄影都可以。
              </p>
            </div>
            <div className="flex justify-center pt-2">
              <IPhoneFrame
                src={step1ImageSrc}
                alt={step1ImageAlt}
                maxWidthClass="max-w-[210px] sm:max-w-[230px]"
                onClick={() => openLightbox(step1ImageSrc, step1ImageAlt)}
              />
            </div>
          </div>

          {/* Step 2: 使用真實產品截圖 04-ask-speakers.png */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#81BDD6] text-slate-950 font-bold text-sm mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                回答幾個問題
              </h3>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                確認講者、術語與紀錄語言。
              </p>
            </div>
            <div className="flex justify-center pt-2">
              <IPhoneFrame
                src={step2ImageSrc}
                alt={step2ImageAlt}
                maxWidthClass="max-w-[210px] sm:max-w-[230px]"
                onClick={() => openLightbox(step2ImageSrc, step2ImageAlt)}
              />
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#81BDD6] text-slate-950 font-bold text-sm mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                拿到整理好的紀錄
              </h3>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                重點、行動事項與完整逐字稿都整理好。
              </p>
            </div>
            <div className="flex justify-center pt-2">
              <IPhoneFrame
                src={step3ImageSrc}
                alt={step3ImageAlt}
                maxWidthClass="max-w-[210px] sm:max-w-[230px]"
                onClick={() => openLightbox(step3ImageSrc, step3ImageAlt)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OsmiProcess;
