import { JWTUser } from ".";

declare global {
  namespace Express {
    interface Request {
      user?: JWTUser | undefined;
    }
  }
}
