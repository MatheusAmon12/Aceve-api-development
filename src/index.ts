import express, { Request, Response, NextFunction } from "express";
import formValuesValidation from "./middleware/formValuesValidation";

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

app.post("/api/fale-conosco", formValuesValidation, (req: Request, res: Response) => {
    res.status(200).json(req.body);
});