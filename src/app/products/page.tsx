'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { products } from '@/data/products';
import { Suspense } from 'react';

function ProductList() {
  const searchParams = useSearchParams();
  const categoryFilter = searchParams.get('category');

  const filteredProducts = categoryFilter 
    ? products.filter(p => p.category === categoryFilter)
    : products;

  const categories = ['Tees', 'Hoodies', 'Hats'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
        <div>
          <h1 className="text-6xl font-bold tracking-tighter uppercase mb-4">
            {categoryFilter || 'All Gear'}
          </h1>
          <p className="text-zinc-500 font-medium tracking-widest uppercase text-xs">
            {filteredProducts.length} items / Drop 01: Clear Skies
          </p>
        </div>
        
        <div className="flex flex-wrap gap-3">
          <Link 
            href="/products" 
            className={`text-[10px] font-bold uppercase tracking-[0.2em] px-6 py-3 border transition-all ${!categoryFilter ? 'bg-white text-black border-white' : 'border-white/10 text-gray-500 hover:border-white/40'}`}
          >
            All
          </Link>
          {categories.map(cat => (
            <Link 
              key={cat}
              href={`/products?category=${cat}`} 
              className={`text-[10px] font-bold uppercase tracking-[0.2em] px-6 py-3 border transition-all ${categoryFilter === cat ? 'bg-white text-black border-white' : 'border-white/10 text-gray-500 hover:border-white/40'}`}
            >
              {cat}
            </Link>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
        {filteredProducts.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`} className="group block">
            <div className="relative aspect-[4/5] bg-zinc-900 mb-6 overflow-hidden">
              <Image 
                src={product.images[0]} 
                alt={product.name} 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              />
              {product.limited && (
                <div className="absolute top-6 left-6 bg-red-600 text-white text-[10px] font-bold uppercase px-3 py-1.5 tracking-[0.2em] z-20">
                  Limited
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-bold uppercase tracking-tight mb-1 group-hover:text-red-600 transition-colors">{product.name}</h3>
                <p className="text-zinc-500 text-sm font-medium uppercase tracking-widest">{product.category}</p>
              </div>
              <p className="text-white text-lg font-mono font-bold">${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="h-screen flex items-center justify-center uppercase tracking-widest text-xs">Initializing Radar...</div>}>
      <ProductList />
    </Suspense>
  );
}
