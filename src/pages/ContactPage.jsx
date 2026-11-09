
import React, { useState } from "react";
import siteVisitImage from "../assets/site_visit.webp";
import patternTexture from "../assets/pattern.webp";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { User } from "lucide-react";
import emailjs from "@emailjs/browser";
import {
  credentials,
  emailKeys,
  regexPatterns,
  baseurl,
} from "../key/key";
import {
  createMessageWithAddress,
  messageTemplates,
} from "../key/messageUtils";
import axios from "axios";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    source: "godrejkhargar.com",
  });

  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showFailureAlert, setShowFailureAlert] = useState(false);

  const [errors, setErrors] = useState({
    name: "",
    mobile: "",
    consent: "",
  });

  const validateForm = (data) => {
    const validationErrors = {};
    const cleanName = data.name.trim();

    if (!regexPatterns.namePattern.test(cleanName)) {
      validationErrors.name = "Name must be 2-50 characters";
    }

    if (!/^[6-9]\d{9}$/.test(data.mobile)) {
      validationErrors.mobile = "Enter a valid 10-digit Indian mobile number";
    }

    if (!consent) {
      validationErrors.consent = "Please accept the consent terms";
    }

    setErrors({
      name: validationErrors.name || "",
      mobile: validationErrors.mobile || "",
      consent: validationErrors.consent || "",
    });

    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setShowSuccessAlert(false);
    setShowFailureAlert(false);

    const cleanedMobile = formData.mobile.replace(/\D/g, "").slice(-10);

    const submissionData = {
      ...formData,
      name: formData.name.trim(),
      mobile: cleanedMobile,
    };

    if (!validateForm(submissionData)) return;

    setLoading(true);

    let backendSuccess = false;
    let emailSuccess = false;

    try {
      const backendMessage = createMessageWithAddress(
        messageTemplates.general,
        submissionData.name
      );

      const emailMessage = createMessageWithAddress(
        messageTemplates.general,
        submissionData.name
      );

      const finalData = {
        ...submissionData,
        message: backendMessage,
      };

      // Backend submission
      try {
        const response = await axios.post(
          `${baseurl}/forms/submit`,
          finalData
        );

        if (response.status === 200 || response.status === 201) {
          backendSuccess = true;
        }
      } catch (error) {
        console.error("Backend submission failed:", error);
      }

      // EmailJS submission
      try {
        await emailjs.send(
          emailKeys.serviceId,
          emailKeys.templateId,
          {
            user_name: submissionData.name,
            user_phone: submissionData.mobile,
            user_email: "Not Provided",
            web_url: credentials.web_url,
            web_name: credentials.web_name,
            logo_url: credentials.logo_url,
            message: emailMessage,
          },
          emailKeys.publicKey
        );

        emailSuccess = true;
      } catch (error) {
        console.error("Email submission failed:", error);
      }

      if (backendSuccess || emailSuccess) {
        // Google Ads conversion tracking
        if (typeof window !== "undefined" && typeof window.gtag === "function") {
          window.gtag("event", "conversion", {
            send_to: "AW-17844583964/giQ6CM3TnfUbEJz8-rxC",
          });
        }

        setShowSuccessAlert(true);

        setFormData({
          name: "",
          mobile: "",
          source: "godrejkhargar.com",
        });

        setConsent(false);

        setErrors({
          name: "",
          mobile: "",
          consent: "",
        });
      } else {
        setShowFailureAlert(true);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setShowFailureAlert(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto scroll-mt-20 bg-white shadow-md"
      aria-labelledby="contact-heading"
    >
      <div className="relative flex flex-col min-h-[600px] lg:min-h-[400px] mt-4">
        {/* Background */}
        <div className="absolute inset-0 flex flex-col" aria-hidden="true">
          <div className="flex-[4] bg-[var(--clr-p)] w-full" />
          <div className="flex-[6] bg-gray-100 w-full" />
        </div>

        {/* Contact Form Card */}
        <div
          className="absolute left-1/2 top-1/2
            -translate-x-1/2 -translate-y-1/2
            w-[96%] max-w-6xl
            rounded-2xl
            shadow-[0_25px_60px_rgba(0,0,0,0.25)]
            bg-white
            flex flex-col-reverse lg:flex-row"
        >
          {/* Form */}
          <div
            className="lg:w-3/5 w-full p-6 lg:p-8 relative overflow-visible rounded-xl"
            style={{
              backgroundImage: `url(${patternTexture})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h2
              id="contact-heading"
              className="text-xl font-bold text-[var(--clr-p)] mb-4"
            >
              Schedule a Free Site Visit
            </h2>

            {showSuccessAlert && (
              <div
                role="status"
                aria-live="polite"
                className="text-green-600 text-center text-sm mb-2"
              >
                Submitted successfully!
              </div>
            )}

            {showFailureAlert && (
              <div
                role="alert"
                className="text-red-600 text-center text-sm mb-2"
              >
                Submission failed. Please try again.
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              {/* Name */}
              <div className="relative mb-3">
                <label htmlFor="contact-name" className="sr-only">
                  Your name
                </label>

                <User
                  size={18}
                  aria-hidden="true"
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  autoComplete="name"
                  required
                  maxLength={50}
                  value={formData.name}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    });
                    setErrors((prev) => ({ ...prev, name: "" }));
                  }}
                  className="w-full pl-10 pr-3 py-3 rounded-md border border-[#dadcdf] focus:outline-none focus:ring-2 focus:ring-[var(--clr-p)]"
                />

                {errors.name && (
                  <p id="name-error" className="text-red-500 text-xs mt-1">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div className="mb-4">
                <label htmlFor="contact-mobile" className="sr-only">
                  Mobile number
                </label>

                <PhoneInput
                  country="in"
                  countryCodeEditable={false}
                  autoFormat={false}
                  inputProps={{
                    id: "contact-mobile",
                    name: "mobile",
                    required: true,
                    autoComplete: "tel",
                    maxLength: 13,
                    "aria-invalid": !!errors.mobile,
                    "aria-describedby": errors.mobile
                      ? "mobile-error"
                      : undefined,
                  }}
                  value={formData.mobile}
                  onChange={(phone) => {
                    setFormData({
                      ...formData,
                      mobile: phone,
                    });
                    setErrors((prev) => ({ ...prev, mobile: "" }));
                  }}
                  inputStyle={{
                    width: "100%",
                    height: "48px",
                    fontSize: "16px",
                    border: "1px solid #dadcdf",
                    borderRadius: "6px",
                  }}
                  buttonStyle={{
                    border: "1px solid #d1d5db",
                    borderRadius: "6px 0 0 6px",
                  }}
                  dropdownStyle={{
                    zIndex: 999,
                  }}
                />

                {errors.mobile && (
                  <p id="mobile-error" className="text-red-500 text-xs mt-1">
                    {errors.mobile}
                  </p>
                )}
              </div>

              {/* Consent */}
              <div className="flex items-start gap-2 text-xs text-gray-600 mb-4">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  required
                  checked={consent}
                  aria-invalid={!!errors.consent}
                  aria-describedby={
                    errors.consent ? "consent-error" : undefined
                  }
                  onChange={(e) => {
                    setConsent(e.target.checked);
                    setErrors((prev) => ({
                      ...prev,
                      consent: "",
                    }));
                  }}
                  className="mt-1 accent-[var(--clr-p)]"
                />

                <label htmlFor="consent" className="text-[10px] leading-tight">
                  I consent to the processing of my provided data according to
                  the{" "}
                  <a
                    href="/privacy"
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    Privacy Policy
                  </a>
                  . I authorize Prop Solutions 4 U Pvt. Ltd. and its
                  representatives to call, SMS, email or WhatsApp me about
                  its products and offers.
                </label>
              </div>

              {errors.consent && (
                <p
                  id="consent-error"
                  className="text-red-500 text-xs mt-1 mb-2"
                >
                  {errors.consent}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="animated-gradient text-white px-8 py-2 w-full md:w-fit rounded-md font-semibold disabled:opacity-60"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>

          {/* Image */}
          <div className="lg:w-2/5 w-full h-64 lg:h-auto overflow-hidden rounded-r-2xl">
            <img
              src={siteVisitImage}
              alt="Schedule a site visit at Godrej Varanya, Kharghar"
              loading="lazy"
              decoding="async"
              className="w-full h-full rounded-xl lg:rounded-none object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
