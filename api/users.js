import User from "../lib/model/userModel.js";
import connectDB from "../lib/db.js";

let isConnected = false;

export default async function handler(req, res) {
    await connectDB();

    if (req.method === "GET") {
        const users = await User.find();
        return res.status(200).json(users);
    }

    if (req.method === "POST") {
        const newUser = new User(req.body);
        await newUser.save();
        return res.status(201).json(newUser);
    }

    res.status(405).json({ error: "Method not allowed" });
}