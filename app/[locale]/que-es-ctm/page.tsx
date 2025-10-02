import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { Locale } from "@/lib/i18n"
import { t } from "@/lib/translations"
import { ArrowRight } from "lucide-react"

export default function QueEsCTMPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 text-balance">
              {t("queEsCTM.title", locale)}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-pretty">
              {t("queEsCTM.intro", locale)}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative h-[400px] md:h-[600px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_V9A1439.JPG-4xVrlF4bHTQBVtJcWZ8GnBDwJPW9cr.jpeg"
                alt="Máscara hecha a mano sobre rostro, taller CTM"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-light leading-tight">
                {locale === "es" && "Metodología"}
                {locale === "it" && "Metodologia"}
                {locale === "en" && "Methodology"}
                {locale === "de" && "Methodik"}
                {locale === "ca" && "Metodologia"}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{t("queEsCTM.methodology", locale)}</p>

              <div className="pt-6">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href={`/${locale}/mascaras`}>
                    {locale === "es" && "Descubre las 6 máscaras"}
                    {locale === "it" && "Scopri le 6 maschere"}
                    {locale === "en" && "Discover the 6 masks"}
                    {locale === "de" && "Entdecke die 6 Masken"}
                    {locale === "ca" && "Descobreix les 6 màscares"}
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
            {locale === "es" && "¿Listo para comenzar tu viaje?"}
            {locale === "it" && "Pronto per iniziare il tuo viaggio?"}
            {locale === "en" && "Ready to start your journey?"}
            {locale === "de" && "Bereit, deine Reise zu beginnen?"}
            {locale === "ca" && "Preparat per començar el teu viatge?"}
          </h2>
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
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
