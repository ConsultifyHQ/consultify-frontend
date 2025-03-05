import { MessageSquare, Video, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ConsultationMethods() {
  const methods = [
    {
      icon: <Phone className="h-10 w-10 text-primary" />,
      title: "Audio Consultations for Immediate Support",
      description: "Speak directly with healthcare professionals for quick advice and guidance.",
      cta: "Learn more",
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-primary" />,
      title: "Convenient Text-based sessions",
      description: "Message your doctor at your convenience for non-urgent issues.",
      cta: "Start chatting",
    },
    {
      icon: <Video className="h-10 w-10 text-primary" />,
      title: "Face-to-face video consultations",
      description: "Get comprehensive care with virtual face-to-face meetings.",
      cta: "Book now",
    },
  ]

  return (
    <section id="consultation-methods" className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-2">Explore Our Diverse Consultation Methods</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Choose the communication style that works best for you.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {methods.map((method, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-4">{method.icon}</div>
              <h3 className="text-xl font-bold mb-2">{method.title}</h3>
              <p className="text-gray-600 mb-6">{method.description}</p>
              <Button variant="outline" size="sm">
                {method.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

