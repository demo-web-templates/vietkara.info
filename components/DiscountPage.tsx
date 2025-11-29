import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { StackedTabs } from './StackedTabs';
import { TabOption } from '../types';

interface DiscountPageProps {
  onNavigateHome: () => void;
  onItemClick?: () => void;
}

const tabs: TabOption[] = [
  { id: 'all', label: 'すべて' },
  { id: 'hanoi', label: 'ハノイ' },
  { id: 'hcm', label: 'ホーチミン' },
];

// Mock data for discount items based on the image
const discountItems = [
  {
    id: 1,
    shopName: "SARAH GIRL'S BAR",
    location: "ハノイ | ファンケビン | ガールズバー",
    period: "11月9日～12月31日",
    badgeText: "★ HAPPY HOUR ★",
    imageUrl: "https://picsum.photos/seed/disc1/800/400",
  },
  {
    id: 2,
    shopName: "Yu Lounge Premium",
    location: "ホーチミン | レタントン | ラウンジ",
    period: "11月1日～12月31日",
    badgeText: "ベトカラ限定！お得な初回プロモーション🎵",
    imageUrl: "https://picsum.photos/seed/disc2/800/400",
  },
  {
    id: 3,
    shopName: "Yu Bar",
    location: "ホーチミン | レタントン | ガールズバー",
    period: "11月1日～12月31日",
    badgeText: "ベトカラ限定！お得なプロモーション開催🎵",
    imageUrl: "https://picsum.photos/seed/disc3/800/400",
  },
  {
    id: 4,
    shopName: "Acero",
    location: "ハノイ | リンラン | カラオケ",
    period: "11月1日～11月30日",
    badgeText: "【早割】チャージ料金50%OFF",
    imageUrl: "https://picsum.photos/seed/disc4/800/400",
  },
  {
    id: 5,
    shopName: "Ace Heart Girls Bar",
    location: "ハノイ | リンラン | ガールズバー",
    period: "11月1日～11月30日",
    badgeText: "○○するとお会計10%OFF✨",
    imageUrl: "https://picsum.photos/seed/disc5/800/400",
  },
  {
    id: 6,
    shopName: "CLUB ZIZI JAPANESE BAR & LOUNGE",
    location: "ハノイ | ファンケビン | カラオケ",
    period: "11月1日～11月30日",
    badgeText: "💎コスパ最強 お会計15%OFF💎",
    imageUrl: "https://picsum.photos/seed/disc6/800/400",
  },
  {
    id: 7,
    shopName: "ラウンジあい",
    location: "ホーチミン | レタントン | ラウンジ",
    period: "11月1日～11月30日",
    badgeText: "【一見さん大歓迎】グラス1杯を無料提供",
    imageUrl: "https://picsum.photos/seed/disc7/800/400",
  },
  {
    id: 8,
    shopName: "Twinkle",
    location: "ハノイ | リンラン | カラオケ",
    period: "11月1日～11月30日",
    badgeText: "♥ 200,000VNDクーポン配布中 ♥",
    imageUrl: "https://picsum.photos/seed/disc8/800/400",
  },
  {
    id: 9,
    shopName: "Ti Amo",
    location: "ハノイ | リンラン | ガールズバー",
    period: "11月1日～11月30日",
    badgeText: "🍺ウェルカムドリンクをプレゼント🍺",
    imageUrl: "https://picsum.photos/seed/disc9/800/400",
  },
  {
    id: 10,
    shopName: "バーレモン",
    location: "ハノイ | リンラン | ガールズバー",
    period: "11月1日～11月30日",
    badgeText: "🍺🍺🍺激安レモン割🍺🍺🍺",
    imageUrl: "https://picsum.photos/seed/disc10/800/400",
  },
  {
    id: 11,
    shopName: "BEER PONG BAR",
    location: "ハノイ | リンラン | ガールズバー",
    period: "11月1日～11月30日",
    badgeText: "☆初回キャンペーン実施☆",
    imageUrl: "https://picsum.photos/seed/disc11/800/400",
  },
  {
    id: 12,
    shopName: "PRINCESS",
    location: "ハノイ | リンラン | カラオケ",
    period: "11月1日～11月30日",
    badgeText: "★気軽に夜遊び★ １時間プラン実施中♪",
    imageUrl: "https://picsum.photos/seed/disc12/800/400",
  }
];

