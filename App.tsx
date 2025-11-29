import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CategoryMenu from './components/CategoryMenu';
import VideoSection from './components/VideoSection';
import RankingSection from './components/RankingSection';
import NewsSection from './components/NewsSection';
import Footer from './components/Footer';
import SearchPage from './components/SearchPage';
import CastSearchPage from './components/CastSearchPage';
import GravurePage from './components/GravurePage';
import DiscountPage from './components/DiscountPage';
import EventPage from './components/EventPage';
import ContactPage from './components/ContactPage';
import ShopDetailPage from './components/ShopDetailPage';
import CastDetailPage from './components/CastDetailPage';
import GravureDetailPage from './components/GravureDetailPage';
import EventDetailPage from './components/EventDetailPage';
import DiscountDetailPage from './components/DiscountDetailPage';
import { RankingItem } from './types';

// Mock Data for Rankings
const shopRankingData: RankingItem[] = [
  { rank: 1, id: 101, name: 'THE LOCK クラブ', description: 'subtitle', location: 'ハノイ', tags: ['リンラン', 'カラオケ'], imageUrl: 'https://picsum.photos/seed/shop1/100/100' },
  { rank: 2, id: 102, name: '11:11 - One Four Lounge & Bar -', description: 'subtitle', location: 'ハノイ', tags: ['ダオタン', 'ラウンジ'], imageUrl: 'https://picsum.photos/seed/shop2/100/100' },
  { rank: 3, id: 103, name: 'BADASS BAR - ハノイ リンラン -', description: 'subtitle', location: 'ハノイ', tags: ['リンラン', 'カラオケ'], imageUrl: 'https://picsum.photos/seed/shop3/100/100' },
  { rank: 4, id: 104, name: 'Yu Lounge Premium', description: 'subtitle', location: 'ホーチミン', tags: ['レタントン', 'ラウンジ'], imageUrl: 'https://picsum.photos/seed/shop4/100/100' },
  { rank: 5, id: 105, name: 'VEGA Bar & Lounge', description: 'subtitle', location: 'ハノイ', tags: ['リンラン', 'カラオケ'], imageUrl: 'https://picsum.photos/seed/shop5/100/100' },
];

const castRankingData: RankingItem[] = [
  { rank: 1, id: 201, name: 'ミオ', description: 'VEGA Bar & Lounge', location: 'ハノイ', tags: ['リンラン', 'カラオケ'], imageUrl: 'https://picsum.photos/seed/girl1/150/200', isCast: true },
  { rank: 2, id: 202, name: 'アン', description: 'THE LOCK クラブ', location: 'ハノイ', tags: ['リンラン', 'カラオケ'], imageUrl: 'https://picsum.photos/seed/girl2/150/200', isCast: true },
  { rank: 3, id: 203, name: 'アンナ', description: 'THE LOCK クラブ', location: 'ハノイ', tags: ['リンラン', 'カラオケ'], imageUrl: 'https://picsum.photos/seed/girl3/150/200', isCast: true },
  { rank: 4, id: 204, name: 'メグミ', description: 'Yu Bar', location: 'ハノイ', tags: [], imageUrl: 'https://picsum.photos/seed/girl4/150/200', isCast: true },
];

