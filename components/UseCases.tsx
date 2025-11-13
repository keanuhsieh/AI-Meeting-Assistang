import React from 'react';
import Logo from './Logo';

const UseCaseCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div 
        className="bg-white p-8 rounded-xl shadow-lg border border-slate-200 flex flex-col items-center text-center transition-transform transform hover:-translate-y-2 cursor-pointer"
        data-gtm-id="use-case-card"
        data-gtm-id-category={title}
    >
        <div className="bg-orange-100 text-orange-600 rounded-full p-4 mb-4">
            {icon}
        </div>
        <h4 className="text-xl font-bold text-slate-900">{title}</h4>
        <p className="mt-2 text-slate-600 leading-relaxed">
            {children}
        </p>
    </div>
);

const UseCases: React.FC = () => {
    return (
        <section id="use-cases" className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <div className="flex justify-center items-center space-x-3">
                        <Logo variant="outline" className="w-10 h-10 text-orange-600" />
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Google 雲端 100% 完全整合</h2>
                    </div>
                    <p className="mt-4 text-lg text-slate-600">
                        無論是政府、法律、學術或商業 <br /> Gemini 會議記錄 APP 讓你的手機或電腦變身超級助理
                    </p>
                </div>
                <div className="mt-16 max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <UseCaseCard
                        icon={<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>}
                        title="公務機關"
                    >
                        「快速整理冗長的委員會、聽證會、內部會議記錄，確保資訊透明與可追溯性。」
                    </UseCaseCard>
                    <UseCaseCard
                        icon={<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>}
                        title="法律專業"
                    >
                        「安全地轉錄客戶訪談、證人陳述、法庭辯論，保護客戶機密，加速案件準備。」
                    </UseCaseCard>
                    <UseCaseCard
                        icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>}
                        title="學術研究"
                    >
                        「輕鬆轉錄深度訪談、焦點小組、課堂講座，讓研究人員專注於分析而非聽打。」
                    </UseCaseCard>
                    <UseCaseCard
                        icon={<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
                        title="企業會議"
                    >
                        「從董事會到專案會議，自動生成摘要與待辦事項，確保團隊溝通無礙，決策快速執行。」
                    </UseCaseCard>
                </div>
            </div>
        </section>
    );
};

export default UseCases;
