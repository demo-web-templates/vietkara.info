import React, { useState } from 'react';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { StackedTabs } from './StackedTabs';
import { TabOption } from '../types';

interface SearchPageProps {
  onNavigateHome: () => void;
  onShopClick?: (id: number) => void;
}

const tabs: TabOption[] = [
  { id: 'all', label: 'すべて' },
  { id: 'hanoi', label: 'ハノイ' },
  { id: 'hcm', label: 'ホーチミン' },
];

// Mock data for search results
const shopResults = [
  {
    id: 1,
    name: '11:11 - One Four Lounge & Bar -',
    location: 'ハノイ | ダオタン | ラウンジ',
    logo: 'https://picsum.photos/seed/shop101/100/100',
    badges: ['video', 'discount', 'event'],
  },
  {
    id: 2,
    name: '28 Lounge',
    location: 'ホーチミン | レタントン | ラウンジ',
    logo: 'https://picsum.photos/seed/shop102/100/100',
    badges: ['discount', 'event'],
  },
  {
    id: 3,
    name: '6sixバー＆日本料理',
    location: 'ハノイ | ダオタン | ガールズバー',
    logo: 'https://picsum.photos/seed/shop103/100/100',
    badges: ['discount', 'event'],
  },
  {
    id: 4,
    name: 'Ace Heart Girls Bar',
    location: 'ハノイ | リンラン | ガールズバー',
    logo: 'https://picsum.photos/seed/shop104/100/100',
    badges: ['video', 'discount', 'event'],
  },
  {
    id: 5,
    name: 'Acero',
    location: 'ハノイ | リンラン | カラオケ',
    logo: 'https://picsum.photos/seed/shop105/100/100',
    badges: ['video', 'discount', 'event'],
  },
  {
    id: 6,
    name: 'Ai Bar',
    location: 'ハノイ | リンラン | カラオケ',
    logo: 'https://picsum.photos/seed/shop106/100/100',
    badges: ['new', 'discount', 'event'],
  },
  {
    id: 7,
    name: 'Akatsuki',
    location: 'ハノイ | ハイバーチュン | カラオケ',
    logo: 'https://picsum.photos/seed/shop107/100/100',
    badges: ['discount', 'event'],
  },
  {
    id: 8,
    name: 'ALLEY',
    location: 'ホーチミン | レタントン | カラオケ',
    logo: 'https://picsum.photos/seed/shop108/100/100',
    badges: ['discount', 'event'],
  },
  {
    id: 9,
    name: 'AN BAR & LOUNGE',
    location: 'ハノイ | ダオタン | カラオケ',
    logo: 'https://picsum.photos/seed/shop109/100/100',
    badges: ['discount', 'event'],
  },
  {
    id: 10,
    name: 'ANGELA - DANCE & LIVE BAR -',
    location: 'ハノイ | リンラン | ガールズバー',
    logo: 'https://picsum.photos/seed/shop110/100/100',
    badges: ['video', 'discount', 'event'],
  },
  {
    id: 11,
    name: 'Anne bar',
    location: 'ホーチミン | レタントン | ガールズバー',
    logo: 'https://picsum.photos/seed/shop111/100/100',
    badges: ['discount', 'event'],
  },
  {
    id: 12,
    name: 'BADASS BAR - ハノイ リンラン -',
    location: 'ハノイ | リンラン | カラオケ',
    logo: 'https://picsum.photos/seed/shop112/100/100',
    badges: ['video', 'discount', 'event'],
  },
];

