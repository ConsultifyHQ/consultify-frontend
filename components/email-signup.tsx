import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Instagram, Linkedin } from "lucide-react"

export default function EmailSignup() {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-primary">Stay Updated – Subscribe for Early Access!</h2>
          <p className="text-gray-600 mb-8">
            Be the first to know when we launch and receive exclusive updates about our services.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input type="email" placeholder="Enter your email" className="flex-grow" />
            <Button className="bg-primary hover:bg-primary/90">Subscribe</Button>
          </div>

          <div className="mt-8">
            <p className="text-sm text-gray-500 mb-4">Follow us on social media</p>
            <div className="flex justify-center space-x-4">
              <Link
                href="https://linkedin.com/company/consultifycare-limited"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-gray-600" />
              </Link>
              <Link
                href="https://x.com/consultifycare?s=21"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors"
                aria-label="Follow us on X (Twitter)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-gray-600"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </Link>
              <Link
                href="https://www.instagram.com/consultifycare?igsh=MTE2aTA3bW5rZW16eQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5 text-gray-600" />
              </Link>
            </div>
          </div>

          <p className="mt-8 text-sm text-gray-500">
            Your data is secure and protected. We respect your privacy and will never share your information.
          </p>
        </div>
      </div>
    </section>
  )
}

