import { api } from "../services/axios";

export const checkout = async () => {
  const { data } = await api.post("/orders");
  return data;
};
