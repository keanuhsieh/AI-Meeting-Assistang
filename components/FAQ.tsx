import React from 'react';
import Logo from './Logo';

const faqs = [
    {
        question: "我的錄音檔和會議記錄安全嗎？資料會送到國外或中資伺服器嗎？",
        answer: "絕對安全。您的所有資料，從上傳錄音檔到產出的 Google 文件，全程都在您自己的 Google 雲端硬碟中處理與儲存。我們絕不經手、也不會將您的資料傳送到任何第三方伺服器，完全杜絕了中資或外洩風險。"
    },
    {
        question: "這真的是一次性付費嗎？有沒有月費、訂閱費或任何隱藏費用？",
        answer: "是的，這是一次性付費，絕無月費或訂閱制。購買後即可享有終身使用權與未來的軟體更新。我們相信好的工具就該一次買斷，讓您專注工作，而非應付帳單。"
    },
    {
        question: "我需要購買什麼特殊硬體嗎？整個流程會不會很複雜？",
        answer: "完全不需要額外硬體！您可以使用任何裝置（手機、錄音筆）的錄音檔（如 mp3, m4a）。整個過程非常簡單：1. 上傳錄音檔。 2. AI 自動處理。 3. 在您的 Google 雲端硬碟直接收到會議記錄與摘要文件。"
    },
    {
        question: "這和 Plaud AI 錄音卡、AI 錄音筆 最大的不同是什麼？",
        answer: "最大的不同在於「安全性」、「總成本」與「整合性」。用你的手機和現有的錄音筆就好，不用另外買。我們的 APP 讓資料 100% 留在您的 Google 帳號，零資安風險；您不需購買昂貴的硬體，一次付費即可無限使用；產出的文件無縫整合您的 Google 生態系，方便您後續編輯、共享與協作。"
    }
]

const FAQ: React.FC = () => {
    return (
        <section id="faq" className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <div className="flex justify-center items-center space-x-3">
                         <h2 className="text-3xl md:text-4xl font-bold text-slate-900">常見問題</h2>
                    </div>
                    <p className="mt-4 text-lg text-slate-600">
                        為您解答關於安全性、費用與使用的常見疑問。
                    </p>
                </div>
                <div className="mt-16 max-w-4xl mx-auto space-y-8">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                            <h3 className="text-lg font-bold text-slate-800">{faq.question}</h3>
                            <p className="mt-2 text-slate-600 leading-relaxed">{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;