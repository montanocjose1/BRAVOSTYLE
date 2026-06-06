import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext";

export default function Cart() {
  const { cart, removeFromCart, updateQty, cartTotal } = useShop();

  if (cart.items.length === 0) {
    return (
      <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-black text-dark tracking-tight mb-6">Tu Carrito</h1>
        <p className="text-smoke mb-10">Tu carrito está vacío.</p>
        <Link
          to="/shop"
          className="inline-flex items-center justify-center px-10 py-4 bg-dark text-off-white text-sm font-bold uppercase tracking-widest hover:bg-dark/80 transition-colors"
        >
          Seguir Comprando
        </Link>
      </main>
    );
  }

  return (
    <main className="pt-32 pb-24 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-black text-dark tracking-tight mb-16">Tu Carrito</h1>

      <div className="flex flex-col gap-6">
        {cart.items.map((item) => (
          <div key={item.id} className="flex gap-6 pb-6 border-b border-dark/10">
            <div className="w-24 h-32 bg-dark/5 overflow-hidden shrink-0">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-semibold text-dark">{item.name}</h3>
                <p className="text-sm text-smoke mt-1">${item.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-dark/20">
                  <button
                    onClick={() => updateQty(item.id, item.qty - 1)}
                    className="px-3 py-1 text-sm hover:bg-dark/5 transition-colors"
                  >
                    -
                  </button>
                  <span className="px-3 py-1 text-sm font-medium border-x border-dark/20 min-w-[40px] text-center">
                    {item.qty}
                  </span>
                  <button
                    onClick={() => updateQty(item.id, item.qty + 1)}
                    className="px-3 py-1 text-sm hover:bg-dark/5 transition-colors"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-xs uppercase tracking-widest text-smoke hover:text-dark transition-colors font-medium"
                >
                  Eliminar
                </button>
              </div>
            </div>
            <p className="text-sm font-semibold text-dark shrink-0">
              ${(item.price * item.qty).toFixed(2)}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-col items-end gap-4">
        <div className="flex items-center gap-10">
          <span className="text-sm text-smoke uppercase tracking-widest font-medium">Total</span>
          <span className="text-2xl font-black text-dark">${cartTotal.toFixed(2)}</span>
        </div>
        <button className="px-12 py-4 bg-dark text-off-white text-sm font-bold uppercase tracking-widest hover:bg-dark/80 transition-colors">
          Finalizar Pedido
        </button>
        <p className="text-xs text-smoke/60 mt-2">Compra simple — sin necesidad de registro</p>
      </div>
    </main>
  );
}
