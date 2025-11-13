import React, { useState } from 'react';

const premiumImages = Array.from({ length: 16 }, (_, i) => `https://picsum.photos/seed/premium${i + 1}/800/1000`);

const PremiumImage: React.FC<{ src: string }> = ({ src }) => {
  const [isLoading, setIsLoading] = useState(true);
  
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-2xl shadow-pink-500/20 aspect-[4/5] bg-gray-800">
      {isLoading && (
        <div className="absolute inset-0 animate-pulse bg-gray-700"></div>
      )}
      <img
        src={src}
        alt="Premium Content"
        className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        onLoad={() => setIsLoading(false)}
      />
      <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-500 flex items-end p-4 ${isLoading ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'}`}>
        <h3 className="text-white text-lg font-bold drop-shadow-md">Exclusive View</h3>
      </div>
    </div>
  );
};

const PremiumPage: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12 animate-fadeIn">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold font-serif text-pink-400">
          Premium Content Area
        </h2>
        <p className="mt-2 text-gray-300">Thank you for your support. Enjoy the exclusive content!</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {premiumImages.map((src, index) => (
          <PremiumImage key={index} src={src} />
        ))}
      </div>
    </div>
  );
};

export default PremiumPage;