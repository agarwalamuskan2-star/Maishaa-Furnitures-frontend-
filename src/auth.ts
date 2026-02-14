import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/lib/prisma"

export const { handlers, auth, signIn, signOut } = NextAuth({
  // adapter: PrismaAdapter(prisma), // Temporarily disabled for debugging
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      allowDangerousEmailAccountLinking: true,
    }),
  ],
  callbacks: {
    session: async ({ session, user, token }) => { // Add token to params
      if (session?.user && user?.id) {
        session.user.id = user.id
      }
      return session
    },
  },
  debug: true, // Force debug logs
})
