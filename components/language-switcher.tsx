"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { locales, localeNames, type Locale } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";

export function LanguageSwitcher({ currentLocale }: { currentLocale: Locale }) {
  const router = useRouter();
  const pathname = usePathname() || "/";
  const searchParams = useSearchParams();

  const switchLocale = (newLocale: Locale) => {
    if (newLocale === currentLocale) return;

    // Partes del path actual
    const segments = pathname.split("/");
    const isKnownLocale = locales.includes(segments[1] as Locale);

    // Path sin el prefijo de idioma
    const restPath = isKnownLocale ? `/${segments.slice(2).join("/")}` : pathname;
    const query = searchParams?.toString();
    const hash = typeof window !== "undefined" ? window.location.hash : "";

    // Nuevo destino con locale
    const newPath =
      `/${newLocale}` +
      (restPath === "/" ? "" : restPath) +
      (query ? `?${query}` : "") +
      (hash || "");

    // Navegación SPA (con refresh por si cargas diccionarios por segment)
    router.push(newPath);
    router.refresh();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2" aria-label="Change language">
          <Globe className="h-4 w-4" />
          <span className="uppercase text-sm font-medium">{currentLocale}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((locale) => (
          <DropdownMenuItem
            key={locale}
            onClick={() => switchLocale(locale)}
            className={currentLocale === locale ? "bg-muted" : ""}
          >
            {localeNames[locale]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
