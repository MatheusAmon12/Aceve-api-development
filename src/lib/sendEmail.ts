import { transporter } from "./smtpTransporterInit";

const sendEmail = (name: string, email:string, message:string) => {
    const emailOptions = {
        from: process.env.SMTP_FROM_EMAIL,
        to: process.env.SMTP_TO_EMAIL,
        subject: `Novo contato de ${name}`,
        text: message,
        replyTo: email
    };

    transporter.sendMail(emailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log(`E-mail enviado: ${info.response}`);
    });
};


export default sendEmail;