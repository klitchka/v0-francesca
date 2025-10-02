"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"
import type { Locale } from "@/lib/i18n"
import { t } from "@/lib/translations"

export function Header({ locale }: { locale: Locale }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { key: "home", href: `/${locale}` },
    { key: "whatIsCTM", href: `/${locale}/que-es-ctm` },
    { key: "masks", href: `/${locale}/mascaras` },
    { key: "forWhom", href: `/${locale}/para-quien` },
    { key: "bio", href: `/${locale}/bio` },
    { key: "workshops", href: `/${locale}/talleres` },
    { key: "calendar", href: `/${locale}/calendario` },
    { key: "contact", href: `/${locale}/contacto` },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href={`/${locale}`} className="flex items-center space-x-2">
          <span className="text-xl font-medium tracking-wide text-foreground">Francesca Zannier</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {t(`nav.${item.key}`, locale)}
            </Link>
          ))}
          <LanguageSwitcher currentLocale={locale} />
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <LanguageSwitcher currentLocale={locale} />
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden border-t bg-background">
          <div className="container py-4 px-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t(`nav.${item.key}`, locale)}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
