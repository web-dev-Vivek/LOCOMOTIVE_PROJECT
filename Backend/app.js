import express from "express";
import connectDB from "./config/db.js";
import User from "./routes/User.js";
import cors from "cors";


const app = express();
const port = 3000;

// Middleware
app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.get('/', (request, response) => {
    response.send({ message: "Hello from an Express API!" });
});

app.use("/api", User);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});