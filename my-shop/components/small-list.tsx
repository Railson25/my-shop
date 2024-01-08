"use client";

import React, { useEffect, useState } from "react";
import { ProductCard } from "@/components/feature-product-card";
import { useRouter } from "next/navigation";
import getProducts from "@/actions/get-products";
import { Product } from "@/types/types";

export const SmallListComponent = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const products = await getProducts({ isFeatured: true });
      setFeaturedProducts(products);
    };

    fetchData();
  }, []);

  return (
    <>
      {featuredProducts?.slice(0, 4).map((product) => (
        <ProductCard
          key={product.id}
          data={product}
          onclick={() => router.push(`/shop/product/${product.id}`)}
        />
      ))}
    </>
  );
};
