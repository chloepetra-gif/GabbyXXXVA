
import React from 'react';

interface SubscriptionModalProps {
  onClose: () => void;
  onSubscribe: () => void;
}

const SubscriptionModal: React.FC<SubscriptionModalProps> = ({ onClose, onSubscribe }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-lg shadow-2xl shadow-pink-500/20 max-w-md w-full p-8 border border-pink-500/30">
        <h2 className="text-2xl font-bold text-white mb-4">Members Only</h2>
        <p className="text-gray-300 mb-6">
          This content is exclusive for premium members. Subscribe now to unlock access to all my private photos and videos.
        </p>
        <div className="space-y-4">
          <button
            onClick={onSubscribe}
            className="w-full bg-pink-600 text-white font-bold py-3 rounded-lg hover:bg-pink-700 transition-all duration-300 transform hover:scale-105"
          >
            Subscribe Now
          </button>
          <a
            href="https://onlyfans.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-transparent border border-gray-600 text-gray-300 font-bold py-3 rounded-lg hover:bg-gray-700 hover:text-white transition-colors duration-300"
          >
            Go to OnlyFans
          </a>
          <button
            onClick={onClose}
            className="w-full text-gray-400 py-2 rounded-lg hover:text-white transition-colors duration-300 text-sm"
          >
            Maybe Later
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionModal;