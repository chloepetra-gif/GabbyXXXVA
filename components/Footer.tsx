import React from 'react';
import SocialLinks from './SocialLinks';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-8 mt-16 border-t border-gray-800">
      <div className="container mx-auto px-6 text-center text-gray-400">
        <div className="flex justify-center mb-4">
          <SocialLinks />
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Gabby XXXVA. All Rights Reserved.
        </p>
         <p className="text-xs mt-2">
          All models are 18 years of age or older.
        </p>
      </div>
    </footer>
  );
};

export default Footer;