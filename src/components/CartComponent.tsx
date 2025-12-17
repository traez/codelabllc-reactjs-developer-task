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

/* 
Section 1: Imports and State Management
The code begins with the use client directive to indicate client-side rendering. It imports useAppStore from a custom Zustand provider for state management, React's useState for local component state, and essential components from libraries like Image and Link from Next.js and toast from Sonner for notifications. These imports set up the necessary tools for managing the cart's state, rendering dynamic content, and providing feedback to users.

Section 2: Utility Function for Title Formatting
The formatTitle function processes product names by removing certain characters (like hyphens, commas, and excessive spaces) and limits the length of the first product name to 10 characters. It then constructs a new title by appending the first word of the second name, ensuring both words are capitalized correctly. This function ensures concise, user-friendly, and formatted product titles.

Section 3: Mapping Cart with Product Details
The cartWithDetails array merges data from the cart and products states by finding the matching product for each cart item and calculating the totalPrice as the product of the price and quantity. This derived state is used to enrich cart items with additional details, such as product price and total price.

Section 4: Calculating Total Cart Price
The totalCartPrice variable uses reduce to compute the sum of the totalPrice values of all items in the cartWithDetails array. This value represents the grand total of the cart and is used later in the checkout summary.

Section 5: Empty Cart View
The component checks if the cart array is empty and, if true, renders a simple message indicating that the cart is empty. This conditional rendering ensures a user-friendly experience by providing immediate feedback when no items are in the cart.

Section 6: Main Cart Layout and Item Rendering
The main layout of the cart iterates through cartWithDetails to display each item's image, title, price, link to details, and controls for managing quantities. The menu section includes the image and formatted title, while the nav section provides buttons for incrementing, decrementing, and removing items from the cart, as well as showing the total price for each item. The layout is responsive, adapting to different screen sizes.

Section 7: Checkout Button and Total Price Summary
At the bottom, the cart displays the totalCartPrice and a "Proceed to Checkout" button. Clicking the button triggers the handleCheckout function, which simulates a checkout process by showing a loading state and using the toast to notify the user. The button is disabled during processing to prevent duplicate actions.

Section 8: Component Export
Finally, the CartComponent is exported as the default export, allowing it to be imported and used in other parts of the application. This completes the implementation of a responsive, user-friendly cart with comprehensive functionality for managing products and proceeding to checkout.
*/