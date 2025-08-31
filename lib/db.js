import mongoose from "mongoose";

let isConnected = false;

export default async function connectDB() {
    if (isConnected) return;
    await mongoose.connect("mongodb+srv://hackathon_user:sanatan108@cluster0.k4nr9w0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
        dbName: "hackathon-team"
    });
    isConnected = true;
}
