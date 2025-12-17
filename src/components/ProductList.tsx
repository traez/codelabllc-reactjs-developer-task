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

/* 
Import Statements and State Initialization
The code begins with essential imports like React hooks (useEffect, useState), Next.js components (Image, Link), a toast notification library (sonner), and a Zustand store for managing application state. The component utilizes these to fetch, display, and manage products dynamically. The state includes products fetched from the API, setProducts to update the store, and addToCart for cart functionality. Additionally, currentPage tracks the current pagination state, and productsPerPage defines the number of products displayed per page.

Fetching Products
In the useEffect hook, the component fetches product data from a Mockaroo API if no products are already loaded. The fetchProducts function handles the request, parsing the JSON response and updating the Zustand store via setProducts. Errors are caught and logged to ensure debugging is straightforward. This design ensures the product list is fetched only once unless the state changes, improving efficiency.

Formatting Product Titles
The formatTitle function cleans and formats product names for display. It removes unwanted characters, truncates strings, and combines parts of name and name2 to create a more user-friendly title. Additionally, it capitalizes the first letter of each word, providing consistency and readability in the UI. This function enhances the visual appeal of the product list by standardizing titles.

Adding Products to Cart
The handleAddToCart function enables adding products to the cart by locating a product with the given ID from the products array. If the product is found, the addToCart function from the Zustand store is called, and a success toast notification is displayed. If the product cannot be found, an error message is logged, and an error toast is displayed. This approach improves user feedback and handles edge cases gracefully.

Pagination Logic
Pagination is implemented by calculating indices for slicing the products array into pages. The currentPage state determines which products to display, with productsPerPage specifying the number per page. totalPages calculates the total number of pages. This setup ensures the component efficiently handles large datasets by only rendering the necessary subset of products for the current page.

Pagination Controls Component
The PaginationControls component renders page navigation buttons dynamically based on totalPages. It highlights the current page and updates currentPage when a button is clicked. Buttons are styled to differentiate the active page from inactive ones, ensuring clarity and usability. This modular design keeps the codebase clean and reusable.

Product List Rendering
The main product list is rendered conditionally. If no products are loaded, a loading message is shown. Otherwise, the currentProducts array is displayed in a responsive grid. Each product card includes its formatted title, an image, price, and buttons for adding to the cart or viewing details. This layout prioritizes responsiveness and accessibility, catering to various screen sizes and user needs.

Product Card Details
Each product card contains the product’s image, truncated title, and price. The Image component ensures images are optimized for loading performance. Buttons for "Add to Cart" and "Details" provide essential interactivity. Styling emphasizes usability, with hover effects offering visual feedback to users.

Reusing Pagination Controls
Pagination controls are rendered both above and below the product list for improved user navigation. This redundancy ensures users can easily navigate regardless of their position on the page, improving overall UX.
*/