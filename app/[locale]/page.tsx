import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { NewsletterForm } from "@/components/newsletter-form"
import type { Locale } from "@/lib/i18n"
import { t, translations } from "@/lib/translations"
import { ArrowRight, Calendar, Quote } from "lucide-react"

export default function HomePage({ params }: { params: { locale: Locale } }) {
  const { locale } = params

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_V9A0761.JPG-eZVnBH1Rsk6IlPJm4XZkG0VtxFsMPm.jpeg"
            alt="Taller CTM - Participantes en movimiento"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>

        <div className="relative z-10 container px-4 py-20 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6 max-w-5xl mx-auto leading-tight text-balance drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
            {t("hero.headline", locale)}
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed text-pretty drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            {t("hero.subheadline", locale)}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href={`/${locale}/mascaras`}>
                {t("hero.ctaDiscover", locale)}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/90 border-white text-secondary hover:bg-white"
            >
              <Link href={`/${locale}/talleres`}>{t("hero.ctaEnroll", locale)}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What is CTM Section */}
      <section id="que-es-ctm" className="py-16 md:py-24 bg-background/80 backdrop-blur-sm">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-light leading-tight text-balance">
                {locale === "es" && "Un viaje hacia la autenticidad"}
                {locale === "it" && "Un viaggio verso l'autenticità"}
                {locale === "en" && "A journey towards authenticity"}
                {locale === "de" && "Eine Reise zur Authentizität"}
                {locale === "ca" && "Un viatge cap a l'autenticitat"}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {locale === "es" &&
                  "CTM es un viaje experiencial que une práctica corporal, improvisación y trabajo con máscaras; no enseñamos gag, abrimos espacio para emociones auténticas y presencia creativa."}
                {locale === "it" &&
                  "CTM è un viaggio esperienziale che unisce pratica corporea, improvvisazione e lavoro con le maschere; non insegniamo gag, apriamo spazio per emozioni autentiche e presenza creativa."}
                {locale === "en" &&
                  "CTM is an experiential journey that combines body practice, improvisation and mask work; we don't teach gags, we open space for authentic emotions and creative presence."}
                {locale === "de" &&
                  "CTM ist eine erfahrungsorientierte Reise, die Körperpraxis, Improvisation und Maskenarbeit verbindet; wir lehren keine Gags, wir öffnen Raum für authentische Emotionen und kreative Präsenz."}
                {locale === "ca" &&
                  "CTM és un viatge experiencial que uneix pràctica corporal, improvisació i treball amb màscares; no ensenyem gag, obrim espai per a emocions autèntiques i presència creativa."}
              </p>
              <Button
                asChild
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <Link href={`/${locale}/que-es-ctm`}>
                  {locale === "es" && "Leer más"}
                  {locale === "it" && "Leggi di più"}
                  {locale === "en" && "Read more"}
                  {locale === "de" && "Mehr lesen"}
                  {locale === "ca" && "Llegir més"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_V9A1439.JPG-4xVrlF4bHTQBVtJcWZ8GnBDwJPW9cr.jpeg"
                alt="Máscara hecha a mano sobre rostro, taller CTM"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="mascaras" className="py-16 md:py-24 bg-muted/50 backdrop-blur-sm">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-light mb-4 text-balance">
              {locale === "es" && "Las 6 Máscaras"}
              {locale === "it" && "Le 6 Maschere"}
              {locale === "en" && "The 6 Masks"}
              {locale === "de" && "Die 6 Masken"}
              {locale === "ca" && "Les 6 Màscares"}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {locale === "es" && "Un recorrido emocional completo a través de seis máscaras"}
              {locale === "it" && "Un viaggio emotivo completo attraverso sei maschere"}
              {locale === "en" && "A complete emotional journey through six masks"}
              {locale === "de" && "Eine vollständige emotionale Reise durch sechs Masken"}
              {locale === "ca" && "Un recorregut emocional complet a través de sis màscares"}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
            {[
              {
                number: 1,
                name: {
                  es: "Descubrimiento",
                  it: "Scoperta",
                  en: "Discovery",
                  de: "Entdeckung",
                  ca: "Descobriment",
                },
              },
              {
                number: 2,
                name: {
                  es: "Vulnerabilidad",
                  it: "Vulnerabilità",
                  en: "Vulnerability",
                  de: "Verletzlichkeit",
                  ca: "Vulnerabilitat",
                },
              },
              {
                number: 3,
                name: {
                  es: "Rabia",
                  it: "Rabbia",
                  en: "Anger",
                  de: "Wut",
                  ca: "Ràbia",
                },
              },
              {
                number: 4,
                name: {
                  es: "Alegría",
                  it: "Gioia",
                  en: "Joy",
                  de: "Freude",
                  ca: "Alegria",
                },
              },
              {
                number: 5,
                name: {
                  es: "Tristeza",
                  it: "Tristezza",
                  en: "Sadness",
                  de: "Traurigkeit",
                  ca: "Tristesa",
                },
              },
              {
                number: 6,
                name: {
                  es: "Integración",
                  it: "Integrazione",
                  en: "Integration",
                  de: "Integration",
                  ca: "Integració",
                },
              },
            ].map((mask) => (
              <Card key={mask.number} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl font-medium mx-auto mb-4">
                    {mask.number}
                  </div>
                  <h3 className="text-lg font-medium">{mask.name[locale]}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              <Link href={`/${locale}/mascaras`}>
                {locale === "es" && "Ver el recorrido completo"}
                {locale === "it" && "Vedi il percorso completo"}
                {locale === "en" && "See the complete journey"}
                {locale === "de" && "Siehe die vollständige Reise"}
                {locale === "ca" && "Veure el recorregut complet"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Workshops Section */}
      <section id="talleres" className="py-16 md:py-24 bg-background/80 backdrop-blur-sm">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-light mb-4 text-balance">{t("nav.workshops", locale)}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {locale === "es" && "Dos formatos para explorar el método CTM"}
              {locale === "it" && "Due formati per esplorare il metodo CTM"}
              {locale === "en" && "Two formats to explore the CTM method"}
              {locale === "de" && "Zwei Formate zur Erkundung der CTM-Methode"}
              {locale === "ca" && "Dos formats per explorar el mètode CTM"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Intro 3 days */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_V9A0630.JPG-fYz1JTCRYQBxwjtcZnCH4xutMNHs6V.jpeg"
                  alt="Grupo en ejercicio de movimiento"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-2 text-sm text-primary">
                  <Calendar className="h-4 w-4" />
                  <span>
                    {locale === "es" && "3 días"}
                    {locale === "it" && "3 giorni"}
                    {locale === "en" && "3 days"}
                    {locale === "de" && "3 Tage"}
                    {locale === "ca" && "3 dies"}
                  </span>
                </div>
                <h3 className="text-2xl font-light">
                  {locale === "es" && "Intro CTM"}
                  {locale === "it" && "Intro CTM"}
                  {locale === "en" && "Intro CTM"}
                  {locale === "de" && "Intro CTM"}
                  {locale === "ca" && "Intro CTM"}
                </h3>
                <p className="text-sm text-muted-foreground">Barcelona</p>
                <p className="text-muted-foreground">
                  {locale === "es" &&
                    "Una introducción intensiva al método Clown Through Mask en el corazón de Barcelona."}
                  {locale === "it" && "Un'introduzione intensiva al metodo Clown Through Mask nel cuore di Barcellona."}
                  {locale === "en" &&
                    "An intensive introduction to the Clown Through Mask method in the heart of Barcelona."}
                  {locale === "de" &&
                    "Eine intensive Einführung in die Clown Through Mask-Methode im Herzen von Barcelona."}
                  {locale === "ca" && "Una introducció intensiva al mètode Clown Through Mask al cor de Barcelona."}
                </p>
                <Button asChild className="w-full">
                  <Link href={`/${locale}/talleres`}>
                    {locale === "es" && "Info & inscripción"}
                    {locale === "it" && "Info & iscrizione"}
                    {locale === "en" && "Info & enrollment"}
                    {locale === "de" && "Info & Anmeldung"}
                    {locale === "ca" && "Info & inscripció"}
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Intensive 12 days */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow border-secondary/30">
              <div className="relative h-48">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_V9A0761.JPG-eZVnBH1Rsk6IlPJm4XZkG0VtxFsMPm.jpeg"
                  alt="Taller intensivo CTM"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">
                  {locale === "es" && "Intensivo"}
                  {locale === "it" && "Intensivo"}
                  {locale === "en" && "Intensive"}
                  {locale === "de" && "Intensiv"}
                  {locale === "ca" && "Intensiu"}
                </div>
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-2 text-sm text-secondary">
                  <Calendar className="h-4 w-4" />
                  <span>
                    {locale === "es" && "12 días"}
                    {locale === "it" && "12 giorni"}
                    {locale === "en" && "12 days"}
                    {locale === "de" && "12 Tage"}
                    {locale === "ca" && "12 dies"}
                  </span>
                </div>
                <h3 className="text-2xl font-light">
                  {locale === "es" && "CTM Intensivo"}
                  {locale === "it" && "CTM Intensivo"}
                  {locale === "en" && "CTM Intensive"}
                  {locale === "de" && "CTM Intensiv"}
                  {locale === "ca" && "CTM Intensiu"}
                </h3>
                <p className="text-sm text-muted-foreground">Sabadell</p>
                <p className="text-muted-foreground">
                  {locale === "es" &&
                    "El recorrido completo de las 6 máscaras más la nariz roja. Una experiencia transformadora."}
                  {locale === "it" &&
                    "Il percorso completo delle 6 maschere più il naso rosso. Un'esperienza trasformativa."}
                  {locale === "en" &&
                    "The complete journey of the 6 masks plus the red nose. A transformative experience."}
                  {locale === "de" &&
                    "Die vollständige Reise der 6 Masken plus die rote Nase. Eine transformative Erfahrung."}
                  {locale === "ca" &&
                    "El recorregut complet de les 6 màscares més el nas vermell. Una experiència transformadora."}
                </p>
                <Button asChild className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  <Link href={`/${locale}/talleres`}>
                    {locale === "es" && "Info & inscripción"}
                    {locale === "it" && "Info & iscrizione"}
                    {locale === "en" && "Info & enrollment"}
                    {locale === "de" && "Info & Anmeldung"}
                    {locale === "ca" && "Info & inscripció"}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="testimonios" className="py-16 md:py-24 bg-muted/50 backdrop-blur-sm">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-light mb-4 text-balance">{t("testimonials.title", locale)}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("testimonials.subtitle", locale)}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {translations.testimonials.items.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <Quote className="h-8 w-8 text-primary/30" />
                  <p className="text-muted-foreground leading-relaxed italic">{testimonial.quote[locale]}</p>
                  <p className="text-sm font-medium text-foreground">— {testimonial.author[locale]}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-16 md:py-24 bg-background/80 backdrop-blur-sm">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-light mb-4 text-balance">
              {locale === "es" && "¿Por qué hacer CTM?"}
              {locale === "it" && "Perché fare CTM?"}
              {locale === "en" && "Why do CTM?"}
              {locale === "de" && "Warum CTM machen?"}
              {locale === "ca" && "Per què fer CTM?"}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title:
                  locale === "es"
                    ? "Presencia auténtica"
                    : locale === "it"
                      ? "Presenza autentica"
                      : locale === "en"
                        ? "Authentic presence"
                        : locale === "de"
                          ? "Authentische Präsenz"
                          : "Presència autèntica",
                description:
                  locale === "es"
                    ? "Desarrolla una presencia escénica genuina y conectada con tu verdad interior, permitiendo que tu expresión artística fluya desde un lugar de autenticidad."
                    : locale === "it"
                      ? "Sviluppa una presenza scenica genuina e connessa con la tua verità interiore, permettendo alla tua espressione artistica di fluire da un luogo di autenticità."
                      : locale === "en"
                        ? "Develop a genuine stage presence connected to your inner truth, allowing your artistic expression to flow from a place of authenticity."
                        : locale === "de"
                          ? "Entwickle eine echte Bühnenpräsenz, die mit deiner inneren Wahrheit verbunden ist und deine künstlerische Ausdrucksweise aus einem Ort der Authentizität fließen lässt."
                          : "Desenvolupa una presència escènica genuïna i connectada amb la teva veritat interior, permetent que la teva expressió artística flueixi des d'un lloc d'autenticitat.",
              },
              {
                title:
                  locale === "es"
                    ? "Exploración emocional"
                    : locale === "it"
                      ? "Esplorazione emotiva"
                      : locale === "en"
                        ? "Emotional exploration"
                        : locale === "de"
                          ? "Emotionale Erkundung"
                          : "Exploració emocional",
                description:
                  locale === "es"
                    ? "Un espacio seguro y contenido para explorar el espectro completo de emociones humanas, desde la vulnerabilidad hasta la alegría, sin juicio ni expectativas."
                    : locale === "it"
                      ? "Uno spazio sicuro e contenuto per esplorare lo spettro completo delle emozioni umane, dalla vulnerabilità alla gioia, senza giudizio né aspettative."
                      : locale === "en"
                        ? "A safe and contained space to explore the full spectrum of human emotions, from vulnerability to joy, without judgment or expectations."
                        : locale === "de"
                          ? "Ein sicherer und geschützter Raum, um das gesamte Spektrum menschlicher Emotionen zu erkunden, von Verletzlichkeit bis Freude, ohne Urteil oder Erwartungen."
                          : "Un espai segur i contingut per explorar l'espectre complet d'emocions humanes, des de la vulnerabilitat fins a l'alegria, sense judici ni expectatives.",
              },
              {
                title:
                  locale === "es"
                    ? "Creatividad liberada"
                    : locale === "it"
                      ? "Creatività liberata"
                      : locale === "en"
                        ? "Liberated creativity"
                        : locale === "de"
                          ? "Befreite Kreativität"
                          : "Creativitat alliberada",
                description:
                  locale === "es"
                    ? "Desbloquea tu potencial creativo a través del juego consciente y la improvisación, descubriendo nuevas formas de expresión que trascienden lo racional."
                    : locale === "it"
                      ? "Sblocca il tuo potenziale creativo attraverso il gioco consapevole e l'improvvisazione, scoprendo nuove forme di espressione che trascendono il razionale."
                      : locale === "en"
                        ? "Unlock your creative potential through conscious play and improvisation, discovering new forms of expression that transcend the rational."
                        : locale === "de"
                          ? "Entfalte dein kreatives Potenzial durch bewusstes Spiel und Improvisation und entdecke neue Ausdrucksformen, die das Rationale überschreiten."
                          : "Desbloqueja el teu potencial creatiu a través del joc conscient i la improvisació, descobrint noves formes d'expressió que transcendeixen el racional.",
              },
            ].map((benefit, i) => (
              <div key={i} className="space-y-4">
                <h3 className="text-xl font-medium text-primary">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="py-16 md:py-24 bg-muted/50 backdrop-blur-sm">
        <div className="container px-4 max-w-3xl mx-auto">
          <NewsletterForm locale={locale} />
        </div>
      </section>

      {/* Calendar CTA */}
      <section id="calendario" className="py-16 md:py-24 bg-secondary text-secondary-foreground">
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-light mb-6 text-balance">
            {locale === "es" && "Próximos eventos"}
            {locale === "it" && "Prossimi eventi"}
            {locale === "en" && "Upcoming events"}
            {locale === "de" && "Kommende Veranstaltungen"}
            {locale === "ca" && "Propers esdeveniments"}
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            {locale === "es" && "Consulta el calendario completo de talleres y eventos"}
            {locale === "it" && "Consulta il calendario completo di workshop ed eventi"}
            {locale === "en" && "Check the complete calendar of workshops and events"}
            {locale === "de" && "Siehe den vollständigen Kalender der Workshops und Veranstaltungen"}
            {locale === "ca" && "Consulta el calendari complet de tallers i esdeveniments"}
          </p>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-secondary-foreground/30 hover:bg-secondary-foreground/10 text-secondary-foreground bg-transparent"
          >
            <Link href={`/${locale}/calendario`}>
              <Calendar className="mr-2 h-5 w-5" />
              {locale === "es" && "Ver calendario"}
              {locale === "it" && "Vedi calendario"}
              {locale === "en" && "View calendar"}
              {locale === "de" && "Kalender ansehen"}
              {locale === "ca" && "Veure calendari"}
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
