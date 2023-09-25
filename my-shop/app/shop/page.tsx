import { Header } from "@/components/header";

import React from "react";
import { Pagination } from "@/components/pagination";

const Shop = () => {
  return (
    <div>
      <Header
        subtitle="#stayhome"
        paragraph="Save more with coupon & up to 70% off"
        h2Style="font-bold text-white"
        pStyle="text-white"
        className="bg-[url('/images/banner/b1.jpg')]  h-[40vh] items-center p-[14px] "
      />

      <Pagination />
    </div>
  );
};

export default Shop;
