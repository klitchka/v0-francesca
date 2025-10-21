import { locales, type Locale } from "@/lib/i18n"
import { ContactoClient } from "./contacto-client"

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default function ContactoPage({ params }: { params: { locale: Locale } }) {
  return <ContactoClient locale={params.locale} />
}
