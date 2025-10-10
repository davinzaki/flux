import type { User } from "@/types/user.entity";
import { createContext, useContext } from "react";

interface AuthContextType {
    user: User | null
    accessToken: string | null
    refreshToken: string | null
    logout: () => void
    setAuth: (user: User, access: string, refresh: string) => void
}

export const AuthContext = createContext<AuthContextType | null>(null)

export const useAuthContext = () => {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("useAuthContext must be used within AuthProvider");
    return ctx;
}