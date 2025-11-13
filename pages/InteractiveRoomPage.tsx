import React, { useState, useEffect } from 'react';

const InteractiveRoomPage: React.FC = () => {
  const [showLiveStream, setShowLiveStream] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLiveStream(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto px-6 py-12 animate-fadeIn text-center">
      <h2 className="text-4xl font-bold font-serif text-center mb-12 text-pink-400">
        Interactive Room
      </h2>
       {showLiveStream ? (
        <div>
          <p className="text-lg text-gray-300 mb-4">The live session is active now!</p>
          <div className="relative w-full overflow-hidden rounded-lg shadow-lg border-2 border-pink-500/50" style={{ paddingTop: '56.25%' }}>
             <iframe
              src="https://t.me/GabbyXXXVA?livestream=100fd7f69f1cbe9a46"
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              title="Live Stream"
            ></iframe>
          </div>
        </div>
      ) : (
         <div className="text-center text-gray-400 py-16">
          <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-16 w-16 text-gray-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          <p className="text-xl font-semibold mb-2">Live Stream Ended</p>
          <p className="text-gray-500">The live interactive experience is under construction. Check back soon!</p>
        </div>
      )}
    </div>
  );
};

export default InteractiveRoomPage;
