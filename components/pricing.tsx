import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "forever",
    description: "Perfect for trying out Francesca",
    features: ["Up to 50 tasks per month", "Basic AI recommendations", "Email support", "Mobile app access"],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$19",
    period: "per month",
    description: "For power users who need more",
    features: [
      "Unlimited tasks",
      "Advanced AI insights",
      "Priority support",
      "Calendar integrations",
      "Custom workflows",
      "Team collaboration",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact us",
    description: "For teams and organizations",
    features: [
      "Everything in Professional",
      "Dedicated account manager",
      "Custom integrations",
      "Advanced security",
      "SLA guarantee",
      "Training & onboarding",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
]

export function Pricing() {
  return (
    <section className="py-20 md:py-32 bg-[#F8F9FA]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#2C3E50] mb-4 text-balance">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-[#333333]/70 max-w-2xl mx-auto leading-relaxed">
            Choose the plan that's right for you. Upgrade or downgrade anytime.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${
                plan.highlighted ? "border-4 border-[#FF6B6B] shadow-2xl scale-105" : "border-2 border-[#F8F9FA]"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#F4A261] text-white px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}
              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="font-serif text-2xl text-[#2C3E50] mb-2">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="font-serif text-5xl font-bold text-[#2C3E50]">{plan.price}</span>
                  <span className="text-[#333333]/60 ml-2">{plan.period}</span>
                </div>
                <p className="text-[#333333]/70 mt-3">{plan.description}</p>
              </CardHeader>
              <CardContent className="pb-8">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[#FF6B6B] flex-shrink-0 mt-0.5" />
                      <span className="text-[#333333]/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    plan.highlighted
                      ? "bg-[#FF6B6B] hover:bg-[#FF6B6B]/90 text-white"
                      : "bg-[#2C3E50] hover:bg-[#2C3E50]/90 text-white"
                  } py-6 rounded-full text-lg font-semibold`}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
