import React, { useState } from 'react';
import { Heart, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { StackedTabs } from './StackedTabs';
import { TabOption } from '../types';

interface GravurePageProps {
  onNavigateHome: () => void;
  onItemClick?: () => void;
}

const tabs: TabOption[] = [
  { id: 'all', label: 'すべて' },
  { id: 'hanoi', label: 'ハノイ' },
  { id: 'hcm', label: 'ホーチミン' },
];

// Mock data for gravure items
const gravureItems = [
  {
    id: 1,
    modelName: 'メグミ',
    shopName: 'Yu Bar',
    location: 'ホーチミン | レタントン | ガールズバー',
    likes: 49,
    comments: 25,
    imageUrl: 'https://picsum.photos/seed/gravure1/800/450',
    logoText: 'MEGUMI',
    subLogoText: 'YU BAR'
  },
  {
    id: 2,
    modelName: 'アンナ',
    shopName: 'THE LOCK クラブ',
    location: 'ハノイ | リンラン | カラオケ',
    likes: 86,
    comments: 46,
    imageUrl: 'https://picsum.photos/seed/gravure2/800/450',
    logoText: 'Anna',
    subLogoText: ''
  },
  {
    id: 3,
    modelName: 'マイ',
    shopName: 'Acero',
    location: 'ハノイ | リンラン | カラオケ',
    likes: 99,
    comments: 66,
    imageUrl: 'https://picsum.photos/seed/gravure3/800/450',
    logoText: 'Mai',
    subLogoText: 'Acero'
  },
  {
    id: 4,
    modelName: 'ミオ',
    shopName: 'VEGA Bar & Lounge',
    location: 'ハノイ | リンラン | カラオケ',
    likes: 107,
    comments: 38,
    imageUrl: 'https://picsum.photos/seed/gravure4/800/450',
    logoText: 'MIO',
    subLogoText: 'VEGA BAR & LOUNGE'
  }
];

const GravurePage: React.FC<GravurePageProps> = ({ onNavigateHome, onItemClick }) => {
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
             グラビア一覧
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
            該当件数 : 4
        </div>

        {/* Gravure Cards List */}
        <div className="space-y-8 mb-12">
            {gravureItems.map((item) => (
                <div key={item.id} onClick={onItemClick} className="relative w-full rounded-2xl overflow-hidden shadow-lg group cursor-pointer bg-gray-100">
                    {/* Main Image */}
                    <div className="aspect-[16/9] md:aspect-[2/1] w-full relative">
                        <img 
                            src={item.imageUrl} 
                            alt={item.modelName} 
                            className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                        />
                        
                        {/* Dark overlay for text contrast if needed */}
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition"></div>

                        {/* Top Left Stats */}
                        <div className="absolute top-4 left-4 flex flex-col gap-2">
                            <div className="bg-white/90 rounded-full px-3 py-1 flex items-center gap-1 shadow-sm">
                                <Heart size={14} className="text-vk-pink fill-vk-pink" />
                                <span className="text-xs font-bold text-gray-700">{item.likes}</span>
                            </div>
                            <div className="bg-white/90 rounded-full px-3 py-1 flex items-center gap-1 shadow-sm">
                                <MessageCircle size={14} className="text-gray-600" />
                                <span className="text-xs font-bold text-gray-700">{item.comments}</span>
                            </div>
                        </div>

                        {/* Center Artistic Text/Logo Simulation */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-90 pointer-events-none">
                            <h2 className="text-4xl md:text-6xl text-white font-serif italic drop-shadow-lg tracking-wider">
                                {item.logoText}
                            </h2>
                            {item.subLogoText && (
                                <p className="text-xl md:text-2xl text-white font-serif tracking-widest mt-2 drop-shadow-md border-t border-white/50 pt-2 px-8">
                                    {item.subLogoText}
                                </p>
                            )}
                        </div>

                        {/* Bottom Info Bar */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-[#ed5d5d] to-[#e8778f] p-3 md:p-4 text-white flex justify-between items-end">
                            <div>
                                <div className="text-[10px] md:text-xs font-bold mb-0.5 opacity-95">{item.location}</div>
                                <div className="text-lg md:text-xl font-bold tracking-wide">{item.shopName}</div>
                            </div>
                            <div className="text-right">
                                <div className="text-[10px] md:text-xs font-serif italic opacity-90 mb-0.5">GRAVURE MODEL</div>
                                <div className="text-lg md:text-2xl font-bold tracking-wider">{item.modelName}</div>
                            </div>
                        </div>
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

export default GravurePage;