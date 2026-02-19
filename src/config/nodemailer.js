import nodemailer from "nodemailer"
import dotenv from "dotenv"
dotenv.config()

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.USER_GMAIL,
        pass: process.env.PASS_GMAIL,
    },
    tls: {
        rejectUnauthorized: false
    }
})

transporter.verify()
    .then(() => console.log("📨 Gmail SMTP listo"))
    .catch(err => console.error("❌ Error SMTP:", err.message))

const sendMail = async (to, subject, html) => {
    const info = await transporter.sendMail({
        from: `"EPN" <${process.env.USER_GMAIL}>`,
        to,
        subject,
        html,
    })
    console.log("📧 Email enviado:", info.messageId)
}

export default sendMail
