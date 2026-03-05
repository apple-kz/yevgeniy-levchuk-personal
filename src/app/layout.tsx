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

import { ThemeProvider } from "../components/theme-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${cormorant.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
