import connectDB from "../lib/db.js";
import User from "../lib/model/User.js";

export default async function handler(req, res) {
  try {
    await connectDB();

    if (req.method === "GET") {
      // Get all users
      const users = await User.find({}).sort({ createdAt: -1 });
      return res.status(200).json(users);
    }

    if (req.method === "POST") {
      // Create new user
      const { name, rollNo, whatsapp, skills } = req.body;

      // Validate required fields
      if (!name || !rollNo || !whatsapp || !skills) {
        return res.status(400).json({
          error: "Missing required fields: name, rollNo, whatsapp, skills",
        });
      }

      // Check if user with this rollNo already exists
      const existingUser = await User.findOne({ rollNo });
      if (existingUser) {
        return res.status(400).json({
          error: "User with this roll number already exists",
        });
      }

      // Create new user
      const newUser = new User({
        name,
        rollNo,
        whatsapp,
        skills: Array.isArray(skills)
          ? skills
          : skills
              .split(",")
              .map((s) => s.trim())
              .filter(Boolean),
      });

      const savedUser = await newUser.save();
      return res.status(201).json(savedUser);
    }

    // Method not allowed
    return res.status(405).json({ error: "Method not allowed" });
  } catch (error) {
    console.error("API Error:", error);

    // Handle duplicate key error
    if (error.code === 11000) {
      return res.status(400).json({
        error: "User with this roll number already exists",
      });
    }

    // Handle validation errors
    if (error.name === "ValidationError") {
      return res.status(400).json({
        error: error.message,
      });
    }

    return res.status(500).json({
      error: "Internal server error",
      details:
        process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
}
