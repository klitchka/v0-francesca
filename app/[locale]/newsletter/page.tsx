import { NewsletterForm } from "@/components/newsletter-form"
import type { Locale } from "@/lib/i18n"
import { locales } from "@/lib/i18n"
import { t } from "@/lib/translations"

export function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }))
}

export default function NewsletterPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-muted/50 to-background">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 text-balance">
              {t("newsletter.title", locale)}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-pretty">
              {t("newsletter.description", locale)}
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Form */}
      <section className="py-16 md:py-24">
        <div className="container px-4 max-w-2xl mx-auto">
          <NewsletterForm locale={locale} />
        </div>
      </section>
    </div>
  )
}
