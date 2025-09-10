import User from "../models/User";
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
    throw new Error("Incorrect email!");
  }

  const passwordMatch = await becrypt.compare(password, user.password);
  if (!passwordMatch) {
    throw new Error("Incorrect password!");
  }

  const token = jwt.sign({ email: email }, process.env.JWT_SECRET);

  return token;
};
