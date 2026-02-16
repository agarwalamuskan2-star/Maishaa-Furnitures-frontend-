import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
    try {
        const dbUrl = process.env.DATABASE_URL;
        if (!dbUrl || dbUrl.includes("localhost")) {
            console.error("CRITICAL: DATABASE_URL is missing or set to localhost in Vercel!");
            return new NextResponse("Server Configuration Error: Database not configured correctly.", { status: 500 });
        }

        const { name, email, password } = await req.json();

        if (!email || !password) {
            return new NextResponse("Missing email or password", { status: 400 });
        }

        // Check if user already exists
        const existingUser = await prisma.user.findUnique({
            where: {
                email: email,
            },
        });

        if (existingUser) {
            return new NextResponse("User already exists", { status: 400 });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 12);

        // Create the user
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
            },
        });

        return NextResponse.json(user);
    } catch (error: any) {
        console.error("REGISTRATION_API_ERROR:", {
            message: error.message,
            stack: error.stack,
            error
        });
        return new NextResponse(`Internal Error: ${error.message}`, { status: 500 });
    }
}
