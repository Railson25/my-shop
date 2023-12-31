"use client";

import { Product } from "@/types/types";
import { ProductCard } from "./feature-product-card";
import { useRouter } from "next/navigation";

interface ProductsListProps {
  title?: string;
  items: Product[];
  children?: React.ReactNode;
}

export const ProductsList = ({ title, items, children }: ProductsListProps) => {
  const router = useRouter();
  return (
    <div className="py-10 px-20 text-center bg-white max-[477px]:p-[20px]">
      <h1>{title}</h1>

      <div className="flex justify-between pt-5 flex-wrap max-md:justify-center max-md:gap-x-[15px]">
        {children
          ? null
          : items.map((item) => (
              <ProductCard
                key={item.id}
                data={item}
                onclick={() => router.push(`/shop/product/${item.id}`)}
              />
            ))}
        {children}
      </div>
    </div>
  );
};
