import { create } from "zustand"
import { login } from "@/utills/api/login"
import { signup } from '@/utills/api/signup'

type User = {
    user_id: string;
    username: string;
    email: string;
};

type UserStore = {
    user: User | null
    login: (email: string, password: string) => Promise<void>
    signup: (email: string, password: string, username: string) => Promise<void>
    logout: () => void
};

export const useUserStore = create<UserStore>((set) => ({
    user: null,

    login: async (email, password) => {
        const user = await login(email, password);
        set({ user });
    },
    
    signup: async (email, password, username) => {
        const user = await signup(email, password, username);
        set({ user });
    },

    logout: () => set({ user: null }),
}));