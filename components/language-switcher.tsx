"use client"

import { usePathname } from "next/navigation"
import { locales, localeNames, type Locale } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"

export function LanguageSwitcher({ currentLocale }: { currentLocale: Locale }) {
  const pathname = usePathname()

  console.log("[v0] LanguageSwitcher rendered with currentLocale:", currentLocale)
  console.log("[v0] Current pathname:", pathname)

  const switchLocale = (newLocale: Locale) => {
    console.log("[v0] switchLocale called with:", newLocale)
    console.log("[v0] Current pathname:", pathname)

    const segments = pathname.split("/")
    console.log("[v0] Path segments:", segments)

    segments[1] = newLocale
    const newPath = segments.join("/")

    console.log("[v0] New path will be:", newPath)
    console.log("[v0] Navigating to:", newPath)

    // Use window.location for full page reload to ensure proper locale switching
    if (typeof window !== "undefined") {
      window.location.href = newPath
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <Globe className="h-4 w-4" />
          <span className="uppercase text-sm font-medium">{currentLocale}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((locale) => (
          <DropdownMenuItem
            key={locale}
            onClick={() => {
              console.log("[v0] Dropdown item clicked for locale:", locale)
              switchLocale(locale)
            }}
            className={currentLocale === locale ? "bg-muted" : ""}
          >
            {localeNames[locale]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
