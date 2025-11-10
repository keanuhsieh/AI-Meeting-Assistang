import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white py-8">
            <div className="container mx-auto px-6 text-center text-slate-500">
                <p>&copy; {new Date().getFullYear()} Agent Factory. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
