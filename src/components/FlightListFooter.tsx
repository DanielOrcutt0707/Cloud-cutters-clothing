'use client';

import { useState } from 'react';

export default function FlightListFooter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log('Joining Flight List (Footer):', email);
      localStorage.setItem('joinedFlightList', 'true');
      setSubmitted(true);
    }
  };

  return (
    <div className="border-t border-zinc-800 bg-black py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <h3 className="text-[#46C678] font-bold text-xl tracking-tighter uppercase mb-1">
            Stay in the loop.
          </h3>
          <p className="text-zinc-400 text-sm uppercase tracking-widest">
            Join the Flight List.
          </p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex w-full max-w-md gap-2 font-mono">
            <input
              type="email"
              placeholder="EMAIL"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-grow bg-zinc-900 border border-zinc-700 p-2 text-sm focus:outline-none focus:border-[#46C678] text-[#46C678]"
            />
            <button
              type="submit"
              className="bg-[#46C678] text-black px-6 py-2 text-sm font-bold hover:bg-[#3ba865] transition-colors"
            >
              SQUAWK
            </button>
          </form>
        ) : (
          <div className="text-[#46C678] font-bold uppercase tracking-widest">
            TRANSMISSION RECEIVED.
          </div>
        )}
      </div>
    </div>
  );
}
