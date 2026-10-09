import React from 'react';

const STEPS = [
  {
    step: '步驟一',
    title: '交出錄音',
    desc: '手機、錄音筆、會議錄影都可以；從其他錄音 App 分享進 Osmi，也可以一次合併多個檔案。',
    imgSrc: '/pix/16-share-in.png',
    imgAlt: '從 iPhone 錄音分享至 Osmi',
    caption: '從 iPhone 錄音分享至 Osmi',
  },
  {
    step: '步驟二',
    title: '回答幾個問題',
    desc: 'Osmi 先確認誰是誰、專有名詞怎麼寫，以及紀錄要使用哪種語言。',
    imgSrc: '/pix/04-ask-speakers.png',
    imgAlt: 'Osmi 在撰寫會議紀錄前確認講者與術語',
    caption: '確認講者、人名與專業術語',
  },
  {
    step: '步驟三',
    title: '拿走整理好的紀錄',
    desc: '重點、時序摘要、行動事項和完整逐字稿都整理好；不滿意，還可以請它調整。',
    imgSrc: '/pix/07-doc-top.png',
    imgAlt: 'Osmi 整理完成的重點摘要與行動事項',
    caption: '重點與行動事項清楚整理',
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-16 md:py-24 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#165A79] bg-[#EBF4F8] px-3 py-1 rounded-full border border-[#D0E5F0]">
            流程介紹
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            從錄音到能交付的紀錄，三個步驟。
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-stretch">
          {STEPS.map((step, idx) => (
            <div
              key={idx}
              className="flex flex-col bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden"
            >
              <div className="p-6 pb-4">
                <span className="text-xs font-bold text-[#165A79] bg-[#EBF4F8] px-2.5 py-0.5 rounded-md inline-block mb-2">
                  {step.step}
                </span>
                <h3 className="text-xl font-bold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed min-h-[4rem]">
                  {step.desc}
                </p>
              </div>

              {/* Screenshot container with full aspect ratio */}
              <div className="mt-auto px-5 pb-6 pt-2 flex flex-col items-center">
                <div className="w-full max-w-[260px] rounded-2xl overflow-hidden border border-slate-200/80 shadow-md bg-slate-50">
                  <img
                    src={step.imgSrc}
                    alt={step.imgAlt}
                    width={260}
                    height={560}
                    loading="lazy"
                    className="w-full h-auto block object-contain"
                  />
                </div>
                <span className="mt-2 text-xs text-slate-400">
                  {step.caption}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
