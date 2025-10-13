import { useMutation, type UseMutationOptions } from "@tanstack/react-query";
import { login, register } from "../api/auth.api";
import type { LoginApiResponse } from "@/types/auth.type";
import type { AxiosError } from "axios";
import type { ApiResponse, ErrorResponseType } from "@/types/api";
import type { LoginDto } from "@/schemas/auth.schema";

export const useLogin = (
  options?: UseMutationOptions<
    ApiResponse<LoginApiResponse>,
    AxiosError<ErrorResponseType>,
    LoginDto
  >
) => {
  return useMutation({
    mutationFn: login,
    ...options,
  });
};

export const useRegister = () => {
  return useMutation({
    mutationFn: register,
  });
};
