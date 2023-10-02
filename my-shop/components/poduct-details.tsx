"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "./button";

import { productsFeatured } from "@/mock/product";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/cart-context";

export const ProductDetails = (props: { id: string }) => {
  const [mainImage, setMainImage] = useState<string>("");

  const [load, setLoad] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleChangeMainImage = (newImage: string) => {
    setMainImage(newImage);
  };

  const router = useRouter();

  const data = productsFeatured.find((product) => product.id === props.id);
  const { addProductsToCart } = useCart();
  useEffect(() => {
    if (data) {
      setMainImage(data?.src);
      setLoad(true);
    }
  }, [data]);

  if (!data) {
    router.back();
  }

  if (!load) {
    return;
  }

  function handleQuantity(ev: any) {
    let value = ev.target.value;

    if (data && data.quantity !== undefined) {
      if (value >= data.quantity) {
        setQuantity(data.quantity);
      } else if (value <= 0) {
        setQuantity(1);
      } else {
        setQuantity(value);
      }
      console.log(ev.target.value);
    }
  }

  function goTocart() {
    if (data?.id) {
      addProductsToCart(data.id, quantity);
      console.log(quantity);
    }
    router.push("/cart");
  }

  return (
    <div className="py-10 px-20 flex mt-5 max-md:flex-col max-md:px-10">
      <div className="w-[40%] mr-[50px] max-md:w-full max-md:m-0">
        <Image alt="Product Image" src={mainImage} width={1024} height={720} />

        <div className="flex justify-between pt-2">
          {data?.colors?.slice(0, 4).map((images: any, index) => (
            <div
              key={index}
              className="flex basis-[24%] cursor-pointer"
              onClick={() => handleChangeMainImage(images)}
            >
              <Image
                alt="Product Image"
                src={images}
                width={1024}
                height={720}
                className="basis-[24%]"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="w-[50%] pt-[30px] max-md:w-full">
        <h6>Home / T-Shirt</h6>
        <h4 className="pt-10 pb-5 font-bold">{data?.name}</h4>
        <h2 className="text-[26px] font-bold">{data?.price} </h2>

        <select className="block py-[5px] px-[10px] mb-[10px]">
          <option>Select Size</option>
          {data?.sizes?.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>

        <input
          type="number"
          value={quantity}
          onChange={handleQuantity}
          className="w-[50px] h-[47px] pl-[10px] text-[16px] mr-[10px] focus:outline-none border border-solid border-neutral-400 rounded"
        />
        <Button
          onClick={() => goTocart()}
          label="Add To cart"
          className="bg-[#088178] text-white hover:bg-white hover:text-[#088178] border border-solid hover:border-[#088178]"
        />
        <h4 className="pt-10 pb-5 font-bold">Product Details</h4>
        <span className="leading-[25px]">{data?.description}</span>
      </div>
    </div>
  );
};
