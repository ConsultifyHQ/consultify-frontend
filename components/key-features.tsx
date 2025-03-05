import { Video, Home, FlaskRound, FileText, Pill, Heart } from "lucide-react"

export default function KeyFeatures() {
  const features = [
    {
      icon: <Video className="h-10 w-10 text-primary" />,
      title: "Book Online Consultations",
      description: "Connect via audio, video, or chat with certified healthcare professionals.",
    },
    {
      icon: <Home className="h-10 w-10 text-primary" />,
      title: "Home Visit Requests",
      description: "Schedule certified nurses and caregivers for personalized home care.",
    },
    {
      icon: <FlaskRound className="h-10 w-10 text-primary" />,
      title: "Certified Lab Tests",
      description: "Search and book lab services with trusted providers near you.",
    },
    {
      icon: <FileText className="h-10 w-10 text-primary" />,
      title: "Patient Record Book",
      description: "Securely store and share your medical history with providers.",
    },
    {
      icon: <Pill className="h-10 w-10 text-primary" />,
      title: "Find Nearby Pharmacies",
      description: "Locate and connect with pharmacies and health services in your area.",
    },
    {
      icon: <Heart className="h-10 w-10 text-primary" />,
      title: "Wellness & Mental Health",
      description: "Access support for your complete wellbeing and mental health needs.",
    },
  ]

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 text-primary">Comprehensive & Accessible Healthcare Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need for better healthcare access, all in one platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 feature-card"
            >
              <div className="bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

