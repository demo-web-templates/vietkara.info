import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { TabOption, VideoItem } from '../types';
import { StackedTabs } from './StackedTabs';

const tabs: TabOption[] = [
  { id: 'all', label: 'すべて' },
  { id: 'hanoi', label: 'ハノイ' },
  { id: 'hcm', label: 'ホーチミン' },
];

const videos: VideoItem[] = [
  { id: 1, shopName: 'Yu Lounge Premium', location: 'ホーチミン | レタントン | ラウンジ', title: '秘密の隠れ家のような、落ち着いたラウンジを発見しました。', date: '2025年11月28日 20:28 更新', thumbnailUrl: 'https://picsum.photos/seed/vid1/300/200' },
  { id: 2, shopName: 'For You - Japanese Lounge -', location: 'ホーチミン | レタントン | カラオケ', title: 'いざホーチミンへ！アレがあるアオザイ美女の店', date: '2025年11月27日 19:13 更新', thumbnailUrl: 'https://picsum.photos/seed/vid2/300/200' },
  { id: 3, shopName: 'DESTINY', location: 'ハノイ | リンラン | カラオケ', title: '綺麗なお姉さん系ベトナム美女と対戦決定！？', date: '2025年11月24日 22:09 更新', thumbnailUrl: 'https://picsum.photos/seed/vid3/300/200' },
  { id: 4, shopName: 'Acoustic Bar', location: 'ハノイ | キムマー | バー', title: 'ベトナムの歌姫たちが集う、生演奏が楽しめるバー', date: '2025年11月22日 15:00 更新', thumbnailUrl: 'https://picsum.photos/seed/vid4/300/200' },
];

const VideoSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <section className="bg-white pb-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header with Stacked Tabs */}
        <div className="flex items-end mb-6 relative">
           {/* Title Box */}
           <div className="bg-black text-white py-2 px-6 text-sm font-bold z-20 relative shadow-md h-[36px] flex items-center">
             新着SNS動画コンテンツ
           </div>
           
           {/* Tabs Component */}
           <StackedTabs 
             tabs={tabs} 
             activeTab={activeTab} 
             onTabChange={setActiveTab} 
           />
           
           {/* Bottom Line filler */}
           <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-black z-0"></div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {videos.map((video) => (
            <div key={video.id} className="bg-white border border-gray-100 rounded-sm shadow-sm hover:shadow-md transition">
               {/* Header Info */}
               <div className="p-2 flex items-center gap-2 border-b border-gray-100">
                  <div className="w-8 h-8 rounded-full bg-black overflow-hidden flex-shrink-0">
                     <img src={`https://picsum.photos/seed/${video.id}logo/50/50`} alt="logo" className="w-full h-full object-cover" />
                  </div>
                  <div className="overflow-hidden">
                    <h4 className="font-bold text-xs truncate text-gray-800">{video.shopName}</h4>
                    <p className="text-[10px] text-vk-pink truncate">{video.location}</p>
                  </div>
               </div>

               {/* Thumbnail */}
               <div className="relative aspect-video bg-black group cursor-pointer">
                  <img src={video.thumbnailUrl} alt={video.title} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition" />
                  {/* Play Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 bg-white/80 rounded-full flex items-center justify-center pl-1 group-hover:scale-110 transition">
                       <Play fill="black" size={16} className="text-black" />
                    </div>
                  </div>
                  {/* Badges/Overlays mocked from image */}
                  {video.id === 1 && <div className="absolute top-2 left-2 text-red-600"><span className="text-xl">★</span></div>}
                  {video.id === 1 && <div className="absolute top-2 left-8 bg-black/70 text-white text-[10px] px-1">ホーチミン</div>}
                  {/* Text Overlay on video */}
                  {video.id === 1 && <div className="absolute bottom-2 left-2 bg-pink-600/90 text-white text-[10px] px-1 font-bold">美女揃い優良店</div>}
                  {video.id === 1 && <div className="absolute bottom-8 left-2 bg-purple-900/90 text-white text-[10px] px-1 font-bold">秘密の隠れ家ラウンジ</div>}
               </div>

               {/* Content */}
               <div className="p-3">
                  <h3 className="text-xs font-bold text-gray-800 leading-relaxed mb-2 line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-[10px] text-gray-500">{video.date}</p>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;