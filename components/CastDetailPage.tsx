import React from 'react';
import { Phone, Instagram, Facebook } from 'lucide-react';

interface CastDetailPageProps {
  onNavigateHome: () => void;
  onNavigateShop: () => void;
}

const CastDetailPage: React.FC<CastDetailPageProps> = ({ onNavigateHome, onNavigateShop }) => {
  // Mock Data matching the image
  const cast = {
    name: 'チャン',
    age: 18,
    shopName: 'FELIX BAR & KARAOKE',
    birthday: '?月??日',
    language: '? ? ?',
    alcohol: '普通',
    hobby: '? ? ?',
    keyword: '【キーワード】',
    comment: 'よろしくおねがいします。',
    profileImage: 'https://picsum.photos/seed/chan_profile/300/400',
    galleryImage: 'https://picsum.photos/seed/chan_gallery/600/900',
  };

  const shopData = {
    name: "FELIX BAR & KARAOKE",
    phone: "097-939-4922",
    hours: "19:00～02:00",
    holidays: "なし",
    ratio: "ベトナム人 10:0 多国籍",
    address: "21 Ng. 81 P. Linh Lang, Cống Vị, Ba Đình, Hà Nội",
    logo: "https://picsum.photos/seed/felix_logo/200/100", 
  };

  // Custom Icon Components for specific style matching
  const LineIcon = () => (
    <div className="w-10 h-10 rounded bg-[#06c755] text-white flex items-center justify-center font-bold text-xs opacity-30">LINE</div>
  );
  const ZaloIcon = () => (
    <div className="w-10 h-10 rounded bg-[#0068ff] text-white flex items-center justify-center font-bold text-xs opacity-30">Zalo</div>
  );
  const TiktokIcon = () => (
    <div className="w-10 h-10 rounded bg-black text-white flex items-center justify-center font-bold text-xs opacity-30">Tik</div>
  );

  return (
    <div className="bg-white min-h-screen pb-12 font-sans text-gray-800">
       {/* Breadcrumb Spacer */}
       <div className="h-4"></div>

       <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row gap-8 items-start">
          
          {/* LEFT MAIN COLUMN */}
          <div className="flex-1 w-full">
             
             {/* Profile Header Area */}
             <div className="flex gap-6 mb-6">
                {/* Profile Image */}
                <div className="w-[120px] md:w-[150px] flex-shrink-0">
                   <img 
                     src={cast.profileImage} 
                     alt={cast.name} 
                     className="w-full h-auto object-cover border border-gray-200"
                   />
                </div>

                {/* Profile Details */}
                <div className="flex-1">
                   <div className="bg-vk-pink text-white text-sm font-bold py-1 px-4 mb-3">
                      プロフィール
                   </div>
                   
                   <h1 className="text-2xl font-bold text-vk-pink mb-4">
                      {cast.name} <span className="text-lg font-normal">({cast.age})</span>
                   </h1>

                   <div className="space-y-1 text-sm text-gray-800 font-medium">
                      <div className="flex">
                         <span className="w-24">誕生日 :</span>
                         <span>{cast.birthday}</span>
                      </div>
                      <div className="flex">
                         <span className="w-24">言　語 :</span>
                         <span>{cast.language}</span>
                      </div>
                      <div className="flex">
                         <span className="w-24">お　酒 :</span>
                         <span>{cast.alcohol}</span>
                      </div>
                      <div className="flex">
                         <span className="w-24">趣　味 :</span>
                         <span>{cast.hobby}</span>
                      </div>
                      <div className="mt-2">
                         {cast.keyword}
                      </div>
                   </div>
                </div>
             </div>

             {/* Comment Box */}
             <div className="border border-gray-300 p-2 mb-6">
                <div className="text-sm font-bold text-gray-800">
                   コメント : {cast.comment}
                </div>
             </div>

             {/* Social Icons */}
             <div className="flex justify-around items-center border-b border-gray-200 pb-6 mb-6">
                <Phone size={32} className="text-gray-300" />
                <LineIcon />
                <ZaloIcon />
                <div className="opacity-30"><Instagram size={32} className="text-pink-600" /></div>
                <div className="opacity-30"><Facebook size={32} className="text-blue-600" /></div>
                <TiktokIcon />
             </div>

             {/* Photo Gallery Section */}
             <div className="mb-12">
                <div className="bg-[#222] text-white font-bold text-sm py-2 px-4 mb-0">
                   フォトギャラリー
                </div>
                <div className="bg-gray-200 p-4 flex justify-center">
                   <div className="max-w-[400px] w-full">
                      <img 
                        src={cast.galleryImage} 
                        alt="Gallery" 
                        className="w-full h-auto object-cover shadow-sm"
                      />
                   </div>
                </div>
             </div>

             {/* Back Button */}
             <div className="flex justify-center mb-8">
                 <button 
                   onClick={onNavigateShop}
                   className="bg-vk-pink text-white font-bold py-2 px-8 rounded-full hover:bg-pink-400 transition shadow-md text-sm"
                 >
                   {cast.shopName} に戻る
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

                </div>
             </div>
          </div>

       </div>
    </div>
  );
};

export default CastDetailPage;