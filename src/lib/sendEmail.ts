import { getEmailFormTalkToUsValues } from "../config/emailsConfig";
import { transporter } from "../config/nodemailerConfig";

const sendEmail = (name: string, email:string, message:string) => {
    const emailOptions = getEmailFormTalkToUsValues(name, email, message);

    transporter.sendMail(emailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log(`E-mail enviado: ${info.response}`);
    });
};


export default sendEmail;