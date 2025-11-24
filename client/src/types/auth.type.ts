import type { User } from "./user.entity";

export interface LoginApiResponse {
  accessToken: string;
  refreshToken: string;
  user: User;
}
