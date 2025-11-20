import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("cart") || "[]");
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(product) {
    setCart(prev => {
      const copy = [...prev];
      const idx = copy.findIndex(p => p.id === product.id);
      if (idx >= 0) copy[idx].qty = (copy[idx].qty || 1) + 1;
      else copy.push({ ...product, qty: 1 });
      return copy;
    });
  }

  function removeFromCart(id) {
    setCart(prev => prev.filter(p => p.id !== id));
  }

  const count = cart.reduce((s, p) => s + (p.qty || 1), 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, cartCount: count }}>
      {children}
    </CartContext.Provider>
  );
}