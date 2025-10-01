import AuthLayout from "@/components/layouts/AuthLayout";
import LoginPage from "../pages/Auth/LoginPage";
import RegisterPage from "../pages/Auth/RegisterPage";

export const authRoutes = [
    {
        path: '/', element: < AuthLayout />, children: [
            { path: '/login', element: <LoginPage /> },
            { path: '/register', element: <RegisterPage /> }
        ]
    }

]