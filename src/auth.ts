import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/lib/prisma"

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
  // adapter: PrismaAdapter(prisma), // Temporarily disabled for debugging
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
  ],
  // Explicitly set the base URL for production
  basePath: "/api/auth",
  pages: {
    signIn: "/",
    error: "/",
  },
  callbacks: {
    session: async ({ session, user, token }) => {
      if (session?.user && user?.id) {
        session.user.id = user.id
      }
      return session
    },
  },
  debug: true,
})
