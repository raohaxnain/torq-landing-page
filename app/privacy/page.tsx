import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Torq",
  description:
    "Learn how Torq collects, uses, and protects your personal data. Our privacy policy explains our commitment to data protection.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Hero
        subtitle="Effective Date: December 16, 2025 | Last Updated: December 16, 2025"
        heading="Privacy"
        headingGradient="Policy"
        showVideo={false}
        ctaButtons={null}
        centered={true}
      />

      {/* Privacy Policy Content */}
      <section className="bg-slate-900 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed mb-12">
              Torq (&ldquo;Torq,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) values your privacy and is committed to protecting personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you access or use our websites, products, services, APIs, and platforms (collectively, the &ldquo;Services&rdquo;).
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-12">
              This policy applies to business customers, partners, website visitors, and end users whose data may be processed through Torq.
            </p>

            {/* Section 1 */}
            <h2 className="text-3xl font-bold text-white mt-16 mb-8">1. Information We Collect</h2>

            <h3 className="text-xl font-semibold text-[#D5FC9A] mt-10 mb-4">1.1 Information You Provide Directly</h3>
            <p className="text-gray-300 mb-4">We may collect information you provide when you:</p>
            <ul className="text-gray-300 space-y-2 mb-6 list-disc list-inside">
              <li>Create an account or request a demo</li>
              <li>Communicate with us (email, support, sales)</li>
              <li>Enter into a contract with Torq</li>
            </ul>
            <p className="text-gray-300 mb-4">This may include:</p>
            <ul className="text-gray-300 space-y-2 mb-6 list-disc list-inside">
              <li>Name, business name, job title</li>
              <li>Email address, phone number</li>
              <li>Login credentials</li>
              <li>Billing and payment information</li>
              <li>Any information you voluntarily submit</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#D5FC9A] mt-10 mb-4">1.2 Information Processed on Behalf of Customers (Customer Data)</h3>
            <p className="text-gray-300 mb-4">Torq primarily operates as a data processor for our business customers.</p>
            <p className="text-gray-300 mb-4">Customer Data may include:</p>
            <ul className="text-gray-300 space-y-2 mb-6 list-disc list-inside">
              <li>CRM records (leads, customers, contacts)</li>
              <li>Marketing and advertising data</li>
              <li>Website and event data</li>
              <li>Messaging data (email, SMS, advertising audiences)</li>
              <li>Analytics and performance metrics</li>
            </ul>
            <p className="text-gray-300 mb-6">
              <strong className="text-white">Ownership:</strong> All Customer Data belongs to the customer. Torq does not sell or claim ownership over Customer Data.
            </p>

            <h3 className="text-xl font-semibold text-[#D5FC9A] mt-10 mb-4">1.3 Automatically Collected Information</h3>
            <p className="text-gray-300 mb-4">When you use the Services, we may automatically collect:</p>
            <ul className="text-gray-300 space-y-2 mb-6 list-disc list-inside">
              <li>IP address</li>
              <li>Device and browser type</li>
              <li>Log files and usage data</li>
              <li>Cookies and similar technologies</li>
            </ul>
            <p className="text-gray-300 mb-6">This data is used for security, performance monitoring, and service improvement.</p>

            {/* Section 2 */}
            <h2 className="text-3xl font-bold text-white mt-16 mb-8">2. How We Use Information</h2>
            <p className="text-gray-300 mb-4">We use information to:</p>
            <ul className="text-gray-300 space-y-2 mb-6 list-disc list-inside">
              <li>Provide, operate, and improve the Services</li>
              <li>Power AI-driven insights, automation, and agents</li>
              <li>Maintain security and prevent fraud</li>
              <li>Communicate with customers and users</li>
              <li>Comply with legal and regulatory obligations</li>
            </ul>
            <p className="text-gray-300 font-semibold mb-6">We do not use Customer Data to train generalized AI models.</p>

            {/* Section 3 */}
            <h2 className="text-3xl font-bold text-white mt-16 mb-8">3. AI & Automated Processing</h2>
            <p className="text-gray-300 mb-4">Torq uses artificial intelligence and automated systems to:</p>
            <ul className="text-gray-300 space-y-2 mb-6 list-disc list-inside">
              <li>Analyze data patterns</li>
              <li>Generate insights and recommendations</li>
              <li>Power autonomous or semi-autonomous agents</li>
            </ul>
            <p className="text-gray-300 mb-4">AI outputs are generated only from data authorized by the customer and are scoped to that customer&apos;s environment.</p>
            <p className="text-gray-300 font-semibold mb-6">Torq does not use Customer Data to benefit other customers.</p>

            {/* Section 4 */}
            <h2 className="text-3xl font-bold text-white mt-16 mb-8">4. Legal Bases for Processing (GDPR)</h2>
            <p className="text-gray-300 mb-4">Where applicable, we rely on the following legal bases:</p>
            <ul className="text-gray-300 space-y-2 mb-6 list-disc list-inside">
              <li>Performance of a contract</li>
              <li>Legitimate business interests</li>
              <li>Compliance with legal obligations</li>
              <li>Consent, where required</li>
            </ul>

            {/* Section 5 */}
            <h2 className="text-3xl font-bold text-white mt-16 mb-8">5. Data Sharing & Disclosure</h2>
            <p className="text-gray-300 mb-4">We may share information only:</p>
            <ul className="text-gray-300 space-y-2 mb-6 list-disc list-inside">
              <li>With service providers (cloud hosting, analytics, security)</li>
              <li>To comply with legal obligations</li>
              <li>To protect rights, safety, or property</li>
              <li>With customer authorization</li>
            </ul>
            <p className="text-gray-300 font-semibold mb-6">Torq does not sell personal data.</p>

            {/* Section 6 */}
            <h2 className="text-3xl font-bold text-white mt-16 mb-8">6. Data Retention</h2>
            <p className="text-gray-300 mb-4">We retain information:</p>
            <ul className="text-gray-300 space-y-2 mb-6 list-disc list-inside">
              <li>For as long as necessary to provide Services</li>
              <li>As required by law or contract</li>
              <li>According to customer-defined retention policies</li>
            </ul>
            <p className="text-gray-300 mb-6">Upon termination, Customer Data is deleted or returned per contractual terms.</p>

            {/* Section 7 */}
            <h2 className="text-3xl font-bold text-white mt-16 mb-8">7. Security</h2>
            <p className="text-gray-300 mb-4">We implement industry-standard safeguards including:</p>
            <ul className="text-gray-300 space-y-2 mb-6 list-disc list-inside">
              <li>Encryption in transit and at rest</li>
              <li>Access controls and authentication</li>
              <li>Network and application security monitoring</li>
              <li>Least-privilege internal access</li>
            </ul>
            <p className="text-gray-300 mb-6">No system is 100% secure, but we continuously improve our security posture.</p>

            {/* Section 8 */}
            <h2 className="text-3xl font-bold text-white mt-16 mb-8">8. International Data Transfers</h2>
            <p className="text-gray-300 mb-6">
              Torq may process data in jurisdictions where we or our service providers operate. We use appropriate safeguards (such as standard contractual clauses) for cross-border data transfers.
            </p>

            {/* Section 9 */}
            <h2 className="text-3xl font-bold text-white mt-16 mb-8">9. Your Rights</h2>
            <p className="text-gray-300 mb-4">Depending on your jurisdiction, you may have the right to:</p>
            <ul className="text-gray-300 space-y-2 mb-6 list-disc list-inside">
              <li>Access your personal data</li>
              <li>Correct or delete data</li>
              <li>Restrict or object to processing</li>
              <li>Request data portability</li>
            </ul>
            <p className="text-gray-300 mb-6">
              Requests can be submitted to{" "}
              <a href="mailto:privacy@torq.ai" className="text-[#D5FC9A] hover:underline">
                privacy@torq.ai
              </a>
              .
            </p>

            {/* Section 10 */}
            <h2 className="text-3xl font-bold text-white mt-16 mb-8">10. Cookies & Tracking Technologies</h2>
            <p className="text-gray-300 mb-4">We use cookies and similar technologies to:</p>
            <ul className="text-gray-300 space-y-2 mb-6 list-disc list-inside">
              <li>Operate our website</li>
              <li>Analyze traffic and usage</li>
              <li>Improve user experience</li>
            </ul>
            <p className="text-gray-300 mb-6">You can control cookies via your browser settings.</p>

            {/* Section 11 */}
            <h2 className="text-3xl font-bold text-white mt-16 mb-8">11. Children&apos;s Privacy</h2>
            <p className="text-gray-300 mb-6">
              Torq is not intended for use by individuals under 16. We do not knowingly collect personal data from children.
            </p>

            {/* Section 12 */}
            <h2 className="text-3xl font-bold text-white mt-16 mb-8">12. Third-Party Links</h2>
            <p className="text-gray-300 mb-6">
              Our Services may contain links to third-party websites or platforms. We are not responsible for their privacy practices.
            </p>

            {/* Section 13 */}
            <h2 className="text-3xl font-bold text-white mt-16 mb-8">13. Changes to This Policy</h2>
            <p className="text-gray-300 mb-6">
              We may update this Privacy Policy periodically. Material changes will be posted on this page with an updated effective date.
            </p>

            {/* Section 14 */}
            <h2 className="text-3xl font-bold text-white mt-16 mb-8">14. Contact Us</h2>
            <p className="text-gray-300 mb-4">
              If you have questions or concerns about this Privacy Policy, contact us at:
            </p>
            <div className="text-gray-300 mb-6">
              <p className="font-semibold text-white">Torq</p>
              <p>
                Email:{" "}
                <a href="mailto:privacy@torq.ai" className="text-[#D5FC9A] hover:underline">
                  privacy@torq.ai
                </a>
              </p>
              <p>
                Website:{" "}
                <a href="https://www.torq.ai" className="text-[#D5FC9A] hover:underline">
                  https://www.torq.ai
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
