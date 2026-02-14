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
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const storedUser = localStorage.getItem('user')
        const storedAccess = localStorage.getItem('accessToken')
        const storedRefresh = localStorage.getItem('refreshToken')

        if (storedAccess && storedUser) {
            setAccessToken(storedAccess)
            setRefreshToken(storedRefresh)
            setUser(JSON.parse(storedUser))
        }

        setLoading(false)
    }, [])

    const setAuth = (user: User, access: string, refresh: string) => {
        setUser(user)
        setAccessToken(access)
        setRefreshToken(refresh)
        localStorage.setItem('accessToken', access)
        localStorage.setItem('refreshToken', refresh)
        localStorage.setItem('user', JSON.stringify(user))
    }

    const logout = () => {
        setUser(null)
        setAccessToken(null)
        setRefreshToken(null)
        localStorage.clear()
    }

    return (
        <AuthContext.Provider value={{ user, accessToken, logout, refreshToken, setAuth, loading }}>
            {children}
        </AuthContext.Provider>
    )

}