import { useState } from "react";
import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { cartCount } = useShop();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-off-white/90 backdrop-blur-md border-b border-dark/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-2xl font-black tracking-tighter text-dark">
          BRAVOSTYLE
        </Link>

        <div className="hidden md:flex items-center gap-10 text-sm font-medium uppercase tracking-widest">
          <Link to="/" className="hover:text-smoke transition-colors">Home</Link>
          <Link to="/shop" className="hover:text-smoke transition-colors">Shop</Link>
          <Link to="/cart" className="relative hover:text-smoke transition-colors">
            Cart
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-5 text-[10px] bg-dark text-off-white w-4 h-4 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-[2px] bg-dark transition-transform ${open ? "rotate-45 translate-y-[4px]" : ""}`} />
          <span className={`block w-6 h-[2px] bg-dark transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-[2px] bg-dark transition-transform ${open ? "-rotate-45 -translate-y-[4px]" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-off-white border-t border-dark/5 px-6 pb-6 pt-2 flex flex-col gap-4 text-sm font-medium uppercase tracking-widest">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/shop" onClick={() => setOpen(false)}>Shop</Link>
          <Link to="/cart" onClick={() => setOpen(false)}>
            Cart {cartCount > 0 ? `(${cartCount})` : ""}
          </Link>
        </div>
      )}
    </nav>
  );
}
