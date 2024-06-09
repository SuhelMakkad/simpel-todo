import { Inter } from "next/font/google";
import type { Metadata } from "next";

import { AuthProvider } from "@/components/auth-provider";
import { QueryProvider } from "@/query/query-provider";

import { ThemeProvider } from "@/components/theme/theme-provider.tsx";
import { NavBar } from "@/components/nav-bar";
import { Toaster } from "@/components/ui/sonner";
import { BASE_PATH } from "@/utils/constant";

import "@/styles/globals.css";

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
      <head>
        <link rel="icon" href={`${BASE_PATH}/favicon.ico`} />
      </head>
      <body className={`${inter.className} bg-background text-primary antialiased`}>
        <QueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <AuthProvider>
              <NavBar />

              {children}

              <Toaster />
            </AuthProvider>
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
