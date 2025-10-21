import { t, type Locale } from "@/lib/translations"

export function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="bg-neutral-900 text-neutral-300 py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} {t("footer.claim", locale)}
        </p>
      </div>
    </footer>
  )
}