const DiscountPage: React.FC<DiscountPageProps> = ({ onNavigateHome, onItemClick }) => {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="bg-white min-h-screen pb-12">
      {/* Top Banner */}
      <div className="w-full bg-black">
        <div className="max-w-6xl mx-auto">
             <img 
               src="https://picsum.photos/seed/danang/1200/250" 
               alt="Gaming Resorts Danang" 
               className="w-full h-auto object-cover max-h-[250px]"
             />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        
        {/* List Header */}
        <div className="flex items-end mb-0 relative">
           <div className="bg-black text-white py-2 px-6 text-sm font-bold z-20 relative shadow-md h-[36px] flex items-center min-w-[120px] justify-center">
             割引一覧
           </div>
           <StackedTabs 
             tabs={tabs} 
             activeTab={activeTab} 
             onTabChange={setActiveTab} 
           />
           <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-black z-0"></div>
        </div>

        {/* Count Bar */}
        <div className="bg-vk-pink text-white font-bold text-sm py-1.5 px-4 mb-8 shadow-sm">
            該当件数 : 29
        </div>

        {/* Discount Items List */}
        <div className="space-y-6 mb-12">
            {discountItems.map((item) => (
                <div 
                  key={item.id} 
                  onClick={onItemClick}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 border border-gray-100 cursor-pointer group"
                >
                    <div className="relative">
                        {/* Image */}
                        <div className="aspect-[16/7] md:aspect-[16/6] w-full bg-gray-200">
                            <img 
                                src={item.imageUrl} 
                                alt={item.shopName} 
                                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                            />
                        </div>

                        {/* Period Tag (Top Left) */}
                        <div className="absolute top-0 left-0 bg-[#b93b3b] text-white text-[10px] md:text-xs font-bold py-1 px-3 rounded-br-lg shadow-sm">
                            【期間】 {item.period}
                        </div>

                        {/* Badge Banner (Bottom Overlay) */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-[#e06868] to-[#ea8686] py-1 text-center">
                            <span className="text-white font-bold text-xs md:text-sm drop-shadow-sm tracking-wide">
                                {item.badgeText}
                            </span>
                        </div>
                    </div>

                    {/* Footer Info */}
                    <div className="p-3">
                        <h3 className="text-sm md:text-base font-bold text-gray-900 mb-1">{item.shopName}</h3>
                        <p className="text-xs text-vk-pink font-medium">{item.location}</p>
                    </div>
                </div>
            ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mb-12">
             <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 text-gray-400 bg-gray-100 hover:bg-gray-200">
                 <ChevronLeft size={16} />
             </button>
             <button className="w-8 h-8 flex items-center justify-center rounded bg-vk-pink text-white font-bold shadow-md">1</button>
             <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 text-gray-600 bg-white hover:bg-gray-50 font-bold">2</button>
             <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 text-gray-600 bg-white hover:bg-gray-50 font-bold">3</button>
             <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 text-gray-400 bg-gray-100 hover:bg-gray-200">
                 <ChevronRight size={16} />
             </button>
        </div>

        {/* Back to Home Button */}
        <div className="flex justify-center">
            <button 
                onClick={onNavigateHome}
                className="bg-vk-pink text-white font-bold py-2 px-12 rounded-full hover:bg-pink-400 transition shadow-sm text-sm"
            >
                ホームに戻る
            </button>
        </div>

      </div>
    </div>
  );
};

export default DiscountPage;