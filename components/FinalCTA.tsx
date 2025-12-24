
import React from 'react';
import Logo from './Logo';
import usePrice from '../hooks/usePrice';

const GoogleIcon: React.FC = () => (
    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
);

const FinalCTA: React.FC = () => {
    const price = usePrice();

    return (
        <section className="py-20 md:py-32 bg-slate-100">
            <div className="container mx-auto px-6 text-center">
                <div className="flex justify-center items-center space-x-3">
                    <Logo variant="outline" className="w-10 h-10 text-orange-600" />
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">雜事交給 Gemini 會議記錄 APP <br />寶貴的時間留給自己。</h2>
                </div>
                <p className="mt-4 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
                    立即開始，體驗 3 分鐘完成會議記錄。您只需要一個 Google 帳號。
                </p>
                <div className="mt-10">
                    <a href="https://page.cashier.ecpay.com.tw/forms/cPy2" 
                       data-gtm-id="cta-final"
                       className="inline-block bg-orange-600 text-white text-xl font-bold px-12 py-5 rounded-xl shadow-lg hover:bg-orange-700 transform hover:scale-105 transition-all duration-300 hover:shadow-orange-500/50">
                       {price ? `${price}元 一口價買斷免訂閱！立即開始，提高會議品質，一個人一年省下 120 天！` : "買斷免訂閱！立即開始，提高會議品質，一個人一年現賺 120 天！"}
                    </a>
                    
                    <p className="mt-6 text-slate-700 font-medium italic">
                        「算完 Plaud 的年費後，我立刻決定買這個。」— 蔡顧問
                    </p>
                    
                    <p className="mt-6 text-sm text-slate-500 flex items-center justify-center">
                        <GoogleIcon /> 使用你的 Google 帳號安全使用
                    </p>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;
