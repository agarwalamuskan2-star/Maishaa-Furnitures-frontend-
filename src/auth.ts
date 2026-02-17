import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/lib/prisma"
import bcrypt from "bcryptjs"

// Log environment variables status at startup (won't expose values)
console.log("=== Auth Configuration ===")
console.log("GOOGLE_CLIENT_ID:", process.env.GOOGLE_CLIENT_ID ? "✓ Set" : "✗ Missing")
console.log("GOOGLE_CLIENT_SECRET:", process.env.GOOGLE_CLIENT_SECRET ? "✓ Set" : "✗ Missing")
console.log("AUTH_SECRET:", process.env.AUTH_SECRET ? "✓ Set" : "✗ Missing")
console.log("AUTH_URL:", process.env.AUTH_URL ? "✓ Set" : "✗ Missing")
console.log("NEXTAUTH_URL:", process.env.NEXTAUTH_URL ? "✓ Set" : "✗ Missing")
console.log("DATABASE_URL:", process.env.DATABASE_URL ? "✓ Set" : "✗ Missing")
console.log("===========================")

export const { handlers, auth, signIn, signOut } = NextAuth({
  trustHost: true,
  adapter: PrismaAdapter(prisma),
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
      allowDangerousEmailAccountLinking: true,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      },
    }),
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials: any) {
        if (!credentials?.email) {
          throw new Error('Invalid credentials');
        }

        /*
        // Handle OTP Login
        if (credentials.otp) {
          const otpEntry = await (prisma as any).otp.findFirst({
            where: {
              email: credentials.email as string,
              code: credentials.otp as string,
              expires: { gt: new Date() }
            }
          });

          if (!otpEntry) {
            throw new Error('Invalid or expired OTP');
          }

          // Delete the OTP after successful use
          await (prisma as any).otp.delete({ where: { id: otpEntry.id } });

          // Find or create user
          let user = await prisma.user.findUnique({
            where: { email: credentials.email as string }
          });

          if (!user) {
            user = await prisma.user.create({
              data: {
                email: credentials.email as string,
                name: (credentials.email as string).split('@')[0]
              }
            });
          }

          return user;
        }
        */

        // Handle Password Login
        if (!credentials?.password) {
          throw new Error('Invalid credentials');
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email as string
          }
        }) as any;

        if (!user || !user.password) {
          throw new Error('Invalid credentials');
        }

        const isPasswordCorrect = await bcrypt.compare(
          credentials.password as string,
          user.password
        );

        if (!isPasswordCorrect) {
          throw new Error('Invalid credentials');
        }

        return user;
      }
    })
  ],
  session: {
    strategy: "jwt",
  },
  // Explicitly set the base URL for production
  basePath: "/api/auth",
  pages: {
    signIn: "/",
    error: "/",
  },
  callbacks: {
    session: async ({ session, token }) => {
      if (session?.user && token?.sub) {
        session.user.id = token.sub
      }
      return session
    },
    jwt: async ({ token, user }) => {
      if (user) {
        token.sub = user.id
      }
      return token
    }
  },
  debug: true,
})
