import { StateCreator } from 'zustand';

export type SliceUserType = {
  name: string;
  email: string;
  setName: (name: string) => void;
  setEmail: (email: string) => void;
};

export const createUserSlice: StateCreator<SliceUserType> = (set) => ({
  name: '',
  email: '',
  setName: (name: string) => set(() => ({ name })),
  setEmail: (email: string) => set(() => ({ email })),
});
