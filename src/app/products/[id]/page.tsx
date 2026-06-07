'use client';

import { products, Product } from '@/data/products';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useState, use } from 'react';
import { useCart } from '@/context/CartContext';

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<string>('M');

  if (!product) {
    notFound();
  }

  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        {/* Product Images */}
        <div className="space-y-6">
          <div className="relative aspect-[4/5] bg-zinc-900 overflow-hidden">
             <Image 
               src={product.images[0]} 
               alt={product.name} 
               fill
               className="object-cover"
               priority
             />
             {product.limited && (
               <div className="absolute top-8 left-8 bg-red-600 text-white text-xs font-bold uppercase px-4 py-2 tracking-[0.2em] z-20">
                 Ltd Edition
               </div>
             )}
          </div>
          <div className="grid grid-cols-2 gap-6 opacity-50">
             {/* Secondary views using same image for now but cropped differently or just placeholders */}
             <div className="relative aspect-square bg-zinc-900 overflow-hidden">
               <Image 
                 src={product.images[0]} 
                 alt={`${product.name} detail`} 
                 fill
                 className="object-cover scale-150"
               />
             </div>
             <div className="relative aspect-square bg-zinc-900 overflow-hidden">
               <Image 
                 src={product.images[0]} 
                 alt={`${product.name} fit`} 
                 fill
                 className="object-cover"
               />
             </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col pt-4">
          <div className="mb-12 border-b border-white/10 pb-12">
            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-zinc-500 mb-6">{product.drop}</h2>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter uppercase mb-6">{product.name}</h1>
            <p className="text-3xl font-mono font-bold text-white">${product.price}</p>
          </div>

          <div className="prose prose-invert mb-12">
            <p className="text-zinc-400 leading-relaxed text-xl">
              {product.description}
            </p>
          </div>

          <div className="space-y-12 mb-16">
            <div>
              <div className="flex justify-between items-end mb-6">
                <h3 className="text-xs font-bold uppercase tracking-[0.3em]">Size Selector</h3>
                <button className="text-[10px] uppercase tracking-widest text-zinc-500 hover:text-white transition-colors border-b border-zinc-800">Size Guide</button>
              </div>
              <div className="flex flex-wrap gap-4">
                {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                  <button 
                    key={size} 
                    onClick={() => setSelectedSize(size)}
                    className={`w-14 h-14 border flex items-center justify-center text-xs font-bold transition-all ${selectedSize === size ? 'border-white bg-white text-black scale-105' : 'border-white/10 text-zinc-500 hover:border-white/40'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <button 
              onClick={() => addToCart(product, selectedSize)}
              className="w-full bg-white text-black py-6 font-bold uppercase tracking-[0.2em] hover:bg-zinc-200 transition-all text-sm shadow-xl shadow-white/5"
            >
              Add to Flight Bag
            </button>
          </div>

          <div className="border-t border-white/10 pt-12 space-y-6 text-sm">
            <div className="flex justify-between border-b border-white/5 pb-4">
              <span className="uppercase tracking-[0.2em] text-[10px] font-bold text-zinc-500">Fabrication</span>
              <span className="text-zinc-300">450GSM Heavyweight Cotton</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-4">
              <span className="uppercase tracking-[0.2em] text-[10px] font-bold text-zinc-500">Fit</span>
              <span className="text-zinc-300">Modern Streetwear (Relaxed)</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-4">
              <span className="uppercase tracking-[0.2em] text-[10px] font-bold text-zinc-500">Dispatch</span>
              <span className="text-zinc-300">Ships within 48 hours</span>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="mt-48">
          <div className="flex justify-between items-end mb-16">
            <h3 className="text-3xl font-bold tracking-tighter uppercase">Coordinate Your Flight</h3>
            <Link href="/products" className="text-xs font-bold uppercase tracking-widest border-b border-white/20 pb-1 hover:border-white transition-all">View All</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map((p) => (
              <Link key={p.id} href={`/products/${p.id}`} className="group block">
                <div className="relative aspect-[4/5] bg-zinc-900 mb-6 overflow-hidden">
                   <Image 
                     src={p.images[0]} 
                     alt={p.name} 
                     fill
                     className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                   />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-widest mb-1">{p.name}</h3>
                <p className="text-zinc-500 text-sm">${p.price}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