const SearchPage: React.FC<SearchPageProps> = ({ onNavigateHome, onShopClick }) => {
  const [activeTab, setActiveTab] = useState('all');

  const renderBadge = (type: string) => {
    switch (type) {
      case 'video':
        return <span className="bg-orange-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-sm mr-1">動画</span>;
      case 'discount':
        return <span className="bg-blue-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-sm mr-1">割引</span>;
      case 'event':
        return <span className="bg-gray-300 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-sm mr-1">イベント</span>;
      case 'new':
        return <span className="bg-red-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-sm mr-1">新規</span>;
      default:
        return null;
    }
  };

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
        
        {/* Search Header */}
        <div className="bg-[#222] text-white py-2 px-4 font-bold text-sm mb-4">
            お店をさがす
        </div>

        {/* Search Input */}
        <div className="mb-6">
            <label className="text-xs text-gray-500 mb-1 block">店舗を検索</label>
            <div className="flex gap-2">
                <div className="relative flex-1">
                    <input 
                        type="text" 
                        placeholder="例) かな カナ ABC" 
                        className="w-full border border-pink-300 rounded-full py-2 px-4 focus:outline-none focus:border-pink-500 text-sm"
                    />
                </div>
                <button className="bg-vk-pink text-white w-16 rounded-full flex items-center justify-center hover:bg-pink-400 transition">
                    <Search size={18} />
                </button>
            </div>
        </div>

        {/* Filter Checkboxes */}
        <div className="border-2 border-vk-pink rounded-xl p-6 mb-10">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-2">
                <label className="flex items-center text-xs md:text-sm text-gray-700 cursor-pointer hover:opacity-70">
                    <input type="checkbox" className="w-4 h-4 mr-2 border-gray-300 rounded text-vk-pink focus:ring-vk-pink" />
                    カラオケ
                </label>
                <label className="flex items-center text-xs md:text-sm text-gray-700 cursor-pointer hover:opacity-70">
                    <input type="checkbox" className="w-4 h-4 mr-2 border-gray-300 rounded text-vk-pink focus:ring-vk-pink" />
                    ガールズバー
                </label>
                <label className="flex items-center text-xs md:text-sm text-gray-700 cursor-pointer hover:opacity-70">
                    <input type="checkbox" className="w-4 h-4 mr-2 border-gray-300 rounded text-vk-pink focus:ring-vk-pink" />
                    ラウンジ
                </label>
                <label className="flex items-center text-xs md:text-sm text-gray-700 cursor-pointer hover:opacity-70">
                    <input type="checkbox" className="w-4 h-4 mr-2 border-gray-300 rounded text-vk-pink focus:ring-vk-pink" />
                    キャバクラ
                </label>
                <label className="flex items-center text-xs md:text-sm text-gray-700 cursor-pointer hover:opacity-70">
                    <input type="checkbox" className="w-4 h-4 mr-2 border-gray-300 rounded text-vk-pink focus:ring-vk-pink" />
                    スナック
                </label>
                <label className="flex items-center text-xs md:text-sm text-gray-700 cursor-pointer hover:opacity-70">
                    <input type="checkbox" className="w-4 h-4 mr-2 border-gray-300 rounded text-vk-pink focus:ring-vk-pink" />
                    店舗動画
                </label>
                <label className="flex items-center text-xs md:text-sm text-gray-700 cursor-pointer hover:opacity-70">
                    <input type="checkbox" className="w-4 h-4 mr-2 border-gray-300 rounded text-vk-pink focus:ring-vk-pink" />
                    新規掲載店
                </label>
                <label className="flex items-center text-xs md:text-sm text-gray-700 cursor-pointer hover:opacity-70">
                    <input type="checkbox" className="w-4 h-4 mr-2 border-gray-300 rounded text-vk-pink focus:ring-vk-pink" />
                    割引情報
                </label>
                <label className="flex items-center text-xs md:text-sm text-gray-700 cursor-pointer hover:opacity-70">
                    <input type="checkbox" className="w-4 h-4 mr-2 border-gray-300 rounded text-vk-pink focus:ring-vk-pink" />
                    イベント情報
                </label>
            </div>
        </div>

        {/* Results Section Header */}
        <div className="flex items-end mb-0 relative">
           <div className="bg-black text-white py-2 px-6 text-sm font-bold z-20 relative shadow-md h-[36px] flex items-center">
             店舗一覧
           </div>
           <StackedTabs 
             tabs={tabs} 
             activeTab={activeTab} 
             onTabChange={setActiveTab} 
           />
           <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-black z-0"></div>
        </div>

        {/* Count Bar */}
        <div className="bg-vk-pink text-white font-bold text-sm py-1 px-4 mb-0">
            該当件数 : 128
        </div>

        {/* Shop List */}
        <div className="flex flex-col divide-y divide-gray-100 border-b border-gray-100">
            {shopResults.map((shop) => (
                <div 
                  key={shop.id} 
                  onClick={() => onShopClick?.(shop.id)}
                  className="flex py-4 px-2 hover:bg-gray-50 transition cursor-pointer"
                >
                    {/* Logo */}
                    <div className="w-[80px] h-[80px] rounded-full overflow-hidden border border-gray-200 flex-shrink-0 mr-4 bg-black">
                        <img src={shop.logo} alt={shop.name} className="w-full h-full object-cover" />
                    </div>
                    
                    {/* Info */}
                    <div className="flex-1">
                        <div className="flex flex-wrap items-center mb-1">
                            {shop.badges.map((badge, idx) => (
                                <React.Fragment key={idx}>{renderBadge(badge)}</React.Fragment>
                            ))}
                        </div>
                        <h3 className="text-base font-bold text-gray-900 mb-1">{shop.name}</h3>
                        <p className="text-sm text-vk-pink font-medium">{shop.location}</p>
                    </div>
                </div>
            ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-12 mb-8">
             <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 text-gray-400 hover:bg-gray-100 disabled:opacity-50">
                 <ChevronLeft size={16} />
             </button>
             <button className="w-8 h-8 flex items-center justify-center rounded bg-vk-pink text-white font-bold">1</button>
             <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 text-vk-pink hover:bg-gray-50 font-medium">2</button>
             <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 text-vk-pink hover:bg-gray-50 font-medium">3</button>
             <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 text-vk-pink hover:bg-gray-50 font-medium">4</button>
             <span className="text-gray-400 px-1">...</span>
             <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 text-vk-pink hover:bg-gray-50 font-medium">11</button>
             <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 text-vk-pink hover:bg-gray-50 font-medium">
                 <ChevronRight size={16} />
             </button>
        </div>

        {/* Back to Home Button */}
        <div className="flex justify-center mb-12">
            <button 
                onClick={onNavigateHome}
                className="bg-vk-pink text-white font-bold py-3 px-12 rounded-full hover:bg-pink-400 transition shadow-sm text-sm"
            >
                ホームに戻る
            </button>
        </div>

      </div>
    </div>
  );
};

export default SearchPage;
