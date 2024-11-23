import { Request, Response } from "express";
import sendEmail from "../lib/sendEmail";
import { setEmailFormBeVolunteerConfig } from "../config/emailsConfig";

const formBeVolunteerController = {
    index: (req: Request, res: Response) => {
        const formBeVolunteerValues = req.body;

        try {
            const emailOptions = setEmailFormBeVolunteerConfig(formBeVolunteerValues);
            sendEmail(emailOptions);
            res.status(200).json({ message: "Mensagem enviada com sucesso!" });
        } catch (error) {   
            res.status(500).json({ message: "Erro ao enviar mensagem." });
        }
    }
};

export default formBeVolunteerController;