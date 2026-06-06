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
              Básicos oversize premium diseñados para el guardarropa moderno.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-5 text-off-white/60">Tienda</h4>
            <div className="flex flex-col gap-3">
              <Link to="/shop?category=oversized-tees" className="text-sm text-off-white/40 hover:text-off-white transition-colors">Camisetas Oversize</Link>
              <Link to="/shop?category=hoodies" className="text-sm text-off-white/40 hover:text-off-white transition-colors">Hoodies</Link>
              <Link to="/shop?category=essentials" className="text-sm text-off-white/40 hover:text-off-white transition-colors">Esenciales</Link>
              <Link to="/shop?category=new-drop" className="text-sm text-off-white/40 hover:text-off-white transition-colors">Nueva Colección</Link>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-5 text-off-white/60">Info</h4>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-sm text-off-white/40 hover:text-off-white transition-colors">Envíos</a>
              <a href="#" className="text-sm text-off-white/40 hover:text-off-white transition-colors">Devoluciones</a>
              <a href="#" className="text-sm text-off-white/40 hover:text-off-white transition-colors">Contacto</a>
              <a href="#" className="text-sm text-off-white/40 hover:text-off-white transition-colors">Instagram</a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-5 text-off-white/60">Soporte</h4>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-sm text-off-white/40 hover:text-off-white transition-colors">Guía de Tallas</a>
              <a href="#" className="text-sm text-off-white/40 hover:text-off-white transition-colors">FAQs</a>
              <a href="#" className="text-sm text-off-white/40 hover:text-off-white transition-colors">Rastrear Pedido</a>
              <a href="#" className="text-sm text-off-white/40 hover:text-off-white transition-colors">Privacidad</a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-off-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-off-white/30 font-light">
            &copy; 2026 BRAVOSTYLE. Todos los derechos reservados.
          </p>
          <p className="text-xs text-off-white/30 font-light tracking-wider uppercase">
            Básicos oversize premium.
          </p>
        </div>
      </div>
    </footer>
  );
}
