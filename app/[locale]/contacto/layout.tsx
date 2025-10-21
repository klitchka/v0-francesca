import type React from "react"
import { locales } from "@/lib/i18n"

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
