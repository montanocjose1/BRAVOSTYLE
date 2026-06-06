import { createContext, useContext, useReducer } from "react";

const ShopContext = createContext();

const products = [
  { id: 1, name: "Camiseta Oversize Negra", price: 39.99, category: "Camisetas Oversize", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80" },
  { id: 2, name: "Camiseta Oversize Blanca", price: 39.99, category: "Camisetas Oversize", image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&q=80" },
  { id: 3, name: "Hoodie Premium Negro", price: 79.99, category: "Hoodies", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80" },
  { id: 4, name: "Hoodie Premium Gris", price: 79.99, category: "Hoodies", image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&q=80" },
  { id: 5, name: "Cargo Essential Negro", price: 69.99, category: "Esenciales", image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&q=80" },
  { id: 6, name: "Cargo Essential Beige", price: 69.99, category: "Esenciales", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80" },
  { id: 7, name: "Camiseta Oversize Gris", price: 39.99, category: "Camisetas Oversize", image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80" },
  { id: 8, name: "Hoodie con Cierre Premium", price: 89.99, category: "Hoodies", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80" },
];

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existing = state.items.find((i) => i.id === action.product.id);
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.id === action.product.id ? { ...i, qty: i.qty + 1 } : i
          ),
        };
      }
      return { ...state, items: [...state.items, { ...action.product, qty: 1 }] };
    }
    case "REMOVE_FROM_CART":
      return { ...state, items: state.items.filter((i) => i.id !== action.id) };
    case "UPDATE_QTY":
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === action.id ? { ...i, qty: Math.max(1, action.qty) } : i
        ),
      };
    default:
      return state;
  }
};

export function ShopProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, { items: [] });

  const addToCart = (product) => dispatch({ type: "ADD_TO_CART", product });
  const removeFromCart = (id) => dispatch({ type: "REMOVE_FROM_CART", id });
  const updateQty = (id, qty) => dispatch({ type: "UPDATE_QTY", id, qty });
  const cartCount = cart.items.reduce((sum, i) => sum + i.qty, 0);
  const cartTotal = cart.items.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <ShopContext.Provider value={{ products, cart, addToCart, removeFromCart, updateQty, cartCount, cartTotal }}>
      {children}
    </ShopContext.Provider>
  );
}

export const useShop = () => useContext(ShopContext);
