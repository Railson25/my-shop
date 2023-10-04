import CartContent from "@/components/cart-content";
import { Header } from "@/components/header";

const Cart = () => {
  return (
    <div>
      <Header
        subtitle="#cart"
        paragraph="Add your coupon code $ SAVE upto 70%"
        h2Style="font-bold text-white"
        pStyle="text-white"
        className="bg-[url('/images/about/banner.png')]  h-[40vh] items-center p-[14px] "
      />

      <CartContent />
    </div>
  );
};

export default Cart;
