import { CreateEmailOptions } from "resend";
import resend from "../services/resendService";

const sendEmailMessage = async (emailMessageConfig: CreateEmailOptions) => {
    try {
        const response = await resend.emails.send(emailMessageConfig);

        if(response.error) {
            throw new Error(`E-mail não enviado: ${response.error}`);
        };

        return response;
    } catch (error) {
        throw error;
    }
};


export default sendEmailMessage;