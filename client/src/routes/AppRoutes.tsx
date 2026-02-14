import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { authRoutes } from "./authRoutes";
import { publicRoutes } from "./publicRoutes";

const AppRoutes = () => {
  const router = createBrowserRouter([
    ...publicRoutes, ...authRoutes
  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  )
};

export default AppRoutes;
