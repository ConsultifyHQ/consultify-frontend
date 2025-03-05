import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Consultify - Healthcare Made Simple",
  description: "Get online medical consultations, lab test bookings, home care, and more with Consultify.",
    generator: 'v0.dev'
}
type RootLayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({children}: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}



import './globals.css'