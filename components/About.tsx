import React from 'react';
import Logo from './Logo';

const FeatureItem: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 bg-orange-100 text-orange-600 rounded-full p-1 flex items-center justify-center w-12 h-12">
            {icon}
        </div>
        <div>
            <h4 className="text-lg font-bold text-slate-800">{title}</h4>
            <p className="mt-1 text-slate-600">{children}</p>
        </div>
    </div>
);

const About: React.FC = () => {
    return (
        <section id="about" className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div className="order-2 md:order-1">
                        <div className="flex items-center space-x-3">
                            <Logo variant="outline" className="w-10 h-10 text-orange-600" />
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">我們是 Agent Factory ，您的 Gemini 應用專家</h2>
                        </div>
                        <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                            我們專注於正體中文的台灣 AI 應用，致力在 Google 生態系中，為您打造解決「人手不夠、沒時間、嫌麻煩」的 AI 工作夥伴。
                        </p>
                        <div className="mt-8 space-y-6">
                            <FeatureItem
                                icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
                                title="Gemini 核心，終身更新"
                            >
                                我們的 Agent 是 Gemini 平台上的 App，充分發揮其強大能力。一次購買，即可享有持續的功能升级與終身保固服務。
                            </FeatureItem>
                            <FeatureItem
                                icon={<svg className="w-9 h-9" fill="currentColor" viewBox="0 0 1024 1024"><path d="M541.7 768v-45.3c46.3-2.4 81.5-15 108.7-37.8 27.2-22.8 40.8-53.1 40.8-88.2 0-37.8-11-65.7-35.3-83.4-24.6-20.1-59.8-35.4-111.6-45.3h-2.6V351.8c35.3 5.1 65.3 15 95.1 35.4l43.6-55.5c-43.6-27.9-89.9-42.9-138.8-45.3V256h-40.8v30.3c-40.8 2.4-76.3 15-103.5 37.8-27.2 22.8-40.8 53.1-40.8 88.2s11 63 35.3 80.7c21.7 17.7 59.8 32.7 108.7 42.9v118.5c-38.2-5.1-76.3-22.8-114.2-53.1l-48.9 53.1c48.9 40.5 103.5 63 163.3 68.1V768h41zm2.6-219.6c27.2 7.5 43.6 15 54.4 22.8 8.1 10.2 13.6 20.1 13.6 35.4s-5.5 25.2-19.1 35.4c-13.6 10.2-30.1 15-48.9 17.7V548.4zM449.2 440c-8.1-7.5-13.6-20.1-13.6-32.7 0-15 5.5-25.2 16.2-35.4 13.6-10.2 27.2-15 48.9-17.7v108.6c-27.2-7.8-43.4-15.3-51.5-22.8z" /></svg>}
                                title="一次性付費，絕無月費"
                            >
                                告別訂閱制的焦慮。我們相信好的工具應該一次買斷，讓您專注於工作，而非應付帳單。
                            </FeatureItem>
                            <FeatureItem
                                icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
                                title="在地化思維，為您而生"
                            >
                                我們深刻理解台灣的工作文化與語言情境，開發最貼近您需求的應用，豐富並便利您的數位生活。
                            </FeatureItem>
                        </div>
                    </div>
                    <div className="order-1 md:order-2">
                        <img 
                            src="https://static.wixstatic.com/media/0f9583_76686e20242b477ebb16514391caf076~mv2.png"
                            alt="Agent Factory Team Collaboration"
                            className="rounded-xl shadow-2xl w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
