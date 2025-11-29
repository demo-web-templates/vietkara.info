import React, { useState } from 'react';
import { Search, ChevronLeft, ChevronRight, ArrowUp } from 'lucide-react';
import { StackedTabs } from './StackedTabs';
import { TabOption } from '../types';

interface CastSearchPageProps {
  onNavigateHome: () => void;
  onCastClick?: () => void;
}

const tabs: TabOption[] = [
  { id: 'all', label: 'すべて' },
  { id: 'hanoi', label: 'ハノイ' },
  { id: 'hcm', label: 'ホーチミン' },
];

// Mock data for cast results
const castResults = [
  { id: 1, name: 'ササ', img: 'https://picsum.photos/seed/cast1/300/450' },
  { id: 2, name: 'チヒロ', img: 'https://picsum.photos/seed/cast2/300/450' },
  { id: 3, name: 'ミサキ', img: 'https://picsum.photos/seed/cast3/300/450' },
  { id: 4, name: 'アリ', img: 'https://picsum.photos/seed/cast4/300/450' },
  { id: 5, name: 'ヴィ', img: 'https://picsum.photos/seed/cast5/300/450' },
  { id: 6, name: 'ミウ', img: 'https://picsum.photos/seed/cast6/300/450' },
  { id: 7, name: 'チャン', img: 'https://picsum.photos/seed/cast7/300/450' },
  { id: 8, name: 'サム', img: 'https://picsum.photos/seed/cast8/300/450' },
  { id: 9, name: 'ミア', img: 'https://picsum.photos/seed/cast9/300/450' },
  { id: 10, name: 'リンリン', img: 'https://picsum.photos/seed/cast10/300/450' },
  { id: 11, name: 'マヤ', img: 'https://picsum.photos/seed/cast11/300/450' },
  { id: 12, name: 'サトミ', img: 'https://picsum.photos/seed/cast12/300/450' },
  { id: 13, name: 'ネコ', img: 'https://picsum.photos/seed/cast13/300/450' },
  { id: 14, name: 'ハン', img: 'https://picsum.photos/seed/cast14/300/450' },
  { id: 15, name: 'アン', img: 'https://picsum.photos/seed/cast15/300/450' },
  { id: 16, name: 'ジュリア', img: 'https://picsum.photos/seed/cast16/300/450' },
];

const CastSearchPage: React.FC<CastSearchPageProps> = ({ onNavigateHome, onCastClick }) => {
  const [activeTab, setActiveTab] = useState('all');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-white min-h-screen pb-12 relative">
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
        
        {/* Page Title */}
        <div className="bg-[#222] text-white py-2 px-4 font-bold text-sm mb-8">
            女の子をさがす
        </div>

        {/* Search Input Area */}
        <div className="mb-8 max-w-2xl mx-auto w-full">
            <h3 className="text-gray-400 font-bold text-lg mb-2 pl-1">名前を検索</h3>
            <div className="flex gap-3 mb-4">
                <input 
                    type="text" 
                    placeholder="例) かな カナ ABC" 
                    className="flex-1 border-2 border-vk-pink bg-white rounded-full py-2 px-6 focus:outline-none text-base text-gray-700 placeholder-gray-400"
                />
                <button className="bg-vk-pink text-white w-16 rounded-2xl flex items-center justify-center hover:bg-pink-400 transition shadow-md">
                    <Search size={24} />
                </button>
            </div>
            
            {/* Keyword Search Button */}
            <div className="flex justify-center">
              <button className="bg-vk-pink text-white font-bold py-2 px-8 rounded-full shadow-md hover:bg-pink-400 transition">
                キーワード検索
              </button>
            </div>
        </div>

        {/* List Header */}
        <div className="flex items-end mb-0 relative mt-12">
           <div className="bg-black text-white py-2 px-6 text-sm font-bold z-20 relative shadow-md h-[36px] flex items-center min-w-[120px] justify-center">
             キャスト一覧
           </div>
           <StackedTabs 
             tabs={tabs} 
             activeTab={activeTab} 
             onTabChange={setActiveTab} 
           />
           <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-black z-0"></div>
        </div>

        {/* Count Bar */}
        <div className="bg-vk-pink text-white font-bold text-sm py-1.5 px-4 mb-4 shadow-sm">
            該当件数 : 1072件
        </div>

        {/* Cast Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 mb-12">
            {castResults.map((cast) => (
                <div key={cast.id} onClick={onCastClick} className="relative group cursor-pointer shadow-md hover:shadow-lg transition duration-300 rounded-sm overflow-hidden bg-gray-100">
                    {/* Image Container */}
                    <div className="aspect-[3/4.5] w-full overflow-hidden">
                        <img 
                            src={cast.img} 
                            alt={cast.name} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                    
                    {/* Name Bar */}
                    <div className="absolute bottom-0 left-0 right-0 bg-vk-pink/90 py-1.5 text-center backdrop-blur-[1px]">
                        <span className="text-white font-bold text-sm md:text-base tracking-wider drop-shadow-sm">
                            {cast.name}
                        </span>
                    </div>
                </div>
            ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mb-16">
             {/* Note: In the design the prev button is <, here using icon */}
             <button className="w-10 h-10 flex items-center justify-center rounded bg-gray-200 text-gray-500 hover:bg-gray-300">
                 <ChevronLeft size={20} />
             </button>
             {/* No page numbers shown in this specific design snippet but usually present, keeping minimal based on image if needed, or standard */}
             {/* The image doesn't show pagination numbers, but standard UI has them. I will include standard numbering for usability. */}
             <button className="w-10 h-10 flex items-center justify-center rounded bg-vk-pink text-white font-bold shadow-md">1</button>
             <button className="w-10 h-10 flex items-center justify-center rounded border border-gray-300 text-gray-600 hover:bg-gray-50 font-bold bg-white">2</button>
             <button className="w-10 h-10 flex items-center justify-center rounded border border-gray-300 text-gray-600 hover:bg-gray-50 font-bold bg-white">3</button>
             <button className="w-10 h-10 flex items-center justify-center rounded border border-gray-300 text-gray-600 hover:bg-gray-50 font-bold bg-white">4</button>
             <span className="text-gray-400 px-1">...</span>
             <button className="w-10 h-10 flex items-center justify-center rounded border border-gray-300 text-gray-600 hover:bg-gray-50 font-bold bg-white">11</button>
             
             <button className="w-10 h-10 flex items-center justify-center rounded border border-gray-300 text-vk-pink hover:bg-gray-50 font-bold bg-white">
                 <ChevronRight size={20} />
             </button>
        </div>
      </div>
    </div>
  );
};

export default CastSearchPage;