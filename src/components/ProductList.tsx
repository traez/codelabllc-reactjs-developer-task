"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import { useAppStore } from "@/lib/ZustandProvider";

const ProductList = () => {
  const { products, setProducts, addToCart } = useAppStore((state) => state);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 24;

  useEffect(() => {
    if (products.length === 0) {
      const fetchProducts = async () => {
        try {
          const response = await fetch(
            "https://api.mockaroo.com/api/88476190?count=96&key=585e44d0"
          );
          if (!response.ok) {
            throw new Error("Failed to fetch products");
          }
          const data = await response.json();
          setProducts(data);
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };

      fetchProducts();
    }
  }, [products.length, setProducts]);

  const formatTitle = (name: string, name2: string) => {
    const cleanName = name
      .replace(/-/g, " ")
      .replace(/,/g, "")
      .replace(/\s+/g, "")
      .slice(0, 10);
    const cleanName2 = name2.replace(/-/g, " ").replace(/,/g, "").slice(0, 10);
    const firstWord = cleanName2.split(" ")[0];

    return `${cleanName} ${firstWord}`
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  const handleAddToCart = (productId: number) => {
    const product = products.find((p) => p.id === productId);
    if (product) {
      addToCart(productId, 1); 
      toast.success(`Product with ProductId ${productId} added to the cart`);
    } else {
      console.log(`Error adding Product ${product}`);
      toast.error(`Error adding Product with ProductId ${productId}`);
    }
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(products.length / productsPerPage);

  const PaginationControls = () => (
    <div className="flex justify-center items-center gap-4 my-6">
      <div className="text-sm">
        Page {currentPage} of {totalPages}
      </div>
      <div className="flex gap-2">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={`w-8 h-8 rounded-full ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="w-full p-4">
      <h1 className="text-center">Product List</h1>
      <PaginationControls />
      {products.length === 0 ? (
        <p>Loading products...</p>
      ) : (
        <ul className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-8 w-full">
          {currentProducts.map((product) => (
            <li
              key={product.id}
              className="w-[200px] h-[200px] border-2 border-blue-900 rounded-lg p-2 flex flex-col justify-around items-center justify-self-center"
            >
              <h2 className="text-base font-semibold truncate">
                {formatTitle(product.name, product.name2)}
              </h2>
              <div className="relative w-[100px] h-[100px] border-2 border-blue-500 rounded-lg mb-2">
                <Image
                  src={`/shoes${product.id}.jpg`}
                  alt={product.name}
                  fill
                  className="object-contain"
                  sizes="(min-width: 360px) 100vw"
                />
              </div>
              <p className="text-xs font-semibold">
                Price: <span>&#8358;</span>
                {product.price}
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => handleAddToCart(product.id)}
                  className="w-[100px] bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                >
                  Add to Cart
                </button>
                <Link
                  href={`/product/${product.id}`}
                  className="w-[80px] bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 text-center"
                >
                  Details
                </Link>
              </div>
            </li>
          ))}
        </ul>
      )}
      <PaginationControls />
    </div>
  );
};

export default ProductList;
