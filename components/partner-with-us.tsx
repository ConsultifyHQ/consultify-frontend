"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Hospital, UserPlus, Building2 } from "lucide-react";

export default function PartnerWithUs() {
  const partners = [
    {
      icon: <Hospital className="h-12 w-12 text-white" />,
      title: "Hospitals & Clinics",
      description: "Expand your reach and offer telehealth services to more patients.",
    },
    {
      icon: <UserPlus className="h-12 w-12 text-white" />,
      title: "Healthcare Professionals",
      description: "Join our network of trusted providers and grow your practice.",
    },
    {
      icon: <Building2 className="h-12 w-12 text-white" />,
      title: "Labs & Pharmacies",
      description: "Connect with patients and streamline your service delivery.",
    },
  ];

  // State for form inputs
  const [email, setEmail] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    // Send data to backend
    try {
      const res = await fetch("/api/partners", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, businessType }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setSuccessMessage("Your application has been submitted successfully!");
      setEmail("");
      setBusinessType("");
    } catch (error: any) {
      setErrorMessage(error.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="py-16 hero-gradient text-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Join the Consultify Network – Partner With Us!</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Become part of our growing network of healthcare providers and offer your services to patients nationwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {partners.map((partner, index) => (
            <div key={index} className="bg-white/10 p-6 rounded-lg text-center backdrop-blur-sm partner-card">
              <div className="flex justify-center mb-4">{partner.icon}</div>
              <h3 className="text-xl font-bold mb-2">{partner.title}</h3>
              <p className="opacity-90">{partner.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-md mx-auto bg-white/20 backdrop-blur-sm p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4 text-center">Apply to Become a Partner</h3>
          
          {successMessage && <p className="text-green-500 text-sm text-center mb-4">{successMessage}</p>}
          {errorMessage && <p className="text-red-500 text-sm text-center mb-4">{errorMessage}</p>}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="partner-email" className="block text-sm font-medium mb-1">
                Business Email
              </label>
              <Input
                id="partner-email"
                type="email"
                placeholder="your@business.com"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="partner-type" className="block text-sm font-medium mb-1">
                Business Type
              </label>
              <select
                id="partner-type"
                className="w-full p-2 rounded-md bg-white/10 border border-white/20 text-white"
                value={businessType}
                onChange={(e) => setBusinessType(e.target.value)}
                required
              >
                <option value="" disabled>
                  Select your business type
                </option>
                <option value="hospital">Hospital/Clinic</option>
                <option value="doctor">Individual Doctor</option>
                <option value="lab">Laboratory</option>
                <option value="pharmacy">Pharmacy</option>
                <option value="wellness">Wellness Center</option>
              </select>
            </div>
            <Button className="w-full bg-white text-primary hover:bg-white/90" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Apply Now"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
