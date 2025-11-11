import React from 'react';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div 
        className="bg-white p-8 rounded-xl shadow-lg border border-slate-200 transition-transform transform hover:-translate-y-2 cursor-pointer"
        data-gtm-id="feature-card"
        data-gtm-id-feature={title}
    >
        <div className="flex items-center space-x-4">
            <div className="bg-orange-100 text-orange-600 rounded-full p-3">
                {icon}
            </div>
            <h4 className="text-xl font-bold text-slate-900">{title}</h4>
        </div>
        <p className="mt-4 text-slate-600 leading-relaxed">
            {children}
        </p>
    </div>
);

const Solution: React.FC = () => {
    return (
        <section id="solution" className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">將 120 天的髒活 (Dirty Work)，<br />濃縮成 <span className="text-orange-600">3 分鐘的「有效決策」</span></h2>
                    <p className="mt-4 text-lg text-slate-600">
                        您只需要上傳錄音檔或貼上逐字稿。最強大的 Google Gemini 引擎將自動為您完成：
                    </p>
                </div>

                <div className="mt-16 flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-10">
                    <div className="flex flex-col items-center space-y-3">
                        <svg className="w-16 h-16 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 6l12 3" /></svg>
                        <span className="font-bold text-xl text-slate-900">mp3/m4a 錄音</span>
                    </div>
                    <svg className="w-10 h-10 text-slate-400 transform sm:rotate-0 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    <div className="flex flex-col items-center space-y-3">
                        <svg className="w-16 h-16 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                        <span className="font-bold text-xl text-slate-900">Gemini AI 處理</span>
                    </div>
                    <svg className="w-10 h-10 text-slate-400 transform sm:rotate-0 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    <div className="flex flex-col items-center space-y-3">
                        <svg className="w-16 h-16 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>
                        <span className="font-bold text-xl text-slate-900">Google 文件</span>
                    </div>
                </div>

                <div className="mt-16 max-w-5xl mx-auto grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                    <FeatureCard
                        icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
                        title="智慧摘要與主題"
                    >
                        「告別逐字稿。AI 自動萃取『關鍵決策』、『待辦事項』、『後續行動』，直接可用。」
                    </FeatureCard>
                    <FeatureCard
                        icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>}
                        title="交付 Google 文件"
                    >
                        「一鍵產出，所有記錄自動存為 Google 文件，<strong className="text-slate-800">100% 存在「您自己」的 Google 雲端硬碟</strong>。」
                    </FeatureCard>
                    <FeatureCard
                        icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h-3.234c-.966 0-1.631-.762-1.631-1.631V14.513c0-.966.665-1.631 1.631-1.631h.54M9 11a1 1 0 11-2 0 1 1 0 012 0z" /></svg>}
                        title="支援中英夾雜"
                    >
                        「專為台灣情境設計，流暢處理公務、商務、學術的跨語言對話，精準到位。」
                    </FeatureCard>
                </div>
            </div>
        </section>
    );
};

export default Solution;