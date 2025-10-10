import { AuthContext } from "@/context/AuthContext"
import type { User } from "@/types/user.entity"
import { useEffect, useState } from "react"

type AuthProviderType = {
    children: React.ReactNode
}
export const AuthProvider = ({ children }: AuthProviderType) => {
    const [user, setUser] = useState<User | null>(null)
    const [accessToken, setAccessToken] = useState<string | null>(null)
    const [refreshToken, setRefreshToken] = useState<string | null>(null)

    useEffect(() => {
        const storedToken = localStorage.getItem('accessToken')
        const storedUser = localStorage.getItem('user')

        if (storedToken && storedUser) {
            setAccessToken(storedToken)
            setUser(JSON.parse(storedUser))
        }
    }, [])

    const setAuth = (user: User, access: string, refresh: string) => {
        setUser(user)
        setAccessToken(access)
        setRefreshToken(refresh)
        localStorage.setItem('token', access)
        localStorage.setItem('refreshToke', refresh)
        localStorage.setItem('user', JSON.stringify(user))
    }

    const logout = () => {
        setUser(null)
        setAccessToken(null)
        setRefreshToken(null)
        localStorage.clear()
    }

    return (
        <AuthContext.Provider value={{ user, accessToken, logout, refreshToken, setAuth }}>
            {children}
        </AuthContext.Provider>
    )

}