
import React, { useEffect } from 'react';

const AccessDeniedPage: React.FC = () => {
    useEffect(() => {
        const timer = setTimeout(() => {
            window.location.href = 'https://www.google.com';
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4 text-center">
      <div className="animate-fadeIn">
        <h1 className="text-5xl font-bold text-red-500 mb-4">Access Denied</h1>
        <p className="text-lg text-gray-300">
          You must be 18 years of age or older to view this content.
        </p>
        <p className="text-md text-gray-400 mt-8">
            You will be redirected shortly.
        </p>
         <a href="https://www.google.com" className="mt-4 text-pink-400 hover:underline">
            Click here if you are not redirected automatically.
        </a>
      </div>
    </div>
  );
};

export default AccessDeniedPage;
