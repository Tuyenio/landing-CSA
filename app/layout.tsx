import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { ScrollToTop } from "@/components/scroll-to-top"
import { I18nProvider } from "@/lib/i18n"
import "./globals.css"

const inter = Inter({ subsets: ["latin", "vietnamese"] })

export const metadata: Metadata = {
  title: "CSA - Giai phap Bao mat Endpoint Toan dien | ICS",
  description:
    "CSA (cAIoT Security Architecture) - Phan mem bao mat endpoint hang dau Viet Nam. Kiem soat thiet bi, quan ly ung dung, chong that thoat du lieu cho doanh nghiep.",
  keywords: ["endpoint security", "bao mat endpoint", "DLP", "device control", "USB control", "ICS", "CSA"],
  authors: [{ name: "ICS - International Cyber Security" }],
    generator: 'v0.app',
    icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <I18nProvider>
            {children}
            <ScrollToTop />
          </I18nProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
