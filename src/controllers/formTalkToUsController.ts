import { Request, Response } from "express";
import sendEmail from "../lib/sendEmail";

const formTalkToUsController = {
    index: (req: Request, res: Response) => {
        const { name, email, message } = req.body;
        try {
            sendEmail(name, email, message);
            res.status(200).json({ message: "Mensagem enviada com sucesso!" });
        }
        catch (error) {
            res.status(500).json({ message: `Erro ao enviar mensagem: ${error}`});
        }
    },
};

export default formTalkToUsController;