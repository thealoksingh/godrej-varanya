import React from "react";
import Divider from "../components/Divider";

const PrivacyPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-5 py-10 text-gray-800 leading-relaxed">
      
      <h2 className="lg:text-3xl text-2xl font-semibold text-[var(--clr-p)] text-center mb-4">
        Disclaimer, Privacy Policy & Terms
      </h2>
      <Divider />

      {/* Disclaimer */}
      <section className="mt-8 space-y-4">
        <h3 className="text-xl font-semibold text-gray-900">Disclaimer</h3>

        <p>
          The content provided on this website is intended solely for general
          informational, marketing, and promotional purposes related to real
          estate projects. While every effort is made to ensure that the
          information presented is accurate and up to date, visitors are advised
          to independently verify all project details, specifications, pricing,
          availability, and offers before making any property-related decisions.
        </p>

        <p>
          Images, layouts, plans, specifications, and other project details are
          indicative in nature and may be subject to change without prior notice.
          Nothing contained on this website should be construed as legal advice,
          an offer, or a binding commitment.
        </p>
      </section>

      {/* Privacy Policy */}
      <section className="mt-10 space-y-4">
        <h3 className="text-xl font-semibold text-gray-900">
          Privacy Policy
        </h3>

        <p>
          We value your privacy and are committed to protecting the personal
          information you share with us. This Privacy Policy outlines how we
          collect, use, and safeguard your data when you interact with our
          website.
        </p>

        <p>
          When you submit your details — such as name, phone number, or email —
          the information is used strictly to respond to your inquiries, provide
          requested information, share project updates, and assist you in your
          property search.
        </p>

        <p>
          Your data is stored securely and is accessible only to authorized
          personnel. We do not sell, rent, or distribute your personal
          information to third parties without your consent, except where
          required by law.
        </p>
      </section>

      {/* Data Usage */}
      <section className="mt-10 space-y-4">
        <h3 className="text-xl font-semibold text-gray-900">
          Use of Information
        </h3>

        <p>Your information may be used for the following purposes:</p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Responding to inquiries and scheduling site visits</li>
          <li>Providing project details, brochures, and pricing</li>
          <li>Sharing updates, offers, and promotional communication</li>
          <li>Improving website performance and user experience</li>
        </ul>
      </section>

      {/* Cookies */}
      <section className="mt-10 space-y-4">
        <h3 className="text-xl font-semibold text-gray-900">
          Cookies & Tracking Technologies
        </h3>

        <p>
          Our website may use cookies and similar technologies to enhance your
          browsing experience, analyze traffic, and understand user behavior.
          You may choose to disable cookies through your browser settings;
          however, some features of the website may not function properly.
        </p>
      </section>

      {/* Security */}
      <section className="mt-10 space-y-4">
        <h3 className="text-xl font-semibold text-gray-900">Data Security</h3>

        <p>
          We implement appropriate technical and organizational measures to
          protect your personal data against unauthorized access, misuse, or
          disclosure. Despite our best efforts, no digital platform can guarantee
          absolute security, and users share information at their own discretion.
        </p>
      </section>

      {/* Terms */}
      <section className="mt-10 space-y-4">
        <h3 className="text-xl font-semibold text-gray-900">
          Terms & Conditions
        </h3>

        <p>
          By accessing and using this website, you agree to comply with the terms
          outlined herein. The content, design, graphics, and materials on this
          website are protected by applicable intellectual property laws and may
          not be copied, reproduced, or distributed without prior permission.
        </p>

        <p>
          Users agree not to misuse the website, attempt unauthorized access, or
          engage in activities that may disrupt its functionality.
        </p>

        <p>
          We reserve the right to modify, update, or remove any part of this
          website, including these policies, at any time without prior notice.
          Continued use of the website constitutes acceptance of those changes.
        </p>
      </section>

      {/* Contact */}
      <section className="mt-10 space-y-4">
        <h3 className="text-xl font-semibold text-gray-900">Contact</h3>

        <p>
          If you have any questions regarding this Privacy Policy or Terms,
          please contact us through the details provided on the website.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPage;
