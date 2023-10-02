"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface Product {
  id: string;
  quantity: number;
}

interface CartContextType {
  productCart: Product[];
  addProductsToCart: (id: string, quantity: number) => void;
  removeProductsToCart: (id: string) => void;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export default function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [productCart, setProductCart] = useState<Product[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setProductCart(JSON.parse(savedCart));
    }
  }, []);

  function addProductsToCart(id: string, quantity: number) {
    const updateProductsCart = [...productCart];
    const item = updateProductsCart.find((product) => product.id === id);

    if (!item) {
      updateProductsCart.push({ id: id, quantity: quantity });
    } else {
      item.quantity = quantity;
      console.log(item);
    }
    localStorage.setItem("cart", JSON.stringify(updateProductsCart));
    setProductCart(updateProductsCart);
  }

  function removeProductsToCart(id: string) {
    const updateProductsCart = [...productCart];
    const item = updateProductsCart.find((product) => product.id === id);

    const arrayFiltered = updateProductsCart.filter(
      (product) => product.id !== id
    );

    localStorage.setItem("cart", JSON.stringify(arrayFiltered));
    setProductCart(arrayFiltered);
  }

  return (
    <CartContext.Provider
      value={{ productCart, addProductsToCart, removeProductsToCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
