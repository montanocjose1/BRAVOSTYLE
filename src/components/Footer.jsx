import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark text-off-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="text-2xl font-black tracking-tighter">
              BRAVOSTYLE
            </Link>
            <p className="mt-4 text-sm text-off-white/40 font-light leading-relaxed">
              Premium oversized basics engineered for the modern wardrobe.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-5 text-off-white/60">Shop</h4>
            <div className="flex flex-col gap-3">
              <Link to="/shop?category=oversized-tees" className="text-sm text-off-white/40 hover:text-off-white transition-colors">Oversized Tees</Link>
              <Link to="/shop?category=hoodies" className="text-sm text-off-white/40 hover:text-off-white transition-colors">Hoodies</Link>
              <Link to="/shop?category=essentials" className="text-sm text-off-white/40 hover:text-off-white transition-colors">Essentials</Link>
              <Link to="/shop?category=new-drop" className="text-sm text-off-white/40 hover:text-off-white transition-colors">New Drop</Link>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-5 text-off-white/60">Info</h4>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-sm text-off-white/40 hover:text-off-white transition-colors">Shipping</a>
              <a href="#" className="text-sm text-off-white/40 hover:text-off-white transition-colors">Returns</a>
              <a href="#" className="text-sm text-off-white/40 hover:text-off-white transition-colors">Contact</a>
              <a href="#" className="text-sm text-off-white/40 hover:text-off-white transition-colors">Instagram</a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-5 text-off-white/60">Support</h4>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-sm text-off-white/40 hover:text-off-white transition-colors">Size Guide</a>
              <a href="#" className="text-sm text-off-white/40 hover:text-off-white transition-colors">FAQs</a>
              <a href="#" className="text-sm text-off-white/40 hover:text-off-white transition-colors">Track Order</a>
              <a href="#" className="text-sm text-off-white/40 hover:text-off-white transition-colors">Privacy</a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-off-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-off-white/30 font-light">
            &copy; 2026 BRAVOSTYLE. All rights reserved.
          </p>
          <p className="text-xs text-off-white/30 font-light tracking-wider uppercase">
            Premium oversized basics.
          </p>
        </div>
      </div>
    </footer>
  );
}
