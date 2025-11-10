import React from 'react';

const testimonials = [
    {
        id: 1,
        quote: "實在是另一個世界，一個早上就處理20個會議記錄！",
        name: "林經理",
        title: "專案管理",
        avatar: "https://i.pravatar.cc/150?u=1",
    },
    {
        id: 2,
        quote: "終於可以放心記錄機密會議，還可以用 Google 雲端硬碟共享。",
        name: "王律師",
        title: "法律顧問",
        avatar: "https://i.pravatar.cc/150?u=2",
    },
    {
        id: 3,
        quote: "可以用Google Drive管理會議記錄太方便了。",
        name: "陳小姐",
        title: "NGO 工作者",
        avatar: "https://i.pravatar.cc/150?u=3",
    },
    {
        id: 4,
        quote: "客戶訪談後馬上產出重點，追蹤成功率提升了30%！",
        name: "李業務",
        title: "保險經紀",
        avatar: "https://i.pravatar.cc/150?u=4",
    },
    {
        id: 5,
        quote: "冗長的聽證會記錄，現在半小時內就能歸檔，符合資安規範。",
        name: "張課長",
        title: "政府機關",
        avatar: "https://i.pravatar.cc/150?u=5",
    },
    {
        id: 6,
        quote: "整理田野調查的訪談稿，速度快了十倍，讓我能專心寫論文。",
        name: "黃同學",
        title: "社會學研究生",
        avatar: "https://i.pravatar.cc/150?u=6",
    },
    {
        id: 7,
        quote: "客戶的證詞整理不再是惡夢，資料都在自己的Google帳號，安全又保密。",
        name: "吳律師",
        title: "律師事務所",
        avatar: "https://i.pravatar.cc/150?u=7",
    },
    {
        id: 8,
        quote: "團隊週會的待辦事項再也不會漏掉，AI自動抓取，一目了然。",
        name: "周總監",
        title: "產品開發",
        avatar: "https://i.pravatar.cc/150?u=8",
    },
    {
        id: 9,
        quote: "面試記錄整理超快速，所有候選人的重點都能輕鬆比較。",
        name: "劉人資",
        title: "科技業 HR",
        avatar: "https://i.pravatar.cc/150?u=9",
    },
    {
        id: 10,
        quote: "每天跟不同客戶開會，AI助理幫我把所有決議都變成可行動的筆記。",
        name: "蔡顧問",
        title: "管理顧問",
        avatar: "https://i.pravatar.cc/150?u=10",
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
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">聽聽我們的用戶怎麼說</h2>
                <p className="mt-4 text-lg text-slate-600">從各行各業的專業人士，到政府機關公務員，因為 AI 會議助理 而改變工作模式。</p>
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