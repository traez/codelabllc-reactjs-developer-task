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

