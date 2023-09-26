"use client";

import { Banner } from "@/components/banner";
import { Button } from "@/components/button";
import { Feature } from "@/components/feature";
import { FeatureProductCard } from "@/components/feature-product-card";
import { FeatureProducts } from "@/components/feature-products";

import { Header } from "@/components/header";

import { Information } from "@/components/information";
import { InformationCard } from "@/components/information-card";

import { Newsletter } from "@/components/newsletter";
import { categories } from "@/mock/product";
import { useRouter } from "next/navigation";
import React from "react";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <Header
        title="Trade-in-offer"
        subtitle="Super value deals"
        description="On all products"
        paragraph="Save more with coupons $ up to 70% off!"
        textButton="Shop Now"
        isHeader
        hasButton
      />

      <Feature />

      {categories.map((category, index) => (
        <React.Fragment key={category.name}>
          <FeatureProducts title={category.title} subtitle={category.subtitle}>
            {category.products.map((product) => (
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
          {index === 0 && <Banner />}
        </React.Fragment>
      ))}

      <Information className="justify-center gap-x-3 gap-y-3">
        <InformationCard
          title="crazy deals"
          subtitle="buy 1 get 1 free"
          description="The best classic dress is on sale at Less"
        >
          <Button label="Learn more" banner />
        </InformationCard>
        <InformationCard
          title="spring/summer"
          subtitle="upcoming season "
          description="The best classic dress is on sale at Less"
          className="bg-[url('/images/banner/b10.jpg')]"
        >
          <Button label="Collection" banner />
        </InformationCard>
      </Information>

      <Information className="py-0">
        <InformationCard
          subtitle="SEASONAL SALE "
          sell="Winter Collection -50% OFF"
          small
          className="bg-[url('/images/banner/b7.jpg')] min-w-[30%] h-[30vh] p-5 mb-5"
        />
        <InformationCard
          subtitle="SEASONAL SALE "
          sell="Winter Collection -50% OFF"
          small
          className="bg-[url('/images/banner/b4.jpg')] min-w-[30%] h-[30vh] p-5 mb-5"
        />
        <InformationCard
          subtitle="SEASONAL SALE "
          sell="Winter Collection -50% OFF"
          small
          className="bg-[url('/images/banner/b18.jpg')] min-w-[30%] h-[30vh] p-5 mb-5"
        />
      </Information>
      <Newsletter />
    </div>
  );
}
