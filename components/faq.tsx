import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How does Francesca's AI work?",
    answer:
      "Francesca uses advanced machine learning algorithms to understand your preferences, habits, and goals. The more you use it, the smarter it becomes at predicting your needs and providing personalized recommendations.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. We use bank-level encryption to protect your data, and we never share your information with third parties. Your privacy is our top priority, and you have full control over your data at all times.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes! You can cancel your subscription at any time with no penalties or fees. If you cancel, you'll continue to have access to your plan until the end of your billing period.",
  },
  {
    question: "What integrations does Francesca support?",
    answer:
      "Francesca integrates with popular tools like Google Calendar, Outlook, Slack, Trello, Asana, and many more. We're constantly adding new integrations based on user feedback.",
  },
  {
    question: "Do you offer a free trial?",
    answer:
      "Yes! Our Professional plan comes with a 14-day free trial. No credit card required. You can explore all the premium features and decide if it's right for you.",
  },
  {
    question: "How is Francesca different from other AI assistants?",
    answer:
      "Francesca is specifically designed for personal productivity and task management. Unlike general-purpose AI assistants, we focus on understanding your workflow and providing actionable insights that help you accomplish more every day.",
  },
]

export function FAQ() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#2C3E50] mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-[#333333]/70 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about Francesca
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-2 border-[#F8F9FA] rounded-lg px-6 hover:border-[#FF6B6B]/30 transition-colors"
              >
                <AccordionTrigger className="text-left font-serif text-lg text-[#2C3E50] hover:text-[#FF6B6B] py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#333333]/80 leading-relaxed pb-6">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
