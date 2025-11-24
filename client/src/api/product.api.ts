import { api } from "../services/axios";

export const getProducts = async () => {
  const { data } = await api.get("/products");

  return data;
};
