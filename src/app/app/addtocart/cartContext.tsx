"use client"
import { createContext, useContext, useState, ReactNode } from "react";

// Define Product Type
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  discountPercentage: number;
  image: string;
  isNew: boolean;
}

interface CartItem extends Product {
  quantity: number;
}

// Define Cart Context Type
interface CartContextType {
  cart: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (id: number) => void;
}

// Create Context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Create Provider Component
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: CartItem) => {
    setCart((prevCart) => [...prevCart, product]);
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
            return {
              items: cart.map(item => 
                item.id === product.id 
                  ? { ...item, quantity: item.quantity + 1 } 
                  : item
              )
            };
          }
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom Hook
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

// import { create } from 'zustand';

// interface Product {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   discountPercentage: number;
//   image: string;
//   isNew: boolean;
// }

// interface CartItem extends Product {
//   quantity: number;
// }

// interface CartStore {
//   items: CartItem[];
//   addItem: (product: Product) => void;
//   removeItem: (productId: number) => void;
// }

// export const useCartStore = create<CartStore>((set) => ({
//   items: [],
//   addItem: (product) => set((state) => {
//     const existingItem = state.items.find(item => item.id === product.id);
//     if (existingItem) {
//       return {
//         items: state.items.map(item => 
//           item.id === product.id 
//             ? { ...item, quantity: item.quantity + 1 } 
//             : item
//         )
//       };
//     }
//     return { items: [...state.items, { ...product, quantity: 1 }] };
//   }),
//   removeItem: (productId) => set((state) => ({
//     items: state.items.filter(item => item.id !== productId)
//   })),
// }));
// export const useCart = () => {
//   const context = useContext(useCartStore);
//   if (!context) {
//     throw new Error("useCart must be used within a CartProvider");
//   }
//   return context;
// };