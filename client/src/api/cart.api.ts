import { api } from "../services/axios";

export const getCart = async () => {
  const { data } = await api.get("/cart");
  return data;
};

export const addToCart = async (productId: string, qty: number) => {
  const { data } = await api.post("/cart", { productId, qty });
  return data;
};

export const updateCart = async (productId: string, qty: number) => {
  const { data } = await api.put("/cart", { productId, qty });
  return data;
};
