import React from 'react';

const Trust: React.FC = () => {
    const tableData = [
        {
            feature: '資料儲存',
            ours: '您「個人」的 Google 雲端硬碟',
            theirs: '廠商的私有雲端',
        },
        {
            feature: 'AI 引擎',
            ours: 'Google Gemini (最強大)',
            theirs: '未知或中資 AI 模型',
        },
        {
            feature: '中資風險',
            ours: <span className="text-green-600 font-bold">零 (Zero)</span>,
            theirs: <span className="text-red-600 font-bold">高風險 (High Risk)</span>,
        },
        {
            feature: '硬體成本',
            ours: '$0 (使用您現有手機)',
            theirs: '$3,000 - $8,000',
        },
        {
            feature: '月費',
            ours: '整合 Google 訂閱 (無額外費用)',
            theirs: '額外 $300 - $600/月',
        },
        {
            feature: '總使用成本',
            ours: <span className="text-2xl" title="最低">🪙🪙</span>,
            theirs: <span className="text-2xl" title="最高">🪙🪙🪙🪙🪙🪙</span>,
        },
        {
            feature: '軟體生態系',
            ours: '超健全的Google生態',
            theirs: '只有廠商自己的軟體',
        },
        {
            feature: '整合性',
            ours: '極高 (你的 Google 雲端硬碟)',
            theirs: '極低 (資料庫各自獨立)',
        }
    ];

    return (
        <section id="trust" className="py-20 md:py-28 bg-slate-100">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">您的機密，不該上傳到「別人的」資料庫。</h2>
                    <p className="mt-4 text-lg text-slate-600">
                        為什麼公務機關和專業人士信賴我們？因為您的資料，<strong className="text-orange-600">從頭到尾都只在您的 Google 帳號內</strong>。我們絕不碰觸、絕不儲存。
                    </p>
                </div>

                <div id="trust-table" className="mt-16 max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl border border-slate-200">
                    <div className="grid grid-cols-3">
                        <div className="p-4 border-b border-r font-bold text-slate-600 bg-slate-50 rounded-tl-2xl flex items-center justify-center text-center">特性</div>
                        <div className="p-4 border-b border-r text-slate-800 font-bold bg-orange-100 shadow-xl shadow-orange-500/20 relative z-10 flex items-center justify-center text-center">服務 (Google 整合方案)</div>
                        <div className="p-4 border-b font-bold text-slate-600 bg-slate-50 rounded-tr-2xl flex items-center justify-center text-center">他牌 AI 錄音筆 (中資硬體)</div>

                        {tableData.map((row, index) => (
                            <React.Fragment key={index}>
                                <div className={`p-4 border-b border-r font-semibold text-slate-700 bg-slate-50 flex items-center justify-center text-center ${index === tableData.length - 1 ? 'rounded-bl-2xl' : ''}`}>{row.feature}</div>
                                <div className={`p-4 border-b border-r text-slate-800 font-semibold bg-orange-50 shadow-xl shadow-orange-500/20 h-full flex items-center justify-center text-center relative z-10 ${index === tableData.length - 1 ? '' : ''}`}>{row.ours}</div>
                                <div className={`p-4 border-b text-slate-600 flex items-center justify-center text-center ${index === tableData.length - 1 ? 'rounded-br-2xl' : ''}`}>{row.theirs}</div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                <div className="mt-16 max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold text-center text-slate-800">金流安全夥伴</h3>
                    <div className="mt-8 bg-white p-8 rounded-xl shadow-lg border border-slate-200 flex flex-col sm:flex-row justify-center items-center gap-x-12 gap-y-6">
                        <img src="/ecpay-logo.svg" alt="ECPay Logo" className="h-12" />
                        
                        <div className="flex items-center gap-8">
                            <div className="text-center">
                                <img src="/pix/gw_ssl_2.png" alt="SSL Certified" className="h-20 mx-auto" />
                                <p className="mt-2 text-sm font-semibold text-slate-600">SSL 加密</p>
                            </div>
                            <div className="text-center">
                               <svg className="w-12 h-12 mx-auto text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" /></svg>
                                <p className="mt-2 text-sm font-semibold text-slate-600">PCI-DSS</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Trust;