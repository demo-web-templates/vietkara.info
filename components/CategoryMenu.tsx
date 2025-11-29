import React from 'react';

const categories = [
  { id: 1, label: 'お店をさがす', img: 'https://picsum.photos/seed/cat1/300/300' },
  { id: 2, label: '割引情報', img: 'https://picsum.photos/seed/cat2/300/300' },
  { id: 3, label: 'グラビア特集', img: 'https://picsum.photos/seed/cat3/300/300' },
  { id: 4, label: '女の子をさがす', img: 'https://picsum.photos/seed/cat4/300/300' },
  { id: 5, label: 'イベント情報', img: 'https://picsum.photos/seed/cat5/300/300' },
  { id: 6, label: 'ブログ特集', img: 'https://picsum.photos/seed/cat6/300/300', isComingSoon: false }, // Image had pink placeholder
];

interface CategoryMenuProps {
  onSearchClick?: () => void;
  onCastSearchClick?: () => void;
  onGravureClick?: () => void;
  onDiscountClick?: () => void;
  onEventClick?: () => void;
}

const CategoryMenu: React.FC<CategoryMenuProps> = ({ onSearchClick, onCastSearchClick, onGravureClick, onDiscountClick, onEventClick }) => {
  return (
    <section className="bg-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="bg-vk-dark text-white py-2 px-4 mb-8">
          <h3 className="font-bold text-sm">メインメニュー</h3>
        </div>

        <div className="flex justify-center mb-6">
            <span className="text-vk-pink mr-2">▼</span>
            <h3 className="text-center font-bold text-gray-800">カテゴリを選択してください</h3>
            <span className="text-vk-pink ml-2">▼</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <div 
              key={cat.id} 
              onClick={() => {
                if (cat.id === 1 && onSearchClick) onSearchClick();
                if (cat.id === 2 && onDiscountClick) onDiscountClick();
                if (cat.id === 4 && onCastSearchClick) onCastSearchClick();
                if (cat.id === 3 && onGravureClick) onGravureClick();
                if (cat.id === 5 && onEventClick) onEventClick();
              }}
              className="relative aspect-square group cursor-pointer rounded-lg overflow-hidden shadow-md border-4 border-white"
            >
              {cat.id === 6 ? (
                 <div className="w-full h-full bg-[#fa9cb4] flex flex-col items-center justify-center relative">
                   <div className="absolute inset-2 border-2 border-white opacity-50 pointer-events-none"></div>
                   <span className="text-white font-bold text-lg mb-8 drop-shadow-sm">準備中...</span>
                   <div className="absolute bottom-4 left-4 right-4 bg-white/80 py-1 text-center">
                     <span className="text-xs md:text-sm font-bold text-black">{cat.label}</span>
                   </div>
                 </div>
              ) : (
                <>
                  <img 
                    src={cat.img} 
                    alt={cat.label} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Inner White Border effect */}
                  <div className="absolute inset-2 border-2 border-white opacity-60 pointer-events-none"></div>
                  
                  {/* Label Bar */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/80 py-1 flex items-center justify-center shadow-sm">
                    <span className="text-xs md:text-sm font-bold text-gray-900">{cat.label}</span>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryMenu;