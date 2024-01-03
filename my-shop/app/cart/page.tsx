import CartContent from "@/components/cart-content";
import { Header } from "@/components/header";

const Cart = () => {
  return (
    <div>
      <Header
        billboardId="5d9acfe5-9b95-465e-b2a6-4294a4f69b09"
        h2Style="font-bold text-white"
        pStyle="text-white"
        className="h-[40vh] items-center p-[14px] "
      />

      <CartContent />
    </div>
  );
};

export default Cart;
