import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F8F9FA] to-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-serif text-5xl font-bold leading-tight text-[#2C3E50] md:text-6xl lg:text-7xl text-balance">
            Meet Francesca, Your AI-Powered Personal Assistant
          </h1>
          <p className="mt-6 text-xl text-[#333333]/80 md:text-2xl leading-relaxed text-pretty">
            Simplify your life with intelligent task management, seamless scheduling, and personalized
            recommendations—all in one place.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              className="bg-[#FF6B6B] text-white hover:bg-[#FF6B6B]/90 text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[#2C3E50] text-[#2C3E50] hover:bg-[#2C3E50] hover:text-white text-lg px-8 py-6 rounded-full transition-all bg-transparent"
            >
              Watch Demo
            </Button>
          </div>
          <div className="mt-16">
            <img
              src="/modern-ai-assistant-dashboard-interface-with-clean.jpg"
              alt="Francesca AI Assistant Dashboard"
              className="rounded-2xl shadow-2xl border-4 border-white"
            />
          </div>
        </div>
      </div>
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 h-32 w-32 rounded-full bg-[#F4A261]/20 blur-3xl" />
      <div className="absolute bottom-20 left-10 h-40 w-40 rounded-full bg-[#FF6B6B]/10 blur-3xl" />
    </section>
  )
}
