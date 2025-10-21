import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})
// </CHANGE>

export const metadata: Metadata = {
  title: "Francesca - Your AI-Powered Personal Assistant",
  description:
    "Simplify your life with intelligent task management, seamless scheduling, and personalized recommendations—all in one place.",
  // </CHANGE>
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} ${playfair.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
      </body>
      {/* </CHANGE> */}
    </html>
  )
}
