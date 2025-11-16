import React from 'react';
import Logo from './Logo';

const testimonials = [
    {
        id: 1,
        quote: "實在是另一個世界，一個早上 2 個小時就處理 20 個會議記錄！",
        name: "林經理",
        title: "專案管理",
        avatar: "https://static.wixstatic.com/media/f36d2d_03922a01259b426b877fa6a8989501e7~mv2.png",
    },
    {
        id: 2,
        quote: "終於可以放心記錄機密會議，還可以用 Google 雲端硬碟共享。",
        name: "王律師",
        title: "法律顧問",
        avatar: "https://static.wixstatic.com/media/f36d2d_136ab774b87b4a49a3c4514b99cdb868~mv2.png",
    },
    {
        id: 3,
        quote: "可以用 Google Drive 管理會議記錄太方便了。",
        name: "陳小姐",
        title: "NGO 工作者",
        avatar: "https://static.wixstatic.com/media/f36d2d_c824d46d7f7f4eca831c5c9d1fab0418~mv2.png",
    },
    {
        id: 4,
        quote: "客戶訪談後馬上寫完業務報告，省超多時間！而且後續追蹤效果也很好！",
        name: "李業務",
        title: "保險經紀",
        avatar: "https://static.wixstatic.com/media/f36d2d_8f6d5a3bd2a2408997bc274ef3c322b8~mv2.png",
    },
    {
        id: 5,
        quote: "以前開會委員會開會記錄要弄一整天，會議記錄修了又修長官不滿意，現在靠錄音逐字稿，10分鐘內就能送出，而且符合資安指引。",
        name: "張股長",
        title: "地方政府",
        avatar: "https://static.wixstatic.com/media/f36d2d_b5da6b93994d49fb9954e1d111dd0096~mv2.png",
    },
    {
        id: 6,
        quote: "整理田野調查的訪談稿，整理逐字稿超快，還可以做文字分析，真是論文神器",
        name: "黃同學",
        title: "社會學研究生",
        avatar: "https://static.wixstatic.com/media/f36d2d_0987d3c848504920b5f70e29ea435a30~mv2.png",
    },
    {
        id: 7,
        quote: "整理客戶的說詞不再是惡夢，資料都在自己的Google帳號，安全又保密。",
        name: "吳律師",
        title: "律師事務所",
        avatar: "https://static.wixstatic.com/media/f36d2d_04c162c13b9043eb9c6154b874784a42~mv2.png",
    },
    {
        id: 8,
        quote: "團隊週會的待辦事項再也不會漏掉，AI自動抓取，一目了然。",
        name: "周總監",
        title: "產品開發",
        avatar: "https://static.wixstatic.com/media/f36d2d_1a9c1af58a8644849a4ebed4cd30f9ad~mv2.png",
    },
    {
        id: 9,
        quote: "面試記錄整理超快速，重要的候選人分析很快完成，可以輕鬆比較重點。",
        name: "劉人資",
        title: "科技業 HR",
        avatar: "https://static.wixstatic.com/media/f36d2d_b0ddfa007da2476f8e1e944b1d8ea533~mv2.png",
    },
    {
        id: 10,
        quote: "每天跟不同客戶開會，開完會錄音檔丟給Gemini會議記錄，我一邊開車它一邊整理，我專心開會就好了。",
        name: "蔡顧問",
        title: "管理顧問",
        avatar: "https://static.wixstatic.com/media/f36d2d_284f0168bd794fe2a3624281dd1c21ba~mv2.png",
    },
];

const TestimonialCard: React.FC<typeof testimonials[0]> = ({ quote, name, title, avatar }) => (
    <div className="flex-shrink-0 w-[350px] bg-white p-6 rounded-xl shadow-lg border border-slate-200 mx-4">
        <p className="text-slate-700 italic">"{quote}"</p>
        <div className="mt-4 flex items-center">
            <img className="w-12 h-12 rounded-full object-cover" src={avatar} alt={name} />
            <div className="ml-4">
                <p className="font-bold text-slate-900">{name}</p>
                <p className="text-sm text-slate-500">{title}</p>
            </div>
        </div>
    </div>
);


const Testimonials: React.FC = () => {
    // Duplicate the array for a seamless loop
    const doubledTestimonials = [...testimonials, ...testimonials];

    return (
        <section id="testimonials" className="py-20 md:py-28 bg-slate-50">
            <div className="container mx-auto px-6 text-center">
                <div className="flex justify-center items-center space-x-3">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">聽聽我們的用戶怎麼說</h2>
                </div>
                <p className="mt-4 text-lg text-slate-600">從各行各業的專業人士，到政府機關公務員，因為 Gemini 會議記錄 APP 而改變工作模式。</p>
            </div>
            <div className="mt-16 relative w-full overflow-hidden">
                <div className="flex flex-nowrap animate-marquee w-max">
                    {doubledTestimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} {...testimonial} />
                    ))}
                </div>
                 <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-slate-50 to-transparent"></div>
                 <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-slate-50 to-transparent"></div>
            </div>
        </section>
    );
};

export default Testimonials;
