import { auth } from "@/auth"
import { NextResponse } from "next/server"

// Define routes that require authentication
const protectedRoutes = [
  "/account",
  "/profile",
  "/orders",
  "/wishlist",
  "/checkout",
  "/api/orders",
  "/api/wishlist",
]

// Define routes that should redirect to home if already authenticated
const authRoutes = [
  "/login",
  "/signup",
  "/auth/signin",
]

export default auth((req) => {
  const { pathname } = req.nextUrl
  const isLoggedIn = !!req.auth
  const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route))
  const isAuthRoute = authRoutes.some(route => pathname.startsWith(route))

  // If trying to access protected route without being logged in
  if (isProtectedRoute && !isLoggedIn) {
    const signInUrl = new URL("/", req.nextUrl.origin)
    signInUrl.searchParams.set("callbackUrl", pathname)
    return NextResponse.redirect(signInUrl)
  }

  // If trying to access auth routes while already logged in, redirect to home
  if (isAuthRoute && isLoggedIn) {
    return NextResponse.redirect(new URL("/", req.nextUrl.origin))
  }

  return NextResponse.next()
})

// Specify which routes the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     * - api routes that don't need auth
     */
    "/((?!_next/static|_next/image|favicon.ico|public|api/auth).*)",
  ],
}
