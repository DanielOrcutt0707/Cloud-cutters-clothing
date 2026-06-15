'use client';

import { useState, useEffect } from 'react';

export default function FlightListPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const hasJoined = localStorage.getItem('joinedFlightList');
    if (!hasJoined) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 10000); // 10 seconds as requested
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Mock Klaviyo integration
      console.log('Joining Flight List:', email);
      localStorage.setItem('joinedFlightList', 'true');
      setSubmitted(true);
      setTimeout(() => setIsOpen(false), 2000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm text-white font-mono">
      <div className="relative w-full max-w-md bg-zinc-900 border-2 border-[#46C678] p-8 shadow-[0_0_30px_rgba(70,198,120,0.2)]">
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-zinc-500 hover:text-white"
        >
          [X]
        </button>

        {!submitted ? (
          <>
            <h2 className="text-3xl font-bold tracking-tighter text-[#46C678] mb-2">
              REQUESTING CLEARANCE.
            </h2>
            <p className="text-sm text-zinc-400 mb-6 uppercase tracking-widest">
              Join the Flight List for 1-hour early access to Drop #1: Clear Skies.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                placeholder="EMAIL_ADDRESS"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-black border border-zinc-700 p-3 focus:outline-none focus:border-[#46C678] text-[#46C678]"
              />
              <button
                type="submit"
                className="w-full bg-[#46C678] text-black font-bold py-3 hover:bg-[#3ba865] transition-colors uppercase"
              >
                JOIN THE FLEET
              </button>
            </form>
          </>
        ) : (
          <div className="py-10 text-center">
            <h2 className="text-2xl font-bold text-[#46C678] mb-2">CLEARANCE GRANTED.</h2>
            <p className="text-zinc-400 uppercase tracking-widest">You are on the Flight List.</p>
          </div>
        )}
      </div>
    </div>
  );
}
