"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import type { Locale } from "@/lib/i18n"
import { t } from "@/lib/translations"

export function NewsletterForm({ locale }: { locale: Locale }) {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Integrate with newsletter provider
    console.log("Newsletter signup:", email)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setEmail("")
    }, 3000)
  }

  return (
    <div className="bg-card rounded-xl p-6 md:p-8 shadow-sm border">
      <h3 className="text-2xl font-medium mb-2">{t("newsletter.title", locale)}</h3>
      <p className="text-muted-foreground mb-6">{t("newsletter.description", locale)}</p>

      {submitted ? (
        <div className="text-primary font-medium">
          {locale === "es" && "¡Gracias por suscribirte!"}
          {locale === "it" && "Grazie per esserti iscritto!"}
          {locale === "en" && "Thank you for subscribing!"}
          {locale === "de" && "Danke für deine Anmeldung!"}
          {locale === "ca" && "Gràcies per subscriure-t!"}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <Input
            type="email"
            placeholder={t("newsletter.placeholder", locale)}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1"
          />
          <Button type="submit" className="bg-primary hover:bg-primary/90">
            {t("newsletter.submit", locale)}
          </Button>
        </form>
      )}
    </div>
  )
}
