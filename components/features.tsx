export default function Features() {
  const features = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-primary"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
        </svg>
      ),
      title: "Book Online Consultations",
      description: "Audio, Video, and Chat consultations with verified healthcare providers.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-primary"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      ),
      title: "Home Visit Requests",
      description: "Book skilled nurses and caregivers for home visits and care.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-primary"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 9V7c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v2"></path>
          <path d="M1 9h22"></path>
          <path d="M3 11v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7"></path>
          <path d="M8 11v8"></path>
          <path d="M16 11v8"></path>
          <path d="M12 3v4"></path>
          <path d="M12 15a2 2 0 1 0 0 4 2 2 0 1 0 0-4z"></path>
        </svg>
      ),
      title: "Certified Lab Tests",
      description: "Search and book lab tests with certified providers near you.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-primary"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
          <path d="M15 10c.6.3 1 1 1 1.7 0 1-.8 1.9-1.8 1.9.6.3 1 1 1 1.7 0 1-.8 1.8-1.8 1.9M15 4v16M9 10c-.6.3-1 1-1 1.7 0 1 .8 1.9 1.8 1.9-.6.3-1 1-1 1.7 0 1 .8 1.8 1.8 1.9M9 4v16"></path>
        </svg>
      ),
      title: "Patient Record Book",
      description: "Securely store and share your medical history with providers.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-primary"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 10c0 6.627-8.954 12-9.5 12-0.275 0-5.5-3.273-5.5-12M7 16.5C7 18.433 5.433 20 3.5 20S0 18.433 0 16.5a3.5 3.5 0 017 0zm14 0c0 1.933-1.567 3.5-3.5 3.5S14 18.433 14 16.5a3.5 3.5 0 017 0zM8 7a4 4 0 108 0H8z"></path>
        </svg>
      ),
      title: "Find Nearby Pharmacies",
      description: "Locate and connect with pharmacies and health services in your area.",
    },
  ]

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Key Features</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need for better healthcare access, all in one platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

