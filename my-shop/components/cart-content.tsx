"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { CiCircleRemove } from "react-icons/ci";
import { Button } from "./button";

import { useCart } from "@/context/cart-context";
import getProducts from "@/actions/get-products";
import { Product } from "@/types/types";

const CartContent = () => {
  const [newProducts, setNewProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const [foundProducts, setFoundProducts] = useState<Product[]>([]);
  const [cartData, setCartData] = useState<{ id: string; quantity: number }[]>(
    []
  );

  const data = newProducts.find((product) => product === product);
  const [quantity, setQuantity] = useState<number>(1);
  const { removeProductsToCart, productCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProducts({
          isFeatured: true,
        });

        setNewProducts(products);
        setLoading(false);
      } catch (error) {
        console.log("Erro ao buscar produtos", error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const foundProductsArray = [];
    const savedCart = localStorage.getItem("cart");

    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      setCartData(parsedCart);

      for (const cartItem of parsedCart) {
        const foundProduct = newProducts.find(
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
  }, [newProducts]);

  function handleQuantity(
    ev: React.ChangeEvent<HTMLInputElement>,
    productId: string
  ) {
    const newQuantity = parseInt(ev.target.value, 10);

    if (!isNaN(newQuantity) && newQuantity >= 1) {
      const productData = newProducts.find(
        (product) => product.id === productId
      );

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
    const product = newProducts.find((p) => p.id === productId);

    if (!product) {
      return 0;
    }

    const productQuantity =
      cartData.find((item) => item.id === productId)?.quantity || 0;

    const maxQuantity = product.quantity || 1;

    return parseFloat(product.price) * Math.min(productQuantity, maxQuantity);
  }

  const itemTotalPrices = newProducts.map((product) => ({
    id: product.id,
    totalPrice: calculateTotalPrice(product.id),
  }));

  const totalValue = itemTotalPrices.reduce(
    (total, item) => total + item.totalPrice,
    0
  );

  let deliveryMessage =
    "valor da entrega abaixo de 350 reais em compras  e de R$20,00";

  const deliveryFee = totalValue < 350 ? 20 : 0;

  if (totalValue >= 350) {
    deliveryMessage = "Free";
  }

  const finalTotalValue = totalValue + deliveryFee;

  return (
    <div className="py-10 px-20 max-md:px-1 ">
      <ul className="w-full border-collapse table-fixed whitespace-nowrap flex flex-col  items-center overflow-x-auto">
        <li className="border border-[#e2e9e1] border-l-0 border-r-0 mb-[15px] flex w-full lg:justify-center ">
          <ul className="flex py-[18px] font-bold uppercase text-[13px]">
            <li className="min-w-[100px] text-center">Remove</li>
            <li className="min-w-[150px] text-center">Image</li>
            <li className="min-w-[250px] text-center">Product</li>
            <li className="min-w-[150px] text-center">Price</li>
            <li className="min-w-[150px] text-center">Quantity</li>
            <li className="min-w-[150px] text-center">Subtotal</li>
          </ul>
        </li>
        <li className="flex w-full lg:justify-center">
          <ul className="flex flex-col gap-y-5">
            {newProducts.map((product) => (
              <li className="flex w-full" key={product.id}>
                <Button
                  onClick={() => removeProductsToCart(product.id)}
                  className="min-w-[100px] flex justify-center items-center hover:text-red-600"
                  icon={CiCircleRemove}
                />
                <div className="min-w-[150px] text-center justify-center flex">
                  <Image
                    alt="Image"
                    src={product.images}
                    width={1024}
                    height={720}
                    className="w-[70px]"
                  />
                </div>

                <h4 className="min-w-[250px] text-center text-[13px] items-center justify-center flex">
                  {product.name}
                </h4>

                <p className="min-w-[150px] text-center items-center justify-center flex text-[13px]">
                  R$: {product.price}
                </p>

                <div className="min-w-[150px] text-center items-center justify-end flex">
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
                <p className="min-w-[150px] text-center text-[13px] items-center justify-center flex">
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
                {totalValue}
              </h3>
            </li>
            <li className="flex">
              <h3 className=" w-[50%] border border-[#e2e9e1] p-[13px] text-[13px]">
                shipping
              </h3>
              <h3 className=" w-[50%] border border-[#e2e9e1] p-[13px] text-[13px]">
                {deliveryMessage}
              </h3>
            </li>
            <li className="flex">
              <h3 className=" w-[50%] border border-[#e2e9e1] p-[13px] text-[13px] font-extrabold">
                Total
              </h3>
              <h3 className=" w-[50%] border border-[#e2e9e1] p-[13px] text-[13px] font-extrabold">
                {finalTotalValue}
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
