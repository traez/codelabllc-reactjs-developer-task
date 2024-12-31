"use client";
import { useAppStore } from "@/lib/ZustandProvider";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";

const CartComponent = () => {
  const {
    cart,
    products,
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
  } = useAppStore((state) => state);
  const [isCheckingOut, setIsCheckingOut] = useState(false);

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

  const cartWithDetails = cart.map((item) => {
    const product = products.find((p) => p.id === item.id);
    return {
      ...item,
      ...product,
      totalPrice: (product?.price || 0) * item.quantity,
    };
  });

  const totalCartPrice = cartWithDetails.reduce(
    (sum, item) => sum + item.totalPrice,
    0
  );

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      toast.success("Checkout process initiated!");
      setIsCheckingOut(false);
    }, 1500);
  };

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
        <p>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <section className="container mx-auto px-2 sm:px-4 py-8 max-w-6xl">
      <h1 className="text-2xl font-bold mb-4 text-center">Your Cart</h1>
      <article className="space-y-4">
        {cartWithDetails.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-around border-b pb-4 gap-4"
          >
            <menu className="flex items-center space-x-4 w-full sm:w-auto">
              <div className="relative w-20 h-20 flex-shrink-0">
                <Image
                  src={`/shoes${item.id}.jpg`}
                  alt={item.name || "Product"}
                  fill
                  className="object-contain"
                  sizes="80px"
                />
              </div>
              <div className="flex flex-row gap-1">
                <h2 className="font-semibold">
                  {formatTitle(item.name || "", item.name2 || "")}
                </h2>
                <p className="text-gray-600">Price: ₦{item.price}</p>
                <Link
                  href={`/product/${item.id}`}
                  className="w-20 bg-gray-500 text-white py-1 px-2 rounded-lg hover:bg-gray-600 text-center text-sm"
                >
                  Details
                </Link>
              </div>
            </menu>

            <nav className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => decrementQuantity(item.id)}
                  className="px-2 py-1 bg-gray-200 rounded"
                >
                  -
                </button>
                <span className="w-8 text-center">{item.quantity}</span>
                <button
                  onClick={() => incrementQuantity(item.id)}
                  className="px-2 py-1 bg-gray-200 rounded"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="px-2 py-1 bg-red-500 text-white rounded"
                >
                  Remove
                </button>
              </div>
              <p className="font-semibold whitespace-nowrap">
                Total: ₦{item.totalPrice}
              </p>
            </nav>
          </div>
        ))}
      </article>
      <aside className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-xl font-bold">Total Cart Price: ₦{totalCartPrice}</p>
        <button
          onClick={handleCheckout}
          disabled={isCheckingOut}
          className="w-[80%] sm:w-auto px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-blue-300"
        >
          {isCheckingOut ? "Processing..." : "Proceed to Checkout"}
        </button>
      </aside>
    </section>
  );
};

export default CartComponent;
