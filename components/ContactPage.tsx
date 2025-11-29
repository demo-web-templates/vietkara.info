import React from 'react';

interface ContactPageProps {
  onNavigateHome: () => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ onNavigateHome }) => {
  return (
    <div className="bg-white min-h-screen pb-12">
       {/* Top spacing/Header offset is handled by the main layout, 
           but we need padding for the content area */}
       
       <div className="max-w-4xl mx-auto px-4 py-8">
          
          {/* Page Title Bar */}
          <div className="bg-[#222] text-white py-2 px-4 font-bold text-sm mb-8">
            お問い合わせ
          </div>

          {/* Intro Text */}
          <p className="text-sm leading-relaxed mb-8 text-gray-700">
            ベトナムのカラオケ・ガールズバー情報サイト ベトカラに関しましてご不明<br className="hidden md:block"/>
            点やご相談などございましたら、下記のお問い合わせフォームよりお問い合わせ<br className="hidden md:block"/>
            ください。
          </p>

          {/* Form Container */}
          <div className="bg-white border border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.05)] p-6 md:p-10 rounded-sm">
             <h3 className="text-center font-bold text-base md:text-lg mb-8 border-b border-gray-100 pb-4 text-gray-800">
               以下のフォームに必要事項をご記入の上、「送信する」ボタン<br className="md:hidden"/>をクリックしてください。
             </h3>

             <form className="space-y-6">
                {/* Name Field */}
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 border-b border-gray-100 pb-6">
                   <div className="w-full md:w-56 flex items-center">
                      <span className="bg-vk-pink text-white text-[10px] px-2 py-0.5 rounded-sm mr-2 font-bold min-w-[36px] text-center">必須</span>
                      <label className="font-bold text-sm text-gray-800">名前</label>
                   </div>
                   <div className="flex-1">
                      <input 
                        type="text" 
                        placeholder="例）株式会社令和" 
                        className="w-full border border-gray-300 rounded p-2.5 text-sm focus:outline-none focus:border-vk-pink focus:ring-1 focus:ring-vk-pink transition-colors placeholder-gray-300" 
                      />
                   </div>
                </div>

                {/* Phone Field */}
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 border-b border-gray-100 pb-6">
                   <div className="w-full md:w-56 flex items-center">
                      <span className="bg-gray-400 text-white text-[10px] px-2 py-0.5 rounded-sm mr-2 font-bold min-w-[36px] text-center">任意</span>
                      <label className="font-bold text-sm text-gray-800">電話番号</label>
                   </div>
                   <div className="flex-1">
                      <input 
                        type="text" 
                        placeholder="例）090-000-0000" 
                        className="w-full border border-gray-300 rounded p-2.5 text-sm focus:outline-none focus:border-vk-pink focus:ring-1 focus:ring-vk-pink transition-colors placeholder-gray-300" 
                      />
                   </div>
                </div>

                {/* Email Field */}
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 border-b border-gray-100 pb-6">
                   <div className="w-full md:w-56 flex items-center">
                      <span className="bg-vk-pink text-white text-[10px] px-2 py-0.5 rounded-sm mr-2 font-bold min-w-[36px] text-center">必須</span>
                      <label className="font-bold text-sm text-gray-800">メールアドレス</label>
                   </div>
                   <div className="flex-1">
                      <input 
                        type="email" 
                        placeholder="例）example@gmail.com" 
                        className="w-full border border-gray-300 rounded p-2.5 text-sm focus:outline-none focus:border-vk-pink focus:ring-1 focus:ring-vk-pink transition-colors placeholder-gray-300" 
                      />
                   </div>
                </div>

                {/* Content Field */}
                <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-4 pb-4">
                   <div className="w-full md:w-56 flex items-center mt-2">
                      <span className="bg-vk-pink text-white text-[10px] px-2 py-0.5 rounded-sm mr-2 font-bold min-w-[36px] text-center">必須</span>
                      <label className="font-bold text-sm text-gray-800">お問い合わせ内容</label>
                   </div>
                   <div className="flex-1">
                      <textarea 
                        rows={6} 
                        className="w-full border border-gray-300 rounded p-2.5 text-sm focus:outline-none focus:border-vk-pink focus:ring-1 focus:ring-vk-pink transition-colors resize-none"
                      ></textarea>
                   </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center pt-8">
                   <button 
                     type="button" 
                     className="bg-vk-pink text-white font-bold py-2.5 px-16 rounded shadow-md hover:bg-pink-400 transition transform active:scale-95"
                   >
                     送信する
                   </button>
                </div>

             </form>
          </div>
       </div>
    </div>
  );
};

export default ContactPage;