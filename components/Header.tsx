import React from 'react';

interface HeaderProps {
  activePage?: string;
  onNavigate?: (page: 'home' | 'search' | 'cast-search' | 'gravure' | 'discount' | 'event' | 'contact') => void;
}

const Header: React.FC<HeaderProps> = ({ activePage = 'home', onNavigate }) => {
  
  const getBreadcrumbLabel = () => {
    switch (activePage) {
      case 'search': return 'お店をさがす';
      case 'cast-search': return '女の子をさがす';
      case 'gravure': return 'グラビア';
      case 'discount': return '割引情報';
      case 'event': return 'イベント情報';
      case 'contact': return 'お問い合わせ';
      case 'shop-detail': return 'お店をさがす >> Ace Heart Girls Bar'; // Using static name for replica
      case 'gravure-detail': return 'グラビア特集 >> Yu Bar >> メグミ';
      case 'cast-detail': return '女の子をさがす >> FELIX BAR & KARAOKE >> チャン';
      case 'event-detail': return 'お店をさがす >> CLUB ZIZI JAPANESE BAR & LOUNGE >> 3rd Anniversary Event';
      case 'discount-detail': return "お店をさがす >> SARAH GIRL'S BAR";
      default: return '';
    }
  };

  const pageLabel = getBreadcrumbLabel();

  return (
    <header className="w-full bg-white flex flex-col items-center">
      {/* Top Logo Area */}
      <div className="w-full bg-white py-4 flex flex-col items-center justify-center border-b border-gray-100 cursor-pointer" onClick={() => onNavigate?.('home')}>
        <h1 className="text-3xl font-bold text-vk-pink tracking-widest">ベトカラ</h1>
        <p className="text-[10px] text-vk-pink font-medium tracking-wide mt-1">
          Produced by VIETNAM x KARAOKE
        </p>
      </div>

      {/* Navigation Bar */}
      <nav className="w-full bg-vk-pink text-white sticky top-0 z-50 shadow-md">
        <div className="max-w-6xl mx-auto px-4">
          <ul className="flex flex-wrap justify-center md:justify-between items-center text-xs md:text-sm font-medium py-3 md:py-0">
            <li onClick={() => onNavigate?.('home')} className="px-3 py-2 hover:bg-white/20 cursor-pointer transition whitespace-nowrap hidden md:block">ホーム</li>
            <li onClick={() => onNavigate?.('search')} className="px-3 py-2 hover:bg-white/20 cursor-pointer transition whitespace-nowrap">お店をさがす</li>
            <li onClick={() => onNavigate?.('cast-search')} className="px-3 py-2 hover:bg-white/20 cursor-pointer transition whitespace-nowrap">女の子をさがす</li>
            <li onClick={() => onNavigate?.('gravure')} className="px-3 py-2 hover:bg-white/20 cursor-pointer transition whitespace-nowrap">グラビア</li>
            <li onClick={() => onNavigate?.('discount')} className="px-3 py-2 hover:bg-white/20 cursor-pointer transition whitespace-nowrap">割引情報</li>
            <li onClick={() => onNavigate?.('event')} className="px-3 py-2 hover:bg-white/20 cursor-pointer transition whitespace-nowrap">イベント情報</li>
            <li onClick={() => onNavigate?.('contact')} className="px-3 py-2 hover:bg-white/20 cursor-pointer transition whitespace-nowrap">お問い合わせ</li>
          </ul>
        </div>
      </nav>
      
      {/* Breadcrumb Bar */}
      <div className="w-full bg-gray-50 border-b border-gray-200 py-1">
        <div className="max-w-6xl mx-auto px-4 text-[10px] text-gray-500 flex gap-2">
          <span onClick={() => onNavigate?.('home')} className="cursor-pointer hover:underline">ホーム</span>
          {activePage !== 'home' && (
            <>
              <span>&gt;&gt;</span>
              <span>{pageLabel}</span>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;