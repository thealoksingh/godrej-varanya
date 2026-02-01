import React, { useState } from "react";
import { X, User, Mail } from "lucide-react";
import emailjs from "@emailjs/browser";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { credentials, emailKeys, regexPatterns, baseurl } from "../key/key";
import {
  createMessageWithAddress,
  messageTemplates,
} from "../key/messageUtils";
import { contactConfig } from "../config/credential";
import axios from "axios";
import logo from "../assets/godrejLogo.png";
import whatsappAnimIcon from "../assets/gifs/whatsappAnim.gif";
const InterestForm = ({ onClose, mode }) => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    source: "godrejkhargar.com",
  });

  const [loading, setLoading] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showFailureAlert, setShowFailureAlert] = useState(false);
  const [errors, setErrors] = useState({ name: "", email: "", mobile: "" });

  const validateForm = (formData) => {
    const { name, email, mobile } = formData;
    const { namePattern, emailPattern, mobilePattern } = regexPatterns;
    const newErrors = { name: "", email: "", mobile: "" };

    if (!namePattern.test(name)) {
      newErrors.name = "Name must be 2-50 characters (letters only)";
    }

    if (email && !emailPattern.test(email)) {
      newErrors.email = "Invalid email format";
    }

    if (!mobilePattern.test(mobile)) {
      newErrors.mobile = "Mobile must be 10 digits";
    }

    setErrors(newErrors);
    return !newErrors.name && !newErrors.email && !newErrors.mobile;
  };
  let formHeader = "Express Your Interest";
  if (mode === "callback") {
    formHeader = "Request a Callback";
  } else if (mode === "brochure") {
    formHeader = "Download Brochure";
  } else if (mode === "download brochure") {
    formHeader = "Download Brochure";
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowSuccessAlert(false);
    setShowFailureAlert(false);

    // Prepare dynamic message based on mode
    let messageTemplate = messageTemplates.general;

    if (mode === "callback") {
      messageTemplate = messageTemplates.callback;
    } else if (mode === "brochure" || mode === "download brochure") {
      messageTemplate = messageTemplates.brochure;
    }

    const backendMessage = createMessageWithAddress(
      messageTemplate,
      formData.name,
    );
    const emailMessage = createMessageWithAddress(
      messageTemplate,
      formData.name,
    );

    // console.log("Using backend message template for mode:", backendMessage);
    //  console.log("Using email message template for mode:", emailMessage);

    console.log('Form submission data:', {
      name: formData.name,
      mobile: formData.mobile,
      email: formData.email,
      source: formData.source,
      mode: mode
    });

    const submissionData = {
      ...formData,
      message: backendMessage,
    };

    if (!validateForm(formData)) {
      return;
    }

    setLoading(true);
    let backendSuccess = false;
    let emailSuccess = false;

    // 1️⃣ Submit to backend
    try {
      const response = await axios.post(
        `${baseurl}/forms/submit`,
        submissionData,
      );
      if (response.status === 201) {
        backendSuccess = true;
      }
    } catch (error) {
      console.error("Backend submission failed:", error);
    }

    // 2️⃣ Send Email via EmailJS
    try {
      await emailjs.send(
        emailKeys.serviceId,
        emailKeys.templateId,
        {
          user_name: formData.name,
          user_phone: formData.mobile,
          user_email: formData.email,
          web_url: credentials.web_url,
          web_name: credentials.web_name,
          logo_url: credentials.logo_url,
          message: emailMessage,
        },
        emailKeys.publicKey,
      );
      emailSuccess = true;
    } catch (error) {
      console.error("Email submission failed:", error);
    }

    // 3️⃣ Show result
    if (backendSuccess || emailSuccess) {
      // Track conversion with gtag
      if (typeof gtag !== "undefined") {
        gtag("event", "conversion", {
          send_to: "AW-17844583964/ZmpsCTocuobE2s-rxC",
          value: 1.0,
          currency: "INR",
          event_callback: function () {
            console.log("Interest form conversion tracked");
          },
        });
      }
      setShowSuccessAlert(true);
      setFormData({
        name: "",
        mobile: "",
        email: "",
        source: "godrejkhargar.com",
      });
      // Notify parent that form was submitted
      setTimeout(() => {
        onClose(true);
      }, 2000);
    } else {
      setShowFailureAlert(true);
    }

    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-lg overflow-hidden rounded-xl bg-white shadow-2xl mx-4">
        {/* Header */}
        <div className="relative animated-gradient py-4 text-center">
          <h2 className="text-2xl font-semibold text-white">{formHeader}</h2>
          <button
            onClick={onClose}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white"
          >
            <X size={28} strokeWidth={3} />
          </button>
        </div>

        {/* Alerts */}
        {showSuccessAlert && (
          <div className="bg-green-100 text-green-700 text-center py-2">
            Interest submitted successfully ✅
          </div>
        )}

        {showFailureAlert && (
          <div className="bg-red-100 text-red-700 text-center py-2">
            Failed to submit interest ❌
          </div>
        )}

        {/* Content */}
        <div className="px-8 pt-6 pb-10 flex flex-col items-center">
          <img
            src={logo}
            alt="godrej varanya Logo"
            className="w-52 mb-4  p-1  hover:scale-105 transition-transform duration-200"
          />

          <p className="text-gray-700 font-medium mb-6 text-center">
            Please Enter Your Details To Learn More About This Project
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="w-full space-y-4 overflow-visible">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Name Input with Icon */}
              <div className="flex-1 relative">
                <User size={16} className="absolute left-3 top-1/3 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:ring-[#A67C52]/50"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              {/* Phone Input with Country Selector */}
              <div className="flex-1">
                <PhoneInput
                 countryCodeEditable={false}
                  autoFormat={false}
                  country={'in'}
                  value={formData.mobile}
                  onChange={(phone) => {
                    console.log('Phone input value:', phone);
                    setFormData({ ...formData, mobile: phone });
                  }}
                  inputStyle={{
                    width: '100%',
                    height: '40px',
                    fontSize: '14px',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px'
                  }}
                  buttonStyle={{
                    border: '1px solid #d1d5db',
                    borderRadius: '6px 0 0 6px',
                    height: '40px'
                  }}
                  dropdownStyle={{
                    zIndex: 9999
                  }}
                  disableCountryCode={false}
                  onlyCountries={['in', 'us', 'gb', 'ae', 'sg']}
                  preferredCountries={['in']}
                />
                {errors.mobile && (
                  <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>
                )}
              </div>
            </div>

            {/* Email Input with Icon */}
            <div className="relative">
              <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                placeholder="Email (Optional)"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:ring-[#A67C52]/50"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Submit */}
            <div className="flex flex-col items-center justify-center pt-4">
              <button
                type="submit"
                disabled={loading}
                className="animated-gradient animated-border text-white font-semibold text:sm px-16 w-68 py-2 rounded-lg shadow-lg hover:brightness-110 active:scale-95"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
              <p className="text-center m-2">OR</p>
            
            </div>
          </form>
            <a
                href={`https://wa.me/${
                  contactConfig.phoneNumber
                }?text=${encodeURIComponent(contactConfig.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  // Track WhatsApp click with gtag
                  if (typeof gtag !== "undefined") {
                    gtag("event", "conversion", {
                      send_to: "AW-17844583964/ZmpsCTocuobE2s-rxC",
                      value: 1.0,
                      currency: "INR",
                      event_callback: function () {
                        console.log("WhatsApp contact conversion tracked");
                      },
                    });
                  }
                }}
                className="right-0 bottom-0 flex justify-center items-center group"
              >
                <button className="flex gap-2  items-center font-semibold justify-center bg-green-500 w-68 text-white text-sm px-8 py-2 rounded-lg shadow-lg hover:brightness-110 active:scale-95">
                  <img
                    src={whatsappAnimIcon}
                    alt="WhatsApp"
                    className="w-6 h-6"
                  />
                  Connect On Whatsapp
                </button>
              </a>
        </div>
      </div>
    </div>
  );
};

export default InterestForm;
