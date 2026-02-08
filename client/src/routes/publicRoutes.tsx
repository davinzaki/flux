import DashboardLayout from "@/components/layouts/DasboardLayout";
import HomePage from "../pages/Home/HomePage";
import ProductListPage from "../pages/Products/ProductListPage";
import ProtectedRoute from "./ProtectedRoute";
import Cart from "@/pages/Cart";
import Success from "@/pages/Success";
import Failed from "@/pages/Failed";

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
      {
        path: "/cart", element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        )
      },
      {
        path: "/payment/success", element: <Success />
      },
      {
        path: "/payment/failed", element: <Failed />
      },
    ]
  }
]


