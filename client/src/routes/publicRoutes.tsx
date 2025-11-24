import DashboardLayout from "@/components/layouts/DasboardLayout";
import HomePage from "../pages/Home/HomePage";
import ProductListPage from "../pages/Products/ProductListPage";
import ProtectedRoute from "./ProtectedRoute";

export const publicRoutes = [
  {
    element: <DashboardLayout />, children: [
      {
        path: '/', element: (
          <HomePage />
        )
      },
      {
        path: "/products", element: (
          <ProtectedRoute>
            <ProductListPage />
          </ProtectedRoute>
        )
      },
    ]
  }
]


