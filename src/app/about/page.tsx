import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <h1 className="text-xs font-bold uppercase tracking-[0.5em] text-zinc-500 mb-8">The Mission</h1>
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase mb-12 leading-[0.9]">
            Aviation <br />
            Is Art.
          </h2>
          
          <div className="prose prose-invert prose-xl space-y-8 text-zinc-400">
            <p>
              <strong className="text-white">CLOUD CUTTERS</strong> was born at the intersection of technical precision and urban expression. We believe the visual language of flight—from METAR codes to attitude indicators—is one of the most beautiful and overlooked art forms in the world.
            </p>
            <p>
              We don't do "souvenir shop" gear. We don't do pilot puns. We build premium-quality streetwear that pilots, plane spotters, and aviation geeks actually want to wear. Minimalist. Authentic. Technical.
            </p>
            <p>
              Our garments are designed for those who spend their time looking up, whether they're in the left seat or on the terminal fence.
            </p>
            <p className="text-white font-mono text-sm tracking-widest border-l-2 border-red-600 pl-6 py-2">
              EST. 2024 / DESIGNED FOR ALTITUDE
            </p>
          </div>
        </div>

        <div className="relative aspect-square bg-zinc-900 rounded-sm overflow-hidden">
          <Image 
            src="/images/branding/cloud-cutters-logo-v4.png" 
            alt="Cloud Cutters Mission" 
            fill
            className="object-contain p-20 opacity-20"
          />
          <div className="absolute inset-0 flex items-center justify-center p-12">
            <p className="text-4xl font-bold tracking-tighter uppercase text-center leading-none">
              "For those who live for the clearance, the climb, and the view from above."
            </p>
          </div>
        </div>
      </div>

      <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-20">
        <div className="space-y-4">
          <h3 className="text-white font-bold uppercase tracking-[0.3em] text-xs">Technical Specs</h3>
          <p className="text-sm text-zinc-500 leading-relaxed">
            We use heavyweight 450GSM cottons, high-density puff prints, and precision embroidery. Every piece is built to handle the G-forces of daily life.
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-white font-bold uppercase tracking-[0.3em] text-xs">Limited Drops</h3>
          <p className="text-sm text-zinc-500 leading-relaxed">
            Exclusivity is our flight plan. We release designs in small-batch collections. Once the radar clears, that drop is gone forever.
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-white font-bold uppercase tracking-[0.3em] text-xs">Global Reach</h3>
          <p className="text-sm text-zinc-500 leading-relaxed">
            Based in the flight path of major hubs, we ship worldwide. From general aviation hangars to international terminals, the community is global.
          </p>
        </div>
      </div>
    </div>
  );
}
