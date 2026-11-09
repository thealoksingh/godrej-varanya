import React from "react";
import { PhoneCall, MapPin } from "lucide-react";
import { contactConfig } from "../config/credential";

const MobileFooter = ({ onRequestCallBack }) => {
  const handleWhatsAppClick = () => {
    const phoneNumber = contactConfig.phoneNumber.replace(/\D/g, "");
    const message = encodeURIComponent(contactConfig.whatsappMessage);

    window.open(
      `https://wa.me/${phoneNumber}?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleCallClick = () => {
    const phoneNumber = contactConfig.phoneNumber.replace(/\D/g, "");
    window.location.href = `tel:+${phoneNumber}`;
  };

  return (
    <div className="fixed bottom-0 left-0 w-full animated-gradient border-t shadow-lg flex lg:hidden z-50">
      <button
        type="button"
        onClick={onRequestCallBack}
        className="w-1/3 flex items-center justify-center gap-2 py-3 text-white font-semibold"
        aria-label="Request a site visit"
      >
        <MapPin size={18} aria-hidden="true" />
        SITE VISIT
      </button>

      <button
        type="button"
        onClick={handleWhatsAppClick}
        className="w-1/3 flex items-center justify-center gap-2 py-3 text-white font-semibold"
        aria-label="Contact us on WhatsApp"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt=""
          aria-hidden="true"
          className="w-6 h-6"
          loading="lazy"
        />
        WHATSAPP
      </button>

      <button
        type="button"
        onClick={handleCallClick}
        className="w-1/3 flex items-center justify-center gap-2 py-3 text-white font-semibold"
        aria-label="Call us"
      >
        <PhoneCall size={18} aria-hidden="true" />
        CALL
      </button>
    </div>
  );
};

export default MobileFooter;