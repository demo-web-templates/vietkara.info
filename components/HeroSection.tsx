import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-2 md:px-4 py-6">
      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* Main Slider (Left/Center) */}
        <div className="flex-1">
          <div className="bg-vk-dark text-white text-sm py-1.5 px-4 font-bold mb-0">
            クローズアップ
          </div>
          <div className="relative group w-full aspect-[16/9] md:aspect-[16/8] lg:aspect-[800/450] overflow-hidden bg-gray-200">
             {/* Background Image Placeholder */}
            <img 
              src="https://picsum.photos/seed/stella/800/500" 
              alt="Model" 
              className="w-full h-full object-cover"
            />
            
            {/* Overlay Content */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-between p-4 md:p-8">
              {/* Top Text */}
              <div className="w-full flex justify-between items-start pt-4">
                 <div className="text-white">
                   <h2 className="text-2xl md:text-5xl font-serif italic tracking-wide drop-shadow-lg">STELLA</h2>
                   <p className="text-lg md:text-xl font-serif italic ml-2 tracking-widest drop-shadow-md">Bar & Lounge</p>
                 </div>
              </div>

              {/* Slider Arrows */}
              <div className="absolute inset-y-0 left-2 flex items-center">
                <button className="text-white/70 hover:text-white"><ChevronLeft size={48} /></button>
              </div>
              <div className="absolute inset-y-0 right-2 flex items-center">
                <button className="text-white/70 hover:text-white"><ChevronRight size={48} /></button>
              </div>

            </div>
            
            {/* Bottom Red Bar */}
            <div className="absolute bottom-0 left-0 right-0 bg-[#f45d6f] p-3 md:p-4 text-white flex justify-between items-end">
              <div>
                <div className="text-xs md:text-sm font-bold mb-1 opacity-90">ハノイ | リンラン | カラオケ</div>
                <div className="text-lg md:text-2xl font-bold">STELLA Bar & Lounge</div>
              </div>
              <div className="text-right">
                <div className="text-[10px] md:text-xs font-bold opacity-80">【 VIETKARA MODEL 】</div>
                <div className="text-xl md:text-3xl font-bold uppercase tracking-wider">MICHI</div>
              </div>
            </div>
          </div>
          {/* Button below image */}
          <div className="bg-[#222] py-2 flex justify-center">
             <button className="bg-vk-pink text-white px-8 py-1 rounded-full text-sm font-bold shadow-sm hover:opacity-90">
               STELLA
             </button>
          </div>
        </div>

        {/* Sidebar Ads (Right) */}
        <div className="lg:w-[300px] flex flex-col gap-4">
           <div className="text-xs text-gray-400 text-center w-full">【広告】</div>
           
           <div className="w-full aspect-[300/150] bg-black relative rounded-md overflow-hidden shadow-sm group cursor-pointer">
              <img src="https://picsum.photos/seed/ad1/300/150" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition" alt="Ad 1" />
              <div className="absolute top-2 left-2 bg-orange-400 text-white text-[10px] px-1 rounded">ホーチミン</div>
              <div className="absolute inset-0 flex items-center justify-center">
                 <span className="text-white font-bold text-2xl drop-shadow-md border-2 border-white p-2 rounded-full">G</span>
              </div>
              <div className="absolute bottom-2 right-2 text-white font-bold drop-shadow">SNACK</div>
           </div>

           <div className="w-full aspect-[300/150] bg-black relative rounded-md overflow-hidden shadow-sm group cursor-pointer">
              <img src="https://picsum.photos/seed/ad2/300/150" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition" alt="Ad 2" />
              <div className="absolute top-2 left-2 bg-pink-500 text-white text-[10px] px-1 rounded">ハノイ</div>
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                 <span className="text-white font-bold text-xl drop-shadow-md">VICTORIA'S</span>
                 <span className="text-white text-xs drop-shadow-md">SECRET</span>
              </div>
           </div>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;