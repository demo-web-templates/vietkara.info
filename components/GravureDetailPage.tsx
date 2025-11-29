import React from 'react';
import { Heart, MessageCircle, Reply, ChevronDown, Search as ZoomIcon } from 'lucide-react';

interface GravureDetailPageProps {
  onNavigateHome: () => void;
  onNavigateShop: () => void;
}

const GravureDetailPage: React.FC<GravureDetailPageProps> = ({ onNavigateHome, onNavigateShop }) => {
  // Mock Data for comments
  const comments = [
    { id: 25, name: 'ななしのベトカラさん', date: '2025年11月25日 23:44', content: '今年中にはホーチミン行きたいところ', likes: 0, replies: [] },
    { id: 24, name: 'ななしのベトカラさん', date: '2025年11月22日 18:04', content: 'ちゃんとかわいかった\n日本語の勉強がんばってね👍', likes: 0, replies: [] },
    { id: 23, name: 'ななしのベトカラさん', date: '2025年11月21日 10:47', content: 'I LOVE YOU 🫶', likes: 0, replies: [] },
    { id: 22, name: 'ななしのベトカラさん', date: '2025年11月15日 13:14', content: 'なかなかの美人さんだね', likes: 0, replies: [] },
    { id: 21, name: 'ななしのベトカラさん', date: '2025年11月10日 09:10', content: 'おれの彼女になってええんやで😉', likes: 0, replies: [] },
    { id: 20, name: 'ななしのベトカラさん', date: '2025年11月8日 17:46', content: '3日前までホーチミンにいました。もっと早くこの情報に気付きたかった、、、', likes: 2, replies: [] },
    { id: 15, name: 'メグミ', date: '2025年11月3日 20:48', content: '>>14\nありがとほざいます', likes: 3, isOwner: true, replies: [] },
  ];

  const galleryImages = [
    'https://picsum.photos/seed/megumi_hero/800/1200', // Hero
    'https://picsum.photos/seed/megumi_1/800/1200',
    'https://picsum.photos/seed/megumi_2/800/1200',
    'https://picsum.photos/seed/megumi_3/800/1200',
    'https://picsum.photos/seed/megumi_4/800/1200',
    'https://picsum.photos/seed/megumi_5/800/600', // Landscape
  ];

  return (
    <div className="bg-[#1a1a1a] min-h-screen text-gray-800 font-sans">
      
      {/* 1. HERO SECTION */}
      <div className="relative w-full h-[80vh] md:h-screen overflow-hidden">
         <img 
           src={galleryImages[0]} 
           alt="Megumi Hero" 
           className="w-full h-full object-cover object-top"
         />
         {/* Overlay Text */}
         <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <div className="text-center text-white drop-shadow-lg">
                <h1 className="text-6xl md:text-8xl font-serif mb-2 tracking-widest">メグミ</h1>
                <div className="w-full h-[1px] bg-white/70 mb-4"></div>
                <p className="text-2xl md:text-4xl font-serif italic mb-8">Yu Bar</p>
                
                <div className="animate-bounce mt-12 flex flex-col items-center opacity-80">
                   <span className="text-sm font-serif tracking-[0.2em] mb-2">Scroll</span>
                   <ChevronDown size={32} />
                </div>
            </div>
         </div>
      </div>

      {/* 2. MESSAGE SECTION */}
      <div className="bg-black text-white py-16 md:py-24 px-4 text-center">
         <p className="text-[10px] md:text-xs text-gray-400 tracking-widest mb-4 uppercase">presented by</p>
         <h2 className="text-2xl md:text-3xl font-serif font-bold tracking-widest mb-16">VIETKARA</h2>

         <div className="max-w-2xl mx-auto">
             <h3 className="text-2xl md:text-4xl font-serif italic mb-8">MESSAGE</h3>
             <div className="w-full h-[1px] bg-white/30 mb-12"></div>
             
             <div className="space-y-8 text-sm md:text-base leading-loose font-serif text-gray-200">
                <p>
                  閲覧ありがとうございます。<br/>
                  「Yu Bar」のメグミです。
                </p>
                <p>
                  ホーチミンからグラビア初出演ということで、とても緊張しています😳💫<br/>
                  みなさんの「いいね」や「コメント」が力になりますので、ぜひ気軽に反応してくれたら嬉しいです！
                </p>
                <p>応援よろしくお願いします♪</p>
             </div>

             <div className="w-full h-[1px] bg-white/30 mt-12 mb-8"></div>
             
             <div className="font-serif tracking-widest">
                <p className="text-lg italic mb-2">BY.</p>
                <p className="text-xl md:text-2xl">GRAVURE MODEL メグミ</p>
             </div>
         </div>
      </div>

      {/* 3. PHOTO GALLERY (Vertical Stack) */}
      <div className="bg-[#1a1a1a] w-full flex flex-col items-center gap-0">
          {galleryImages.slice(1).map((img, idx) => (
             <div key={idx} className="relative w-full max-w-4xl group">
                <img src={img} alt={`Gallery ${idx}`} className="w-full h-auto shadow-2xl" />
                {/* Zoom Icon Overlay */}
                <div className="absolute bottom-4 right-4 bg-black/50 p-2 rounded-full text-white/80 opacity-0 group-hover:opacity-100 transition duration-500">
                   <ZoomIcon size={24} />
                </div>
             </div>
          ))}
      </div>

      {/* 4. COMMENTS SECTION */}
      <div className="bg-white py-16 px-4">
         <div className="max-w-3xl mx-auto">
            
            {/* Write Button */}
            <div className="flex justify-center mb-8">
               <button className="text-vk-pink font-bold border-b border-vk-pink hover:opacity-70 transition text-sm pb-0.5">
                  コメントを書く
               </button>
            </div>

            {/* Comment List Container */}
            <div className="border border-gray-300 rounded-lg p-0 bg-white shadow-sm">
               {/* Header */}
               <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-gray-50 rounded-t-lg">
                  <div className="flex items-center gap-2">
                     <MessageCircle size={18} className="text-gray-600" />
                     <span className="font-bold text-sm">コメント (25)</span>
                  </div>
                  <div className="flex items-center gap-2">
                     <span className="text-[10px] bg-green-500 text-white px-2 py-0.5 rounded-full font-bold">表示</span>
                     <div className="w-10 h-5 bg-green-500 rounded-full relative cursor-pointer">
                        <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                     </div>
                  </div>
               </div>

               {/* Comments List */}
               <div className="divide-y divide-gray-100">
                  {comments.map((comment) => (
                    <div key={comment.id} className={`p-4 ${comment.isOwner ? 'bg-pink-50' : ''}`}>
                       <div className="flex items-center gap-2 mb-1">
                          {comment.isOwner && (
                             <div className="w-8 h-8 rounded overflow-hidden">
                                <img src={galleryImages[0]} alt="avatar" className="w-full h-full object-cover" />
                             </div>
                          )}
                          <div>
                            <span className="font-bold text-xs md:text-sm block">
                               {comment.id}. {comment.name}
                            </span>
                            <span className="text-[10px] text-vk-pink">
                               {comment.date}
                            </span>
                          </div>
                       </div>
                       
                       <p className="text-xs md:text-sm text-gray-700 whitespace-pre-line mb-3 pl-1">
                          {comment.content}
                       </p>

                       <div className="flex justify-end gap-3">
                          <button className="flex items-center gap-1 text-gray-400 hover:text-gray-600">
                             <Reply size={14} />
                          </button>
                          <button className="flex items-center gap-1 text-gray-400 hover:text-vk-pink group">
                             <Heart size={14} className="group-hover:fill-pink-100" />
                             <span className="text-xs">{comment.likes}</span>
                          </button>
                       </div>
                    </div>
                  ))}
                  {/* More comments hint ... */}
                  <div className="p-4 text-center text-xs text-gray-400">...</div>
               </div>
            </div>

         </div>
      </div>

      {/* 5. BOTTOM LINKS */}
      <div className="bg-white pb-24 pt-8">
          <div className="max-w-4xl mx-auto px-4 flex flex-col items-center gap-16">
              
              {/* CAST INFO */}
              <div className="text-center w-full">
                  <h3 className="font-serif text-2xl md:text-3xl tracking-[0.2em] mb-4 text-gray-800">C A S T   I N F O</h3>
                  <p className="font-serif text-xl text-gray-600 mb-8">「メグミ」</p>
                  <button 
                     onClick={() => {/* Navigate to Cast Profile if needed */}}
                     className="bg-vk-pink text-white font-bold py-2 px-8 rounded-full shadow-lg hover:bg-pink-400 transition text-xs md:text-sm"
                  >
                     「メグミ」のキャスト詳細へ
                  </button>
              </div>

              {/* SHOP INFO */}
              <div className="text-center w-full border-t border-gray-100 pt-16">
                  <h3 className="font-serif text-2xl md:text-3xl tracking-[0.2em] mb-4 text-gray-800">S H O P   I N F O</h3>
                  <p className="font-serif text-xl text-gray-600 mb-8">「Yu Bar」</p>
                  <button 
                     onClick={onNavigateShop}
                     className="bg-vk-pink text-white font-bold py-2 px-8 rounded-full shadow-lg hover:bg-pink-400 transition text-xs md:text-sm"
                  >
                     「Yu Bar」詳細へ
                  </button>
              </div>

          </div>
      </div>

    </div>
  );
};

export default GravureDetailPage;