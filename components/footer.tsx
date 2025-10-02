import Link from "next/link"
import type { Locale } from "@/lib/i18n"
import { t } from "@/lib/translations"

export function Footer({ locale }: { locale: Locale }) {
  const navItems = [
    { key: "workshops", href: `/${locale}/talleres` },
    { key: "calendar", href: `/${locale}/calendario` },
    { key: "bio", href: `/${locale}/bio` },
    { key: "contact", href: `/${locale}/contacto` },
  ]

  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-medium mb-2">Francesca Zannier</h3>
            <p className="text-sm text-muted-foreground">{t("footer.claim", locale)}</p>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4">{t("nav.home", locale)}</h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {t(`nav.${item.key}`, locale)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href={`/${locale}/privacidad`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {locale === "es" && "Privacidad"}
                  {locale === "it" && "Privacy"}
                  {locale === "en" && "Privacy"}
                  {locale === "de" && "Datenschutz"}
                  {locale === "ca" && "Privacitat"}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/cancelaciones`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {locale === "es" && "Cancelaciones"}
                  {locale === "it" && "Cancellazioni"}
                  {locale === "en" && "Cancellations"}
                  {locale === "de" && "Stornierungen"}
                  {locale === "ca" && "Cancel·lacions"}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Francesca Zannier. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
