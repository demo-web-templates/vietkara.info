import React, { useState } from 'react';
import { TabOption, RankingItem } from '../types';
import { StackedTabs } from './StackedTabs';

interface RankingSectionProps {
  title: string;
  items: RankingItem[];
}

const tabs: TabOption[] = [
  { id: 'all', label: 'すべて' },
  { id: 'hanoi', label: 'ハノイ' },
  { id: 'hcm', label: 'ホーチミン' },
];

const CrownIcon: React.FC<{ rank: number }> = ({ rank }) => {
  const colors = {
    1: 'text-yellow-400',
    2: 'text-gray-400',
    3: 'text-orange-400',
    other: 'text-gray-300'
  };
  const colorClass = rank <= 3 ? colors[rank as 1|2|3] : colors.other;
  
  return (
    <div className="flex flex-col items-center justify-center w-12 pt-2">
       {/* Crown SVG */}
       <svg viewBox="0 0 24 24" fill="currentColor" className={`w-8 h-8 ${colorClass} mb-1`}>
         <path d="M2 20h20v-2H2v2zm2-3h16v-1H4v1zm8-9l-3 4-4-5v8h14V7l-4 5-3-4z"/>
       </svg>
       <span className="font-bold text-sm text-gray-700">{rank}</span>
    </div>
  );
};

const RankingSection: React.FC<RankingSectionProps> = ({ title, items }) => {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <section className="bg-white pb-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header with Stacked Tabs */}
        <div className="flex items-end mb-0 relative">
           {/* Title Box */}
           <div className="bg-black text-white py-2 px-6 text-sm font-bold min-w-[200px] z-20 relative shadow-md h-[36px] flex items-center justify-center">
             {title}
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
        
        {/* Date Bar */}
        <div className="bg-vk-pink text-white text-[10px] font-bold py-1 px-4 flex justify-between items-center mb-4 relative z-20">
           <span>2025年10月度</span>
           <span>10月31日更新</span>
        </div>

        {/* List */}
        <div className="flex flex-col divide-y divide-gray-100">
          {items.map((item) => (
            <div key={item.id} className="flex items-start py-4 group hover:bg-gray-50 transition cursor-pointer">
               {/* Rank Icon */}
               <div className="flex-shrink-0 mr-4 ml-2">
                 <CrownIcon rank={item.rank} />
               </div>

               {/* Avatar/Logo */}
               <div className={`flex-shrink-0 mr-4 ${item.isCast ? 'w-16 h-20' : 'w-16 h-16 rounded-full'} overflow-hidden border border-gray-200`}>
                 <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
               </div>

               {/* Details */}
               <div className="flex-1 pt-1">
                 {/* Special styling for rank 1-3 often seen in Japanese lists */}
                 <div className="flex items-baseline gap-2 mb-1">
                   <h3 className="font-bold text-sm md:text-base text-gray-900">{item.name}</h3>
                   {item.shopName && <span className="text-xs text-gray-500 font-medium hidden sm:inline-block">- {item.shopName}</span>}
                 </div>
                 
                 {item.isCast && (
                   <div className="text-xs text-gray-600 font-bold mb-1">{item.description}</div> // Shop name for cast
                 )}
                 
                 <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs text-vk-pink">
                    <span>{item.location}</span>
                    {item.tags.map(tag => (
                      <span key={tag} className="border-l border-gray-300 pl-2 text-vk-pink/80">{tag}</span>
                    ))}
                 </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RankingSection;