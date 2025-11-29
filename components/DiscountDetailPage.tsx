import React from 'react';

interface DiscountDetailPageProps {
  onNavigateSearch: () => void;
  onNavigateShop: () => void;
}

const DiscountDetailPage: React.FC<DiscountDetailPageProps> = ({ onNavigateSearch, onNavigateShop }) => {
  // Mock Data for SARAH GIRL'S BAR
  const shopData = {
    name: "SARAH GIRL'S BAR",
    phone: "034-204-4100",
    hours: "19:00～02:00",
    holidays: "なし",
    ratio: "ベトナム人 10:0 多国籍",
    address: "90 P. Phan Kế Bính, Cống Vị, Ba Đình, Hà Nội 11100 ベトナム",
    logo: "https://picsum.photos/seed/sarahlogo/200/100", 
  };

  const castList = [
    { name: 'カオリ', img: 'https://picsum.photos/seed/cast_kaori/300/400' },
    { name: 'エミ', img: 'https://picsum.photos/seed/cast_emi/300/400' },
    { name: 'ネコ', img: 'https://picsum.photos/seed/cast_neko2/300/400' },
    { name: 'ウミ', img: 'https://picsum.photos/seed/cast_umi/300/400' },
    { name: 'セイコ', img: 'https://picsum.photos/seed/cast_seiko/300/400' },
    { name: 'ユリ', img: 'https://picsum.photos/seed/cast_yuri/300/400' },
    { name: 'アズミ', img: 'https://picsum.photos/seed/cast_azumi/300/400' },
    { name: 'ガイ', isVk: true },
  ];

  return (
    <div className="bg-white min-h-screen pb-12 font-sans text-gray-800">
       {/* Breadcrumb Spacer */}
       <div className="h-4"></div>

       <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row gap-8 items-start">
          
          {/* LEFT MAIN COLUMN */}
          <div className="flex-1 w-full">
             
             {/* Hero Image */}
             <div className="w-full aspect-[16/9] md:aspect-[2/1] bg-gray-200 mb-0 overflow-hidden rounded-sm relative">
                <img 
                  src="https://picsum.photos/seed/sarahhero/1000/600" 
                  alt="SARAH Hero" 
                  className="w-full h-full object-cover"
                />
                {/* Overlay Name Bar */}
                <div className="absolute bottom-0 left-0 right-0 bg-[#222] text-white font-bold text-sm py-2 px-4">
                  {shopData.name} : キャスト一覧
                </div>
             </div>

             {/* Cast List Section */}
             <div className="mb-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
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

             {/* System Section */}
             <div className="mb-8">
                <div className="bg-[#222] text-white font-bold text-sm py-2 px-4 mb-0">
                   システム
                </div>
                
                {/* Counter Charge */}
                <div className="bg-vk-pink text-white font-bold text-xs py-1.5 px-4 mt-0.5">
                   カウンターチャージ
                </div>
                <div className="p-4 bg-white border-b border-gray-100 text-sm font-bold text-gray-800 space-y-1">
                   <div>60分 / 150,000VND</div>
                   <div>※ +500,000VNDで「飲み放題」が付きます</div>
                </div>

                {/* Room Charge */}
                <div className="bg-vk-pink text-white font-bold text-xs py-1.5 px-4 mt-0.5">
                   ルームチャージ
                </div>
                <div className="p-4 bg-white border-b border-gray-100 text-sm font-bold text-gray-800 space-y-1">
                   <div>60分 / 300,000VND</div>
                   <div>※ +600,000VNDで「飲み放題」が付きます</div>
                </div>

                {/* Soft Drink */}
                <div className="bg-vk-pink text-white font-bold text-xs py-1.5 px-4 mt-0.5">
                   ソフトドリンク
                </div>
                <div className="p-4 bg-white border-b border-gray-100 text-sm font-bold text-gray-800">
                   180,000VND
                </div>

                {/* Cast Drink */}
                <div className="bg-vk-pink text-white font-bold text-xs py-1.5 px-4 mt-0.5">
                   キャストドリンク
                </div>
                <div className="p-4 bg-white border-b border-gray-100 text-sm font-bold text-gray-800">
                   230,000VND ～
                </div>

                 {/* Glass Item */}
                 <div className="bg-vk-pink text-white font-bold text-xs py-1.5 px-4 mt-0.5">
                   グラス単品
                </div>
                <div className="p-4 bg-white border-b border-gray-100 text-sm font-bold text-gray-800">
                   230,000VND ～
                </div>

                {/* Bottle Item */}
                <div className="bg-vk-pink text-white font-bold text-xs py-1.5 px-4 mt-0.5">
                   ボトル単品
                </div>
                <div className="p-4 bg-white border-b border-gray-100 text-sm font-bold text-gray-800">
                   1,875,000VND ～
                </div>

                {/* Nomination Fee */}
                <div className="bg-vk-pink text-white font-bold text-xs py-1.5 px-4 mt-0.5">
                   指名料金
                </div>
                <div className="p-4 bg-white border-b border-gray-100 text-sm font-bold text-gray-800">
                   400,000 ～ 500,000VND
                </div>

                 {/* Accompaniment Fee */}
                 <div className="bg-vk-pink text-white font-bold text-xs py-1.5 px-4 mt-0.5">
                   同伴料金
                </div>
                <div className="p-4 bg-white border-b border-gray-100 text-sm font-bold text-gray-800 space-y-1">
                   <div>21:00まで / 300,000VND</div>
                   <div>22:00まで / 500,000VND</div>
                </div>

                 {/* Late Night Charge */}
                 <div className="bg-vk-pink text-white font-bold text-xs py-1.5 px-4 mt-0.5">
                   深夜チャージ
                </div>
                <div className="p-4 bg-white border-b border-gray-100 text-sm font-bold text-gray-800">
                   200,000VND ※ 25:00以降発生
                </div>

                {/* Darts */}
                <div className="bg-vk-pink text-white font-bold text-xs py-1.5 px-4 mt-0.5">
                   ダーツ
                </div>
                <div className="p-4 bg-white border-b border-gray-100 text-sm font-bold text-gray-800">
                   1コイン / 20,000VND
                </div>

                 {/* Credit Card Fee */}
                 <div className="bg-vk-pink text-white font-bold text-xs py-1.5 px-4 mt-0.5">
                   クレジットカード手数料
                </div>
                <div className="p-4 bg-white border-b border-gray-100 text-sm font-bold text-gray-800">
                   5%
                </div>

                 {/* Tax */}
                 <div className="bg-vk-pink text-white font-bold text-xs py-1.5 px-4 mt-0.5">
                   税金
                </div>
                <div className="p-4 bg-white border-b border-gray-100 text-sm font-bold text-gray-800">
                   10%
                </div>
             </div>

             {/* Discount Info Section */}
             <div className="mb-12">
                <div className="bg-[#222] text-white font-bold text-sm py-2 px-4 mb-0">
                   割引情報
                </div>
                <div className="bg-vk-pink text-white font-bold text-xs py-1.5 px-4 mt-0.5">
                   ☆ HAPPY HOUR ☆
                </div>
                <div className="border border-gray-200 p-0">
                   <div className="w-full aspect-video bg-gray-200 relative">
                      <img src="https://picsum.photos/seed/happyhour/800/400" alt="Discount" className="w-full h-full object-cover" />
                      {/* Text Overlay for Happy Hour */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-white drop-shadow-md">
                          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-2">ハッピーアワー！</h2>
                          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 tracking-tighter">HAPPY<br/>HOUR!</h1>
                          <div className="text-xl md:text-2xl font-bold mb-4">20:00 to 21:00</div>
                          <div className="bg-[#e84c4c] text-white px-6 py-1 rounded-full text-sm font-bold">
                              ワンドリンクフリー
                          </div>
                      </div>
                   </div>
                   
                   <div className="p-6">
                      <div className="flex justify-center mb-6">
                         <div className="border border-vk-pink text-vk-pink px-6 py-2 text-lg font-medium inline-block bg-white relative">
                            期間 : 11月9日～12月31日
                         </div>
                      </div>
                      <div className="text-sm text-gray-700 leading-relaxed space-y-2">
                         <p>【 20:00 ～ 21:00 】</p>
                         <p>上記時間限定でグラスドリンク1杯を無料でご提供します！</p>
                         <p>ハノイの夜遊びでカラオケ・ガールズバーをお探しの方、この機会にぜひ「SARAH」をご利用ください♪</p>
                      </div>
                   </div>
                </div>
             </div>

             {/* Shop Photos */}
             <div className="mb-12">
                <div className="bg-[#222] text-white font-bold text-sm py-2 px-4 mb-4">
                   店内写真
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                   {[1,2,3,4].map((i) => (
                      <div key={i} className="aspect-[4/3] bg-gray-200 rounded-sm overflow-hidden">
                         <img src={`https://picsum.photos/seed/sarah_int_${i}/400/300`} alt={`Interior ${i}`} className="w-full h-full object-cover hover:scale-105 transition duration-500" />
                      </div>
                   ))}
                </div>
             </div>

             {/* Back Button */}
             <div className="flex justify-center mb-8">
                 <button 
                   onClick={onNavigateSearch}
                   className="bg-vk-pink text-white font-bold py-3 px-16 rounded-full hover:bg-pink-400 transition shadow-md text-sm"
                 >
                   お店をさがすに戻る
                 </button>
             </div>

          </div>

          {/* RIGHT SIDEBAR - SHOP INFO */}
          <div className="w-full lg:w-[320px] flex-shrink-0">
             <div className="border border-gray-200 bg-white p-4 sticky top-20 shadow-sm">
                <div className="text-center font-bold text-gray-600 mb-4 border-b border-gray-100 pb-2">店舗情報</div>
                
                {/* Logo */}
                <div className="bg-black aspect-video w-full mb-6 flex items-center justify-center">
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

                </div>
             </div>
          </div>

       </div>
    </div>
  );
};

export default DiscountDetailPage;