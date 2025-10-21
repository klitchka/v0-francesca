import { Calendar, Brain, Zap, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "Automatically organize your calendar and never miss an important meeting or deadline again.",
  },
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description: "Get personalized recommendations based on your habits, preferences, and goals.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Execute tasks in seconds with our optimized AI engine that learns from every interaction.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your data is encrypted and secure. We never share your information with third parties.",
  },
]

export function Features() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#2C3E50] mb-4 text-balance">
            Everything You Need to Stay Organized
          </h2>
          <p className="text-xl text-[#333333]/70 max-w-2xl mx-auto leading-relaxed">
            Francesca combines powerful AI with intuitive design to help you accomplish more every day.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-2 border-[#F8F9FA] hover:border-[#FF6B6B]/30 transition-all hover:shadow-lg"
            >
              <CardContent className="pt-8 pb-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FF6B6B]/10 mb-6">
                  <feature.icon className="h-8 w-8 text-[#FF6B6B]" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#2C3E50] mb-3">{feature.title}</h3>
                <p className="text-[#333333]/70 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
