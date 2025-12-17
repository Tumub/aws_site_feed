
import nodemailer from 'nodemailer';

async function main() {
    const transporter = nodemailer.createTransport({
        host: 'mail.checkbeforefixing.org',
        port: 587,
        secure: false,
        auth: {
            user: 'info@torquefoundryadvisory.com',
            pass: 'TorqueFoundry2025Secure'
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    try {
        const info = await transporter.sendMail({
            from: '"System Check" <info@torquefoundryadvisory.com>',
            to: "info@torquefoundryadvisory.com",
            subject: "Maintenance: Server Verification",
            text: "This is a test email to verify SMTP credentials and DKIM signing after maintenance."
        });

        console.log("Message sent: %s", info.messageId);
        console.log("Response: %s", info.response);
    } catch (error) {
        console.error("Error sending email:", error);
    }
}

main();
