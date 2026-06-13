import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/data/products';

export default function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black z-10" />
        
        {/* Decorative Brand Element */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10 scale-150">
          <Image 
            src="/images/branding/cloud-cutters-logo-v2.png" 
            alt="" 
            fill
            className="object-contain"
          />
        </div>

        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
          <div className="mb-8 inline-block">
             <span className="text-red-600 font-bold uppercase tracking-[0.4em] text-xs border border-red-600/30 px-4 py-1 bg-red-600/5">
               Initial Release
             </span>
          </div>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-8 uppercase leading-[0.9]">
            Clear <br />
            <span className="text-gray-500">Skies</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 font-medium tracking-wide">
            Aviation-inspired streetwear. Built for the cockpit, designed for the street. 
            Drop 01 is now live.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/products" className="bg-white text-black px-12 py-5 font-bold uppercase tracking-widest hover:bg-zinc-200 transition-all text-sm shadow-xl shadow-white/5">
              Shop Collection
            </Link>
            <Link href="/about" className="border border-white/20 text-white px-12 py-5 font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all text-sm backdrop-blur-sm">
              The Mission
            </Link>
          </div>
        </div>
      </section>

      {/* Scarcity Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-zinc-900/50 border border-white/5 p-8 md:p-16 flex flex-col md:flex-row justify-between items-center gap-12 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="relative z-10">
            <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-red-600 mb-4">Limited Availability</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-6 max-w-md leading-none">Drop #1: Clear Skies</h3>
            <p className="text-gray-400 max-w-sm text-lg leading-relaxed">
              Every piece in this drop is limited run. No restocks, no exceptions. Once the radar clears, it's over.
            </p>
          </div>
          <div className="relative z-10 text-center md:text-right border-t md:border-t-0 md:border-l border-white/10 pt-12 md:pt-0 md:pl-12 w-full md:w-auto">
            <div className="text-6xl font-mono font-bold mb-4 tracking-tighter text-white">15%</div>
            <p className="text-xs text-gray-500 uppercase tracking-[0.3em] font-bold">Stock Remaining</p>
            <div className="mt-8 h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
              <div className="h-full bg-red-600 w-[15%]" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-zinc-500 mb-4">The Essentials</h2>
            <h3 className="text-5xl font-bold tracking-tighter uppercase">Featured Gear</h3>
          </div>
          <Link href="/products" className="group text-sm font-bold uppercase tracking-widest flex items-center gap-2 hover:text-gray-400 transition-colors">
            View Full Collection
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {featuredProducts.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`} className="group block">
              <div className="relative aspect-[4/5] bg-zinc-900 mb-8 overflow-hidden">
                <Image 
                  src={product.images[0]} 
                  alt={product.name} 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                />
                {product.limited && (
                  <div className="absolute top-6 left-6 bg-red-600 text-white text-[10px] font-bold uppercase px-3 py-1.5 tracking-[0.2em] z-20">
                    Ltd Edition
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
      </section>
    </div>
  );
}
