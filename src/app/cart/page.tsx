import { Metadata } from "next";
import CartComponent from "@/components/CartComponent";

export const metadata: Metadata = {
  title: "Cart - CodelabLLC Reactjs Developer Task",
  description: "Created by Trae Zeeofor",
};

const CartPage = () => {
  return (
    <>
      <CartComponent />
    </>
  );
};

export default CartPage;
