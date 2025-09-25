import { z } from "zod";

export const loginSchema = z.object({
  email: z.email("Format email tidak valid!"),
  password: z.string().min(6, "Kata sandi minimal 6 karakter!"),
});

export type LoginDto = z.infer<typeof loginSchema>;

export const registerSchema = z.object({
  name: z.string().min(1, "Nama harus diisi"),
  email: z.email("Format email tidak valid"),
  password: z.string().min(6, "Kata sandi minimal 6 karakter"),
});

export type RegisterDto = z.infer<typeof registerSchema>;
