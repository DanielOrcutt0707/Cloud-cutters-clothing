import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-bold tracking-tighter mb-6 uppercase">Overcast</h2>
            <p className="text-zinc-500 max-w-sm text-lg font-medium leading-relaxed">
              Premium streetwear for those who live for the clearance, the climb, and the view from above.
            </p>
          </div>
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 mb-6">Collections</h3>
            <ul className="space-y-3">
              <li><Link href="/products" className="text-zinc-500 hover:text-white transition-colors text-sm uppercase tracking-widest">All Gear</Link></li>
              <li><Link href="/products?category=Tees" className="text-zinc-500 hover:text-white transition-colors text-sm uppercase tracking-widest">Tees</Link></li>
              <li><Link href="/products?category=Hoodies" className="text-zinc-500 hover:text-white transition-colors text-sm uppercase tracking-widest">Hoodies</Link></li>
              <li><Link href="/products?category=Hats" className="text-zinc-500 hover:text-white transition-colors text-sm uppercase tracking-widest">Hats</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 mb-6">Operations</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-zinc-500 hover:text-white transition-colors text-sm uppercase tracking-widest">Our Mission</Link></li>
              <li><Link href="#" className="text-zinc-500 hover:text-white transition-colors text-sm uppercase tracking-widest">Shipping Radar</Link></li>
              <li><Link href="#" className="text-zinc-500 hover:text-white transition-colors text-sm uppercase tracking-widest">Flight Deck (Contact)</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-[10px] text-zinc-600 uppercase tracking-widest font-bold">
              © {new Date().getFullYear()} OVERCAST SUPPLY CO.
            </p>
            <div className="flex gap-4">
              <span className="text-[10px] text-zinc-700 uppercase tracking-widest">Built for Altitude</span>
              <span className="text-[10px] text-zinc-700 uppercase tracking-widest">Drop 01</span>
            </div>
          </div>
          <div className="flex space-x-8">
            <Link href="#" className="text-zinc-500 hover:text-white transition-colors text-xs uppercase tracking-[0.2em] font-bold">Instagram</Link>
            <Link href="#" className="text-zinc-500 hover:text-white transition-colors text-xs uppercase tracking-[0.2em] font-bold">Twitter</Link>
            <Link href="#" className="text-zinc-500 hover:text-white transition-colors text-xs uppercase tracking-[0.2em] font-bold">TikTok</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
