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
  const data = products.find((product) => product === product);

  const [foundProducts, setFoundProducts] = useState<Product[]>([]);
  const [cartData, setCartData] = useState<{ id: string; quantity: number }[]>(
    []
  );

  const [quantity, setQuantity] = useState<number>(1);

  console.log(quantity);

  const { removeProductsToCart, productCart } = useCart();

  useEffect(() => {
    const foundProductsArray = [];
    const savedCart = localStorage.getItem("cart");

    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      setCartData(parsedCart);

      for (const cartItem of parsedCart) {
        const foundProduct = products.find(
          (product) => product.id === cartItem.id
        );

        if (foundProduct) {
          foundProductsArray.push(foundProduct);
        } else {
          console.log(`Produto com o ID ${cartItem.id} não encontrado.`);
        }
      }

      setFoundProducts(foundProductsArray);
    }
  }, [productCart]);

  function handleQuantity(
    ev: React.ChangeEvent<HTMLInputElement>,
    productId: string
  ) {
    const newQuantity = parseInt(ev.target.value, 10);

    if (!isNaN(newQuantity) && newQuantity >= 1) {
      const productData = products.find((product) => product.id === productId);

      if (productData) {
        const maxQuantity = productData.quantity || 1;

        if (newQuantity > maxQuantity) {
          setQuantity(maxQuantity);
        } else {
          const updatedCartData = cartData.map((item) =>
            item.id === productId ? { ...item, quantity: newQuantity } : item
          );
          setCartData(updatedCartData);
        }
      } else {
        console.log(`Produto com o ID ${productId} não encontrado.`);
      }
    }
  }

  function calculateTotalPrice(productId: string) {
    const product = foundProducts.find((p) => p.id === productId);

    if (!product) {
      return 0;
    }

    const productQuantity =
      cartData.find((item) => item.id === productId)?.quantity || 0;

    const maxQuantity = product.quantity || 1;

    return parseFloat(product.price) * Math.min(productQuantity, maxQuantity);
  }

  const itemTotalPrices = foundProducts.map((product) => ({
    id: product.id,
    totalPrice: calculateTotalPrice(product.id),
  }));

  return (
    <div className="py-10 px-20 max-md:px-1 ">
      <ul className="w-full border-collapse table-fixed whitespace-nowrap flex flex-col  items-center overflow-x-auto">
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
                    value={
                      cartData.find((item) => item.id === product.id)
                        ?.quantity || 0
                    }
                    onChange={(ev) => handleQuantity(ev, product.id)}
                    type="number"
                    className="w-[70px] py-[10px] pr-[5px] pl-[15px]  "
                  />
                </div>
                <p className="w-[150px] text-center text-[13px] items-center justify-center flex">
                  R$: {calculateTotalPrice(product.id).toFixed(2)}
                </p>
              </li>
            ))}
          </ul>
        </li>
      </ul>

      <div className="flex flex-wrap justify-between pt-10 max-md:flex-col">
        <div className="w-[50%] mb-[30px] max-md:w-full">
          <h3 className="pb-[15px]">Apply Coupon</h3>
          <div>
            <input
              type="text"
              placeholder="Enter Your Coupon"
              className="py-[10px] px-5 outline-none w-[60%] mr-[10px] border border-[#e2e9e1]"
            />
            <Button className="border border-solid border-[#088178] bg-[#088178] text-white py-3 px-5 hover:bg-white hover:text-[#088178]">
              Apply
            </Button>
          </div>
        </div>

        <div className="w-[50%] mb-[30px] border border-[#e2e9e1] p-[30px] max-md:w-full">
          <h3 className="font-semibold pb-[30px]">Cart total</h3>
          <ul className="border-collapse mb-5">
            <li className="flex">
              <h3 className=" w-[50%] border border-[#e2e9e1] p-[13px] text-[13px]">
                Cart subtotal
              </h3>
              <h3 className=" w-[50%] border border-[#e2e9e1] p-[13px] text-[13px]">
                $ 335
              </h3>
            </li>
            <li className="flex">
              <h3 className=" w-[50%] border border-[#e2e9e1] p-[13px] text-[13px]">
                shipping
              </h3>
              <h3 className=" w-[50%] border border-[#e2e9e1] p-[13px] text-[13px]">
                Free
              </h3>
            </li>
            <li className="flex">
              <h3 className=" w-[50%] border border-[#e2e9e1] p-[13px] text-[13px] font-extrabold">
                Total
              </h3>
              <h3 className=" w-[50%] border border-[#e2e9e1] p-[13px] text-[13px] font-extrabold">
                $335
              </h3>
            </li>
          </ul>
          <Button className="border border-solid border-[#088178] bg-[#088178] text-white py-3 px-5 hover:bg-white hover:text-[#088178] ">
            Proceed to checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartContent;
