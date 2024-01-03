"use client";

import React, { useEffect, useState } from "react";
import { Product } from "@/types/types";

import { ProductCard } from "./feature-product-card";

import { ProductsList } from "./feature-products";
import { ButtonsPagination } from "./buttons-pagination";
import { usePagination } from "@/hook/usePagination";

import getProducts from "@/actions/get-products";
import { useRouter } from "next/navigation";

export const Pagination: React.FC = () => {
  const [newProducts, setNewProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  console.log(newProducts);

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

  const {
    currentData,
    nextPage,
    backPage,
    currentPage,
    goToPage,
    maxPage,
    goToInitialPage,
    goToLastPage,
  } = usePagination(newProducts, 8);

  if (loading) {
    <div className="animate-spin p-5">CARREGABDOOOOOOOOOOOO</div>;
    console.log("aquuuuuuuuuuuuuuuuuuui");
  }

  return (
    <>
      <ProductsList items={newProducts}>
        {currentData().map((product) => (
          <ProductCard
            key={product.id}
            data={product}
            onclick={() => router.push(`/shop/product/${product.id}`)}
          />
        ))}
      </ProductsList>
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
