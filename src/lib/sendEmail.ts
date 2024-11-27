import { CreateEmailOptions } from "resend";
import resend from "../services/resendService";

const sendEmailMessage = async (emailMessageConfig: CreateEmailOptions) => {
    try {
        return await resend.emails.send(emailMessageConfig);
    } catch (error) {
        console.error("Erro ao enviar o e-mail:", error);
        throw error;
    }
};


export default sendEmailMessage;