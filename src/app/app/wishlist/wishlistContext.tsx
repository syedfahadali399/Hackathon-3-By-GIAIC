'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface Product {
  id: any;
  title: string;
  price: number;
  description: string;
  discountPercentage: number;
  image: string;
  isNew: boolean;
  // Add other product properties you need
}

interface WishlistContextType {
  wishlistItems: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [wishlistItems, setWishlistItems] = useState<Product[]>([]);

  // Load from localStorage on initial render
  useEffect(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    if (savedWishlist) {
      setWishlistItems(JSON.parse(savedWishlist));
    }
  }, []);

  // Save to localStorage whenever wishlist changes
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const addToWishlist = (product: Product) => {
    setWishlistItems((prevItems) => {
      if (!prevItems.find((item) => item.id === product.id)) {
        return [...prevItems, product];
      }
      return prevItems;
    });
  };

  const removeFromWishlist = (productId: string) => {
    setWishlistItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  const isInWishlist = (productId: string) => {
    return wishlistItems.some((item) => item.id === productId);
  };

  return (
    <WishlistContext.Provider
      value={{ wishlistItems, addToWishlist, removeFromWishlist, isInWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};

// import React, { createContext, useContext, useState, ReactNode } from 'react'

// // Define your product interface (adjust as needed)
// export interface Product {
//   id: number
//   title: string
//   price: number
//   description: string
//   discountPercentage: number
//   image: string
//   isNew: boolean
//   quantity: number
// }

// interface WishlistContextType {
//   wishlist: Product[]
//   addToWishlist: (product: Product) => void
//   removeFromWishlist: (id: number) => void
// }

// const WishlistContext = createContext<WishlistContextType>({
//   wishlist: [],
//   addToWishlist: () => {},
//   removeFromWishlist: () => {},
// })

// export const WishlistProvider = ({ children }: { children: ReactNode }) => {
//   const [wishlist, setWishlist] = useState<Product[]>([])

//   const addToWishlist = (product: Product) => {
//     setWishlist((prev) => {
//       // Avoid duplicates
//       if (prev.find((item) => item.id === product.id)) {
//         return prev
//       }
//       return [...prev, product]
//     })
//   }

//   const removeFromWishlist = (id: number) => {
//     setWishlist((prev) => prev.filter((product) => product.id !== id))
//   }

//   return (
//     <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
//       {children}
//     </WishlistContext.Provider>
//   )
// }

// // Custom hook for easier access in components
// export const useWishlist = () => useContext(WishlistContext)
