import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import type { Locale } from "@/lib/i18n"
import { t } from "@/lib/translations"
import { Calendar, MapPin, Euro } from "lucide-react"

export default function TalleresPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-muted/50 to-background">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 text-balance">
              {t("talleres.title", locale)}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-pretty">
              {locale === "es" && "Dos formatos para explorar el método CTM"}
              {locale === "it" && "Due formati per esplorare il metodo CTM"}
              {locale === "en" && "Two formats to explore the CTM method"}
              {locale === "de" && "Zwei Formate zur Erkundung der CTM-Methode"}
              {locale === "ca" && "Dos formats per explorar el mètode CTM"}
            </p>
          </div>
        </div>
      </section>

      {/* Intro 3 Days */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="grid md:grid-cols-2">
                <div className="relative h-64 md:h-auto">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_V9A0630.JPG-fYz1JTCRYQBxwjtcZnCH4xutMNHs6V.jpeg"
                    alt="Intro CTM Barcelona"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-8 md:p-12 flex flex-col justify-center space-y-6">
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <Calendar className="h-4 w-4" />
                    <span>
                      3{" "}
                      {locale === "es"
                        ? "días"
                        : locale === "it"
                          ? "giorni"
                          : locale === "en"
                            ? "days"
                            : locale === "de"
                              ? "Tage"
                              : "dies"}
                    </span>
                  </div>
                  <h2 className="text-4xl font-light">{t("talleres.intro3days.title", locale)}</h2>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <MapPin className="h-5 w-5 flex-shrink-0" />
                      <span>{t("talleres.intro3days.location", locale)}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Calendar className="h-5 w-5 flex-shrink-0" />
                      <span>{t("talleres.intro3days.dates", locale)}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Euro className="h-5 w-5 flex-shrink-0" />
                      <span>{t("talleres.intro3days.price", locale)}</span>
                    </div>
                  </div>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {t("talleres.intro3days.description", locale)}
                  </p>

                  <Button asChild size="lg" className="w-full">
                    <Link href={`/${locale}/contacto`}>{t("talleres.cta.reserve", locale)}</Link>
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Intensive 12 Days */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="overflow-hidden hover:shadow-2xl transition-shadow border-secondary/30">
              <div className="grid md:grid-cols-2">
                <div className="relative h-64 md:h-auto order-2 md:order-1">
                  <CardContent className="p-8 md:p-12 flex flex-col justify-center space-y-6 h-full">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-2 text-sm text-secondary">
                        <Calendar className="h-4 w-4" />
                        <span>
                          12{" "}
                          {locale === "es"
                            ? "días"
                            : locale === "it"
                              ? "giorni"
                              : locale === "en"
                                ? "days"
                                : locale === "de"
                                  ? "Tage"
                                  : "dies"}
                        </span>
                      </div>
                      <div className="ml-auto bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">
                        {locale === "es" && "Intensivo"}
                        {locale === "it" && "Intensivo"}
                        {locale === "en" && "Intensive"}
                        {locale === "de" && "Intensiv"}
                        {locale === "ca" && "Intensiu"}
                      </div>
                    </div>
                    <h2 className="text-4xl font-light">{t("talleres.intensive12days.title", locale)}</h2>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <MapPin className="h-5 w-5 flex-shrink-0" />
                        <span>{t("talleres.intensive12days.location", locale)}</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Calendar className="h-5 w-5 flex-shrink-0" />
                        <span>{t("talleres.intensive12days.dates", locale)}</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Euro className="h-5 w-5 flex-shrink-0" />
                        <span>{t("talleres.intensive12days.price", locale)}</span>
                      </div>
                    </div>

                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {t("talleres.intensive12days.description", locale)}
                    </p>

                    <Button
                      asChild
                      size="lg"
                      className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                    >
                      <Link href={`/${locale}/contacto`}>{t("talleres.cta.reserve", locale)}</Link>
                    </Button>
                  </CardContent>
                </div>
                <div className="relative h-64 md:h-auto order-1 md:order-2">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_V9A0761.JPG-eZVnBH1Rsk6IlPJm4XZkG0VtxFsMPm.jpeg"
                    alt="CTM Intensivo Sabadell"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-secondary text-secondary-foreground">
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-light mb-6 text-balance">
            {locale === "es" && "¿Tienes preguntas?"}
            {locale === "it" && "Hai domande?"}
            {locale === "en" && "Have questions?"}
            {locale === "de" && "Hast du Fragen?"}
            {locale === "ca" && "Tens preguntes?"}
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            {locale === "es" && "Escríbeme para resolver cualquier duda sobre los talleres"}
            {locale === "it" && "Scrivimi per risolvere qualsiasi dubbio sui workshop"}
            {locale === "en" && "Write to me to resolve any doubts about the workshops"}
            {locale === "de" && "Schreib mir, um Fragen zu den Workshops zu klären"}
            {locale === "ca" && "Escriu-me per resoldre qualsevol dubte sobre els tallers"}
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
