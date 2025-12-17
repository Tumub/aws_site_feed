
import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// SMTP Configuration
const transporter = nodemailer.createTransport({
    host: 'mail.checkbeforefixing.org',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'info@torquefoundryadvisory.com',
        pass: 'TorqueFoundry2025Secure'
    },
    tls: {
        rejectUnauthorized: false // Accept self-signed certs if necessary
    }
});

// API Endpoint
app.post('/api/send-email', async (req, res) => {
    const { to, subject, text } = req.body;

    if (!to || !subject || !text) {
        return res.status(400).json({ success: false, message: 'Missing fields' });
    }

    const mailOptions = {
        from: '"TorqueFoundry System" <info@torquefoundryadvisory.com>',
        to: to, // Send TO ourselves (info@)
        replyTo: req.body.replyTo || to, // Reply to the applicant
        subject: subject,
        text: text
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
        res.status(200).json({ success: true, message: 'Signal Transmitted Successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, message: 'Transmission Failed', error: error.toString() });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
