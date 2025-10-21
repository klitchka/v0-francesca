import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    image: "/professional-woman-smiling.png",
    content:
      "Francesca has completely transformed how I manage my day. I'm more productive than ever and actually have time for what matters.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Entrepreneur",
    image: "/professional-man-smiling.png",
    content:
      "The AI recommendations are incredibly accurate. It's like having a personal assistant who knows exactly what I need before I do.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Freelance Designer",
    image: "/creative-professional-woman.png",
    content:
      "I was skeptical at first, but Francesca has become indispensable. The smart scheduling alone saves me hours every week.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#2C3E50] mb-4 text-balance">
            Loved by Thousands of Users
          </h2>
          <p className="text-xl text-[#333333]/70 max-w-2xl mx-auto leading-relaxed">
            See what our community has to say about Francesca
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 border-[#F8F9FA] hover:shadow-xl transition-all">
              <CardContent className="pt-8 pb-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#F4A261] text-[#F4A261]" />
                  ))}
                </div>
                <p className="text-[#333333]/80 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-bold text-[#2C3E50]">{testimonial.name}</p>
                    <p className="text-sm text-[#333333]/60">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
