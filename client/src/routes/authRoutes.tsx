import AuthLayout from "@/components/layouts/AuthLayout";
import LoginPage from "../pages/Auth/LoginPage";
import RegisterPage from "../pages/Auth/RegisterPage";
import PublicRoute from "./PublicRoute";

export const authRoutes = [
    {
        path: '/', element: < AuthLayout />, children: [
            { path: '/login', element: <PublicRoute><LoginPage /></PublicRoute> },
            { path: '/register', element: <RegisterPage /> }
        ]
    }

]