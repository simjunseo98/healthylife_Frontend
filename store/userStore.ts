import { create } from "zustand"
import { login } from "@/utills/api/login"
import { signup } from '@/utills/api/signup'

type User = {
    id: string;
    username: string;
    email: string;
};

type UserStore = {
    user: User | null
    token:string | null
    setUser: (user:User)=>void
    login: (email: string, password: string) => Promise<void>
    signup: (email: string,username: string, password: string, password2:string) => Promise<void>
    logout: () => void
};

export const useUserStore = create<UserStore>((set) => {
  let saveToken: string | null = null;
  if (typeof window !== "undefined") {
    saveToken = sessionStorage.getItem("token");
  }

  return {
    user: null,
    token: saveToken,
    setUser: (user) => set({ user }),

    login: async (email, password) => {
      const token = await login(email, password);
      set({ token });
    },

    signup: async (email, username, password, password2) => {
      const user = await signup(email, username, password, password2);
      set({ user });
    },

    logout: () => {
      sessionStorage.removeItem("token");
      set({ user: null, token: null });
    },
  };
});