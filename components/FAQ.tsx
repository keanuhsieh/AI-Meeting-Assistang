import React from 'react';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqs: FAQItem[] = [
  {
    question: 'Gemini 會議記錄 APP 和 Osmi 是什麼關係？',
    answer:
      'Osmi 是原團隊推出的新一代產品。我們把原本在 Gemini 裡操作的錄音整理流程，做成可以在手機和電腦使用的完整服務。',
  },
  {
    question: '原本的購買會自動轉成 Osmi 額度嗎？',
    answer: (
      <>
        針對原先支持我們的使用者，我們將贈予超值的額度。若你是既有使用者，需要協助請來信{' '}
        <a
          href="mailto:support@bookai.com"
          className="text-[#134e6f] font-semibold underline hover:text-black focus:outline-none focus:ring-1 focus:ring-[#134e6f] rounded"
        >
          support@bookai.com
        </a>
        。
      </>
    ),
  },
  {
    question: 'Osmi 會直接幫我錄音嗎？',
    answer:
      '你的手機、錄音筆或習慣的軟體一直是最佳的錄音檔來源。把錄音交給 Osmi，錄音檔或影片都可以。',
  },
  {
    question: 'Osmi 一定要訂閱嗎？',
    answer: '不用。Osmi 沒有訂閱或自動續費，需要時才購買額度。',
  },
  {
    question: '我需要購買特殊硬體嗎？支援哪些錄音格式？',
    answer:
      '不需要購買任何專屬硬體。你可以直接使用手機的語音備忘錄、現有的錄音筆或會議錄影檔案（支援常見 mp3、m4a、wav、mp4 等音訊與視訊格式）。',
  },
];

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-20 md:py-28 bg-white border-t border-slate-200">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            常見問題
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            為您說明 Gemini 會議記錄 APP 與新一代 Osmi 的關係與使用方式。
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-slate-50 border border-slate-200 rounded-xl p-6 shadow-sm hover:border-slate-300 transition-colors"
            >
              <h3 className="text-lg font-bold text-slate-900">
                {faq.question}
              </h3>
              <p className="mt-2.5 text-slate-700 leading-relaxed text-sm sm:text-base">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;