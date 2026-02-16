import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
    },
});

export const sendOtpEmail = async (email: string, otp: string) => {
    const mailOptions = {
        from: `"Maishaa Furnitures" <${process.env.GMAIL_USER}>`,
        to: email,
        subject: "Your Verification Code - Maishaa Furnitures",
        html: `
            <div style="font-family: Helvetica, Arial, sans-serif; min-width: 1000px; overflow: auto; line-height: 2">
                <div style="margin: 50px auto; width: 70%; padding: 20px 0">
                    <div style="border-bottom: 1px solid #eee">
                        <a href="" style="font-size: 1.4em; color: #000; text-decoration: none; font-weight: 600">Maishaa Furnitures</a>
                    </div>
                    <p style="font-size: 1.1em">Hi,</p>
                    <p>Thank you for choosing Maishaa Furnitures. Use the following OTP to complete your Log In procedure. OTP is valid for 5 minutes.</p>
                    <h2 style="background: #000; margin: 0 auto; width: max-content; padding: 0 10px; color: #fff; border-radius: 4px;">${otp}</h2>
                    <p style="font-size: 0.9em;">Regards,<br />Maishaa Furnitures</p>
                    <hr style="border: none; border-top: 1px solid #eee" />
                    <div style="float: right; padding: 8px 0; color: #aaa; font-size: 0.8em; line-height: 1; font-weight: 300">
                        <p>Maishaa Furnitures Inc</p>
                        <p>India</p>
                    </div>
                </div>
            </div>
        `,
    };

    return transporter.sendMail(mailOptions);
};
