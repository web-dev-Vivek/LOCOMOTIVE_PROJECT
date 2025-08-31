import express from "express";
import User from "../models/user.js";
const router = express.Router();

router.post("/users", async (request, response) => {
    const user = new User(request.body);

    try {
        await user.save();
        response.send(user);
    } catch (error) {
        response.status(500).send(error);
    }
});

router.get("/users", async (request, response) => {
    try {
        const users = await User.find({});
        response.send(users);
    } catch (error) {
        response.status(500).send({ error });
    }
});

router.get("/users/:name", async (request, response) => {
    try {
        const user = await User.findOne({ name: request.params.name });
        response.send(user);
    } catch (error) {
        response.status(500).send({ error });
    }
});

export default router;