import React, { useState, useEffect, useRef } from 'react';

const Header: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);
    const lastScrollY = useRef(0);

    const controlNavbar = () => {
        const currentScrollY = window.scrollY;

        // Add a small buffer to prevent flickering on some devices
        if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
            setIsVisible(false);
        } else if (currentScrollY < lastScrollY.current) {
            setIsVisible(true);
        }

        // Always show if at the very top
        if (currentScrollY <= 10) {
            setIsVisible(true);
        }

        lastScrollY.current = currentScrollY;
    };

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar, { passive: true });

        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, []);

    const headerClasses = `
        fixed top-0 w-full z-50 
        bg-white/50 backdrop-blur-2xl 
        shadow-2xl 
        transition-transform duration-300 ease-in-out
        after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px 
        after:bg-gradient-to-r after:from-transparent after:via-orange-200/85 after:to-transparent
        ${isVisible ? 'translate-y-0' : '-translate-y-full'}
    `;

    return (
        <header className={headerClasses}>
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span className="text-xl font-bold text-slate-900">Gemini 會議記錄 APP</span>
                </div>
                <a href="https://page.cashier.ecpay.com.tw/forms/cPy2" 
                   data-gtm-id="cta-header"
                   className="hidden sm:inline-block bg-orange-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-orange-700 transition-all duration-300">
                    立即開始
                </a>
            </div>
        </header>
    );
};

export default Header;