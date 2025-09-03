import { Request, Response } from "express";
import { registerService } from "../services/authService";

export const register = async (req: Request, res: Response) => {
  try {
    const newUser = await registerService(req.body);
    res.status(200).send({
      success: true,
      message: "User registered successfully",
      data: newUser,
    });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const login = async (req: Request, res: Response) => {};
