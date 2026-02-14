import User from "../models/User";
import becrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const registerService = async (body) => {
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
export const loginService = async (body) => {
    const { email, password } = body;
    const user = await User.findOne({ email: email });
    if (!user) {
        throw new Error("User doesn't exists!");
    }
    const passwordMatch = await becrypt.compare(password, user.password);
    if (!passwordMatch) {
        throw new Error("Invalid credentials!");
    }
    const jwtPayload = {
        id: user._id.toString(),
        name: user.name,
        email: user.email,
        role: user.role,
    };
    const accessToken = jwt.sign(jwtPayload, process.env.JWT_SECRET, {
        expiresIn: "15m",
        issuer: "flux",
    });
    const refreshToken = jwt.sign({ userId: user._id.toString() }, process.env.JWT_REFRESH_SECRET, {
        expiresIn: "7d",
        issuer: "flux",
    });
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
export const refreshTokenService = async (refreshToken) => {
    try {
        const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
        const user = await User.findById(decoded.userId);
        if (!user) {
            throw new Error("User not found");
        }
        const jwtPayload = {
            id: user._id.toString(),
            email: user.email,
            name: user.name,
            role: user.role,
        };
        const accessToken = jwt.sign(jwtPayload, process.env.JWT_SECRET, {
            expiresIn: "15m",
            issuer: "flux",
        });
        return { accessToken };
    }
    catch (error) {
        throw new Error("Invalid or expired refresh token");
    }
};
export const logoutService = async (refreshToken) => {
    return Promise.resolve();
};
