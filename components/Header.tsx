import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span className="text-xl font-bold text-slate-900">AI 會議助理</span>
                </div>
                <a href="https://page.cashier.ecpay.com.tw/forms/cPy2" className="hidden sm:inline-block bg-orange-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-orange-700 transition-all duration-300">
                    立即開始
                </a>
            </div>
        </header>
    );
};

export default Header;