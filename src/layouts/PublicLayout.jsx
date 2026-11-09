
import React, { useState, lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import RightForm from "../components/RightForm";
import DynamicSEO from "../components/DynamicSEO";

import whatsAppIcon from "../assets/whatsAppIcon.png";
import { contactConfig } from "../config/credential";

// Lazy-loaded components
const InterestForm = lazy(() => import("../components/InterestForm"));
const ChatBot = lazy(() => import("../chatbot/Chatbot"));

const PublicLayout = () => {
  const [isInterestFormOpen, setIsInterestFormOpen] = useState(false);
  const [openChatBot, setOpenChatBot] = useState(false);
  const [formMode, setFormMode] = useState("");

  const handleFormOpen = (mode) => {
    setIsInterestFormOpen(true);
    setFormMode(mode);
  };

  const handleFormClose = () => {
    setIsInterestFormOpen(false);
    setFormMode("");
  };

  const whatsappUrl = `https://wa.me/${contactConfig.phoneNumber.replace(
    /\D/g,
    ""
  )}?text=${encodeURIComponent(contactConfig.whatsappMessage)}`;

  return (
    <div className="flex w-full min-h-screen">
      <DynamicSEO />

      {/* Main Website Content */}
      <div className="w-full md:w-[80%]">
        <Header onBrochureClick={() => handleFormOpen("brochure")} />

        <main id="main-content">
          <Outlet />
        </main>
      </div>

      {/* Right Side Enquiry Panel */}
      <aside className="hidden md:block md:w-[20%]">
        <RightForm
          onRequestCallBack={() => handleFormOpen("callback")}
          onChatBotClick={() => setOpenChatBot(true)}
        />
      </aside>

      {/* Enquiry Modal */}
      {isInterestFormOpen && (
        <Suspense fallback={null}>
          <InterestForm
            mode={formMode}
            onClose={handleFormClose}
          />
        </Suspense>
      )}

      {/* Desktop Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="hidden md:flex fixed bottom-6 right-26 z-50 w-14 h-14 items-center justify-center rounded-full bg-white shadow-lg hover:scale-110 transition-transform duration-200"
      >
        <img
          src={whatsAppIcon}
          alt=""
          aria-hidden="true"
          className="w-10 h-10 object-contain"
          loading="lazy"
        />
      </a>

      {/* Chatbot */}
      {openChatBot && (
        <Suspense fallback={null}>
          <ChatBot
            open={openChatBot}
            setOpen={setOpenChatBot}
          />
        </Suspense>
      )}
    </div>
  );
};

export default PublicLayout;
