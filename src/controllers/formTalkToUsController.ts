import { Request, Response } from "express";
import sendEmail from "../lib/sendEmail";
import { setEmailFormTalkToUsConfig } from "../config/emailsConfig";

const formTalkToUsController = {
    index: (req: Request, res: Response) => {
        const { name, email, message } = req.body;
        try {
            const emailOptions = setEmailFormTalkToUsConfig(name, email, message);
            sendEmail(emailOptions);
            res.status(200).json({ message: "Mensagem enviada com sucesso!" });
        }
        catch (error) {
            res.status(500).json({ message: `Erro ao enviar mensagem: ${error}`});
        }
    },
};

export default formTalkToUsController;