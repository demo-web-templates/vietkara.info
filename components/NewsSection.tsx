import React from 'react';

const newsData = [
  { id: 1, date: '2025/11/28', title: 'Yu Lounge Premium', content: '店舗：Yu Lounge Premiumさんを更新しました！', img: 'https://picsum.photos/seed/news1/60/60' },
  { id: 2, date: '2025/11/28', title: 'FELIX BAR & KARAOKE', content: 'キャスト：ササさんを更新しました！', img: 'https://picsum.photos/seed/news2/60/60' },
  { id: 3, date: '2025/11/28', title: 'FELIX BAR & KARAOKE', content: 'キャスト：チヒロさんを更新しました！', img: 'https://picsum.photos/seed/news3/60/60' },
  { id: 4, date: '2025/11/28', title: 'FELIX BAR & KARAOKE', content: 'キャスト：ミサキさんを更新しました！', img: 'https://picsum.photos/seed/news4/60/60' },
];

const NewsSection: React.FC = () => {
  return (
    <section className="bg-white pb-12">
       <div className="max-w-6xl mx-auto px-4">
          <div className="bg-[#222] text-white py-2 px-4 text-sm font-bold mb-0">
             新着情報
          </div>
          
          <div className="border border-gray-200 border-t-0">
            {newsData.map((item) => (
              <div key={item.id} className="flex items-center p-4 border-b border-gray-100 hover:bg-gray-50 transition cursor-pointer">
                 <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 mr-4 border border-gray-200">
                    <img src={item.img} alt="icon" className="w-full h-full object-cover" />
                 </div>
                 <div>
                    <div className="text-[10px] text-vk-pink font-medium mb-0.5">{item.date}</div>
                    <div className="text-xs font-bold text-gray-900 mb-0.5">{item.title}</div>
                    <div className="text-xs text-gray-700">{item.content}</div>
                 </div>
              </div>
            ))}
          </div>
       </div>
    </section>
  );
};

export default NewsSection;