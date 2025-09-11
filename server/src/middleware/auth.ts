import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWTUser } from "../types";

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const authHeader = req.headers["authorization"];
  const token =
    authHeader && authHeader.startsWith("Bearer ") ? authHeader.slice(7) : null;

  if (!token) {
    res.status(401).json({ error: "Access token required" });
    return;
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      res.status(403).json({ error: "Invalid or expired token" });
      return;
    }

    req.user = decoded as JWTUser;
    next();
  });
};

export const optionalAuth = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const authHeader = req.headers["authorization"];
  const token =
    authHeader && authHeader.startsWith("Bearer ") ? authHeader.slice(7) : null;

  if (!token) {
    next();
    return;
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (!err) {
      req.user = decoded as JWTUser;
    }
    next();
  });
};

export const isAdmin = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const role = req.user?.role;
  if (!role) {
    res.status(402).json({ message: "Access Denied!" });
  }
  next();
};
