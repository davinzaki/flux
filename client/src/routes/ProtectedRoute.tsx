import { useAuthContext } from "@/context/AuthContext"
import type { JSX } from "react"
import { Navigate } from "react-router-dom"

interface ProtectedRouteProps {
    children: JSX.Element
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const { user, accessToken, loading } = useAuthContext()
    console.log('user', user)

    if (loading) return <div>Loading...</div>

    if (!user || !accessToken) return <Navigate to='/login' replace />

    return children
}

export default ProtectedRoute