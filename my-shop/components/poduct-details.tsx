"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "./button";

import { useRouter } from "next/navigation";
import { useCart } from "@/context/cart-context";

import getProducts from "@/actions/get-products";
import { Image as ImageType, Product } from "@/types/types";

export const ProductDetails = (props: { id: string }) => {
  const [newProducts, setNewProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const [mainImage, setMainImage] = useState<string>("");

  const [load, setLoad] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const router = useRouter();

  const data = newProducts.find((product) => product.id === props.id);

  console.log(data);

  const handleChangeMainImage = (images: ImageType) => {
    setMainImage(images.url);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProducts({ isFeatured: true });

        setNewProducts(products);
        setLoading(false);
      } catch (error) {
        console.log("Erro ao buscar produtos", error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const { addProductsToCart } = useCart();
  useEffect(() => {
    if (data) {
      const singleImage: ImageType = data.images[0];
      setMainImage(singleImage.url);
      setLoad(true);
    }
  }, [data]);

  if (!load) {
    return;
  }

  if (!data && load) {
    router.back();
  }

  function handleQuantity(ev: any) {
    let value = ev.target.value;

    // {TODO: CRIAR UM CAMPO DE QUANTIDADE E/OU MELHORAR ESSA LOGICA }
    // if (data && data.quantity !== undefined) {
    //   if (value >= data.quantity) {
    //     setQuantity(data.quantity);
    //   } else if (value <= 0) {
    //     setQuantity(1);
    //   } else {
    //     setQuantity(value);
    //   }
    //   console.log(ev.target.value);
    // }
  }

  function goTocart() {
    if (data?.id) {
      addProductsToCart(data.id);
      console.log(data.id);
    }
    router.push("/cart");
  }

  return (
    <div className="py-10 px-20 flex mt-5 max-md:flex-col max-md:px-10">
      <div className="w-[40%] mr-[50px] max-md:w-full max-md:m-0">
        <Image alt="Product Image" src={mainImage} width={1024} height={720} />

        <div className="flex justify-between pt-2">
          {data?.images?.slice(0, 4).map((images: ImageType) => (
            <div
              key={images.id}
              className="flex basis-[24%] cursor-pointer"
              onClick={() => handleChangeMainImage(images)}
            >
              <Image
                alt="Product Image"
                src={images.url}
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
          {data?.size && (
            <option key={data.size.id} value={data.size.value}>
              {data.size.name}
            </option>
          )}
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
