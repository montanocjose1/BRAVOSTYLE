import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext";

export default function FeaturedProducts() {
  const { products, addToCart } = useShop();
  const featured = products.slice(0, 4);

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex items-end justify-between mb-16">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-smoke font-medium mb-3">Collection</p>
          <h2 className="text-4xl md:text-5xl font-black text-dark tracking-tight">Featured Products</h2>
        </div>
        <Link to="/shop" className="hidden md:inline-flex text-sm font-bold uppercase tracking-widest border-b-2 border-dark pb-1 hover:text-smoke hover:border-smoke transition-colors">
          View All
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {featured.map((product) => (
          <div key={product.id} className="group cursor-pointer">
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

      <div className="mt-10 text-center md:hidden">
        <Link to="/shop" className="inline-flex text-sm font-bold uppercase tracking-widest border-b-2 border-dark pb-1">
          View All
        </Link>
      </div>
    </section>
  );
}
