'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, subtotal } = useCart();

  const handleCheckout = async () => {
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items: cart }),
      });

      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        console.error('Checkout error:', data.error);
        alert('Failed to initiate checkout. Please try again.');
      }
    } catch (err) {
      console.error('Checkout error:', err);
      alert('An unexpected error occurred. Please try again.');
    }
  };

  const shipping = subtotal >= 100 ? 0 : 10;
  const total = subtotal + shipping;
  const progressToFreeShipping = Math.min(100, (subtotal / 100) * 100);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-6xl font-bold tracking-tighter uppercase mb-16">Flight Bag</h1>
      
      {cart.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
          <div className="lg:col-span-2 space-y-12">
            {/* Free Shipping Progress */}
            <div className="bg-zinc-900/30 border border-white/5 p-6 rounded-sm">
              <div className="flex justify-between items-end mb-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                  {shipping === 0 ? 'Free Shipping Qualified' : `Spend $${(100 - subtotal).toFixed(2)} more for free shipping`}
                </span>
                <span className="text-[10px] font-mono text-zinc-500">{progressToFreeShipping.toFixed(0)}%</span>
              </div>
              <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-white transition-all duration-500 ease-out" 
                  style={{ width: `${progressToFreeShipping}%` }}
                />
              </div>
            </div>

            {cart.map((item) => (
              <div key={`${item.id}-${item.size}`} className="flex gap-10 border-b border-white/10 pb-12">
                <div className="relative w-32 h-40 bg-zinc-900 flex-shrink-0 overflow-hidden">
                  <Image 
                    src={item.images[0]} 
                    alt={item.name} 
                    fill
                    className="object-cover opacity-80"
                  />
                </div>
                <div className="flex-grow flex flex-col justify-between py-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold uppercase tracking-tight mb-2">{item.name}</h3>
                      <p className="text-[10px] text-zinc-500 uppercase tracking-[0.3em] font-bold">Size: {item.size}</p>
                    </div>
                    <p className="text-xl font-mono font-bold">${item.price}</p>
                  </div>
                  <div className="flex justify-between items-end mt-8">
                    <div className="flex items-center border border-white/10 h-10">
                      <button 
                        onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                        className="px-4 hover:bg-white/5 transition-colors"
                      >-</button>
                      <span className="px-4 text-xs font-mono font-bold">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                        className="px-4 hover:bg-white/5 transition-colors"
                      >+</button>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id, item.size)}
                      className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 hover:text-red-600 transition-colors border-b border-zinc-800"
                    >Remove Item</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-zinc-900/50 border border-white/5 p-10 h-fit space-y-10">
            <h2 className="text-2xl font-bold uppercase tracking-tighter border-b border-white/10 pb-6">Manifest Summary</h2>
            <div className="space-y-6 text-sm">
              <div className="flex justify-between text-zinc-400">
                <span className="uppercase tracking-widest text-[10px] font-bold">Subtotal</span>
                <span className="font-mono">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span className="uppercase tracking-widest text-[10px] font-bold">Shipping Radar</span>
                <span className="font-mono">{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between text-white font-bold text-xl pt-8 border-t border-white/10">
                <span className="uppercase tracking-tighter">Total</span>
                <span className="font-mono">${total.toFixed(2)}</span>
              </div>
            </div>
            <button 
              onClick={handleCheckout}
              className="w-full bg-white text-black py-6 font-bold uppercase tracking-[0.2em] hover:bg-zinc-200 transition-all text-sm shadow-xl shadow-white/5"
            >
              Initiate Checkout
            </button>
            <div className="pt-6 flex flex-col items-center gap-4">
              <p className="text-[9px] text-zinc-600 text-center uppercase tracking-[0.3em] leading-relaxed">
                Secure transaction processing encrypted via Stripe Satellite Uplink
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-40 border border-dashed border-white/5 rounded-sm">
          <p className="text-zinc-500 uppercase tracking-[0.4em] mb-12 text-sm font-bold">Flight Bag is Empty</p>
          <Link href="/products" className="bg-white text-black px-12 py-5 font-bold uppercase tracking-widest hover:bg-zinc-200 transition-all text-xs">
            Return to Hangar
          </Link>
        </div>
      )}
    </div>
  );
}
