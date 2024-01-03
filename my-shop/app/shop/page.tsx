import { Header } from "@/components/header";

import React from "react";
import { Pagination } from "@/components/pagination";

const Shop = () => {
  return (
    <div>
      <Header
        billboardId="620b3a33-aaa9-4ddc-b2c0-fa64fa4b16aa"
        h2Style="font-bold text-white"
        pStyle="text-white"
        className=" h-[40vh] items-center p-[14px] "
      />

      <Pagination />
    </div>
  );
};

export default Shop;
