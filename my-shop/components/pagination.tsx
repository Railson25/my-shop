"use client";

import React from "react";
import { Product, categories } from "@/mock/product";
import { FeatureProductCard } from "./feature-product-card";

import { FeatureProducts } from "./feature-products";
import { ButtonsPagination } from "./buttons-pagination";
import { usePagination } from "@/hook/usePagination";
import { useRouter } from "next/navigation";

const products = categories.reduce<Product[]>((prevProducts, category) => {
  return [...prevProducts, ...category.products];
}, []);

export const Pagination: React.FC = () => {
  const {
    currentData,
    nextPage,
    backPage,
    currentPage,
    goToPage,
    maxPage,
    goToInitialPage,
    goToLastPage,
  } = usePagination(products, 8);

  const router = useRouter();

  return (
    <>
      <FeatureProducts>
        {currentData().map((product) => (
          <FeatureProductCard
            key={product.id}
            src={product.src}
            brand={product.brand}
            name={product.name}
            price={product.price}
            onclick={() => router.push(`/shop/product/${product.id}`)}
          />
        ))}
      </FeatureProducts>
      <ButtonsPagination
        onNext={nextPage}
        onPrev={backPage}
        pageNumber={currentPage}
        onPage={goToPage}
        maxPage={maxPage}
        goToInitialPage={goToInitialPage}
        goToLastPage={goToLastPage}
      />
    </>
  );
};
