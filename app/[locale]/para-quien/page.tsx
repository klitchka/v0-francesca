import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import type { Locale } from "@/lib/i18n"
import { locales } from "@/lib/i18n"
import { t } from "@/lib/translations"
import { Users, Heart } from "lucide-react"

export function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }))
}

export default function ParaQuienPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 text-balance">
              {t("paraQuien.title", locale)}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-pretty">
              {locale === "es" && "CTM es para todos los que buscan explorar su autenticidad"}
              {locale === "it" && "CTM è per tutti coloro che cercano di esplorare la propria autenticità"}
              {locale === "en" && "CTM is for everyone seeking to explore their authenticity"}
              {locale === "de" && "CTM ist für alle, die ihre Authentizität erkunden möchten"}
              {locale === "ca" && "CTM és per a tots els que busquen explorar la seva autenticitat"}
            </p>
          </div>
        </div>
      </section>

      {/* Two Audiences Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Artists */}
            <Card className="hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_V9A0761.JPG-eZVnBH1Rsk6IlPJm4XZkG0VtxFsMPm.jpeg"
                  alt="Artistas en taller CTM"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-8 space-y-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-light">{t("paraQuien.artists.title", locale)}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t("paraQuien.artists.description", locale)}
                </p>
                <Button asChild className="w-full">
                  <Link href={`/${locale}/talleres`}>
                    {locale === "es" && "Ver talleres"}
                    {locale === "it" && "Vedi workshop"}
                    {locale === "en" && "View workshops"}
                    {locale === "de" && "Workshops ansehen"}
                    {locale === "ca" && "Veure tallers"}
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* General Public */}
            <Card className="hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_V9A0630.JPG-fYz1JTCRYQBxwjtcZnCH4xutMNHs6V.jpeg"
                  alt="Público general en taller CTM"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-8 space-y-6">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <Heart className="h-6 w-6 text-secondary" />
                </div>
                <h2 className="text-3xl font-light">{t("paraQuien.general.title", locale)}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t("paraQuien.general.description", locale)}
                </p>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href={`/${locale}/talleres`}>
                    {locale === "es" && "Intro 3 días"}
                    {locale === "it" && "Intro 3 giorni"}
                    {locale === "en" && "Intro 3 days"}
                    {locale === "de" && "Intro 3 Tage"}
                    {locale === "ca" && "Intro 3 dies"}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-secondary text-secondary-foreground">
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-light mb-6 text-balance">
            {locale === "es" && "¿Tienes dudas?"}
            {locale === "it" && "Hai dubbi?"}
            {locale === "en" && "Have doubts?"}
            {locale === "de" && "Hast du Zweifel?"}
            {locale === "ca" && "Tens dubtes?"}
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            {locale === "es" && "Escríbeme y hablamos sobre qué taller es mejor para ti"}
            {locale === "it" && "Scrivimi e parliamo di quale workshop è meglio per te"}
            {locale === "en" && "Write to me and let's talk about which workshop is best for you"}
            {locale === "de" && "Schreib mir und lass uns darüber sprechen, welcher Workshop am besten für dich ist"}
            {locale === "ca" && "Escriu-me i parlem sobre quin taller és millor per a tu"}
          </p>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-secondary-foreground/30 hover:bg-secondary-foreground/10 text-secondary-foreground bg-transparent"
          >
            <Link href={`/${locale}/contacto`}>
              {locale === "es" && "Contactar"}
              {locale === "it" && "Contattare"}
              {locale === "en" && "Contact"}
              {locale === "de" && "Kontakt"}
              {locale === "ca" && "Contactar"}
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
