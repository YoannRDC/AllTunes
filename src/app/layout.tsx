import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./provider";
import { ThemeContextProvider } from "./contexts/ThemeContext"
import { ThemeModeContextProvider, useThemeMode } from "./contexts/ThemeMode"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) { 
  return (
    <html lang="en">
        <body className={`${inter.className}`}>
          <Provider>
            <ThemeModeContextProvider>
            <ThemeContextProvider>
              {children}
            </ThemeContextProvider>
          </ThemeModeContextProvider>
          </Provider>
        </body>
    </html>
  );
}
