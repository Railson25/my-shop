import { ProductsList } from "@/components/feature-products";
import { Newsletter } from "@/components/newsletter";
import { ProductDetails } from "@/components/poduct-details";
import { SmallListComponent } from "@/components/small-list";

const ProductDetail = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <ProductDetails id={params.id} />

      <ProductsList title="Featured Products" items={[]}>
        <SmallListComponent />
      </ProductsList>

      <Newsletter />
    </div>
  );
};

export default ProductDetail;
