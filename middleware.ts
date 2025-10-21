// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "es", "it"] as const;
const DEFAULT_LOCALE = "en";

function getLocale(request: NextRequest) {
  const accept = request.headers.get("accept-language") || "";
  const preferred = accept.split(",")[0]?.split("-")[0] || DEFAULT_LOCALE;
  return locales.includes(preferred as any) ? preferred : DEFAULT_LOCALE;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ignorar rutas estáticas/APIs
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/favicon") ||
    pathname.includes(".")
  ) {
    return;
  }

  // Si ya tiene locale, no tocar
  const hasLocale = locales.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`));
  if (hasLocale) return;

  // Redirigir a locale por defecto (o negociado)
  const locale = getLocale(request) || DEFAULT_LOCALE;
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
