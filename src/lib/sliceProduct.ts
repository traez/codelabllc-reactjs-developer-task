import { StateCreator } from 'zustand';

export type Product = {
  id: number;
  name: string;
  name2: string;
  price: number;
  description: string;
  description2: string;
};

export type SliceProductType = {
  products: Product[];
  setProducts: (products: Product[]) => void;
};

export const createProductSlice: StateCreator<SliceProductType> = (set) => ({
  products: [],
  setProducts: (products: Product[]) => set(() => ({ products })),
});

/* 
Imports and Dependencies
The code imports StateCreator from zustand. This is the type used to define a slice of state within a zustand store. It ensures the codebase can leverage TypeScript's static type checking for the structure and functions related to state management.

Product Type Definition
The Product type is defined with properties such as id, name, name2, price, description, and description2. This type serves as the blueprint for individual product objects, ensuring that every product managed by the store adheres to this structure. This inclusion of duplicate fields like name2 and description2 suggests the need for context or intent about their purpose, which could be clarified further.

Slice Type Definition
The SliceProductType defines the shape of the product slice. It includes an array of Product objects called products and a function setProducts to update this array. This type enables strict typing for the state and its corresponding actions, helping to avoid runtime errors and improving developer experience with IntelliSense support.

Slice Implementation
The createProductSlice function implements the product slice using zustand. It initializes the products array as empty and defines the setProducts function to update the array. The set function provided by zustand ensures immutability by creating a new state object whenever setProducts is invoked. This approach follows React's state management principles and ensures predictable state updates.
*/