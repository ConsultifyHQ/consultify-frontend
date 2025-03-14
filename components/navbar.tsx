"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle smooth scroll
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false) // Close the mobile menu after clicking
    }
  }

  const navItems = [
    { label: "Features", id: "features" },
    { label: "How It Works", id: "how-it-works" },
    { label: "Consultation", id: "consultation-methods" },
  ]

  return (
    <header
      className={`w-full py-4 px-4 md:px-8 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-white"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative w-8 h-8">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4692.jpg-YwQKlQr08aJ278C4DNik75t7u8ghAg.jpeg"
              alt="Consultify Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="text-primary font-bold text-xl">Consultify Care</div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="p-0 w-[280px] sm:w-[350px]">
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center space-x-2">
                  <div className="relative w-8 h-8">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4692.jpg-YwQKlQr08aJ278C4DNik75t7u8ghAg.jpeg"
                      alt="Consultify Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="font-bold text-primary">Consultify Care</span>
                </div>
                <SheetClose className="rounded-full p-2 hover:bg-gray-100">
                  {/* <X className="h-5 w-5" /> */}
                  <span className="sr-only">Close</span>
                </SheetClose>
              </div>

              {/* Mobile Menu Content */}
              <div className="flex-1 overflow-auto py-6 px-4">
                <nav className="flex flex-col space-y-6">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="flex items-center space-x-2 text-base font-medium text-gray-700 hover:text-primary transition-colors py-2 border-b border-gray-100"
                    >
                      <span>{item.label}</span>
                    </button>
                  ))}
                </nav>
              </div>

              {/* Mobile Menu Footer */}
              <div className="p-4 border-t text-center text-sm text-gray-500">
                <p>© {new Date().getFullYear()} Consultify Care</p>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

