import { Inter } from "next/font/google";
import type { Metadata } from "next";

import { ThemeProvider } from "@/components/theme/theme-provider.tsx";
import { NavBar } from "@/components/nav-bar";
import { Toaster } from "@/components/ui/sonner";

import "@/styles/globals.css";
import { AuthProvider } from "@/components/auth-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Task Manager",
  description: "A simple task manager",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-primary antialiased`}>
        <AuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NavBar />

            {children}
          </ThemeProvider>

          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
