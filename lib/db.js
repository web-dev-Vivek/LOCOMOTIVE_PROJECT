import mongoose from "mongoose";

let isConnected = false;

export default async function connectDB() {
    if (isConnected) return;
    await mongoose.connect(process.env.MONGO_URI, {
        dbName: "hackathon-team"
    });
    isConnected = true;
}
