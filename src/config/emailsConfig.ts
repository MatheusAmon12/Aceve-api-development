const getEmailFormTalkToUsValues = (name: string, email: string, message: string) => {
    const emailOptions = {
        from: process.env.SMTP_FROM_EMAIL,
        to: process.env.SMTP_TO_EMAIL,
        subject: `Novo contato de ${name}`,
        text: message,
        replyTo: email
    };

    return emailOptions;
};

const getEmailFormBeVolunteerValues = (
    name: string, 
    dateOfBirth: string, 
    phone: number, 
    email: string, 
    availability: string, 
    interestArea: string, 
    message: string
) => {
    const emailOptions = {
        from: process.env.SMTP_FROM_EMAIL,
        to: process.env.SMTP_TO_EMAIL,
        subject: "Voluntariado ACEVE",
        html: `
            <p>Nome: ${name}</p>
            <p>Data de nascimento: ${dateOfBirth}</p>
            <p>Telefone: ${phone}</p>
            <p>E-mail: ${email}</p>
            <p>Área de interesse: ${interestArea}</p>
            <p>Disponibilidade: ${availability}</p>
            <p>Mensagem: ${message}</p>
        `,
        replyTo: email
    };

    return emailOptions;
};

export { 
    getEmailFormTalkToUsValues, 
    getEmailFormBeVolunteerValues 
};