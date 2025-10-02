import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { Locale } from "@/lib/i18n"
import { t } from "@/lib/translations"
import { ArrowRight } from "lucide-react"

export default function BioPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 text-balance">{t("bio.title", locale)}</h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-pretty">
              {t("bio.subtitle", locale)}
            </p>
          </div>
        </div>
      </section>

      {/* Bio Content */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="grid md:grid-cols-5 gap-12 max-w-6xl mx-auto">
            {/* Portrait */}
            <div className="md:col-span-2">
              <div className="sticky top-24">
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_V9A1439.JPG-4xVrlF4bHTQBVtJcWZ8GnBDwJPW9cr.jpeg"
                    alt="Francesca Zannier"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Bio Text */}
            <div className="md:col-span-3 space-y-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-muted-foreground leading-relaxed">{t("bio.short", locale)}</p>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed">{t("bio.long", locale)}</p>
              </div>

              {/* Action Image */}
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_V9A0630.JPG-fYz1JTCRYQBxwjtcZnCH4xutMNHs6V.jpeg"
                  alt="Francesca Zannier en acción durante taller"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="pt-6">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
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
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-secondary text-secondary-foreground">
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-light mb-6 text-balance">
            {locale === "es" && "¿Quieres saber más?"}
            {locale === "it" && "Vuoi saperne di più?"}
            {locale === "en" && "Want to know more?"}
            {locale === "de" && "Möchtest du mehr wissen?"}
            {locale === "ca" && "Vols saber més?"}
          </h2>
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
