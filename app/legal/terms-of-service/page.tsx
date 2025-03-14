import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function TermsOfService() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Terms of Service</h1>
            <div className="prose max-w-none">
              <p className="text-gray-500 italic mb-8">
                Last updated: {new Date().toLocaleDateString()}
              </p>

              {/* 1. Acceptance of Terms */}
              <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing or using <strong>Consultify Care</strong>, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree, you must discontinue use immediately.
              </p>

              {/* 2. Overview of Services */}
              <h2 className="text-2xl font-semibold mt-8 mb-4">2. Overview of Services</h2>
              <p>
                Consultify Care provides an online platform for patients to connect with healthcare professionals for virtual medical consultations, home healthcare services, and lab test bookings. 
              </p>
              <p>
                **Important:** <strong>Consultify Care does NOT provide medical advice, diagnosis, or treatment.</strong> All medical advice is provided by independent healthcare professionals.
              </p>

              {/* 3. User Accounts & Responsibilities */}
              <h2 className="text-2xl font-semibold mt-8 mb-4">3. User Accounts & Responsibilities</h2>
              <p>When you create an account, you agree to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Provide accurate, up-to-date information.</li>
                <li>Maintain the confidentiality of your account credentials.</li>
                <li>Be responsible for all activity under your account.</li>
              </ul>

              {/* 4. Medical Services Disclaimer */}
              <h2 className="text-2xl font-semibold mt-8 mb-4">4. Medical Services Disclaimer</h2>
              <p>
                Consultify Care is a technology platform that connects patients with healthcare professionals. We do not employ or control healthcare providers, and we do not endorse any specific medical advice. 
              </p>
              <p>
                By using our services, you acknowledge that <strong>medical consultations on this platform do not replace in-person consultations.</strong>
              </p>

              {/* 5. Fees, Payments & Refunds */}
              <h2 className="text-2xl font-semibold mt-8 mb-4">5. Fees, Payments & Refunds</h2>
              <p>
                Payments for consultations, lab bookings, and home visits are processed securely through third-party payment providers.
              </p>
              <p>
                **Refunds Policy:** Refunds are subject to review based on service non-delivery or medical cancellations.
              </p>

              {/* 6. User Conduct & Prohibited Activities */}
              <h2 className="text-2xl font-semibold mt-8 mb-4">6. User Conduct & Prohibited Activities</h2>
              <p>You agree NOT to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Misuse the platform for fraudulent activities.</li>
                <li>Impersonate healthcare professionals.</li>
                <li>Harass or abuse other users or providers.</li>
                <li>Upload harmful content or attempt unauthorized access.</li>
              </ul>

              {/* 7. Privacy & Data Security */}
              <h2 className="text-2xl font-semibold mt-8 mb-4">7. Privacy & Data Security</h2>
              <p>
                We handle personal and health data in accordance with HIPAA, GDPR, and other applicable data protection laws. 
                Read our <strong>Privacy Policy</strong> for full details on how we collect, store, and protect your data.
              </p>

              {/* 8. Limitation of Liability */}
              <h2 className="text-2xl font-semibold mt-8 mb-4">8. Limitation of Liability</h2>
              <p>
                Consultify Care is not liable for any direct, indirect, incidental, special, or consequential damages arising from:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Medical consultations provided by independent professionals.</li>
                <li>Service interruptions, technical issues, or unauthorized access.</li>
                <li>Inaccurate information provided by users or providers.</li>
              </ul>

              {/* 9. Dispute Resolution & Governing Law */}
              <h2 className="text-2xl font-semibold mt-8 mb-4">9. Dispute Resolution & Governing Law</h2>
              <p>
                In the event of a dispute, you agree to first contact us at <strong>legal@consultifycare.com</strong> to seek an informal resolution.
              </p>
              <p>
                These Terms shall be governed by and interpreted in accordance with the laws of <strong>[Jurisdiction]</strong>.
              </p>

              {/* 10. Updates to Terms */}
              <h2 className="text-2xl font-semibold mt-8 mb-4">10. Updates to These Terms</h2>
              <p>We reserve the right to modify or update these Terms at any time. Continued use of our services constitutes acceptance of the revised Terms.</p>

              {/* Contact & Legal Disclaimer */}
              <h2 className="text-2xl font-semibold mt-8 mb-4">11. Contact Us</h2>
              <p>
                If you have any questions regarding these Terms of Service, contact us:
              </p>
              <ul className="list-disc pl-6 mb-4">
              <li>Email: <strong>consultifycare@gmail.com</strong></li>
                <li>Phone: <strong>+234 704 700 7770</strong></li>
                <li>Address:Bassan Plaza Plot 759 Independent Avenue Central Business District Fct Independent Avenue, Central Business District, Federal Capital Territory</li>
              </ul>

              {/* Legal Notice */}
              <div className="bg-gray-100 p-6 rounded-lg mt-8">
                <p className="font-semibold text-gray-700">
                  Legal Notice: Use of Consultify Care services signifies acceptance of these terms.
                </p>
                <p className="text-gray-600 mt-2">
                  If you do not agree with any of these terms, you must discontinue use of our platform immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
