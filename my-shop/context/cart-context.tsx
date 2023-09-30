"use client";

import React, { createContext, useContext, useState } from "react";

interface Product {
  id: string;
  quantity: number;
}

interface CartContextType {
  productCart: Product[];
  addProductsToCart: (id: string) => void;
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

  function addProductsToCart(id: string) {
    const updateProductsCart = [...productCart];
    const item = updateProductsCart.find((product) => product.id === id);

    if (!item) {
      updateProductsCart.push({ id: id, quantity: 1 });
    } else {
      item.quantity = item.quantity + 1;
    }
    setProductCart(updateProductsCart);
  }

  function removeProductsToCart(id: string) {
    const updateProductsCart = [...productCart];
    const item = updateProductsCart.find((product) => product.id === id);

    if (item?.quantity && item?.quantity > 1) {
      item.quantity = item.quantity - 1;
      setProductCart(updateProductsCart);
    } else {
      const arrayFiltered = updateProductsCart.filter(
        (product) => product.id !== id
      );

      setProductCart(arrayFiltered);
    }
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
