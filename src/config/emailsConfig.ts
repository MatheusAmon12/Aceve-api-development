import { CreateEmailOptions } from "resend";

interface IFormBeeVolunteerValues {
    name: string;
    dateOfBirth: string;
    phone: number;
    email: string;
    availability: string;
    interestArea: string;
    message: string;
}

interface IFormTalkToUsValues {
    name: string;
    email: string;
    message: string;
}

const setEmailFormTalkToUsConfig = (formTalkToUsValues: IFormTalkToUsValues): CreateEmailOptions => {
    const emailMessageConfig = {
        from: process.env.EMAIL_FROM || "onboarding@resend.dev",
        to: process.env.EMAIL_TO || "",
        subject: "Fale Conosco ACEVE",
        html: `
            <html>
                <body>
                    <p>Nome: ${formTalkToUsValues.name}</p>
                    <p>E-mail: ${formTalkToUsValues.email}</p>
                    <p>Mensagem: ${formTalkToUsValues.message}</p>
                </body>
            </html>
        `,
        replyTo: formTalkToUsValues.email
    }

    return emailMessageConfig;
};

const setEmailFormBeVolunteerConfig = (formBeVolunteerValues: IFormBeeVolunteerValues): CreateEmailOptions => {
    const emailMessageConfig = {
        from: process.env.EMAIL_FROM || "onboarding@resend.dev",
        to: process.env.EMAIL_TO || "",
        subject: "Seja Voluntário ACEVE",
        html: `
            <html>
                <body>
                    <p>Nome: ${formBeVolunteerValues.name}</p>
                    <p>Data de Nascimento: ${formBeVolunteerValues.dateOfBirth}</p>
                    <p>Telefone: ${formBeVolunteerValues.phone}</p>
                    <p>E-mail: ${formBeVolunteerValues.email}</p>
                    <p>Disponibilidade: ${formBeVolunteerValues.availability}</p>
                    <p>Área de Interesse: ${formBeVolunteerValues.interestArea}</p>
                    <p>Mensagem: ${formBeVolunteerValues.message}</p>
                </body>
            </html>
        `,
        replyTo: formBeVolunteerValues.email
    }

    return emailMessageConfig;
};

export { 
    setEmailFormTalkToUsConfig, 
    setEmailFormBeVolunteerConfig, 
};