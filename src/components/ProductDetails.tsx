"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { toast } from "sonner";
import { useAppStore } from "@/lib/ZustandProvider";
import { Product } from "@/lib/sliceProduct";

const ProductDetails = () => {
  const { products, addToCart } = useAppStore((state) => state);
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const params = useParams();
  const productId = Number(params.id);
  const router = useRouter();

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === productId);
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      const timer = setTimeout(() => {
        router.push("/");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [products, productId, router]);

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

  const handleAddToCart = () => {
    if (product) {
      //console.log(`Adding ${quantity} of product:`, product);
      addToCart(productId, quantity);
      toast.success(
        `Added ${quantity} ${quantity === 1 ? "item" : "items"} to cart`
      );
    }
  };

  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl">Loading product details...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          {/* Product Image Section */}
          <div className="md:w-1/2 relative h-[400px]">
            <Image
              src={`/shoes${product.id}.jpg`}
              alt={product.name}
              fill
              className="object-contain"
              sizes="(min-width: 768px) 50vw, 100vw"
              priority
            />
          </div>

          {/* Product Details Section */}
          <div className="md:w-1/2 p-8">
            <h1 className="text-2xl font-bold mb-4">
              {formatTitle(product.name, product.name2)}
            </h1>

            <p className="text-xl font-semibold mb-4">
              Price: <span>&#8358;</span>
              {product.price}
            </p>

            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2">Description:</h2>
              <p className="text-gray-600">
                {`${product.description} ${product.description2}`}
              </p>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <label htmlFor="quantity" className="font-medium">
                Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                min="1"
                value={quantity}
                onChange={(e) =>
                  setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                }
                className="w-20 px-3 py-2 border rounded-md"
              />
            </div>

            <div className="flex gap-4">
              <button
                onClick={handleAddToCart}
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Add to Cart
              </button>
              <Link
                href="/cart"
                className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors"
              >
                Go to Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
