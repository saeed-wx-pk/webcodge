import React from 'react'

const page = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 mt-40">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-8">Privacy Policy and Terms & Conditions</h1>

      {/* Section 1: Introduction */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
        <p className="text-gray-500">
          Welcome to WebCodge! Your privacy and the protection of your personal information are very important to us. This Privacy Policy and Terms & Conditions outline the policies governing the collection, use, and disclosure of your personal data and the terms of use of our services. By using our website or services, you agree to abide by these terms.
        </p>
      </section>

      {/* Section 2: Definitions */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Definitions</h2>
        <ul className="list-disc ml-5 text-gray-500">
          <li><strong>Company</strong>: WebCodge, referred to as "we," "us," or "our" in this agreement.</li>
          <li><strong>User</strong>: Anyone who uses our services, referred to as "you" or "your."</li>
          <li><strong>Personal Data</strong>: Any information relating to an identified or identifiable individual.</li>
        </ul>
      </section>

      {/* Privacy Policy */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>

        {/* Section 3: Information We Collect */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">3. Information We Collect</h3>
          <ul className="list-disc ml-5 text-gray-500">
            <li><strong>Personal Data</strong>: Name, email address, phone number (WhatsApp-only), and any other information you provide.</li>
            <li><strong>Usage Data</strong>: Information about how you interact with our services, including IP addresses, browser type, and pages visited.</li>
            <li><strong>Cookies</strong>: We use cookies to enhance user experience and track usage data.</li>
          </ul>
        </div>

        {/* Section 4: How We Use Your Information */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">4. How We Use Your Information</h3>
          <ul className="list-disc ml-5 text-gray-500">
            <li><strong>To Provide Services</strong>: Your data allows us to deliver, improve, and manage our services.</li>
            <li><strong>To Communicate</strong>: We use your contact details to provide customer support, updates, and information about new features.</li>
            <li><strong>To Improve User Experience</strong>: Usage data helps us understand user behavior and enhance website performance.</li>
          </ul>
        </div>

        {/* Section 5: Sharing and Disclosure */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">5. Sharing and Disclosure of Information</h3>
          <p className="text-gray-500">
            We do not sell or share your personal information with third parties, except in the following cases:
          </p>
          <ul className="list-disc ml-5 text-gray-500">
            <li><strong>Legal Requirements</strong>: When required by law or to comply with legal processes.</li>
            <li><strong>Service Providers</strong>: Trusted third parties that help us run our services, subject to confidentiality agreements.</li>
          </ul>
        </div>

        {/* Section 6: Data Security */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">6. Data Security</h3>
          <p className="text-gray-500">
            We prioritize the security of your personal data and implement reasonable security measures to protect it. However, no method of transmission over the Internet is 100% secure.
          </p>
        </div>

        {/* Section 7: Data Retention */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">7. Data Retention</h3>
          <p className="text-gray-500">
            We retain personal data for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.
          </p>
        </div>
      </section>

      {/* Terms & Conditions */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Terms & Conditions</h2>

        {/* Section 8: Acceptance of Terms */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">8. Acceptance of Terms</h3>
          <p className="text-gray-500">
            By accessing or using WebCodge’s services, you agree to these Terms & Conditions. If you do not agree with these terms, you must stop using our services immediately.
          </p>
        </div>

        {/* Section 9: Services Offered */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">9. Services Offered</h3>
          <p className="text-gray-500">
            WebCodge provides web development solutions and technical support. We offer services online only and do not have a physical address. All services are provided as-is.
          </p>
        </div>

        {/* Section 10: User Responsibilities */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">10. User Responsibilities</h3>
          <ul className="list-disc ml-5 text-gray-500">
            <li><strong>Accurate Information</strong>: You agree to provide accurate and up-to-date information when using our services.</li>
            <li><strong>Prohibited Use</strong>: You agree not to misuse the services, including attempting unauthorized access, interfering with other users, or violating laws.</li>
          </ul>
        </div>

        {/* Section 11: Intellectual Property */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">11. Intellectual Property</h3>
          <p className="text-gray-500">
            All content, trademarks, and intellectual property related to WebCodge belong to us or our licensors. You may not copy, distribute, or use our content without permission.
          </p>
        </div>

        {/* Section 12: Limitation of Liability */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">12. Limitation of Liability</h3>
          <p className="text-gray-500">
            WebCodge is not liable for any damages arising from your use of our services, including but not limited to data loss or unauthorized access.
          </p>
        </div>

        {/* Section 13: Changes to These Policies */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">13. Changes to These Policies</h3>
          <p className="text-gray-500">
            WebCodge reserves the right to modify this Privacy Policy and Terms & Conditions at any time. We will notify you of changes by updating the date at the top of this document. Continued use of our services indicates your acceptance of any changes.
          </p>
        </div>
      </section>

      {/* Section 14: Contact Us */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">14. Contact Us</h2>
        <p className="text-gray-500">
          If you have any questions or concerns about our Privacy Policy or Terms & Conditions, please contact us at <a href="mailto:webcodge@gmail.com" className="text-blue-500">webcodge@gmail.com</a> or via <a href="https://wa.me/7510830593" className="text-blue-500">WhatsApp</a>.
        </p>
      </section>
    </div>
  )
}

export default page
{/* <h2 className='text-3xl font-extrabold'>Privacy Policy and Terms & Conditions</h2>
        <ol className="list-decimal list-inside space-y-4 mt-10">
          <li className='text-xl font-bold'>Introduction</li>
            <p className='max-w-[60ch] text-gray-400'>Welcome to WebCodge! Your privacy and the protection of your personal information are very important to us. This Privacy Policy and Terms & Conditions outline the policies governing the collection, use, and disclosure of your personal data and the terms of use of our services. By using our website or services, you agree to abide by these terms.</p>
          <li className='text-xl font-bold'>Definitions</li>
            <div className='max-w-[60ch] text-gray-400 mb-20'>
              <ul className="list-disc list-inside space-y-1">
                <li>Company: WebCodge, referred to as "we," "us," or "our" in this agreement.</li>
                <li>User: Anyone who uses our services, referred to as "you" or "your."</li>
                <li>Personal Data: Any information relating to an identified or identifiable individual.</li>
              </ul>
            </div>
            <hr className=' border-t border-t-gray-800'/>
          <h3 className='text-2xl font-bold'>Privacy Policy</h3>
          <li className='text-xl font-bold '>Information We Collect</li>
            <p className='text-gray-300'>We collect the following types of information:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Personal Data<span className="text-gray-400">: Name, email address, phone number (WhatsApp-only), and any other information you provide.</span></li>
              <li>Usage Data<span className="text-gray-400">: Information about how you interact with our services, including IP addresses, browser type, and pages visited.</span></li>
              <li>Cookies<span className="text-gray-400">: We use cookies to enhance user experience and track usage data.</span></li>
            </ul>
        </ol> */}