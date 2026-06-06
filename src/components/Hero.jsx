import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1608236415054-3d73e200bce4?w=1920&q=80"
          alt="BRAVOSTYLE streetwear"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-dark/60" />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center px-6 max-w-7xl mx-auto">
        <p className="text-sm uppercase tracking-[0.3em] text-beige mb-4 font-medium">
          Premium oversized essentials
        </p>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-off-white leading-[0.85] tracking-tighter">
          BUILT FOR
          <br />
          THE STREET
        </h1>
        <p className="mt-6 max-w-md text-off-white/70 text-sm md:text-base leading-relaxed font-light">
          Premium oversized essentials designed for confidence, comfort and presence.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            to="/shop"
            className="inline-flex items-center justify-center px-10 py-4 bg-off-white text-dark text-sm font-bold uppercase tracking-widest hover:bg-beige transition-colors"
          >
            Shop Now
          </Link>
          <Link
            to="/shop"
            className="inline-flex items-center justify-center px-10 py-4 border-2 border-off-white text-off-white text-sm font-bold uppercase tracking-widest hover:bg-off-white hover:text-dark transition-colors"
          >
            New Drop
          </Link>
        </div>
      </div>
    </section>
  );
}
