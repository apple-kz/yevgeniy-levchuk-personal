import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";

// Assuming Helvetica Neue is local or standard sans-serif fallback will catch it.
// NextJS doesn't have Helvetica Neue built-in, so we focus on the Serif font.
const cormorant = Cormorant_Garamond({
  weight: ["400", "500"],
  subsets: ["cyrillic", "latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Евгений Левчук",
  description: "Персональный эдвайзер",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={`${cormorant.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
