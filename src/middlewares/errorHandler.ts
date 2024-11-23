import { Request, Response } from "express";

const errorHandler = (err: Error, req: Request, res: Response) => {
    console.error(err.stack);
    res.status(500).json({ message: "Ocorreu um erro no servidor, tente mais tarde." });
}

export default errorHandler;