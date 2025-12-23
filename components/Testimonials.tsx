import React from 'react';
import Logo from './Logo';

const testimonials = [
    {
        id: 1,
        quote: "這是我買過最超值的 AI 工具。一個早上處理完 20 個會議記錄不再是夢想，品質比人工聽打還精準！",
        name: "林經理",
        title: "專案管理",
        avatar: "https://static.wixstatic.com/media/f36d2d_03922a01259b426b877fa6a8989501e7~mv2.png",
        rating: 5.0
    },
    {
        id: 2,
        quote: "本來想買 Plaud Note，但事務所擔心資安問題。改用這個 APP 後，錄音全在自己的 Google 雲端處理，老闆才點頭放心。",
        name: "王律師",
        title: "法律顧問",
        avatar: "https://static.wixstatic.com/media/f36d2d_136ab774b87b4a49a3c4514b99cdb868~mv2.png",
        rating: 5.0
    },
    {
        id: 3,
        quote: "算完 Plaud 的年費要好幾千，還要買快六千的硬體。這個 APP 一次付費就搞定，整合 Google Drive 超級直覺。",
        name: "蔡顧問",
        title: "管理顧問",
        avatar: "https://static.wixstatic.com/media/f36d2d_284f0168bd794fe2a3624281dd1c21ba~mv2.png",
        rating: 4.9
    },
    {
        id: 4,
        quote: "符合政府資安指引，不需額外加購分鐘數。每年省下萬元預算，長官對 AI 摘要的品質非常滿意！",
        name: "張股長",
        title: "地方政府",
        avatar: "https://static.wixstatic.com/media/f36d2d_b5da6b93994d49fb9954e1d111dd0096~mv2.png",
        rating: 4.8
    },
    {
        id: 5,
        quote: "對於機密訪談來說，安全性是第一考量。資料都在自己的帳號，不必擔心廠商跑掉或資料外洩。",
        name: "吳律師",
        title: "律師事務所",
        avatar: "https://static.wixstatic.com/media/f36d2d_04c162c13b9043eb9c6154b874784a42~mv2.png",
        rating: 5.0
    },
    {
        id: 6,
        quote: "田野調查的論文神器！整理逐字稿的速度快得驚人，還能直接產出結構化的重點分析。",
        name: "黃同學",
        title: "社會學研究生",
        avatar: "https://static.wixstatic.com/media/f36d2d_0987d3c848504920b5f70e29ea435a30~mv2.png",
        rating: 4.7
    },
    {
        id: 7,
        quote: "用 Google Drive 直接管理會議記錄，不用再切換不同的軟體，團隊協作效率提升至少 3 倍。",
        name: "陳小姐",
        title: "NGO 工作者",
        avatar: "https://static.wixstatic.com/media/f36d2d_c824d46d7f7f4eca831c5c9d1fab0418~mv2.png",
        rating: 5.0
    },
    {
        id: 8,
        quote: "客戶訪談完一邊開車，AI 就一邊把業務報告寫好了。省下來的時間讓我能多跑兩間客戶。",
        name: "李業務",
        title: "保險經紀",
        avatar: "https://static.wixstatic.com/media/f36d2d_8f6d5a3bd2a2408997bc274ef3c322b8~mv2.png",
        rating: 4.8
    },
    {
        id: 9,
        quote: "團隊週會的待辦事項再也不會漏掉，Gemini 自動抓取重點，會議品質明顯提升。",
        name: "周總監",
        title: "產品開發",
        avatar: "https://static.wixstatic.com/media/f36d2d_1a9c1af58a8644849a4ebed4cd30f9ad~mv2.png",
        rating: 5.0
    }
];

const TestimonialCard: React.FC<typeof testimonials[0]> = ({ quote, name, title, avatar, rating }) => (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 transition-all duration-300 hover:shadow-xl hover:border-orange-200">
        <div className="flex text-orange-400 mb-4">
            {"★".repeat(Math.floor(rating))}
            {rating < 5 && rating > 0 && <span className="opacity-40">{"★".repeat(5 - Math.ceil(rating))}</span>}
            <span className="ml-2 text-slate-400 text-sm font-medium">{rating.toFixed(1)}</span>
        </div>
        <p className="text-slate-700 leading-relaxed italic">"{quote}"</p>
        <div className="mt-8 flex items-center border-t border-slate-100 pt-6">
            <img 
                className="w-12 h-12 rounded-full object-cover ring-2 ring-orange-100" 
                src={avatar} 
                alt={name} 
                width="48" 
                height="48" 
                loading="lazy" 
            />
            <div className="ml-4 text-left">
                <p className="font-bold text-slate-900 leading-tight">{name}</p>
                <p className="text-sm text-slate-500">{title}</p>
            </div>
        </div>
    </div>
);


const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="py-20 md:py-28 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-bold mb-6">
                        <span>⭐ 4.9/5 顆星</span>
                        <span className="text-orange-300">|</span>
                        <span>來自 68 位專業人士的真實評價</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">為什麼專業人士拋棄昂貴硬體 <br />轉而選擇 Gemini 會議記錄 APP</h2>
                    <p className="mt-4 text-lg text-slate-600">從機密法律事務到政府公開會議，我們是處理錄音最安心的解決方案。</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {testimonials.map((testimonial) => (
                        <TestimonialCard key={testimonial.id} {...testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;