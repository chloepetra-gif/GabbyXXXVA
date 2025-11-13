import React, { useState, useEffect } from 'react';
import { Page } from '../types';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const NavLink: React.FC<{
  page: Page;
  currentPage: Page;
  onNavigate: (page: Page) => void;
  children: React.ReactNode;
}> = ({ page, currentPage, onNavigate, children }) => {
  const isActive = currentPage === page;
  return (
    <button
      onClick={() => onNavigate(page)}
      className={`relative font-semibold px-4 py-2 rounded-md transition-colors duration-300 text-lg ${
        isActive
          ? 'text-pink-400'
          : 'text-gray-300 hover:bg-gray-800 hover:text-pink-400'
      }`}
    >
      {children}
      {isActive && (
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-pink-400 rounded-full"></span>
      )}
    </button>
  );
};

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isLive, setIsLive] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLive(false);
    }, 10000);

    return () => clearTimeout(timer); // Cleanup on component unmount
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-black bg-opacity-80 backdrop-blur-md shadow-lg shadow-pink-500/10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold font-serif text-white tracking-wider">
            Gabby XXXVA
          </h1>
          {isLive ? (
            <span className="bg-red-600 text-white text-xs font-bold px-2.5 py-1 rounded-full animate-pulse">
              LIVE
            </span>
          ) : (
            <span className="bg-gray-600 text-gray-200 text-xs font-bold px-2.5 py-1 rounded-full">
              OFFLINE
            </span>
          )}
        </div>
        <nav className="hidden md:flex items-center space-x-4">
          <NavLink page={Page.Home} currentPage={currentPage} onNavigate={onNavigate}>
            Home
          </NavLink>
          <NavLink page={Page.Gallery} currentPage={currentPage} onNavigate={onNavigate}>
            Gallery
          </NavLink>
           <NavLink page={Page.InteractiveRoom} currentPage={currentPage} onNavigate={onNavigate}>
            Interactive Room
          </NavLink>
          <NavLink page={Page.Premium} currentPage={currentPage} onNavigate={onNavigate}>
            Premium Content
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;