import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import type { Locale } from "@/lib/i18n"
import { t, translations } from "@/lib/translations"
import { ArrowRight } from "lucide-react"

export default function MascarasPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-muted/50 to-background">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 text-balance">
              {t("mascaras.title", locale)}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 text-pretty">
              {t("mascaras.subtitle", locale)}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {t("mascaras.intro", locale)}
            </p>
          </div>
        </div>
      </section>

      {/* Masks Grid */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {translations.mascaras.masks.map((mask) => (
              <Card key={mask.number} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center text-2xl font-medium mb-6">
                    {mask.number}
                  </div>
                  <h3 className="text-2xl font-light mb-4">{mask.name[locale]}</h3>
                  <p className="text-muted-foreground leading-relaxed">{mask.description[locale]}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Red Nose Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden border-secondary/30">
              <div className="grid md:grid-cols-2">
                <div className="relative h-64 md:h-auto">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_V9A0761.JPG-eZVnBH1Rsk6IlPJm4XZkG0VtxFsMPm.jpeg"
                    alt="Taller CTM - Nariz roja"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="w-16 h-16 rounded-full bg-secondary/10 text-secondary flex items-center justify-center text-2xl font-medium mb-6">
                    7
                  </div>
                  <h3 className="text-3xl font-light mb-4">{t("mascaras.redNose.title", locale)}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t("mascaras.redNose.description", locale)}</p>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-secondary text-secondary-foreground">
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-light mb-6 text-balance">
            {locale === "es" && "Vive el recorrido completo"}
            {locale === "it" && "Vivi il percorso completo"}
            {locale === "en" && "Experience the complete journey"}
            {locale === "de" && "Erlebe die vollständige Reise"}
            {locale === "ca" && "Viu el recorregut complet"}
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            {locale === "es" && "El taller intensivo de 12 días te lleva a través de todas las máscaras"}
            {locale === "it" && "Il workshop intensivo di 12 giorni ti porta attraverso tutte le maschere"}
            {locale === "en" && "The 12-day intensive workshop takes you through all the masks"}
            {locale === "de" && "Der 12-tägige Intensiv-Workshop führt dich durch alle Masken"}
            {locale === "ca" && "El taller intensiu de 12 dies et porta a través de totes les màscares"}
          </p>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-secondary-foreground/30 hover:bg-secondary-foreground/10 text-secondary-foreground bg-transparent"
          >
            <Link href={`/${locale}/talleres`}>
              {locale === "es" && "Ver talleres"}
              {locale === "it" && "Vedi workshop"}
              {locale === "en" && "View workshops"}
              {locale === "de" && "Workshops ansehen"}
              {locale === "ca" && "Veure tallers"}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
