import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function ConnectWithDoctors() {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-4">Connect with Doctors Anytime, Anywhere</h2>
            <p className="text-gray-600 mb-6">
              Experience healthcare without boundaries. Our platform connects you with certified medical professionals
              for virtual consultations, making healthcare accessible from anywhere.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary mr-2 mt-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Connect with certified doctors</span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary mr-2 mt-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Consult via chat, audio, or video</span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary mr-2 mt-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Get prescriptions and referrals</span>
              </li>
            </ul>
            <Button className="bg-primary hover:bg-primary/90">Book a Consultation</Button>
          </div>

          <div className="relative h-[400px] md:h-[500px] consultation-card">
            <div className="absolute inset-0 bg-gray-100 rounded-xl overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2%20Unstoppable%20Stocks%20to%20Buy%20With%20Your%20%241%2C400%20Stimulus%20Check%20_%20The%20Motley%20Fool-uSeyo1cqfijMyOsMuimMwwDXUlLIjs.jpeg"
                alt="Doctor consulting with patient via video call"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primary"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-primary">Dr. Michael Cohen</p>
                    <p className="text-xs text-gray-500">General Physician • Available Now</p>
                  </div>
                  <Button size="sm" className="ml-auto">
                    Connect
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

