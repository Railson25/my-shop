import React from "react";
import getProducts from "@/actions/get-products";

import { Button } from "@/components/button";
import { Feature } from "@/components/feature";
import { ProductsList } from "@/components/feature-products";

import { Header } from "@/components/header";

import { Information } from "@/components/information";
import { InformationCard } from "@/components/information-card";

import { Newsletter } from "@/components/newsletter";
import { Banner } from "@/components/banner";

export const revalidate = 0;

const Home = async () => {
  const featuredProducts = await getProducts({ isFeatured: true });
  const arrivalsProducts = await getProducts({ isArrival: true });

  return (
    <div>
      <Header
        billboardId="932969b0-d5ed-459b-a88b-6ed1279f81e8"
        textButton="Shop Now"
        isHeader
        hasButton
      />

      <Feature />

      <ProductsList title="Featured Products" items={featuredProducts} />

      <Banner />

      <ProductsList title="Arrival Products" items={arrivalsProducts} />

      <Information className="justify-center gap-x-3 gap-y-3">
        <InformationCard billboardId="e8ab7704-be6a-4a79-9fb9-e0adf1021a1d">
          <Button label="Learn more" banner />
        </InformationCard>
        <InformationCard billboardId="5c80d9e4-9192-4a41-82a5-924f2b34414e">
          <Button label="Collection" banner />
        </InformationCard>
      </Information>

      <Information className="py-0">
        <InformationCard
          billboardId="66ba852f-80e1-4bd3-9666-920d42c187c1"
          sell="Winter Collection -50% OFF"
          small
          className=" min-w-[30%] h-[30vh] p-5 mb-5"
        />
        <InformationCard
          billboardId="f1a15ccc-1560-4a1b-906c-f7303a268139"
          sell="Spring/Summer 2022"
          small
          className=" min-w-[30%] h-[30vh] p-5 mb-5"
        />
        <InformationCard
          billboardId="6a74a1e7-19d1-4940-b64d-0ca9d86876ad"
          sell="New Trendy Prints"
          small
          className=" min-w-[30%] h-[30vh] p-5 mb-5"
        />
      </Information>
      <Newsletter />
    </div>
  );
};

export default Home;
