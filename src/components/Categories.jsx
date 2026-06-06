import { Link } from "react-router-dom";

const categories = [
  { name: "Camisetas Oversize", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80", slug: "oversized-tees" },
  { name: "Hoodies", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80", slug: "hoodies" },
  { name: "Esenciales", image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80", slug: "essentials" },
  { name: "Nueva Colección", image: "https://images.unsplash.com/photo-1608236415054-3d73e200bce4?w=800&q=80", slug: "new-drop" },
];

export default function Categories() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <p className="text-xs uppercase tracking-[0.3em] text-smoke font-medium mb-3">Categorías</p>
        <h2 className="text-4xl md:text-5xl font-black text-dark tracking-tight">Compra por Categoría</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
        {categories.map((cat, i) => (
          <Link
            key={i}
            to={`/shop?category=${cat.slug}`}
            className={`group relative overflow-hidden ${i === 0 ? "sm:col-span-2" : ""} ${i === 1 ? "sm:row-span-2" : ""}`}
          >
            <div className={`aspect-[4/3] ${i === 1 ? "sm:aspect-[3/4]" : ""} overflow-hidden`}>
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-dark/30 group-hover:bg-dark/20 transition-colors" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <h3 className="text-2xl md:text-4xl font-black text-off-white tracking-tight">{cat.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
