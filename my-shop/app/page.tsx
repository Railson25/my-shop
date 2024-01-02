import React from "react";
import getProducts from "@/actions/get-products";

import { Button } from "@/components/button";
import { Feature } from "@/components/feature";
import { ProductsList } from "@/components/feature-products";

import { Header } from "@/components/header";

import { Information } from "@/components/information";
import { InformationCard } from "@/components/information-card";

import { Newsletter } from "@/components/newsletter";

export const revalidate = 0;

const Home = async () => {
  const newProducts = await getProducts({ isFeatured: true });

  console.log(newProducts);

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

      <ProductsList title="Featured Products" items={newProducts} />

      <Information className="justify-center gap-x-3 gap-y-3">
        <InformationCard billboardId="e8ab7704-be6a-4a79-9fb9-e0adf1021a1d">
          <Button label="Learn more" banner />
        </InformationCard>
        <InformationCard billboardId="e8ab7704-be6a-4a79-9fb9-e0adf1021a1d">
          <Button label="Collection" banner />
        </InformationCard>
      </Information>

      <Information className="py-0">
        <InformationCard
          billboardId="e8ab7704-be6a-4a79-9fb9-e0adf1021a1d"
          sell="Winter Collection -50% OFF"
          small
          className=" min-w-[30%] h-[30vh] p-5 mb-5"
        />
        <InformationCard
          billboardId="5c80d9e4-9192-4a41-82a5-924f2b34414e"
          sell="Winter Collection -50% OFF"
          small
          className=" min-w-[30%] h-[30vh] p-5 mb-5"
        />
        <InformationCard
          billboardId="e8ab7704-be6a-4a79-9fb9-e0adf1021a1d"
          sell="Winter Collection -50% OFF"
          small
          className=" min-w-[30%] h-[30vh] p-5 mb-5"
        />
      </Information>
      <Newsletter />
    </div>
  );
};

export default Home;
