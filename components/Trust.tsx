import React from 'react';

const CheckIcon = () => <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>;
const CrossIcon = () => <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>;

const Trust: React.FC = () => {
    const tableData = [
        { feature: '資料儲存', ours: '您「個人」的 Google 雲端硬碟', theirs: '未知或中資的雲端' },
        { feature: 'AI 引擎', ours: 'Google Gemini (最強大)', theirs: '未知或中資 AI 模型' },
        { feature: '中資風險', ours: <span className="flex items-center justify-center font-bold text-green-600"><CheckIcon /> 零 (Zero)</span>, theirs: <span className="flex items-center justify-center font-bold text-red-600"><CrossIcon /> 高風險 (High Risk)</span> },
        { feature: '硬體成本', ours: '$0 (使用您現有手機)', theirs: '$4,000 - $8,000' },
        { feature: '月費', ours: '整合 Google 訂閱 (無額外費用)', theirs: '額外 $300 - $700/月 (轉錄費)' },
        { feature: '總使用成本', ours: <span className="flex items-center justify-center gap-1 font-bold text-green-700">最低 🪙🪙</span>, theirs: <span className="flex items-center justify-center gap-1 font-bold text-red-700">最高 🪙🪙🪙🪙🪙🪙</span> },
        { feature: '軟體生態系', ours: '超健全的Google生態', theirs: '只有廠商自己的軟體' },
        { feature: '會議記錄整合性', ours: <span className="font-bold text-green-700">極高</span>, theirs: <span className="font-bold text-red-700">極低</span> },
    ];
    
    return (
        <section id="trust" className="py-20 md:py-28 bg-slate-100">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">您的會議記錄，不該上傳到有疑慮的資料庫。</h2>
                    <p className="mt-4 text-lg text-slate-600">
                        為什麼公務機關和專業人士信賴我們？因為您的資料，
                        <strong className="text-orange-600">從頭到尾都只在您的 Google 帳號內</strong>。
                    </p>
                </div>

                <div className="mt-16 max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
                    <div className="grid grid-cols-3 text-center font-bold text-lg bg-slate-50">
                        <div className="p-4 border-b border-slate-200">特性</div>
                        <div className="p-4 border-b border-l border-orange-200 bg-orange-50 text-orange-900 font-extrabold shadow-xl shadow-orange-500/20 z-10 relative">AI 會議助理(Google)</div>
                        <div className="p-4 border-b border-l border-slate-200 bg-red-50 text-red-800">他牌 AI 錄音筆 (中資硬體)</div>
                    </div>
                    {tableData.map((row, index) => (
                        <div key={index} className="grid grid-cols-3 text-center items-center">
                            <div className="p-4 font-semibold text-slate-700 text-left md:text-center border-b border-slate-200 h-full flex items-center justify-start md:justify-center">{row.feature}</div>
                            <div className="p-4 border-b border-l border-orange-200 text-slate-800 font-semibold bg-orange-50 shadow-xl shadow-orange-500/20 h-full flex items-center justify-center">{row.ours}</div>
                            <div className="p-4 border-b border-l border-slate-200 text-red-900 bg-red-50/50 h-full flex items-center justify-center">{row.theirs}</div>
                        </div>
                    ))}
                </div>
                
                <div className="mt-16 max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold text-center text-slate-800">金流安全夥伴</h3>
                    <div className="mt-8 bg-white p-8 rounded-xl shadow-lg border border-slate-200 flex flex-col sm:flex-row justify-center items-center gap-8">
                        {/* ECPay Logo is now an easily replaceable img tag */}
                        <img src="/pix/gw_ssl_2.png" alt="ECPay Logo" className="h-20" />
                        
                        <div className="flex items-center gap-6">
                            <div className="text-center">
                                <svg className="w-12 h-12 mx-auto text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                                <p className="mt-2 text-sm font-semibold text-slate-600">SSL 加密</p>
                            </div>
                            <div className="text-center">
                                <svg className="w-12 h-12 mx-auto text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                                <p className="mt-2 text-sm font-semibold text-slate-600">PCI-DSS 認證</p>
                            </div>
                        </div>
                    </div>
                </div>


                <p className="mt-12 text-center text-lg font-semibold text-slate-700 max-w-3xl mx-auto">
                    停止購買昂貴的硬體加月費，還把資料存在有風險的資料庫。 <br /> 善用您的手機、既有的 Google 帳號，更好用與便且。
                </p>
            </div>
        </section>
    );
};

export default Trust;