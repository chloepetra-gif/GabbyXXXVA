
import React, { useState, useCallback } from 'react';
import { Page } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import PremiumPage from './pages/PremiumPage';
import CheckoutPage from './pages/CheckoutPage';
import SubscriptionModal from './components/SubscriptionModal';
import LandingPage from './pages/LandingPage';
import AccessDeniedPage from './pages/AccessDeniedPage';
import InteractiveRoomPage from './pages/InteractiveRoomPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
  const [showSubscriptionModal, setShowSubscriptionModal] = useState<boolean>(false);
  const [isAgeVerified, setIsAgeVerified] = useState<boolean>(false);
  const [accessDenied, setAccessDenied] = useState<boolean>(false);

  const handleNavigation = useCallback((page: Page) => {
    if (page === Page.Premium && !isSubscribed) {
      setShowSubscriptionModal(true);
    } else {
      setCurrentPage(page);
      window.scrollTo(0, 0);
    }
  }, [isSubscribed]);

  const handleGoToCheckout = () => {
    setShowSubscriptionModal(false);
    setCurrentPage(Page.Checkout);
    window.scrollTo(0, 0);
  };

  const handlePaymentSuccess = () => {
    setIsSubscribed(true);
    setCurrentPage(Page.Premium);
    window.scrollTo(0, 0);
  };
  
  const handleAgeVerified = () => {
    setIsAgeVerified(true);
  };

  const handleAccessDenied = () => {
    setAccessDenied(true);
  };

  const renderPage = () => {
    switch (currentPage) {
      case Page.Gallery:
        return <GalleryPage />;
      case Page.Premium:
        return <PremiumPage />;
      case Page.Checkout:
        return <CheckoutPage onPaymentSuccess={handlePaymentSuccess} />;
      case Page.InteractiveRoom:
        return <InteractiveRoomPage />;
      case Page.Home:
      default:
        return <HomePage />;
    }
  };

  if (accessDenied) {
    return <AccessDeniedPage />;
  }

  if (!isAgeVerified) {
    return <LandingPage onEnter={handleAgeVerified} onExit={handleAccessDenied} />;
  }

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen font-sans flex flex-col">
      <Header currentPage={currentPage} onNavigate={handleNavigation} />
      <main className="flex-grow pt-20">
        {renderPage()}
      </main>
      {showSubscriptionModal && (
        <SubscriptionModal
          onClose={() => setShowSubscriptionModal(false)}
          onSubscribe={handleGoToCheckout}
        />
      )}
      <Footer />
    </div>
  );
};

export default App;