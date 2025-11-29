import React from 'react';

interface EventDetailPageProps {
  onNavigateEventList: () => void;
  onNavigateShop: () => void;
}

const EventDetailPage: React.FC<EventDetailPageProps> = ({ onNavigateEventList, onNavigateShop }) => {
  // Mock Data for the event
  const event = {
    title: "🎃 3rd Anniversary Event 🎃",
    period: "12月1日～12月31日",
    description: `いつもCLUB ZIZIをご利用いただき、誠にありがとうございます。

🎃✨バースデーイベントご案内 ✨🎃

🌟 バースデー月間限定キャンペーン (12月中)
①. ご予約のお客様：お会計 10%OFF
②. シャンパンを15%OFF
③. 4名様以上のご来店で、ボトルを1本サービス

-----

👿 イベント当日特典 (12月5日と12月6日)
①. キャストによる華やかな和風ウェルカム
②. いつもより少し特別で楽しい夜をご提供
③. 豪華景品が当たるラッキードロー参加無料
④. 来店したお客様に特別なプレゼントをご用意

お客様にとって素敵な夜になりますよう、スタッフ一同心よりお待ちしております。
これからもCLUB ZIZI をどうぞよろしくお願いいたします。`,
    imageUrl: "https://picsum.photos/seed/event1/800/400",
  };

  const shopData = {
    name: "CLUB ZIZI JAPANESE BAR & LOUNGE",
    phone: "090-123-4567",
    hours: "19:00～02:00",
    holidays: "日曜日",
    ratio: "ベトナム人 10:0",
    address: "123 Phan Ke Binh, Ba Dinh, Hanoi",
    logo: "https://picsum.photos/seed/zizilogo/200/200", 
  };

  const castList = [
    { name: 'パニ', img: 'https://picsum.photos/seed/cast_pani/300/400' },
    { name: 'セイナ', img: 'https://picsum.photos/seed/cast_seina/300/400' },
    { name: 'モモ', img: 'https://picsum.photos/seed/cast_momo/300/400' },
    { name: 'サユリ', img: 'https://picsum.photos/seed/cast_sayuri/300/400' },
    { name: 'ミズキ', img: 'https://picsum.photos/seed/cast_mizuki/300/400' },
    { name: 'ナナミ', img: 'https://picsum.photos/seed/cast_nanami/300/400' },
    { name: 'ナナ', img: 'https://picsum.photos/seed/cast_nana/300/400' },
    { name: 'マキ', img: 'https://picsum.photos/seed/cast_maki/300/400' },
    { name: 'アユ', isVk: true },
    { name: 'リサ', isVk: true },
    { name: 'レイ', isVk: true },
    { name: 'ヒマワリ', isVk: true },
    { name: 'ソラ', isVk: true },
    { name: 'ナビ', isVk: true },
    { name: 'ミヨ', isVk: true },
    { name: 'サラ', isVk: true },
    { name: 'ヘリ', isVk: true },
    { name: 'エミ', isVk: true },
    { name: 'ルビー', isVk: true },
    { name: 'リン', isVk: true },
  ];

  return (
    <div className="bg-white min-h-screen pb-12 font-sans text-gray-800">
       {/* Breadcrumb Spacer */}
       <div className="h-4"></div>

       <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row gap-8 items-start">
          
          {/* LEFT MAIN COLUMN */}
          <div className="flex-1 w-full">
             
             {/* Event Header */}
             <div className="bg-[#222] text-white font-bold text-sm py-2 px-4 mb-0">
               イベント情報
             </div>
             <div className="bg-vk-pink text-white font-bold text-xs py-1.5 px-4 mb-0">
                {event.title}
             </div>

             {/* Event Content */}
             <div className="border border-gray-200 border-t-0 p-0 mb-12">
                 {/* Image */}
                 <div className="w-full aspect-[16/9] bg-gray-200 relative">
                    <img 
                        src={event.imageUrl} 
                        alt="Event Banner" 
                        className="w-full h-full object-cover"
                    />
                 </div>

                 {/* Details */}
                 <div className="p-6 md:p-8">
                    {/* Period Banner */}
                    <div className="flex justify-center mb-8">
                        <div className="border border-vk-pink text-vk-pink px-6 py-2 text-lg font-bold bg-white inline-block">
                           期間 : {event.period}
                        </div>
                    </div>

                    {/* Text Description */}
                    <div className="text-sm text-gray-700 leading-loose whitespace-pre-wrap font-medium">
                       {event.description}
                    </div>
                 </div>
             </div>

             {/* Cast List Section */}
             <div className="mb-12">
                <div className="bg-[#222] text-white font-bold text-sm py-2 px-4 mb-4">
                  {shopData.name} : キャスト一覧
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
                   {castList.map((cast, idx) => (
                      <div key={idx} className="relative aspect-[3/4] bg-gray-100 group cursor-pointer overflow-hidden">
                         {cast.isVk ? (
                             <div className="w-full h-full bg-gray-200 flex flex-col items-center justify-center text-white select-none">
                                 <div className="text-5xl font-bold text-white opacity-40 mb-2">VK</div>
                                 <div className="text-[10px] text-white opacity-40 tracking-wider">VIETNAM × KARAOKE</div>
                             </div>
                         ) : (
                             <img src={cast.img} alt={cast.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                         )}
                         
                         <div className="absolute bottom-0 left-0 right-0 bg-vk-pink text-white text-center text-xs font-bold py-1">
                            {cast.name}
                         </div>
                      </div>
                   ))}
                </div>
             </div>

             {/* Photos Section */}
             <div className="mb-12">
                <div className="bg-[#222] text-white font-bold text-sm py-2 px-4 mb-4">
                   店内写真
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                   {[1,2,3,4].map((i) => (
                      <div key={i} className="aspect-[4/3] bg-gray-200 rounded-sm overflow-hidden">
                         <img src={`https://picsum.photos/seed/zizi_interior_${i}/400/300`} alt={`Interior ${i}`} className="w-full h-full object-cover hover:scale-105 transition duration-500" />
                      </div>
                   ))}
                </div>
             </div>

             {/* Action Buttons */}
             <div className="flex justify-center mb-8">
                 <button 
                   onClick={onNavigateEventList}
                   className="bg-vk-pink text-white font-bold py-3 px-16 rounded-full hover:bg-pink-400 transition shadow-md text-sm"
                 >
                   お店をさがすに戻る
                 </button>
             </div>

          </div>

          {/* RIGHT SIDEBAR - SHOP INFO */}
          <div className="w-full lg:w-[300px] flex-shrink-0">
             <div className="border border-gray-200 bg-white p-4 sticky top-20 shadow-sm">
                <div className="text-center font-bold text-gray-600 mb-4 border-b border-gray-100 pb-2">店舗情報</div>
                
                {/* Logo */}
                <div className="bg-black aspect-video w-full mb-4 flex items-center justify-center">
                   <img src={shopData.logo} alt="logo" className="max-h-full max-w-full object-contain" />
                </div>

                <div className="space-y-4">
                   {/* Name */}
                   <div>
                      <div className="text-xs text-vk-pink font-bold mb-1">店名</div>
                      <div className="text-sm font-bold text-gray-900 border-b border-dotted border-gray-300 pb-2">
                         {shopData.name}
                      </div>
                   </div>

                   {/* Phone */}
                   <div>
                      <div className="text-xs text-vk-pink font-bold mb-1">電話番号</div>
                      <div className="text-sm font-bold text-gray-900 border-b border-dotted border-gray-300 pb-2">
                         {shopData.phone}
                      </div>
                   </div>

                   {/* Hours */}
                   <div>
                      <div className="text-xs text-vk-pink font-bold mb-1">営業時間</div>
                      <div className="text-sm font-bold text-gray-900 border-b border-dotted border-gray-300 pb-2">
                         {shopData.hours}
                      </div>
                   </div>

                   {/* Holidays */}
                   <div>
                      <div className="text-xs text-vk-pink font-bold mb-1">店休日</div>
                      <div className="text-sm font-bold text-gray-900 border-b border-dotted border-gray-300 pb-2">
                         {shopData.holidays}
                      </div>
                   </div>

                   {/* Ratio */}
                   <div>
                      <div className="text-xs text-vk-pink font-bold mb-1">在籍国籍比率</div>
                      <div className="text-sm font-bold text-gray-900 border-b border-dotted border-gray-300 pb-2">
                         {shopData.ratio}
                      </div>
                   </div>

                   {/* Address */}
                   <div>
                      <div className="text-xs text-vk-pink font-bold mb-1">住所</div>
                      <div className="text-sm font-bold text-gray-900 border-b border-dotted border-gray-300 pb-2 underline cursor-pointer hover:text-vk-pink">
                         {shopData.address}
                      </div>
                   </div>

                   {/* View Shop Detail Button */}
                   <div className="pt-4">
                      <button 
                        onClick={onNavigateShop}
                        className="w-full bg-black text-white font-bold py-2 rounded text-xs hover:bg-gray-800 transition"
                      >
                        店舗詳細を見る
                      </button>
                   </div>

                </div>
             </div>
          </div>

       </div>
    </div>
  );
};

export default EventDetailPage;