import React from 'react';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate?: (page: 'home' | 'search' | 'cast-search' | 'gravure' | 'discount' | 'event' | 'contact') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1a1a1a] text-white pt-10 pb-6 relative">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
         
         {/* Navigation Links */}
         <div className="flex flex-wrap justify-center gap-4 text-xs font-bold mb-8">
            <span onClick={() => onNavigate?.('search')} className="hover:text-vk-pink transition cursor-pointer">お店をさがす</span>
            <span className="text-gray-600">|</span>
            <span onClick={() => onNavigate?.('cast-search')} className="hover:text-vk-pink transition cursor-pointer">女の子をさがす</span>
            <span className="text-gray-600">|</span>
            <span onClick={() => onNavigate?.('gravure')} className="hover:text-vk-pink transition cursor-pointer">グラビア</span>
            <span className="text-gray-600">|</span>
            <span onClick={() => onNavigate?.('discount')} className="hover:text-vk-pink transition cursor-pointer">割引情報</span>
            <span className="text-gray-600">|</span>
            <span onClick={() => onNavigate?.('event')} className="hover:text-vk-pink transition cursor-pointer">イベント情報</span>
            <span className="text-gray-600">|</span>
            <span onClick={() => onNavigate?.('contact')} className="hover:text-vk-pink transition cursor-pointer">お問い合わせ</span>
            <span className="text-gray-600">|</span>
            <span className="hover:text-vk-pink transition cursor-pointer">プライバシーポリシー</span>
            <span className="text-gray-600">|</span>
            <span className="hover:text-vk-pink transition cursor-pointer">掲載について</span>
         </div>

         {/* Disclaimer */}
         <div className="text-[10px] text-center text-gray-400 mb-4 max-w-3xl">
           ※当サイトは20歳未満の方の閲覧を固くお断りいたします。また、20歳未満の日本人、及び18歳未満のベトナム人の飲酒は法律で禁じられています。
         </div>
         
         {/* Copyright */}
         <div className="text-[10px] text-gray-500 font-medium">
           ※写真等の無断転移を固く禁じます。 Copyright © 2023-2025 ベトカラ. All rights reserved
         </div>
      </div>

      {/* Scroll to Top Button */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-10 h-10 bg-vk-pink rounded-full flex items-center justify-center shadow-lg hover:bg-pink-500 transition z-50 group"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} className="text-white group-hover:-translate-y-1 transition-transform" />
      </button>
    </footer>
  );
};

export default Footer;