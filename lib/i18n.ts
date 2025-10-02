export type Locale = "es" | "it" | "en" | "de" | "ca"

export const locales: Locale[] = ["es", "it", "en", "de", "ca"]

export const localeNames: Record<Locale, string> = {
  es: "Español",
  it: "Italiano",
  en: "English",
  de: "Deutsch",
  ca: "Català",
}

export const defaultLocale: Locale = "es"

export function getLocaleFromPath(pathname: string): Locale {
  const segments = pathname.split("/")
  const potentialLocale = segments[1] as Locale
  return locales.includes(potentialLocale) ? potentialLocale : defaultLocale
}
