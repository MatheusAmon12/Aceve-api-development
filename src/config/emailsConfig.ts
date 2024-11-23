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

const setEmailFormTalkToUsConfig = (formTalkToUsValues: IFormTalkToUsValues) => {
    const emailMessage = {
        from: process.env.SMTP_FROM_EMAIL || "",
        to: process.env.SMTP_TO_EMAIL || "",
        subject: `Novo contato de ${formTalkToUsValues.name}`,
        text: formTalkToUsValues.message,
        replyTo: formTalkToUsValues.email
    };

    return emailMessage;
};

const setEmailFormBeVolunteerConfig = (formBeVolunteerValues: IFormBeeVolunteerValues) => {
    const emailMessage = {
        from: process.env.SMTP_FROM_EMAIL || "",
        to: process.env.SMTP_TO_EMAIL || "",
        subject: "Voluntariado ACEVE",
        html: `
            <p>Nome: ${formBeVolunteerValues.name}</p>
            <p>Data de nascimento: ${formBeVolunteerValues.dateOfBirth}</p>
            <p>Telefone: ${formBeVolunteerValues.phone}</p>
            <p>E-mail: ${formBeVolunteerValues.email}</p>
            <p>Área de interesse: ${formBeVolunteerValues.interestArea}</p>
            <p>Disponibilidade: ${formBeVolunteerValues.availability}</p>
            <p>Mensagem: ${formBeVolunteerValues.message}</p>
        `,
        replyTo: formBeVolunteerValues.email
    };

    return emailMessage;
};

export { 
    setEmailFormTalkToUsConfig, 
    setEmailFormBeVolunteerConfig, 
};