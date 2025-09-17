import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { publicRoutes } from "./publicRoutes";
import { authRoutes } from "./authRoutes";

const AppRoutes = () => {
  const router = createBrowserRouter([
    ...publicRoutes, ...authRoutes
  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  )
};

export default AppRoutes;
