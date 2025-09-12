import User from "../models/User";
import { JWTUser } from "../types";
import { LoginDto, RegisterDto } from "../validators/authValidator";
import becrypt from "bcryptjs";
import jwt from "jsonwebtoken";

interface AuthTokenResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

export const registerService = async (body: RegisterDto) => {
  const { name, email, password } = body;

  const existingUser = await User.findOne({ email: email.toLowerCase() });
  if (existingUser) {
    throw new Error("User with this email already exists");
  }

  const hashedPassword = await becrypt.hash(password, 10);

  const newUser = new User({
    name: name.trim(),
    email: email.toLowerCase().trim(),
    password: hashedPassword,
  });

  const savedUser = await newUser.save();

  const { password: _, ...userWithoutPassword } = savedUser.toObject();

  return { user: userWithoutPassword };
};

export const loginService = async (body: LoginDto) => {
  const { email, password } = body;
  const user = await User.findOne({ email: email });

  if (!user) {
    throw new Error("User doesn't exists!");
  }

  const passwordMatch = await becrypt.compare(password, user.password);
  if (!passwordMatch) {
    throw new Error("Invalid credentials!");
  }

  const jwtPayload: JWTUser | any = {
    id: user._id.toString(),
    name: user.name,
    email: user.email,
    role: user.role,
  };

  const accessToken = jwt.sign(jwtPayload, process.env.JWT_SECRET, {
    expiresIn: "15m",
    issuer: "flux",
  });
  const refreshToken = jwt.sign(
    { userId: user._id.toString() },
    process.env.JWT_REFRESH_SECRET,
    {
      expiresIn: "7d",
      issuer: "flux",
    }
  );

  return {
    accessToken,
    refreshToken,
    user: {
      id: user._id.toString(),
      name: user.name,
      email: user.email,
      role: user.role || "user",
    },
  };
};

export const refreshTokenService = async (
  refreshToken: string
): Promise<{ accessToken: string }> => {
  try {
    const decoded = jwt.verify(
      refreshToken,
      process.env.JWT_REFRESH_SECRET
    ) as any;

    const user = await User.findById(decoded.userId);
    if (!user) {
      throw new Error("User not found");
    }

    const jwtPayload: JWTUser = {
      id: user._id.toString(),
      email: user.email,
      name: user.name,
      role: user.role,
    };

    const accessToken = jwt.sign(jwtPayload, process.env.JWT_SECRET as string, {
      expiresIn: "15m",
      issuer: "flux",
    });

    return { accessToken };
  } catch (error) {
    throw new Error("Invalid or expired refresh token");
  }
};

export const logoutService = async (refreshToken: string): Promise<void> => {
  return Promise.resolve();
};
