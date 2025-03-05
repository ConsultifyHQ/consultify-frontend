import { Shield, Award, CheckCircle } from "lucide-react"

export default function TrustSignals() {
  const signals = [
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "HIPAA Compliant",
      description: "Your data is protected with industry-standard security protocols.",
    },
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: "Certified Professionals",
      description: "All healthcare providers are verified and certified.",
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-primary" />,
      title: "Quality Assurance",
      description: "Rigorous quality checks for all services offered on our platform.",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 text-primary">Why Trust Consultify</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We prioritize your safety, privacy, and the quality of care you receive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {signals.map((signal, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
            >
              <div className="flex justify-center mb-4">{signal.icon}</div>
              <h3 className="text-xl font-bold mb-2">{signal.title}</h3>
              <p className="text-gray-600">{signal.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 italic">
            "Testimonials from early users will appear here. Join our wishlist to be among the first to experience
            Consultify."
          </p>
        </div>
      </div>
    </section>
  )
}

