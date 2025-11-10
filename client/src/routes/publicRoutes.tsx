import HomePage from "../pages/Home/HomePage";
import ProductListPage from "../pages/Products/ProductListPage";
import ProtectedRoute from "./ProtectedRoute";

export const publicRoutes = [
  {
    path: '/', element: (
      <ProtectedRoute>
        <HomePage />
      </ProtectedRoute>
    )
  },
  {
    path: "/products", element: (
      <ProtectedRoute>
        <ProductListPage />
      </ProtectedRoute>
    )
  },
];


