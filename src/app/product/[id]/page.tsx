import { Metadata } from "next";
import ProductDetails from "@/components/ProductDetails";

export const metadata: Metadata = {
  title: "Product - CodelabLLC Reactjs Developer Task",
  description: "Created by Trae Zeeofor",
};

const ProductDetailPage = () => {
  return (
    <>
      <ProductDetails />
    </>
  );
};

export default ProductDetailPage;
