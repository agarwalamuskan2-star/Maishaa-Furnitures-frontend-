import type { Metadata } from "next";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";
import { AuthProvider } from "@/components/auth-provider";

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
          {children}
          <FloatingContactButtons />
          <VisualEditsMessenger />
        </AuthProvider>
      </body>
    </html>
  );
}
