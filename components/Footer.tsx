import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white py-8">
            <div className="container mx-auto px-6 text-center text-slate-500 flex flex-col items-center space-y-4">
                <div className="space-x-6">
                    <a href="/" className="hover:underline hover:text-orange-600 transition-colors">隱私權政策</a>
                    <a href="/" className="hover:underline hover:text-orange-600 transition-colors">服務條款</a>
                    <a href="#about" className="hover:underline hover:text-orange-600 transition-colors">關於我們</a>
                </div>
                <p>&copy; {new Date().getFullYear()} Agent Factory. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;