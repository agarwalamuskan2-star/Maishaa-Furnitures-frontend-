import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendOtpEmail } from "@/lib/mail";

export async function POST(req: Request) {
    try {
        const { email } = await req.json();

        if (!email) {
            return new NextResponse("Email is required", { status: 400 });
        }

        // Generate a 6-digit OTP
        const otp = Math.floor(100000 + Math.random() * 900000).toString();

        // Expires in 5 minutes
        const expires = new Date(Date.now() + 5 * 60 * 1000);

        // Save to database (delete old ones first)
        await prisma.otp.deleteMany({
            where: { email }
        });

        await prisma.otp.create({
            data: {
                email,
                code: otp,
                expires
            }
        });

        // Send Email
        try {
            await sendOtpEmail(email, otp);
        } catch (emailError: any) {
            console.error("EMAIL_SEND_ERROR", emailError);
            return new NextResponse("Failed to send email. Ensure GMAIL_USER and GMAIL_APP_PASSWORD are set.", { status: 500 });
        }

        return new NextResponse("OTP Sent", { status: 200 });
    } catch (error: any) {
        console.error("OTP_SEND_ERROR", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}
