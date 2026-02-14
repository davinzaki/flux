import { LoginDto, RegisterDto } from "../validators/authValidator";
export declare const registerService: (body: RegisterDto) => Promise<{
    user: {
        createdAt: NativeDate;
        updatedAt: NativeDate;
        name: string;
        email: string;
        role: "user" | "admin";
        _id: import("mongoose").Types.ObjectId;
        __v: number;
    };
}>;
export declare const loginService: (body: LoginDto) => Promise<{
    accessToken: string;
    refreshToken: string;
    user: {
        id: string;
        name: string;
        email: string;
        role: "user" | "admin";
    };
}>;
export declare const refreshTokenService: (refreshToken: string) => Promise<{
    accessToken: string;
}>;
export declare const logoutService: (refreshToken: string) => Promise<void>;