type Page = 'home' | 'search' | 'cast-search' | 'gravure' | 'discount' | 'event' | 'contact' | 'shop-detail' | 'cast-detail' | 'gravure-detail' | 'event-detail' | 'discount-detail';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedShopId, setSelectedShopId] = useState<number | null>(null);

  const navigateToSearch = () => {
    window.scrollTo(0, 0);
    setCurrentPage('search');
  };

  const navigateToCastSearch = () => {
    window.scrollTo(0, 0);
    setCurrentPage('cast-search');
  };

  const navigateToGravure = () => {
    window.scrollTo(0, 0);
    setCurrentPage('gravure');
  };

  const navigateToDiscount = () => {
    window.scrollTo(0, 0);
    setCurrentPage('discount');
  };

  const navigateToEvent = () => {
    window.scrollTo(0, 0);
    setCurrentPage('event');
  };

  const navigateToContact = () => {
    window.scrollTo(0, 0);
    setCurrentPage('contact');
  };

  const navigateToHome = () => {
    window.scrollTo(0, 0);
    setCurrentPage('home');
  };
  
  const navigateToShopDetail = (id: number = 0) => {
    setSelectedShopId(id);
    window.scrollTo(0, 0);
    setCurrentPage('shop-detail');
  };

  const navigateToCastDetail = () => {
    window.scrollTo(0, 0);
    setCurrentPage('cast-detail');
  };

  const navigateToGravureDetail = () => {
    window.scrollTo(0, 0);
    setCurrentPage('gravure-detail');
  };

  const navigateToEventDetail = () => {
    window.scrollTo(0, 0);
    setCurrentPage('event-detail');
  };

  const navigateToDiscountDetail = () => {
    window.scrollTo(0, 0);
    setCurrentPage('discount-detail');
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'discount-detail':
        return <DiscountDetailPage onNavigateSearch={navigateToSearch} onNavigateShop={() => navigateToShopDetail(0)} />;
      case 'event-detail':
        return <EventDetailPage onNavigateEventList={navigateToEvent} onNavigateShop={() => navigateToShopDetail(0)} />;
      case 'gravure-detail':
        return <GravureDetailPage onNavigateHome={navigateToHome} onNavigateShop={() => navigateToShopDetail(104)} />;
      case 'cast-detail':
        return <CastDetailPage onNavigateHome={navigateToHome} onNavigateShop={() => navigateToShopDetail(104)} />;
      case 'shop-detail':
        return <ShopDetailPage onNavigateSearch={navigateToSearch} />;
      case 'search':
        return <SearchPage onNavigateHome={navigateToHome} onShopClick={navigateToShopDetail} />;
      case 'cast-search':
        return <CastSearchPage onNavigateHome={navigateToHome} onCastClick={navigateToCastDetail} />;
      case 'gravure':
        return <GravurePage onNavigateHome={navigateToHome} onItemClick={navigateToGravureDetail} />;
      case 'discount':
        return <DiscountPage onNavigateHome={navigateToHome} onItemClick={navigateToDiscountDetail} />;
      case 'event':
        return <EventPage onNavigateHome={navigateToHome} onItemClick={navigateToEventDetail} />;
      case 'contact':
        return <ContactPage onNavigateHome={navigateToHome} />;
      case 'home':
      default:
        return (
          <>
            <HeroSection />
            <CategoryMenu 
              onSearchClick={navigateToSearch} 
              onCastSearchClick={navigateToCastSearch}
              onGravureClick={navigateToGravure}
              onDiscountClick={navigateToDiscount}
              onEventClick={navigateToEvent}
            />
            <div className="h-4 bg-gray-50"></div>
            <VideoSection />
            <div className="h-8 bg-gray-50"></div>
            <RankingSection title="店舗アクセスランキング" items={shopRankingData} />
            <div className="h-4 bg-gray-50"></div>
            <RankingSection title="キャストアクセスランキング" items={castRankingData} />
            <div className="h-8 bg-gray-50"></div>
            <NewsSection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <Header 
        activePage={currentPage}
        onNavigate={(page) => {
          if (page === 'search') navigateToSearch();
          if (page === 'cast-search') navigateToCastSearch();
          if (page === 'gravure') navigateToGravure();
          if (page === 'discount') navigateToDiscount();
          if (page === 'event') navigateToEvent();
          if (page === 'contact') navigateToContact();
          if (page === 'home') navigateToHome();
        }} 
      />
      
      <main>
        {renderContent()}
      </main>
      
      <Footer onNavigate={(page) => {
          if (page === 'search') navigateToSearch();
          if (page === 'cast-search') navigateToCastSearch();
          if (page === 'gravure') navigateToGravure();
          if (page === 'discount') navigateToDiscount();
          if (page === 'event') navigateToEvent();
          if (page === 'contact') navigateToContact();
          if (page === 'home') navigateToHome();
      }} />
    </div>
  );
}

export default App;