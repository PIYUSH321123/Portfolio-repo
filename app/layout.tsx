import { ThemeProvider } from "next-themes"
import "./globals.css"
import { Inter } from "next/font/google"
import Header from "@/components/sections/header"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Piyush Neware | FullStack Developer",
  description: "Fullstack developer specializing in modern web technologies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.className}>
      <body>
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
