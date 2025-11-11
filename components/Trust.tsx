import React from 'react';

const TrustCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200">
        <div className="flex items-center space-x-4">
            <div className="bg-blue-100 text-blue-600 rounded-full p-3">
                {icon}
            </div>
            <h4 className="text-xl font-bold text-slate-900">{title}</h4>
        </div>
        <p className="mt-4 text-slate-600 leading-relaxed">
            {children}
        </p>
    </div>
);

const Trust: React.FC = () => {
    return (
        <section id="trust" className="py-20 md:py-28 bg-slate-100">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">您的資料，絕對安全</h2>
                    <p className="mt-4 text-lg text-slate-600">
                        我們絕不儲存您的任何會議內容。所有資料都安全地存放在您自己的 Google 帳號中，由您全權掌控。
                    </p>
                </div>

                <div className="mt-16 max-w-5xl mx-auto grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                    <TrustCard
                        icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>}
                        title="Google 等級的安全"
                    >
                        您的帳號與資料，皆由 Google 的世界級安全基礎設施保護。我們採用 OAuth 2.0 授權，過程安全透明。
                    </TrustCard>
                    <TrustCard
                        icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>}
                        title="存在您自己的雲端硬碟"
                    >
                        所有會議記錄、逐字稿都直接儲存到 <strong className="text-slate-800">您個人的 Google Drive</strong>。我們無法存取，也無法看到您的任何檔案。
                    </TrustCard>
                    <TrustCard
                        icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>}
                        title="處理完畢，立即刪除"
                    >
                        您的錄音檔在上傳處理後，會 <strong className="text-slate-800">立即從我們的伺服器永久刪除</strong>。我們絕不保留任何副本。
                    </TrustCard>
                </div>
            </div>
        </section>
    );
};

export default Trust;
