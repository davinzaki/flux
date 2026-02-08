import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addToCart, getCart } from "../api/cart.api";
import { toast } from "sonner";

export const useGetCart = () => {
  return useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
  });
};

export const useAddToCart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ productId, qty }: { productId: string; qty: number }) =>
      addToCart(productId, qty),
    onSuccess: () => {
      toast.success("Item added to cart");
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || "Failed to add to cart");
    },
  });
};
