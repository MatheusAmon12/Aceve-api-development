import { MailOptions } from "nodemailer/lib/sendmail-transport";
import { transporter } from "../config/nodemailerConfig";

const sendEmailMessage = (emailMessage: MailOptions) => {
    transporter.sendMail(emailMessage, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log(`E-mail enviado: ${info.response}`);
    });
};


export default sendEmailMessage;