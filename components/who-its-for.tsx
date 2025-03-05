import { User, UserRound, Building, Stethoscope, Heart } from "lucide-react"

export default function WhoItsFor() {
  const audiences = [
    {
      icon: <User className="h-12 w-12 text-primary" />,
      title: "Patients",
      description: "Seamless access to healthcare services from anywhere.",
    },
    {
      icon: <Stethoscope className="h-12 w-12 text-primary" />,
      title: "Doctors & Nurses",
      description: "Expand your practice online and reach more patients.",
    },
    {
      icon: <Building className="h-12 w-12 text-primary" />,
      title: "Labs & Pharmacies",
      description: "Connect with patients and grow your business.",
    },
    {
      icon: <UserRound className="h-12 w-12 text-primary" />,
      title: "Caregivers & Home Health",
      description: "Offer your services to patients needing home care.",
    },
    {
      icon: <Heart className="h-12 w-12 text-primary" />,
      title: "Mental Health & Wellness Experts",
      description: "Coming Soon 🚀",
      badge: "Coming Soon",
    },
  ]

  return (
    <section id="who-its-for" className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 text-primary">Designed for Patients & Healthcare Professionals</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Consultify serves everyone in the healthcare ecosystem.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">{audience.icon}</div>
              <h3 className="text-xl font-bold mb-2">{audience.title}</h3>
              <p className="text-gray-600">{audience.description}</p>
              {audience.badge && (
                <span className="inline-block mt-2 px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                  {audience.badge}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

