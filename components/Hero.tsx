import React from 'react';

const GoogleIcon: React.FC = () => (
    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
);


const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="relative py-20 md:py-32 bg-cover bg-center"
      style={{ backgroundImage: "url('https://static.wixstatic.com/media/0f9583_8c57f64f5cb14700ab6c979602e9e674~mv2.avif')" }}
    >
      <div className="absolute inset-0 bg-slate-900/70 z-10"></div>
      <div className="relative z-20 container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
          Gemini 會議記錄 APP <br /> 為你一年省下 120 天
        </h1>
        
        <div className="mt-6 max-w-3xl mx-auto bg-slate-800/50 backdrop-blur-sm p-4 rounded-lg border border-orange-400/50">
          <h2 className="text-2xl md:text-3xl font-bold text-orange-400">
            別浪費 4 小時做會議記錄。 <br /> 3 分鐘產出會議摘要、待辦工作
          </h2>
          <p className="mt-4 text-lg text-slate-200">
            公務員與專業人士，用 AI 把會議錄音 
            <span className="font-bold bg-yellow-300 text-slate-900 px-2 py-1 rounded">安全低成本</span>
              <br /> 轉為逐字稿、會議記錄，存在 Google 雲端硬碟。
          </p>
        </div>

        <div id="cta" className="mt-12">
            <a href="https://page.cashier.ecpay.com.tw/forms/cPy2" 
               data-gtm-id="cta-hero"
               className="inline-block bg-orange-600 text-white text-xl font-bold px-12 py-5 rounded-xl shadow-lg hover:bg-orange-700 transform hover:scale-105 transition-all duration-300 hover:shadow-orange-500/50">
               立即開始！惱人的會議記錄交給 Google
            </a>
            <p className="mt-4 text-sm text-slate-300 flex items-center justify-center">
               <GoogleIcon /> 一切都掌握在 你的 Google 雲端
            </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;