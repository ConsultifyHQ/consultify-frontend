import { Button } from "@/components/ui/button"

export default function TextConsultation() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-white rounded-xl shadow-lg p-4 max-w-sm mx-auto consultation-card">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-gray-200 mr-3"></div>
                <div>
                  <p className="font-medium">Dr. Sarah Chen</p>
                  <p className="text-xs text-gray-500">General Physician</p>
                </div>
                <div className="ml-auto">
                  <span className="inline-block w-3 h-3 bg-green-500 rounded-full"></span>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex justify-end">
                  <div className="bg-primary/10 text-primary rounded-lg rounded-tr-none p-3 max-w-[80%]">
                    <p className="text-sm">I've been having a headache for the past 3 days. Should I be concerned?</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="bg-gray-100 rounded-lg rounded-tl-none p-3 max-w-[80%]">
                    <p className="text-sm">
                      It could be due to several factors. Have you been getting enough sleep? Any recent changes in your
                      routine?
                    </p>
                  </div>
                </div>

                <div className="flex justify-end">
                  <div className="bg-primary/10 text-primary rounded-lg rounded-tr-none p-3 max-w-[80%]">
                    <p className="text-sm">I've been working late, and probably not drinking enough water.</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="bg-gray-100 rounded-lg rounded-tl-none p-3 max-w-[80%]">
                    <p className="text-sm">
                      That could be contributing to your headaches. Let's discuss some strategies to help...
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="w-full p-3 pr-12 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold text-primary mb-4">Experience Seamless Text-Based Consultations</h2>
            <p className="text-gray-600 mb-6">
              Our chat-based consultations allow you to connect with healthcare providers at your convenience. Perfect
              for non-urgent questions and follow-ups.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Flexible Timing</h3>
                <p className="text-sm text-gray-600">Chat with doctors at your convenience</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Secure Chats</h3>
                <p className="text-sm text-gray-600">End-to-end encrypted conversations</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Medical History</h3>
                <p className="text-sm text-gray-600">Doctors can view your shared records</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Digital Prescriptions</h3>
                <p className="text-sm text-gray-600">Get prescriptions sent directly to you</p>
              </div>
            </div>

            <Button className="bg-primary hover:bg-primary/90">Start Chatting</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

