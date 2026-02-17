/*
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
            console.log("Email sent successfully to", email);
        } catch (emailError: any) {
            console.error("EMAIL_SEND_ERROR", emailError);
            // For now, return success anyway so user can see OTP in console
            return new NextResponse(JSON.stringify({ message: "OTP generated but email failed", otp: otp }), { status: 200 });
        }

        console.log("Returning success response for", email);
        return new NextResponse("OTP Sent", { status: 200 });
    } catch (error: any) {
        console.error("OTP_SEND_ERROR", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}
*/

import { NextResponse } from "next/server";

export async function POST() {
    return new NextResponse("OTP is currently disabled", { status: 403 });
}
