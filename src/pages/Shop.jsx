import { useSearchParams } from "react-router-dom";
import { useShop } from "../context/ShopContext";

export default function Shop() {
  const { products, addToCart } = useShop();
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  const filtered = category
    ? products.filter((p) => p.category.toLowerCase().replace(/\s+/g, "-") === category)
    : products;

  return (
    <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <p className="text-xs uppercase tracking-[0.3em] text-smoke font-medium mb-3">Collection</p>
        <h1 className="text-4xl md:text-6xl font-black text-dark tracking-tight">
          {category ? category.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) : "All Products"}
        </h1>
      </div>

      {filtered.length === 0 ? (
        <p className="text-smoke">No products found in this category.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filtered.map((product) => (
            <div key={product.id} className="group">
              <div className="aspect-[3/4] overflow-hidden bg-dark/5 mb-5">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-sm font-semibold text-dark tracking-wide">{product.name}</h3>
              <p className="text-sm text-smoke mt-1 font-medium">${product.price.toFixed(2)}</p>
              <button
                onClick={() => addToCart(product)}
                className="mt-4 w-full py-3 bg-dark text-off-white text-xs font-bold uppercase tracking-widest hover:bg-dark/80 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
