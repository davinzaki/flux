import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/product.api";

export const useGetListProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
};
