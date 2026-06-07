'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <nav className="bg-black text-white sticky top-0 z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <Link href="/" className="relative h-12 w-48">
              <Image 
                src="/images/branding/overcast-wordmark.png" 
                alt="Overcast" 
                fill
                className="object-contain object-left"
                priority
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/products" className="hover:text-gray-300 px-3 py-2 text-sm font-medium uppercase tracking-widest">Shop All</Link>
              <Link href="/products?category=Tees" className="hover:text-gray-300 px-3 py-2 text-sm font-medium uppercase tracking-widest">Tees</Link>
              <Link href="/products?category=Hoodies" className="hover:text-gray-300 px-3 py-2 text-sm font-medium uppercase tracking-widest">Hoodies</Link>
              <Link href="/products?category=Hats" className="hover:text-gray-300 px-3 py-2 text-sm font-medium uppercase tracking-widest">Hats</Link>
              <Link href="/about" className="hover:text-gray-300 px-3 py-2 text-sm font-medium uppercase tracking-widest">About</Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/cart" className="p-2 hover:bg-white/10 rounded-full relative">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 h-4 w-4 bg-red-600 rounded-full text-[10px] flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/products" className="block px-3 py-2 text-base font-medium uppercase tracking-widest">Shop All</Link>
            <Link href="/products?category=Tees" className="block px-3 py-2 text-base font-medium uppercase tracking-widest">Tees</Link>
            <Link href="/products?category=Hoodies" className="block px-3 py-2 text-base font-medium uppercase tracking-widest">Hoodies</Link>
            <Link href="/products?category=Hats" className="block px-3 py-2 text-base font-medium uppercase tracking-widest">Hats</Link>
            <Link href="/about" className="block px-3 py-2 text-base font-medium uppercase tracking-widest">About</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
