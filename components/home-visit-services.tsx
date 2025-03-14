import Image from "next/image"
// import { Button } from "@/components/ui/button"

export default function HomeVisitServices() {
  const services = [
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Healthcare%27s%20racial%20divide-N6gDW6kw7dMkydhNBpaJi7C4o9KU2L.jpeg",
      title: "Nurse Home visits for personalized care",
      description: "Skilled nursing services in the comfort of your home.",
      cta: "Book a nurse",
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WebP%20Image-Iu2rbB7H8Rgqxb0XHR55tyogqiEc4f.webp",
      title: "Easy lab sample collection",
      description: "Technicians collect samples from your home for testing.",
      cta: "Schedule collection",
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image_3-o8wqnzkfOnA7bqN6KTYtd45mFNbaWX.png",
      title: "Efficient mobile healthcare",
      description: "Mobile healthcare units for comprehensive services.",
      cta: "View services",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-2">Comprehensive Home Visit Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Tailored for your convenience and comfort.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                {/* <Button size="sm" className="bg-primary hover:bg-primary/90">
                  {service.cta}
                </Button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

