import React, { useState } from "react";
import siteVisitImage from "../assets/site_visit.webp";
import patternTexture from "../assets/pattern.webp";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { User } from "lucide-react";

const ContactPage = ({ onRequestCallBack }) => {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [consent, setConsent] = useState(false);


  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto scroll-mt-20 bg-white shadow-md"
    >
      <div className="relative flex flex-col min-h-[600px] lg:min-h-[400px] mt-4">
        {/* Two color background */}
        <div className="absolute inset-0 flex flex-col">
          <div className="flex-[4] bg-[var(--clr-p)] w-full"></div>
          <div className="flex-[6] bg-gray-100 w-full"></div>
        </div>

        {/* Floating Card */}
        <div
          className="absolute left-1/2 top-1/2 
                  -translate-x-1/2 -translate-y-1/2
                  w-[96%] max-w-6xl
                  rounded-2xl
                  shadow-[0_25px_60px_rgba(0,0,0,0.25)]
                  bg-white
                  flex flex-col-reverse lg:flex-row"
        >
          {/* LEFT SECTION */}
          <div
            className="lg:w-3/5 w-full p-6 lg:p-8 relative overflow-visible rounded-xl"
            style={{
              backgroundImage: `url(${patternTexture})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h3 className="text-xl font-bold text-[var(--clr-p)] mb-4">
              Schedule a Free Site Visit
            </h3>
            {/* Name Input with Icon */}
            <div className="relative mb-3">
              <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-10 pr-3 py-3 rounded-md border border-[#dadcdf] focus:outline-none focus:ring-2 focus:ring-[var(--clr-p)]"
              />
            </div>

            {/* Phone Input with react-phone-input-2 */}
            <div className="mb-4">
              <PhoneInput
                country={'in'}
                value={phone}
                onChange={setPhone}
                inputStyle={{
                  width: '100%',
                  height: '48px',
                  fontSize: '16px',
                  border: '1px solid #dadcdf',
                  borderRadius: '6px'
                }}
                buttonStyle={{
                  border: '1px solid #d1d5db',
                  borderRadius: '6px 0 0 6px'
                }}
                dropdownStyle={{
                  zIndex: 999
                }}
              />
            </div>
            
            {/* Consent Checkbox */}
            <div className="flex items-start gap-2 text-xs text-gray-600 mb-4">
              <input
                type="checkbox"
                id="consent"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
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
                </a>{" "}
                |{" "}
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
            
           <button className="animated-gradient text-white px-8 py-2 w-full md:w-fit rounded-md font-semibold">
             Submit
            </button>
          </div>

          {/* RIGHT SECTION */}
          <div className="lg:w-2/5 w-full h-64 lg:h-auto overflow-hidden rounded-r-2xl">
            <img
              src={siteVisitImage}
              alt="Site Visit"
              className="w-full h-full rounded-xl lg:rounded-none object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
