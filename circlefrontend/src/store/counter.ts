import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CounterStore {
  counter: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  incrementByAmount: (amount: number) => void;
  decrementByAmount: (amount: number) => void;
}

export const useCounterStore = create<CounterStore>()(
  persist(
    (set) => ({
      counter: 0,
      increment: () => set((state) => ({ counter: state.counter + 1 })),
      decrement: () => set((state) => ({ counter: state.counter - 1 })),
      incrementByAmount: (amount: number) =>
        set((state) => ({ counter: state.counter + amount })),
      decrementByAmount: (amount: number) =>
        set((state) => ({ counter: state.counter - amount })),
      reset: () => set(() => ({ counter: 0 })),
    }),
    {
      name: "counter-storage",
    }
  )
);
