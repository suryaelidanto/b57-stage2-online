import { User } from "@/types/user";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthStore {
  user: User;
  setUser: (user: User) => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: {} as User,
      setUser: (user) => set(() => ({ user: user })),
    }),
    {
      name: "auth-storage",
    }
  )
);
