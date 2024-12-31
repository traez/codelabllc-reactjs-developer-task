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

