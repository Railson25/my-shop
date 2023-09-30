"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { CiCircleRemove } from "react-icons/ci";
import { Button } from "./button";
import { Product, categories } from "@/mock/product";

import { useCart } from "@/context/cart-context";

const products = categories.reduce<Product[]>((prevProducts, category) => {
  return [...prevProducts, ...category.products];
}, []);

const CartContent = () => {
  const [foundProducts, setFoundProducts] = useState<Product[]>([]);
  const { removeProductsToCart, productCart } = useCart();
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    const foundProductsArray = [];

    for (const productCartItem of productCart) {
      const foundProduct = products.find(
        (product) => product.id === productCartItem.id
      );

      if (foundProduct) {
        foundProductsArray.push(foundProduct);
      } else {
        console.log(`Produto com o ID ${productCartItem.id} não encontrado.`);
      }
    }

    setFoundProducts(foundProductsArray);
  }, [productCart]);

  function handleQuantity(ev: any) {
    let value = ev.target.value;

    if (value >= 5) {
      return setQuantity(5);
    } else if (value <= 0) {
      return setQuantity(1);
    }
    setQuantity(value);
    console.log(ev.target.value);
  }

  function calculateTotalPrice() {
    let total = 0;

    for (const product of foundProducts) {
      total += parseFloat(product.price) * quantity;
    }

    return total;
  }

  const totalPrice = calculateTotalPrice();

  return (
    <div className="py-10 px-20">
      <ul className="w-full border-collapse table-fixed whitespace-nowrap flex flex-col justify-center items-center">
        <li className="border border-[#e2e9e1] border-l-0 border-r-0 mb-[15px] ">
          <ul className="flex py-[18px] font-bold uppercase text-[13px]">
            <li className="w-[100px] text-center">Remove</li>
            <li className="w-[150px] text-center">Image</li>
            <li className="w-[250px] text-center">Product</li>
            <li className="w-[150px] text-center">Price</li>
            <li className="w-[150px] text-center">Quantity</li>
            <li className="w-[150px] text-center">Subtotal</li>
          </ul>
        </li>
        <li>
          <ul className="flex flex-col gap-y-5">
            {foundProducts.map((product) => (
              <li className="flex" key={product.id}>
                <Button
                  onClick={() => removeProductsToCart(product.id)}
                  className="w-[100px] flex justify-center items-center hover:text-red-600"
                  icon={CiCircleRemove}
                />
                <div className="w-[150px] text-center justify-center flex">
                  <Image
                    alt="Image"
                    src={product.src}
                    width={1024}
                    height={720}
                    className="w-[70px]"
                  />
                </div>

                <h4 className="w-[250px] text-center text-[13px] items-center justify-center flex">
                  {product.name}
                </h4>

                <p className="w-[150px] text-center items-center justify-center flex text-[13px]">
                  R$: {product.price}
                </p>

                <div className="w-[150px] text-center items-center justify-end flex">
                  <input
                    value={quantity}
                    onChange={handleQuantity}
                    type="number"
                    className="w-[70px] py-[10px] pr-[5px] pl-[15px]  "
                  />
                </div>
                <p className="w-[150px] text-center text-[13px] items-center justify-center flex">
                  R$: {totalPrice.toFixed(2)}
                </p>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default CartContent;
