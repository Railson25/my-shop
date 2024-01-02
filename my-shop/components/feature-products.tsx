"use client";

import { Product } from "@/types/types";
import { ProductCard } from "./feature-product-card";

interface ProductsListProps {
  title: string;
  items: Product[];
}

export const ProductsList = ({ title, items }: ProductsListProps) => {
  return (
    <div className="py-10 px-20 text-center bg-white max-[477px]:p-[20px]">
      <h1>{title}</h1>

      <div className="flex justify-between pt-5 flex-wrap max-md:justify-center max-md:gap-x-[15px]">
        {items.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};
