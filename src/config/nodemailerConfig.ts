import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_KEY,
    },
});

//Verifica a conexão com o servidor SMTP
transporter.verify(function (error, success) {
    if(error) {
        console.log(error)
    } else {
        console.log(`Conexão com o servidor SMTP estabelecida: ${success}`)
    }
})

export { transporter }