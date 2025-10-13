import type { LoginApiResponse } from "@/types/auth.type";
import type { LoginDto, RegisterDto } from "../schemas/auth.schema";
import { api } from "../services/axios";
import type { ApiResponse } from "../types/api";
import type { User } from "../types/user.entity";

export const login = async ({
  ...body
}: LoginDto): Promise<ApiResponse<LoginApiResponse>> => {
  const { data } = await api.post("/auth/login", body);

  return data;
};

export const register = async ({
  ...body
}: RegisterDto): Promise<ApiResponse<User>> => {
  const { data } = await api.post("/auth/register", body);

  return data;
};
