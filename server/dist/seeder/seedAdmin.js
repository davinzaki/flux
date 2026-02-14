import connectDB from "../config/db";
import User from "../models/User";
import bcryptjs from "bcryptjs";
const seedAdmin = async () => {
    try {
        await connectDB();
        const adminEmail = "admin@flux.com";
        const existingAdmin = await User.findOne({ email: adminEmail });
        if (existingAdmin) {
            console.log("Admin already exists!");
        }
        else {
            const hashedPassword = await bcryptjs.hash("qwerpoiu", 12);
            const newAdmin = new User({
                name: "admin",
                email: adminEmail,
                password: hashedPassword,
                role: "admin",
            });
            await newAdmin.save();
            console.log("Admin created successfully");
        }
    }
    catch (err) {
        console.log("Error seeding admin", err);
    }
};
seedAdmin();
