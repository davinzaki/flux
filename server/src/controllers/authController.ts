import { Request, Response } from "express";
import {
  loginService,
  logoutService,
  refreshTokenService,
  registerService,
} from "../services/authService";
import { ApiResponse, User } from "../types";

export const register = async (req: Request, res: Response) => {
  try {
    const result = await registerService(req.body);

    res.status(200).send({
      success: true,
      message: "User registered successfully",
      data: result.user,
    });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const result = await loginService(req.body);

    res.cookie("refreshToken", result.refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res.status(200).send({
      success: true,
      message: "Login successful",
      data: {
        accessToken: result.accessToken,
        refreshToken: result.refreshToken,
        user: result.user,
      },
    });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const refreshToken = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    // Get refresh token from cookie or request body
    const refreshToken = req.cookies.refreshToken || req.body.refreshToken;

    if (!refreshToken) {
      res.status(401).json({
        success: false,
        message: "Refresh token required",
        error: "No refresh token provided",
      });
      return;
    }

    const result = await refreshTokenService(refreshToken);

    res.status(200).json({
      success: true,
      message: "Token refreshed successfully",
      data: {
        accessToken: result.accessToken,
      },
    });
  } catch (error: any) {
    console.error("Token refresh error:", error);

    res.status(401).json({});
  }
};

export const logout = async (req: Request, res: Response): Promise<void> => {
  try {
    const refreshToken = req.cookies.refreshToken || req.body.refreshToken;

    if (refreshToken) {
      await logoutService(refreshToken);
    }

    res.clearCookie("refreshToken");

    res.status(200).json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (error: any) {
    console.error("Logout error:", error);

    res.status(500).json({
      success: false,
      message: "Logout failed",
      error: error.message,
    });
  }
};
