"use client";

import Image from "next/image";
import React from "react";
import { CiCircleRemove } from "react-icons/ci";
import { Button } from "./button";
import { Product, categories } from "@/mock/product";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/cart-context";

const products = categories.reduce<Product[]>((prevProducts, category) => {
  return [...prevProducts, ...category.products];
}, []);

const CartContent = () => {
  const router = useRouter();

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
            <li className="flex">
              <Button
                className="w-[100px] flex justify-center items-center hover:text-red-600"
                icon={CiCircleRemove}
              />
              <div className="w-[150px] text-center justify-center flex">
                <Image
                  alt="Image"
                  src="/images/f1.png"
                  width={1024}
                  height={720}
                  className="w-[70px]"
                />
              </div>

              <h4 className="w-[250px] text-center text-[13px] items-center justify-center flex"></h4>

              <p className="w-[150px] text-center items-center justify-center flex text-[13px]"></p>

              <div className="w-[150px] text-center items-center justify-end flex">
                <input
                  type="number"
                  className="w-[70px] py-[10px] pr-[5px] pl-[15px]  "
                />
              </div>
              <p className="w-[150px] text-center text-[13px] items-center justify-center flex"></p>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default CartContent;
