import type React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"
import { locales, type Locale } from "@/lib/i18n"

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: Locale }
}) {
  return (
    <>
      <AnimatedBackground />
      <Header locale={params.locale} />
      <main className="min-h-screen">{children}</main>
      <Footer locale={params.locale} />
    </>
  )
}
