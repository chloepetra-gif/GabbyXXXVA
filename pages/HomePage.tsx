import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      <section className="relative h-[60vh] md:h-[80vh] bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/gabby-hero/1920/1080')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
          <h2 className="text-5xl md:text-7xl font-bold font-serif drop-shadow-lg">
            Gabby XXXVA
          </h2>
          <p className="mt-4 text-xl md:text-2xl max-w-2xl">
            Welcome to my world. Here you'll find a glimpse into my life, my passions, and my art.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold font-serif text-pink-400 mb-4">About Me</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Hey, I'm Gabby! I'm a content creator who loves to express myself through photography and video. I'm passionate about art, fashion, and connecting with my fans on a deeper level.
            </p>
            <p className="text-gray-300 leading-relaxed">
              This is my personal space to share my uncensored work and give you a behind-the-scenes look into my life. If you like what you see here, there's even more waiting for you in my premium section.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="/gabby-photo.png"
              alt="Gabby"
              className="rounded-lg shadow-lg shadow-pink-500/20 w-full max-w-sm border-4 border-gray-800"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
