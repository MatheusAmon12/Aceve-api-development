import { Request, Response } from "express";
import { setEmailFormBeVolunteerConfig } from "../config/emailsConfig";
import sendEmailMessage from "../lib/sendEmail";

const formBeVolunteerController = {
    index: async (req: Request, res: Response) => {
        const formBeVolunteerValues = req.body;
        try {
            let emailMessageConfig = setEmailFormBeVolunteerConfig(formBeVolunteerValues);
            const response = await sendEmailMessage(emailMessageConfig);
            res.status(200).json({ message: "Mensagem enviada com sucesso!", response });
        } catch (error) {   
            res.status(500).json({ 
                message: `Erro interno ao enviar o e-mail: ${error}`});
        }
    }
};

export default formBeVolunteerController;