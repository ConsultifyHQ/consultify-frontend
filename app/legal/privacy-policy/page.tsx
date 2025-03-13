import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Privacy Policy</h1>
            <div className="prose max-w-none">
              <p className="text-gray-500 italic mb-8">
                Last updated: {new Date().toLocaleDateString()}
              </p>

              {/* 1. Introduction */}
              <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
              <p>
                Welcome to <strong>Consultify Care</strong>. Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal data when you use our services, including online medical consultations, lab test bookings, and home healthcare services.
              </p>
              <p>
                By using our services, you agree to the terms of this Privacy Policy. If you do not agree, please refrain from using our platform.
              </p>

              {/* 2. Information We Collect */}
              <h2 className="text-2xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
              <p>We collect and process the following types of personal data:</p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Personal Information:</strong> Name, email address, phone number, date of birth.</li>
                <li><strong>Medical Information:</strong> Symptoms, prescriptions, lab test results, medical history.</li>
                <li><strong>Payment Information:</strong> Credit card details (processed securely via third-party payment providers).</li>
                <li><strong>Technical Data:</strong> IP address, device type, browser, location (if enabled).</li>
                <li><strong>Usage Data:</strong> How you interact with our platform, including appointment history.</li>
              </ul>

              {/* 3. How We Use Your Information */}
              <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
              <p>We process your data for the following purposes:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>To provide and improve our healthcare services.</li>
                <li>To facilitate doctor-patient communication.</li>
                <li>To send appointment confirmations and health reminders.</li>
                <li>To process payments securely.</li>
                <li>To analyze user behavior and improve our platform.</li>
                <li>To comply with legal and regulatory requirements (e.g., HIPAA, GDPR).</li>
              </ul>

              {/* 4. Sharing of Your Information */}
              <h2 className="text-2xl font-semibold mt-8 mb-4">4. Sharing of Your Information</h2>
              <p>We do not sell your personal data. However, we may share your information with:</p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Healthcare Providers:</strong> To facilitate consultations and medical services.</li>
                <li><strong>Payment Processors:</strong> To process secure transactions.</li>
                <li><strong>Regulatory Authorities:</strong> If required by law for compliance with healthcare regulations.</li>
                <li><strong>Third-Party Service Providers:</strong> For analytics, customer support, and technical improvements.</li>
              </ul>

              {/* 5. Data Security */}
              <h2 className="text-2xl font-semibold mt-8 mb-4">5. Data Security</h2>
              <p>
                We implement robust security measures to protect your personal data, including:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>End-to-end encryption for sensitive medical data.</li>
                <li>Secure servers with access control restrictions.</li>
                <li>Regular security audits and compliance checks.</li>
                <li>HIPAA and GDPR compliance for handling healthcare data.</li>
              </ul>
              <p>
                While we take strong precautions, no system is completely secure. Please keep your login credentials confidential.
              </p>

              {/* 6. Your Rights & Choices */}
              <h2 className="text-2xl font-semibold mt-8 mb-4">6. Your Rights & Choices</h2>
              <p>You have the following rights over your data:</p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Access:</strong> Request a copy of your personal data.</li>
                <li><strong>Correction:</strong> Request updates to incorrect information.</li>
                <li><strong>Deletion:</strong> Request to delete your data, subject to legal obligations.</li>
                <li><strong>Restriction:</strong> Limit how we process your data.</li>
                <li><strong>Objection:</strong> Opt out of marketing communications.</li>
              </ul>
              <p>To exercise these rights, contact us at <strong>privacy@consultifycare.com</strong>.</p>

              {/* 7. Cookies & Tracking Technologies */}
              <h2 className="text-2xl font-semibold mt-8 mb-4">7. Cookies & Tracking Technologies</h2>
              <p>We use cookies and similar technologies to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Improve website performance and functionality.</li>
                <li>Analyze traffic patterns and user behavior.</li>
                <li>Deliver personalized content.</li>
              </ul>
              <p>You can disable cookies in your browser settings, but this may affect your user experience.</p>

              {/* 8. Updates to This Policy */}
              <h2 className="text-2xl font-semibold mt-8 mb-4">8. Updates to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. We will notify you of significant changes via email or platform notifications.</p>

              {/* 9. Contact Us */}
              <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, you can contact us at:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Email: <strong>privacy@consultifycare.com</strong></li>
                <li>Phone: <strong>+234 704 700 7770</strong></li>
                <li>Address: Consultify Care HQ, Lagos, Nigeria</li>
              </ul>

              <div className="bg-gray-100 p-6 rounded-lg mt-8">
                <p className="font-semibold text-gray-700">
                  Note: This Privacy Policy is legally binding upon your use of our services.
                </p>
                <p className="text-gray-600 mt-2">
                  By continuing to use Consultify Care, you acknowledge that you have read and understood this policy.
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
