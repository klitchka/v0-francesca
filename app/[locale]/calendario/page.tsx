import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import type { Locale } from "@/lib/i18n"
import { t } from "@/lib/translations"
import { Calendar, MapPin, CheckCircle, Clock } from "lucide-react"

export default function CalendarioPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params

  const events = [
    {
      title: "Intro CTM",
      location: "Barcelona",
      dates:
        locale === "es"
          ? "Por confirmar"
          : locale === "it"
            ? "Da confermare"
            : locale === "en"
              ? "To be confirmed"
              : locale === "de"
                ? "Zu bestätigen"
                : "Per confirmar",
      status: "pending",
    },
    {
      title: "CTM Intensivo",
      location: "Sabadell",
      dates:
        locale === "es"
          ? "Por confirmar"
          : locale === "it"
            ? "Da confermare"
            : locale === "en"
              ? "To be confirmed"
              : locale === "de"
                ? "Zu bestätigen"
                : "Per confirmar",
      status: "pending",
    },
    {
      title: "Workshop CTM",
      location: "Parma, Italia",
      dates:
        locale === "es"
          ? "Por confirmar"
          : locale === "it"
            ? "Da confermare"
            : locale === "en"
              ? "To be confirmed"
              : locale === "de"
                ? "Zu bestätigen"
                : "Per confirmar",
      status: "pending",
    },
    {
      title: "Workshop CTM",
      location: "Austria",
      dates:
        locale === "es"
          ? "Por confirmar"
          : locale === "it"
            ? "Da confermare"
            : locale === "en"
              ? "To be confirmed"
              : locale === "de"
                ? "Zu bestätigen"
                : "Per confirmar",
      status: "pending",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-muted/50 to-background">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 text-balance">
              {t("calendario.title", locale)}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-pretty">
              {t("calendario.subtitle", locale)}
            </p>
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            {events.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="space-y-3 flex-1">
                      <div className="flex items-center gap-3">
                        <h3 className="text-2xl font-light">{event.title}</h3>
                        {event.status === "confirmed" ? (
                          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm">
                            <CheckCircle className="h-3 w-3" />
                            {t("calendario.confirmed", locale)}
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-sm">
                            <Clock className="h-3 w-3" />
                            {t("calendario.toConfirm", locale)}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{event.dates}</span>
                        </div>
                      </div>
                    </div>
                    <Button asChild variant="outline">
                      <Link href={`/${locale}/contacto`}>{t("calendario.interested", locale)}</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Google Calendar Embed */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="aspect-video bg-muted/50 rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground text-center">
                    {locale === "es" && "Calendario de Google (próximamente)"}
                    {locale === "it" && "Calendario Google (prossimamente)"}
                    {locale === "en" && "Google Calendar (coming soon)"}
                    {locale === "de" && "Google Kalender (demnächst)"}
                    {locale === "ca" && "Calendari de Google (properament)"}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-secondary text-secondary-foreground">
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-light mb-6 text-balance">
            {locale === "es" && "¿Quieres más información?"}
            {locale === "it" && "Vuoi più informazioni?"}
            {locale === "en" && "Want more information?"}
            {locale === "de" && "Möchtest du mehr Informationen?"}
            {locale === "ca" && "Vols més informació?"}
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
