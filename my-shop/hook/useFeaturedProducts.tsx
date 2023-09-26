"use client";

import { FeatureProductCard } from "@/components/feature-product-card";
import { productsFeatured } from "@/mock/product";
import { useRouter } from "next/navigation";

export function useFeaturedProducts() {
  function SmallListComponent() {
    const router = useRouter();
    return (
      <>
        {productsFeatured.slice(0, 4).map((product) => (
          <FeatureProductCard
            key={product.id}
            src={product.src}
            brand={product.brand}
            name={product.name}
            price={product.price}
            onclick={() => router.push(`/shop/product/${product.id}`)}
          />
        ))}
      </>
    );
  }

  return {
    SmallListComponent,
  };
}
