import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import KeyFeatures from "@/components/key-features"
import ConnectWithDoctors from "@/components/connect-with-doctors"
import TextConsultation from "@/components/text-consultation"
import VideoConsultation from "@/components/video-consultation"
import BookDoctor from "@/components/book-doctor"
import HowItWorks from "@/components/how-it-works"
import ConsultationMethods from "@/components/consultation-methods"
import HomeVisitServices from "@/components/home-visit-services"
import WhoItsFor from "@/components/who-its-for"
import TrustSignals from "@/components/trust-signals"
import PartnerWithUs from "@/components/partner-with-us"
import EmailSignup from "@/components/email-signup"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <KeyFeatures />
      <ConnectWithDoctors />
      <TextConsultation />
      <VideoConsultation />
      <BookDoctor />
      <HowItWorks />
      <ConsultationMethods />
      <HomeVisitServices />
      <WhoItsFor />
      <TrustSignals />
      <PartnerWithUs />
      <EmailSignup />
      <Footer />
    </main>
  )
}

