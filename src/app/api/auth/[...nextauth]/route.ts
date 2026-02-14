export const dynamic = "force-dynamic"

// Disable Next.js caching for auth routes
export const runtime = 'nodejs'
export const maxDuration = 60

import { handlers } from "@/auth"

export const { GET, POST } = handlers
