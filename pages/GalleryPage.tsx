
import React, { useState, useEffect } from 'react';

const galleryImages: string[] = [
  '/gallery/Screenshot_20251112_193159_Telegram.jpg',
  '/gallery/Screenshot_20251112_193214_Telegram.jpg',
  '/gallery/Screenshot_20251112_193230_Telegram.jpg',
  '/gallery/Screenshot_20251112_193244_Telegram.jpg',
  '/gallery/Screenshot_20251112_193304_Telegram.jpg',
  '/gallery/Screenshot_20251112_193319_Telegram.jpg',
  '/gallery/Screenshot_20251112_193329_Telegram.jpg',
  '/gallery/Screenshot_20251112_193345_Telegram.jpg',
  '/gallery/Screenshot_20251112_193409_Telegram.jpg',
  '/gallery/Screenshot_20251112_193432_Telegram.jpg',
];

const GalleryImage: React.FC<{ src: string; onClick: () => void }> = ({ src, onClick }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg aspect-[3/4] bg-gray-800 cursor-pointer" onClick={onClick}>
      {isLoading && (
        <div className="absolute inset-0 animate-pulse bg-gray-700"></div>
      )}
      <img
        src={src}
        alt="Gallery"
        className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        onLoad={() => setIsLoading(false)}
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-500"></div>
    </div>
  );
};


const GalleryPage: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowLeft' && selectedIndex > 0) setSelectedIndex(selectedIndex - 1);
      if (e.key === 'ArrowRight' && selectedIndex < galleryImages.length - 1) setSelectedIndex(selectedIndex + 1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  return (
    <div className="container mx-auto px-6 py-12 animate-fadeIn">
      <h2 className="text-4xl font-bold font-serif text-center mb-12 text-pink-400">
        Public Gallery
      </h2>
      {galleryImages.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.map((src, index) => (
            <GalleryImage key={index} src={src} onClick={() => setSelectedIndex(index)} />
          ))}
        </div>
      ) : (
         <div className="text-center text-gray-400 py-16">
          <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-16 w-16 text-gray-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className="text-xl font-semibold mb-2">Gallery Coming Soon</p>
          <p className="text-gray-500">Please check back later for new content.</p>
        </div>
      )}

      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50" onClick={() => setSelectedIndex(null)}>
          <img src={galleryImages[selectedIndex]} alt="Gallery" className="max-w-[90%] max-h-[90%] object-contain" onClick={(e) => e.stopPropagation()} />
          <button onClick={() => setSelectedIndex(null)} className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300">&times;</button>
          {selectedIndex > 0 && <button onClick={(e) => { e.stopPropagation(); setSelectedIndex(selectedIndex - 1); }} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl hover:text-gray-300">&larr;</button>}
          {selectedIndex < galleryImages.length - 1 && <button onClick={(e) => { e.stopPropagation(); setSelectedIndex(selectedIndex + 1); }} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl hover:text-gray-300">&rarr;</button>}
        </div>
      )}
    </div>
  );
};

export default GalleryPage;