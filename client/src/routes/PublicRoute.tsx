import { useAuthContext } from "@/context/AuthContext"
import type { JSX } from "react"
import { Navigate } from "react-router-dom"

interface PublicRouteProps {
    children: JSX.Element
}

const PublicRoute = ({ children }: PublicRouteProps) => {
    const { user, accessToken, loading } = useAuthContext()

    if (loading) return <div>Loading...</div>

    if (user && accessToken) return <Navigate to='/products' replace />

    return children
}

export default PublicRoute