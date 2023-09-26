"use client";

import { FeatureProducts } from "@/components/feature-products";
import { Newsletter } from "@/components/newsletter";
import { ProductDetails } from "@/components/poduct-details";
import { useFeaturedProducts } from "@/hook/useFeaturedProducts";

const ProductDetail = ({ params }: { params: { id: string } }) => {
  const { SmallListComponent } = useFeaturedProducts();

  return (
    <div>
      <ProductDetails id={params.id} />

      <FeatureProducts
        title="Featured Products"
        subtitle="Summer Collection Design"
      >
        <SmallListComponent />
      </FeatureProducts>

      <Newsletter />
    </div>
  );
};

export default ProductDetail;
