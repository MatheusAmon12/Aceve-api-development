import { Request, Response } from "express";
import sendEmailMessage from "../lib/sendEmail";
import { setEmailFormTalkToUsConfig } from "../config/emailsConfig";

const formTalkToUsController = {
    index: async (req: Request, res: Response) => {
        const formTalkToUsValues = req.body;
        try {
            const emailMessageConfig = setEmailFormTalkToUsConfig(formTalkToUsValues);
            const response = await sendEmailMessage(emailMessageConfig);
            res.status(200).json({ message: "Mensagem enviada com sucesso!", response});
        }
        catch (error) {
            res.status(500).json({ message: "Erro ao enviar mensagem" + error });
        }
    }
};

export default formTalkToUsController;