import { Request, Response } from "express";

const formTalkToUsController = {
    index: (req: Request, res: Response) => {
        const { name, email, message } = req.body;
        res.status(200).json({ name, email, message });
    },
};

export default formTalkToUsController;