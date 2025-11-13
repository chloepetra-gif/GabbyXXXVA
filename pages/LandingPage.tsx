import React from 'react';

interface LandingPageProps {
  onEnter: () => void;
  onExit: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onEnter, onExit }) => {
  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center text-white p-4"
      style={{ backgroundImage: "url('https://picsum.photos/seed/gabby-landing/1920/1080')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"></div>
      <div className="relative z-10 text-center animate-fadeIn">
        <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-wider drop-shadow-lg">
          Gabby XXXVA
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200">
          This website contains adult content.
        </p>
        <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">
          Are you 18 or older?
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onEnter}
            className="w-full sm:w-48 bg-pink-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            18+ Enter
          </button>
          <button
            onClick={onExit}
            className="w-full sm:w-48 bg-gray-700 text-gray-200 font-bold py-3 px-8 rounded-lg hover:bg-gray-600 transition-colors duration-300"
          >
            Under 18 Exit
          </button>
        </div>
        <p className="text-xs text-gray-400 mt-12 max-w-md mx-auto">
          By entering this website, you are confirming that you are 18 years of age or older and you agree to our terms of service.
        </p>
      </div>
    </div>
  );
};

export default LandingPage;