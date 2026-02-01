import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { credentials, emailKeys, regexPatterns, baseurl } from "../key/key";
import { contactConfig } from "../config/credential";
import {
  createMessageWithAddress,
  messageTemplates,
} from "../key/messageUtils";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { User, Mail } from "lucide-react";
import calendarIcon from "../assets/gifs/Calendar.gif";
import callUsIcon from "../assets/gifs/callus.gif";
import whatsappAnimIcon from "../assets/gifs/whatsappAnim.gif";
import freeSiteGif from "../assets/gifs/Free Site Visit.gif";
import istantCallGif from "../assets/gifs/Instant Call Back.gif";
import bestPriceGif from "../assets/gifs/Best Price.gif";

const RightForm = ({ onRequestCallBack, onChatBotClick }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    source: "godrejkhargar.com",
  });
  const [consentChecked, setConsentChecked] = useState(false);

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
      newErrors.mobile = "Please enter a valid mobile number";
    }

    setErrors(newErrors);
    return !newErrors.name && !newErrors.email && !newErrors.mobile;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowSuccessAlert(false);
    setShowFailureAlert(false);

    if (!validateForm(formData) || !consentChecked) {
      return;
    }

    setLoading(true);
    let backendSuccess = false;
    let emailSuccess = false;

    // Create messages with address
    const backendMessage = createMessageWithAddress(
      messageTemplates.general,
      formData.name,
    );
    const emailMessage = createMessageWithAddress(
      messageTemplates.general,
      formData.name,
    );

    // 1️⃣ Submit to backend
    try {
      const response = await axios.post(`${baseurl}/forms/submit`, {
        ...formData,
        message: backendMessage,
      });
      if (response.status === 201 || response.status === 200) {
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
            console.log("Right form conversion tracked");
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
    } else {
      setShowFailureAlert(true);
    }

    setLoading(false);
  };

  return (
    <div className=" lg:flex max-w-md mx-auto bg-white min-h-screen flex-col shadow-lg border border-[#9e7242] sticky top-0">
      {/* Header */}
      <div className=" flex flex-col items-center">
        <div
          onClick={onRequestCallBack}
          className="bg-black flex flex-row text-white w-full py-1  text-center text-lg cursor-pointer shadow-md"
        >
          <div className="flex-1 py-2 border-r border-white text-center flex items-center justify-center gap-2">
            <img
              src={calendarIcon}
              alt="Schedule"
              className="w-6 h-6 brightness-0 invert"
            />
            <p className="font-semibold text-sm">Schedule Visit</p>
          </div>
          <div className="flex-1 py-2 text-center flex items-center justify-center gap-2">
            <img
              src={callUsIcon}
              alt="Call"
              className="w-6 h-6 brightness-0 invert"
            />
            <p className="font-semibold text-sm">
              {" "}
              {contactConfig.displayPhone}
            </p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="px-2 py-4 flex flex-col">
        <h2 className="text-center font-semibold text-black text-md mb-2">
          Pre-Register here for Best Offers
        </h2>

        {/* Alerts */}
        {showSuccessAlert && (
          <div className="text-green-600 text-center text-sm mb-2">
            Submitted successfully ✅
          </div>
        )}
        {showFailureAlert && (
          <div className="text-red-600 text-center text-sm mb-2">
            Submission failed ❌
          </div>
        )}

        <form className="overflow-visible" onSubmit={handleSubmit}>
          <div className=" space-y-2 ">
            {/* Name Input with Icon */}
            <div className="relative">
              <User
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Enter Your Name Here.."
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="w-full pl-10 pr-3 py-2 border border-[var(--clr-p)] bg-white rounded-sm outline-none focus:ring-1 focus:ring-[var(--clr-s)]"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email Input with Icon */}
            <div className="relative">
              <Mail
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="email"
                placeholder="Email (Optional)"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full pl-10 pr-3 py-2 border border-[var(--clr-p)] bg-white rounded-sm outline-none focus:ring-1 focus:ring-[var(--clr-s)]"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Phone Input with react-phone-input-2 */}
            <div>
              <PhoneInput
                country={"in"}
                autoFormat={false}
                countryCodeEditable={false}
                value={formData.mobile}
                onChange={(phone) =>
                  setFormData({ ...formData, mobile: phone })
                }
                inputStyle={{
                  width: "100%",
                  height: "40px",
                  fontSize: "14px",
                  border: "1px solid var(--clr-p)",
                  borderRadius: "2px",
                }}
                buttonStyle={{
                  border: "1px solid var(--clr-p)",
                  borderRadius: "2px 0 0 2px",
                  height: "40px",
                }}
                dropdownStyle={{
                  zIndex: 9999,
                }}
              />
              {errors.mobile && (
                <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>
              )}
            </div>
            <div className="flex items-start gap-2 text-xs text-gray-600">
              <input
                type="checkbox"
                id="consent"
                checked={consentChecked}
                onChange={(e) => setConsentChecked(e.target.checked)}
                className="mt-1 accent-[var(--clr-p)]"
                required
              />
              <label htmlFor="consent" className="text-[10px] leading-tight">
                I consent to the processing of provided data according to{" "}
                <a
                  href="#"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  Terms & Conditions
                </a>
                . I authorize Prop Solutions 4 U Pvt. Ltd. and its
                representatives to call, SMS, email or WhatsApp me about its
                products and offers.
              </label>
            </div>
            <div className="flex justify-center pt-2">
              <button
                type="submit"
                disabled={loading || !consentChecked}
                className="animated-gradient animated-border text-white px-12 py-2.5 rounded-lg text-sm shadow-md hover:opacity-90"
              >
                {loading ? "Submitting..." : "Pre-Register Now"}
              </button>
            </div>
          </div>
        </form>
        <div className="h-24 flex flex-row mt-4 overflow-hidden">
          <div className="w-1/3 flex flex-col items-center justify-center">
            <img
              src={freeSiteGif}
              alt="Free Site Visit"
              className="w-13 h-13"
            />
            <p className="text-center text-xs mt-2 text-gray-700 font-medium">
              Free Site Visit
            </p>
          </div>
          <div className="w-1/3 flex flex-col items-center justify-center">
            <img
              src={istantCallGif}
              alt="Instant Call Back"
              className="w-10 h-10"
            />
            <p className="text-center text-xs mt-4 text-gray-700 font-medium">
              Instant Call Back
            </p>
          </div>
          <div className="w-1/3 flex flex-col items-center justify-center">
            <img
              src={bestPriceGif}
              alt="Best Price Guarantee"
              className="w-12 h-12"
            />
            <p className="text-center text-xs mt-2 text-gray-700 font-medium">
              Best Price
            </p>
          </div>
        </div>
      </div>
      <div className="mt-auto p-6 ">
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
          <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-lg hover:shadow-xl">
            <img src={whatsappAnimIcon} alt="WhatsApp" className="w-12 h-12" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default RightForm;
