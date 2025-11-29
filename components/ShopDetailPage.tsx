import React from 'react';
import { Play } from 'lucide-react';

interface ShopDetailPageProps {
  onNavigateSearch: () => void;
}

const ShopDetailPage: React.FC<ShopDetailPageProps> = ({ onNavigateSearch }) => {
  // Mock data for the specific shop view requested
  const shopData = {
    name: "Ace Heart Girls Bar",
    phone: "056-816-5222",
    hours: "19:00～02:00",
    holidays: "なし",
    ratio: "ベトナム人 10:0 多国籍",
    address: "2F /47 P. Linh Lang, Cống Vị, Ba Đình, Hà Nội",
    logo: "https://picsum.photos/seed/shop104/200/200", // Using Ace Heart seed
  };

  const castList = [
    { name: 'ミンミン', img: 'https://picsum.photos/seed/cast_m/300/400' },
    { name: 'ムンムン', img: 'https://picsum.photos/seed/cast_mu/300/400' },
    { name: 'ラン', img: 'https://picsum.photos/seed/cast_r/300/400' },
    { name: 'ネコ', img: 'https://picsum.photos/seed/cast_n/300/400' },
  ];

  const videos = [
    {
      id: 1,
      title: '知性溢れる清楚系ベトナム美女の日本語力53万！？',
      date: '2025年11月07日 21:13 更新',
      thumb: 'https://picsum.photos/seed/vid_ace1/300/200'
    },
    {
      id: 2,
      title: 'リンランで一番の優良ガールズバー見つけました。その後はローカルKTV...',
      date: '2025年11月05日 18:33 更新',
      thumb: 'https://picsum.photos/seed/vid_ace2/300/200'
    }
  ];

  const shopPhotos = [
    'https://picsum.photos/seed/interior_1/400/300',
    'https://picsum.photos/seed/interior_2/400/300',
    'https://picsum.photos/seed/interior_3/400/300',
    'https://picsum.photos/seed/interior_4/400/300',
  ];

  return (
    <div className="bg-white min-h-screen pb-12">
       {/* Breadcrumb offset handled by Header usually, but adding spacing */}
       <div className="h-4"></div>

       <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row gap-8 items-start">
          
          {/* LEFT MAIN COLUMN */}
          <div className="flex-1 w-full">
             
             {/* Hero Image */}
             <div className="w-full aspect-[16/9] md:aspect-[2/1] bg-gray-200 mb-8 overflow-hidden rounded-sm">
                <img 
                  src="https://picsum.photos/seed/acehero/1000/600" 
                  alt="Shop Hero" 
                  className="w-full h-full object-cover"
                />
             </div>

             {/* Cast List Section */}
             <div className="mb-8">
                <div className="bg-[#222] text-white font-bold text-sm py-2 px-4 mb-4">
                  {shopData.name} : キャスト一覧
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                   {castList.map((cast, idx) => (
                      <div key={idx} className="relative aspect-[3/4] bg-gray-100 group cursor-pointer">
                         <img src={cast.img} alt={cast.name} className="w-full h-full object-cover" />
                         <div className="absolute bottom-0 left-0 right-0 bg-vk-pink text-white text-center text-xs font-bold py-1">
                            {cast.name}
                         </div>
                      </div>
                   ))}
                   {/* Placeholder / Ad card */}
                   <div className="relative aspect-[3/4] bg-gray-200 flex flex-col items-center justify-center text-white p-2">
                      <div className="text-4xl font-bold text-white/50 mb-2">VK</div>
                      <div className="text-[10px] text-white/50">VIETNAM x KARAOKE</div>
                      <div className="absolute bottom-0 left-0 right-0 bg-vk-pink text-white text-center text-xs font-bold py-1">
                         ナオミ
                      </div>
                   </div>
                </div>
             </div>

             {/* SNS Video Section */}
             <div className="mb-12">
                <div className="flex items-center gap-2 mb-4 border-b border-gray-200 pb-2">
                   <span className="text-vk-pink">▶</span>
                   <h3 className="font-bold text-sm text-gray-800">SNS動画コンテンツ</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   {videos.map(video => (
                      <div key={video.id} className="bg-white border border-gray-200 rounded p-3 flex gap-3 hover:shadow-md transition cursor-pointer">
                         <div className="w-10 h-10 rounded-full bg-black overflow-hidden flex-shrink-0">
                            <img src={shopData.logo} alt="logo" className="w-full h-full object-cover" />
                         </div>
                         <div className="flex-1 min-w-0">
                             <div className="flex items-center gap-2 mb-2">
                                <span className="text-xs font-bold truncate">Ace Heart Girls Bar</span>
                                <span className="text-[10px] text-vk-pink">ハノイ | リンラン | ガールズバー</span>
                             </div>
                             <div className="relative aspect-video bg-black rounded overflow-hidden mb-2 group">
                                <img src={video.thumb} className="w-full h-full object-cover opacity-80" alt="thumb" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                   <div className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center pl-0.5">
                                      <Play size={14} fill="black" className="text-black" />
                                   </div>
                                </div>
                                <div className="absolute bottom-2 left-2 bg-red-600 text-white text-[10px] px-1 font-bold">
                                   知性溢れる清楚系...
                                </div>
                             </div>
                             <h4 className="font-bold text-xs mb-1 line-clamp-2">{video.title}</h4>
                             <p className="text-[10px] text-gray-500">{video.date}</p>
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
                   <div>60分 / 450,000VND ※ 飲み放題付き</div>
                </div>

                {/* Soft Drink */}
                <div className="bg-vk-pink text-white font-bold text-xs py-1.5 px-4 mt-0.5">
                   ソフトドリンク
                </div>
                <div className="p-4 bg-white border-b border-gray-100 text-sm font-bold text-gray-800">
                   100,000VND
                </div>

                {/* Cast Drink */}
                <div className="bg-vk-pink text-white font-bold text-xs py-1.5 px-4 mt-0.5">
                   キャストドリンク
                </div>
                <div className="p-4 bg-white border-b border-gray-100 text-sm font-bold text-gray-800">
                   100,000 ~ 300,000VND
                </div>

                 {/* Glass Item */}
                 <div className="bg-vk-pink text-white font-bold text-xs py-1.5 px-4 mt-0.5">
                   グラス単品
                </div>
                <div className="p-4 bg-white border-b border-gray-100 text-sm font-bold text-gray-800">
                   150,000VND ～
                </div>

                {/* Bottle Item */}
                <div className="bg-vk-pink text-white font-bold text-xs py-1.5 px-4 mt-0.5">
                   ボトル単品
                </div>
                <div className="p-4 bg-white border-b border-gray-100 text-sm font-bold text-gray-800">
                   1,300,000VND ～
                </div>

                {/* Nomination Fee */}
                <div className="bg-vk-pink text-white font-bold text-xs py-1.5 px-4 mt-0.5">
                   指名料金
                </div>
                <div className="p-4 bg-white border-b border-gray-100 text-sm font-bold text-gray-800">
                   200,000VND
                </div>

                 {/* Accompaniment Fee */}
                 <div className="bg-vk-pink text-white font-bold text-xs py-1.5 px-4 mt-0.5">
                   同伴料金
                </div>
                <div className="p-4 bg-white border-b border-gray-100 text-sm font-bold text-gray-800">
                   400,000VND ※ 21時まで
                </div>

                 {/* Late Night Charge */}
                 <div className="bg-vk-pink text-white font-bold text-xs py-1.5 px-4 mt-0.5">
                   深夜チャージ
                </div>
                <div className="p-4 bg-white border-b border-gray-100 text-sm font-bold text-gray-800">
                   10% ※ 24時以降発生
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
                   ○○するとお会計10%OFF✨
                </div>
                <div className="border border-gray-200 p-0">
                   <div className="w-full aspect-video bg-gray-200 relative">
                      <img src="https://picsum.photos/seed/disc5/800/400" alt="Discount" className="w-full h-full object-cover" />
                      {/* Logo Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          <img src={shopData.logo} alt="logo" className="w-32 h-32 opacity-90 object-contain drop-shadow-lg" />
                      </div>
                   </div>
                   
                   <div className="p-6">
                      <div className="flex justify-center mb-6">
                         <div className="border border-vk-pink text-vk-pink px-6 py-2 text-lg font-medium inline-block bg-white relative">
                            期間 : 11月1日～11月30日
                         </div>
                      </div>
                      <div className="text-sm text-gray-700 leading-relaxed space-y-2">
                         <p>上記期間にご来店のお客様に朗報です！</p>
                         <p>お会計時に支払い方法を「現金」にしたお客様限定で、お会計が10%OFFとなります✨ ハノイの夜遊びでカラオケ・ガールズバーをお探しの方、この機会にぜひ「Ace heart girl bar」をご利用ください♪</p>
                         <br />
                         <p className="text-xs text-gray-500">※ 当店は建物の2階にございます。ご来店する際に、迷った場合はお気軽にご連絡ください。</p>
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
                   {shopPhotos.map((photo, i) => (
                      <div key={i} className="aspect-[4/3] bg-gray-200 rounded-sm overflow-hidden">
                         <img src={photo} alt={`Interior ${i}`} className="w-full h-full object-cover hover:scale-105 transition duration-500" />
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
                <div className="bg-black aspect-video w-full mb-6 flex items-center justify-center p-4">
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

export default ShopDetailPage;
