'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { useCart } from '@/context/CartContext';

export default function SuccessPage() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-40 text-center">
      <div className="mb-8 flex justify-center">
        <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>
      <h1 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-6">Payment Received</h1>
      <p className="text-gray-400 max-w-md mx-auto mb-12 text-lg">
        Thank you for your order. We're preparing your gear for departure. You'll receive a confirmation email with tracking info shortly.
      </p>
      <Link href="/products" className="inline-block bg-white text-black px-10 py-4 font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors">
        Back to Shop
      </Link>
    </div>
  );
}
