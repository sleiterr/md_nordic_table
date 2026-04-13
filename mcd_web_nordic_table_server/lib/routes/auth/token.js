import express from 'express';
import { signInWithToken } from '../../handlers/auth.handler.js';

const authTokenRouter = express.Router();

// Token-based sign in
authTokenRouter.post("/auth/token", async (req, res) => {
    try {
        const token = req.body?.token;

        if (!token) {
            return res.status(400).send({
                status: "error",
                message: "Token is required",
                data: {},
            });
        }

        const result = await signInWithToken(token);

        return res.status(200).send({ ...result });
    } catch (error) {
        console.error("Error in /auth/token:", error);
        return res.status(500).send({
            status: "error",
            message: "Internal server error",
            data: {},
        });
    }
});

export default authTokenRouter;