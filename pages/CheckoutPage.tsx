import React, { useState, FormEvent } from 'react';
import {
  loadStripe,
  Stripe,
  StripeElements,
  StripeCardElement,
} from '@stripe/stripe-js';
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

// IMPORTANT: Replace with your actual Stripe publishable key
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const cardElementOptions = {
  style: {
    base: {
      color: '#ffffff',
      fontFamily: 'sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '16px',
      '::placeholder': {
        color: '#6b7280',
      },
    },
    invalid: {
      color: '#ef4444',
      iconColor: '#ef4444',
    },
  },
};

const CheckoutForm: React.FC<{ onSuccess: () => void }> = ({ onSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState<string | null>(null);
  const [processing, setProcessing] = useState<boolean>(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setProcessing(true);
    setError(null);

    if (!stripe || !elements) {
      setError('Stripe has not loaded yet. Please try again in a moment.');
      setProcessing(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) {
        setError('Card element not found.');
        setProcessing(false);
        return;
    }

    const { error: paymentMethodError, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: {
        name,
        email,
      },
    });

    if (paymentMethodError) {
      setError(paymentMethodError.message || 'An unexpected error occurred.');
      setProcessing(false);
      return;
    }

    // In a real application, you would send the paymentMethod.id to your backend
    // to create a subscription and charge the user.
    // For this simulation, we'll just assume success.
    console.log('PaymentMethod created:', paymentMethod);

    // Simulate backend processing
    setTimeout(() => {
      setProcessing(false);
      onSuccess();
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
          Full Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
          placeholder="Jane Doe"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
          placeholder="you@example.com"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Card Details
        </label>
        <div className="p-4 bg-gray-700 border border-gray-600 rounded-lg">
          <CardElement options={cardElementOptions} />
        </div>
      </div>
      
      {error && <div className="text-red-500 text-sm text-center">{error}</div>}

      <button
        type="submit"
        disabled={!stripe || processing}
        className="w-full bg-pink-600 text-white font-bold py-3 rounded-lg hover:bg-pink-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 flex items-center justify-center"
      >
        {processing ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processing...
          </>
        ) : (
          'Pay & Subscribe - $9.99/month'
        )}
      </button>
    </form>
  );
};

const CheckoutPage: React.FC<{ onPaymentSuccess: () => void }> = ({ onPaymentSuccess }) => {
  return (
    <div className="container mx-auto px-6 py-12 animate-fadeIn">
      <div className="max-w-lg mx-auto bg-gray-800 rounded-lg shadow-2xl shadow-pink-500/20 p-8 border border-pink-500/30">
        <h2 className="text-3xl font-bold font-serif text-center mb-2 text-pink-400">
          Unlock Premium Content
        </h2>
        <p className="text-center text-gray-300 mb-8">
          Complete your secure payment to join the exclusive members area.
        </p>
        <Elements stripe={stripePromise}>
          <CheckoutForm onSuccess={onPaymentSuccess} />
        </Elements>
      </div>
    </div>
  );
};

export default CheckoutPage;