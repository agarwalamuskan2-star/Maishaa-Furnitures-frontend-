import type { Metadata } from "next";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";
import { AuthProvider } from "@/components/auth-provider";
import { CartProvider } from "@/context/cart-context";
import { FavoritesProvider } from "@/context/favorites-context";

export const metadata: Metadata = {
  title: "Maishaa | Premium Furniture & Furnishing",
  description: "Experience the epitome of luxury with Maishaa's exquisite collection of furniture and decor.",
};

import FloatingContactButtons from "@/components/ui/floating-contact-buttons";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
        suppressHydrationWarning
      >
        <AuthProvider>
          <CartProvider>
            <FavoritesProvider>
              {children}
              <FloatingContactButtons />
              <VisualEditsMessenger />
            </FavoritesProvider>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
