import React from 'react';

const AssuranceCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div 
        className="bg-white p-8 rounded-xl shadow-lg border border-slate-200 text-center cursor-pointer"
        data-gtm-id="assurance-card"
        data-gtm-id-assurance={title}
    >
        <div className="mx-auto bg-green-100 text-green-600 rounded-full h-16 w-16 flex items-center justify-center">
            {icon}
        </div>
        <h4 className="mt-6 text-xl font-bold text-slate-900">{title}</h4>
        <p className="mt-2 text-slate-600 leading-relaxed">
            {children}
        </p>
    </div>
);

const Assurance: React.FC = () => {
    return (
        <section id="assurance" className="py-20 md:py-28 bg-slate-100">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">專業保證與採購方案</h2>
                    <p className="mt-4 text-lg text-slate-600">
                        我們提供企業與組織最安心的選擇，無論是報帳或大量導入，都為您準備好了。
                    </p>
                </div>
                <div className="mt-16 max-w-5xl mx-auto grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                    <AssuranceCard
                        icon={<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                        title="台灣公司，正派經營"
                    >
                        我們是依法註冊的台灣公司，您的每一筆消費都可開立發票，方便您報帳核銷。
                    </AssuranceCard>
                    <AssuranceCard
                        icon={<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>}
                        title="歡迎大量採購"
                    >
                        支援政府、企業、機關團體的大量採購方案 ( 50 組以上) ，請聯繫我們 LINE 取得客製化報價單。
                    </AssuranceCard>
                    <AssuranceCard
                        icon={<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" /></svg>}
                        title="贈送企業內部訓練"
                    >
                        單一機關或企業採購達 200 組以上，我們將免費提供一場內部線上訓練，確保導入效益最大化。
                    </AssuranceCard>
                </div>
            </div>
        </section>
    );
};

export default Assurance;