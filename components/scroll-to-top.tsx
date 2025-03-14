"use client"

import { useState, useEffect } from "react"
import { ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [isPulsing, setIsPulsing] = useState(false)

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true)
        // Start pulsing when the button first appears
        if (!isVisible) {
          setIsPulsing(true)
          setTimeout(() => setIsPulsing(false), 5000) // Stop pulsing after 5 seconds
        }
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [isVisible])

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={cn(
        "fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-all duration-300 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2",
        "transform hover:-translate-y-1",
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none",
        isPulsing && "scroll-to-top-pulse",
      )}
    >
      <ChevronUp className="h-6 w-6" />
      <span className="sr-only">Scroll to top</span>
    </button>
  )
}

