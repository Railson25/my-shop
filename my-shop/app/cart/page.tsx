import CartContent from "@/components/cart-content";
import { Header } from "@/components/header";

const Cart = () => {
  return (
    <div>
      <Header
        subtitle="#readmore"
        paragraph="Real all case studies our products"
        h2Style="font-bold text-white"
        pStyle="text-white"
        className="bg-[url('/images/banner/b19.jpg')]  h-[40vh] items-center p-[14px] "
      />

      <CartContent />
    </div>
  );
};

export default Cart;
