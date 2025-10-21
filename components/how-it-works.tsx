import { UserPlus, Settings, Sparkles } from "lucide-react"

const steps = [
  {
    icon: UserPlus,
    number: "01",
    title: "Sign Up in Seconds",
    description: "Create your account and tell Francesca about your preferences and goals.",
  },
  {
    icon: Settings,
    number: "02",
    title: "Customize Your Experience",
    description: "Connect your favorite apps and tools to create a seamless workflow.",
  },
  {
    icon: Sparkles,
    number: "03",
    title: "Let AI Do the Work",
    description: "Sit back and watch as Francesca handles your tasks, schedules, and reminders.",
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 md:py-32 bg-[#F8F9FA]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#2C3E50] mb-4 text-balance">How It Works</h2>
          <p className="text-xl text-[#333333]/70 max-w-2xl mx-auto leading-relaxed">
            Get started with Francesca in three simple steps
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#FF6B6B] text-white mb-6 shadow-lg">
                <step.icon className="h-10 w-10" />
              </div>
              <div className="absolute top-8 left-1/2 -translate-x-1/2 -z-10">
                <span className="font-serif text-8xl font-bold text-[#2C3E50]/5">{step.number}</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#2C3E50] mb-3">{step.title}</h3>
              <p className="text-[#333333]/70 leading-relaxed">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[#FF6B6B]/30 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
