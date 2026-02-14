import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addToCart, getCart, updateCart } from "../api/cart.api";
import { toast } from "sonner";

import { type AxiosError } from "axios";
import { type ErrorResponseType } from "@/types/api";

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
    onError: (error: AxiosError<ErrorResponseType>) => {
      toast.error(error.response?.data?.message || "Failed to add to cart");
    },
  });
};

export const useUpdateCart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ productId, qty }: { productId: string; qty: number }) =>
      updateCart(productId, qty),
    onSuccess: () => {
      toast.success("Cart updated");
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onError: (error: AxiosError<ErrorResponseType>) => {
      toast.error(error.response?.data?.message || "Failed to update cart");
    },
  });
};
