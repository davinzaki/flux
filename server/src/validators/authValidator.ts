import z, { email } from "zod";

export const registerSchema = z.object({
  name: z.string().min(1, "Nama harus diisi"),
  email: z.email("Format email tidak valid"),
  password: z.string().min(6, "Kata sandi minimal 6 karakter"),
});

export type RegisterDto = z.infer<typeof registerSchema>;
