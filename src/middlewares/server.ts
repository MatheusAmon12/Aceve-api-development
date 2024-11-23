import express from "express";
import { Application } from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

const serverMiddlewares = (app: Application) => {
    app.use(cors());
    app.use(express.json());
    app.use(helmet());
    app.use(rateLimit({
        windowMs: 15 * 60 * 1000,
        max: 25,
        message: "Muitas requisções feitas do mesmo IP, por favor tente novamente mais tarde."
    }))
}

export default serverMiddlewares;