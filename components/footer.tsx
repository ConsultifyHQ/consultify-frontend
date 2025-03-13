"use client"
import Link from "next/link"

export default function Footer() {
  // Function to handle smooth scrolling
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Information */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-white font-bold text-xl mb-4 block">
              Consultify Care
            </Link>
            <p className="text-sm">
              Your trusted healthcare companion. Access quality healthcare services anytime, anywhere.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("features")}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("how-it-works")}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("consultation-methods")}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  Consultation
                </button>
              </li>
              
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-gray-500 cursor-not-allowed">Online Consultations (Coming Soon)</span>
              </li>
              <li>
                <span className="text-gray-500 cursor-not-allowed">Home Visits (Coming Soon)</span>
              </li>
              <li>
                <span className="text-gray-500 cursor-not-allowed">Lab Tests (Coming Soon)</span>
              </li>
              <li>
                <span className="text-gray-500 cursor-not-allowed">Medication Delivery (Coming Soon)</span>
              </li>
              <li>
                <span className="text-gray-500 cursor-not-allowed">Wellness Support (Coming Soon)</span>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/legal/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/terms-of-service" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <span className="text-gray-500 cursor-not-allowed">Cookie Policy (Coming Soon)</span>
              </li>
              <li>
                <span className="text-gray-500 cursor-not-allowed">HIPAA Compliance (Coming Soon)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© {new Date().getFullYear()} Consultify Care. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

