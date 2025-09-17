import HomePage from "../pages/Home/HomePage";
import ProductListPage from "../pages/Products/ProductListPage";

export const publicRoutes = [
  { path: '/', element: <HomePage /> },
  { path: "/products", element: <ProductListPage /> },
];


