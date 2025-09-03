import User from "../models/User";
import { RegisterDto } from "../validators/authValidator";
import { default as becrypt } from "bcryptjs";

export const registerService = async (body: RegisterDto) => {
  const { name, email, password } = body;
  const userExisting = await User.findOne({ email: email });

  if (userExisting) {
    throw new Error("Email already exists!");
  }

  const hashedPassword = await becrypt.hash(password, 10);

  const newUser = new User({
    name: name,
    email: email,
    password: hashedPassword,
  });

  await newUser.save();

  return newUser;
};
