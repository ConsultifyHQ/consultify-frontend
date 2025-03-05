import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <header className="w-full py-4 px-4 md:px-8 bg-white border-b fixed top-0 left-0 right-0 z-50">
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="text-primary font-bold text-xl">Consultify</div>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#features" className="text-sm font-medium text-gray-600 hover:text-primary">
            Features
          </Link>
          <Link href="#how-it-works" className="text-sm font-medium text-gray-600 hover:text-primary">
            How It Works
          </Link>
          <Link href="#consultation-methods" className="text-sm font-medium text-gray-600 hover:text-primary">
            Consultation
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm" className="hidden md:flex">
            Sign In
          </Button>
          <Button size="sm" className="bg-primary hover:bg-primary/90">
            Join Wishlist
          </Button>
        </div>
      </div>
    </header>
  )
}

