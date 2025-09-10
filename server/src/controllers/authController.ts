import { Request, Response } from "express";
import { loginService, registerService } from "../services/authService";

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
    const token = await loginService(req.body);
    res.status(200).send({
      success: true,
      message: "User login successfully",
      data: token,
    });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};
