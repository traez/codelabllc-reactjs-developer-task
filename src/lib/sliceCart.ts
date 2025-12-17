import { StateCreator } from 'zustand';

// Define the structure of a cart item
export type CartItem = {
  id: number; // This will be a number between 1 and 96
  quantity: number;
};

export type SliceCartType = {
  cart: CartItem[];
  addToCart: (id: number, quantity?: number) => void;
  removeFromCart: (id: number) => void;
  incrementQuantity: (id: number, amount?: number) => void;
  decrementQuantity: (id: number, amount?: number) => void;
};

export const createCartSlice: StateCreator<SliceCartType> = (set) => ({
  cart: [],

  addToCart: (id, quantity = 1) => set((state) => {
    const existingItem = state.cart.find(item => item.id === id);
    if (existingItem) {
      return {
        cart: state.cart.map(item =>
          item.id === id ? { ...item, quantity: item.quantity + quantity } : item
        )
      };
    } else {
      return { cart: [...state.cart, { id, quantity }] };
    }
  }),

  removeFromCart: (id) => set((state) => ({
    cart: state.cart.filter(item => item.id !== id)
  })),

  incrementQuantity: (id, amount = 1) => set((state) => ({
    cart: state.cart.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + amount } : item
    )
  })),

  decrementQuantity: (id, amount = 1) => set((state) => ({
    cart: state.cart.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(0, item.quantity - amount);
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
      }
      return item;
    }).filter(Boolean) as CartItem[]
  })),
});

/* 
CartItem Type Definition
The CartItem type defines the structure of items in the cart, where each item has an id and a quantity. The id is a number between 1 and 96, and quantity represents the number of that item in the cart. This type ensures type safety and consistency when working with cart items.

SliceCartType Definition
The SliceCartType type outlines the structure of the Zustand slice for the cart. It includes a cart array to hold CartItem objects and several functions for manipulating the cart: addToCart, removeFromCart, incrementQuantity, and decrementQuantity. These functions define the operations available for managing cart data.

createCartSlice Definition
The createCartSlice function implements the StateCreator from Zustand to manage the cart state. The initial state of the cart is an empty array. Each action modifies the cart state as described below.

addToCart Method
The addToCart function takes an id and an optional quantity (defaulting to 1). It checks if the item already exists in the cart. If it does, the function updates the item's quantity by adding the specified amount. If the item doesn't exist, it adds a new CartItem with the given id and quantity to the cart.

removeFromCart Method
The removeFromCart function removes an item from the cart based on its id. It filters out any item with a matching id, effectively removing it from the cart array.

incrementQuantity Method
The incrementQuantity function increases the quantity of a specific cart item by a given amount (defaulting to 1). If the item's id matches the provided id, its quantity is incremented; otherwise, the item remains unchanged.

decrementQuantity Method
The decrementQuantity function decreases the quantity of a specific cart item by a given amount (defaulting to 1). If the resulting quantity is greater than 0, the function updates the quantity. If the quantity reaches 0 or less, the item is removed from the cart using .filter(Boolean). This ensures the cart doesn't contain items with non-positive quantities.
*/