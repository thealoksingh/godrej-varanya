"use client";

import { useState, useEffect, useRef } from "react";
import { FiSend, FiX, FiMessageCircle, FiPhone, FiUser } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import { credentials, emailKeys } from "../key/key";
import botIcon1 from "../assets/gifs/bot1.gif";
import botIcon2 from "../assets/gifs/bot2.gif";
import botIcon3 from "../assets/gifs/bot3.gif";
import botIcon4 from "../assets/gifs/bot4.gif";
import { apiPostRequest } from "../utils/api/post";

// ------------------------------------
// Bot Configuration
// ------------------------------------

const randomBot = [
  { name: "Sital", image: botIcon1 },
  { name: "Priya Sharma", image: botIcon2 },
  { name: "Madavi Joshi", image: botIcon3 },
  { name: "Sofia", image: botIcon4 },
];

// ------------------------------------
// Interest Options
// ------------------------------------

const interestOptions = [
  "🏠 Pricing & Floor Plans",
  "📄 Download Brochure",
  "💎 Get The Best Quote",
  "🏘️ Site Visit or Virtual Tour",
  "💬 Pricing on WhatsApp",
  "📞 Get A Call Back",
];

// ------------------------------------
// Property Category Options
// ------------------------------------

const propertyOptions = [
  {
    id: 1,
    label: "🏠 Residential Apartment",
    value: "Residential Apartment",
  },
  {
    id: 2,
    label: "🏢 Commercial Shop / Office / Showroom",
    value: "Commercial",
  },
];

// ------------------------------------
// Residential Property Options
// ------------------------------------

const residentialPropertySubOptions = [
  "🏠 1 BHK",
  "🏡 2 BHK",
  "🏘️ 3 BHK",
  "🏢 4 BHK",
  "🏢 4+ BHK",
];

// ------------------------------------
// Commercial Property Options
// ------------------------------------

const commercialPropertySubOptions = [
  "🏬 Shop",
  "🏢 Office",
  "🏪 Showroom",
  "Other, Need to Discuss",
];

export default function ChatBot({ open = true, setOpen }) {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const [currentBot] = useState(
    () => randomBot[Math.floor(Math.random() * randomBot.length)],
  );

  const [collectedData, setCollectedData] = useState({
    name: "",
    phone: "",
    interest: "",
    propertyCategory: "",
    flatType: "",
    message: "",
  });

  const [conversationStep, setConversationStep] = useState("greeting");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(null);
  const [showBubble, setShowBubble] = useState(true);
  const [secondsLeft, setSecondsLeft] = useState(null);

  const messagesEndRef = useRef(null);

  const submittedRef = useRef(false);
  const submittingRef = useRef(false);
  const initializedRef = useRef(false);

  const autoSubmitTimerRef = useRef(null);
  const countdownIntervalRef = useRef(null);

  const latestDataRef = useRef(collectedData);

  // ------------------------------------
  // Keep Latest Data Updated
  // ------------------------------------

  useEffect(() => {
    latestDataRef.current = collectedData;
  }, [collectedData]);

  // ------------------------------------
  // Message Helpers
  // ------------------------------------

  const addBotMessage = (text) => {
    setMessages((prev) => [
      ...prev,
      {
        id: `${Date.now()}-${Math.random()}`,
        sender: "bot",
        text,
        timestamp: new Date(),
      },
    ]);
  };

  const addUserMessage = (text) => {
    setMessages((prev) => [
      ...prev,
      {
        id: `${Date.now()}-${Math.random()}`,
        sender: "user",
        text,
        timestamp: new Date(),
      },
    ]);
  };

  // ------------------------------------
  // Bot Typing
  // ------------------------------------

  const simulateBotTyping = async (text, delay = 900) => {
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, delay));

    addBotMessage(text);
    setIsLoading(false);
  };

  // ------------------------------------
  // Duplicate Submission Guards
  // ------------------------------------

  const hasAlreadySubmitted = () => submittedRef.current;

  const markAsSubmitted = () => {
    submittedRef.current = true;
  };

  const resetSubmittedFlag = () => {
    submittedRef.current = false;
  };

  // ------------------------------------
  // Auto Submit Timer
  // ------------------------------------

  const clearAutoSubmitTimer = () => {
    if (autoSubmitTimerRef.current) {
      clearTimeout(autoSubmitTimerRef.current);
      autoSubmitTimerRef.current = null;
    }

    if (countdownIntervalRef.current) {
      clearInterval(countdownIntervalRef.current);
      countdownIntervalRef.current = null;
    }

    setSecondsLeft(null);
  };

  const startAutoSubmitTimer = (latestData) => {
    if (hasAlreadySubmitted() || submittingRef.current) return;

    clearAutoSubmitTimer();

    const durationSeconds = 30;

    setSecondsLeft(durationSeconds);

    countdownIntervalRef.current = setInterval(() => {
      setSecondsLeft((prev) => (prev !== null && prev > 1 ? prev - 1 : 0));
    }, 1000);

    autoSubmitTimerRef.current = setTimeout(() => {
      clearAutoSubmitTimer();

      submitFormData(latestData);
    }, durationSeconds * 1000);
  };

  // ------------------------------------
  // Timer Cleanup
  // ------------------------------------

  useEffect(() => {
    return () => {
      if (autoSubmitTimerRef.current) {
        clearTimeout(autoSubmitTimerRef.current);
      }

      if (countdownIntervalRef.current) {
        clearInterval(countdownIntervalRef.current);
      }
    };
  }, []);

  // ------------------------------------
  // Auto Scroll
  // ------------------------------------

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isLoading]);

  // ------------------------------------
  // Initial Greeting
  // ------------------------------------

  useEffect(() => {
    if (open && !initializedRef.current) {
      initializedRef.current = true;

      addBotMessage(
        `Hey! 👋 I'm ${currentBot.name} from Godrej Varanya. How can I help you understand this amazing project?`,
      );

      setConversationStep("interest");
    }
  }, [open]);

  // ------------------------------------
  // Unified Lead Submission
  // ------------------------------------

  const submitFormData = async (data, { silent = false } = {}) => {
    clearAutoSubmitTimer();

    if (!data?.phone || submittedRef.current || submittingRef.current) {
      return;
    }

    submittingRef.current = true;
    setIsSubmitting(true);

    const cleanedMobile = data.phone.replace(/\D/g, "").slice(-10);

    const userLocation =
      typeof window !== "undefined"
        ? window.user_address || "Location not available"
        : "Location not available";

    const finalMessage = `
CHATBOT LEAD DETAILS
--------------------------------

Name: ${data.name}
Mobile: ${cleanedMobile}

Interest: ${data.interest || "Not specified"}

Property Category: ${data.propertyCategory || "Not specified"}

Property Type: ${data.flatType || "Not specified"}

Additional Message:
${data.message || "No additional message"}

User Location:
${userLocation}

--------------------------------
Source: Website Chatbot
Property: Godrej Varanya
`;

    const contactRequestData = {
      name: data.name.trim(),
      mobileNumber: cleanedMobile,
      email: "",
      remark: finalMessage,
      source: "MANUAL",
      status: "NEW",
      propertyName: "Godrej Varanya",
    };

    try {
      // Backend and EmailJS execute independently.
      const [backendResult, emailResult] = await Promise.allSettled([
        apiPostRequest({
          apiUrl: "/contact-requests",
          content_type: "application/json",
          data: contactRequestData,
        }),

        emailjs.send(
          emailKeys.serviceId,
          emailKeys.templateId,
          {
            user_name: data.name,
            user_phone: cleanedMobile,
            user_email: "Email not provided (Chatbot submission)",
            web_url: credentials.web_url,
            web_name: credentials.web_name,
            logo_url: credentials.logo_url,
            message: finalMessage,
          },
          emailKeys.publicKey,
        ),
      ]);

      const backendSuccess =
        backendResult.status === "fulfilled" &&
        [200, 201].includes(backendResult.value?.status);

      const emailSuccess = emailResult.status === "fulfilled";

      if (!backendSuccess) {
        console.error(
          "Backend submission failed:",
          backendResult.status === "rejected"
            ? backendResult.reason
            : backendResult.value,
        );
      }

      if (!emailSuccess) {
        console.error(
          "Email submission failed:",
          emailResult.status === "rejected"
            ? emailResult.reason
            : emailResult.value,
        );
      }

      // At least one service must succeed.
      const success = backendSuccess || emailSuccess;

      if (success) {
        markAsSubmitted();

        // Google Ads conversion tracking.
        // Track only when backend submission succeeds.
        if (
          backendSuccess &&
          typeof window !== "undefined" &&
          typeof window.gtag === "function"
        ) {
          window.gtag("event", "conversion", {
            send_to: "AW-17844583964/giQ6CM3TnfUbEJz8-rxC",
          });
        }

        setSubmissionSuccess(true);
        setConversationStep("confirmation");

        if (!silent) {
          await simulateBotTyping(
            "Perfect! ✨ I've received your details. Our team will contact you shortly. Thank you for choosing Godrej Varanya! 🎉",
            1000,
          );
        }
      } else {
        resetSubmittedFlag();

        setSubmissionSuccess(false);
        setConversationStep("confirmation");

        if (!silent) {
          await simulateBotTyping(
            "Oops! 😔 Something went wrong while processing your request. Please try again or contact our team directly.",
            1000,
          );
        }
      }
    } catch (error) {
      console.error("Lead submission error:", error);

      resetSubmittedFlag();

      setSubmissionSuccess(false);
      setConversationStep("confirmation");

      if (!silent) {
        await simulateBotTyping(
          "Sorry! Something went wrong while submitting your details. Please try again.",
          1000,
        );
      }
    } finally {
      submittingRef.current = false;
      setIsSubmitting(false);
    }
  };

  // ------------------------------------
  // Interest Selection
  // ------------------------------------

  const handleInterestSelect = async (interest) => {
    if (isLoading || isSubmitting) return;

    addUserMessage(interest);

    const updatedData = {
      ...latestDataRef.current,
      interest,
    };

    latestDataRef.current = updatedData;
    setCollectedData(updatedData);

    setConversationStep("name");

    await simulateBotTyping(
      "Wonderful choice! ✨ May I know your name so I can assist you better?",
    );
  };

  // ------------------------------------
  // Name Submission
  // ------------------------------------

  const handleNameSubmit = async () => {
    const name = inputValue.trim();

    const namePattern = /^[A-Za-z][A-Za-z\s.'-]{1,49}$/;

    if (!namePattern.test(name)) {
      addBotMessage(
        "Please enter a valid name (2-50 characters, letters only).",
      );
      return;
    }

    addUserMessage(name);

    const updatedData = {
      ...latestDataRef.current,
      name,
    };

    latestDataRef.current = updatedData;
    setCollectedData(updatedData);

    setInputValue("");
    setConversationStep("phone");

    await simulateBotTyping(
      `Nice to meet you, ${name}! 🤝 What's your contact number so our team can assist you?`,
    );
  };

  // ------------------------------------
  // Phone Submission
  // ------------------------------------

  const handlePhoneSubmit = async () => {
    const phone = inputValue.replace(/\D/g, "");

    const mobilePattern = /^[6-9]\d{9}$/;

    if (!mobilePattern.test(phone)) {
      addBotMessage(
        "Please enter a valid 10-digit Indian mobile number starting with 6-9.",
      );
      return;
    }

    addUserMessage(phone);

    const updatedData = {
      ...latestDataRef.current,
      phone,
    };

    latestDataRef.current = updatedData;
    setCollectedData(updatedData);

    setInputValue("");
    setConversationStep("propertyCategory");

    startAutoSubmitTimer(updatedData);

    await simulateBotTyping(
      "Perfect! Now, what type of property are you looking for?",
    );
  };

  // ------------------------------------
  // Property Category Selection
  // ------------------------------------

  const handlePropertyCategorySelect = async (option) => {
    if (isLoading || isSubmitting || submittedRef.current) return;

    addUserMessage(option.label);

    const updatedData = {
      ...latestDataRef.current,
      propertyCategory: option.value,
      flatType: "",
    };

    latestDataRef.current = updatedData;
    setCollectedData(updatedData);

    setConversationStep("propertyType");

    startAutoSubmitTimer(updatedData);

    await simulateBotTyping(
      option.value === "Residential Apartment"
        ? "Great! Which apartment configuration are you interested in?"
        : "Excellent! What kind of commercial property are you looking for?",
    );
  };

  // ------------------------------------
  // Property Type Selection
  // ------------------------------------

  const handlePropertyTypeSelect = async (propertyType) => {
    if (isLoading || isSubmitting || submittedRef.current) return;

    addUserMessage(propertyType);

    const updatedData = {
      ...latestDataRef.current,
      flatType: propertyType,
    };

    latestDataRef.current = updatedData;
    setCollectedData(updatedData);

    setConversationStep("message");

    startAutoSubmitTimer(updatedData);

    await simulateBotTyping(
      "Do you have any specific requirements or questions? Please share them with us so we can assist you better. 😊",
    );
  };

  // ------------------------------------
  // Additional Message Submission
  // ------------------------------------

  const handleMessageSubmit = async () => {
    if (isSubmitting || submittingRef.current || submittedRef.current) {
      return;
    }

    clearAutoSubmitTimer();

    const message = inputValue.trim();

    addUserMessage(message || "No additional message");

    const updatedData = {
      ...latestDataRef.current,
      message,
    };

    latestDataRef.current = updatedData;
    setCollectedData(updatedData);

    setInputValue("");

    await submitFormData(updatedData);
  };

  // ------------------------------------
  // Send Message
  // ------------------------------------

  const handleSendMessage = () => {
    if (isLoading || isSubmitting || submittingRef.current) return;

    switch (conversationStep) {
      case "name":
        handleNameSubmit();
        break;

      case "phone":
        handlePhoneSubmit();
        break;

      case "message":
        handleMessageSubmit();
        break;

      default:
        break;
    }
  };

  // ------------------------------------
  // Retry Submission
  // ------------------------------------

  const handleRetrySubmission = () => {
    if (submittingRef.current || submittedRef.current) return;

    submitFormData(latestDataRef.current);
  };

  // ------------------------------------
  // Close Chatbot
  // ------------------------------------

  const handleClose = () => {
    clearAutoSubmitTimer();

    if (
      latestDataRef.current.phone &&
      !submittedRef.current &&
      !submittingRef.current
    ) {
      submitFormData(latestDataRef.current, {
        silent: true,
      });
    }

    setOpen(false);
  };

  // ------------------------------------
  // Visible Property Options
  // ------------------------------------

  const visiblePropertyOptions =
    collectedData.propertyCategory === "Residential Apartment"
      ? residentialPropertySubOptions
      : commercialPropertySubOptions;

 
 return (
    <>
      {open && (
        <div className="fixed bottom-4 right-2 sm:right-4 z-50 w-[calc(100vw-16px)] sm:w-full max-w-sm">
          {/* Chat Window */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[580px] max-h-[calc(100dvh-32px)]">
            {/* Header */}
            <div
              className="p-4 text-white flex items-center gap-3 shrink-0"
              style={{
                background:
                  "linear-gradient(135deg, var(--clr-p) 0%, var(--clr-s) 100%)",
              }}
            >
             <div className="w-10 h-10 shrink-0 relative">
  {/* Profile Image */}
  <div className="w-full h-full bg-white rounded-full overflow-hidden">
    <img
      src={currentBot.image}
      alt={currentBot.name}
      className="w-full h-full object-cover"
    />
  </div>

  {/* Online Status Indicator */}
  <span className="absolute -top-0.5 -right-0.5 z-30 w-3 h-3 rounded-full bg-green-400 border-2 border-white"></span>
</div>

              <div className="flex-1">
                <h3 className="font-bold text-sm">{currentBot.name}</h3>
                <p className="text-xs opacity-90">Godrej Varanya · Online</p>
              </div>
{/* 
              {secondsLeft !== null && !submittedRef.current && (
                <span className="text-[9px] font-medium bg-white/20 px-2 py-1 rounded-full whitespace-nowrap">
                  Auto-submit: {secondsLeft}s
                </span>
              )} */}

              <button
                className="p-1 hover:bg-white/20 rounded-full transition"
                onClick={handleClose}
                aria-label="Close chat"
              >
                <FiX size={18} />
              </button>
            </div>

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
              {messages.map((msg) => (
                <div key={msg.id}>
                  {msg.sender === "bot" ? (
                    <div className="flex gap-2">
                      <div className="w-8 h-8 rounded-full shrink-0 flex items-center justify-center overflow-hidden">
                        <img
                          src={currentBot.image}
                          alt="Bot"
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>

                      <div className="max-w-[82%]">
                        <div
                          className="bg-white p-3 shadow-sm"
                          style={{ borderRadius: "0px 12px 12px 12px" }}
                        >
                          <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line break-words">
                            {msg.text}
                          </p>
                        </div>

                        <p className="text-xs text-gray-500 mt-1 ml-2">
                          {msg.timestamp.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex gap-2 justify-end">
                      <div className="max-w-[82%]">
                        <div
                          className="p-3 text-white"
                          style={{
                            background:
                              "linear-gradient(135deg, var(--clr-p) 0%, var(--clr-s) 100%)",
                            borderRadius: "12px 12px 0px 12px",
                          }}
                        >
                          <p className="text-sm leading-relaxed whitespace-pre-line break-words">
                            {msg.text}
                          </p>
                        </div>

                        <p className="text-xs text-gray-500 mt-1 mr-2 text-right">
                          {msg.timestamp.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Typing Indicator */}
              {isLoading && (
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full shrink-0 flex items-center justify-center overflow-hidden">
                    <img
                      src={currentBot.image}
                      alt="Bot"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>

                  <div
                    className="bg-white p-3 shadow-sm"
                    style={{ borderRadius: "0px 12px 12px 12px" }}
                  >
                    <div className="flex gap-1">
                      {[0, 1, 2].map((dot) => (
                        <div
                          key={dot}
                          className="w-2 h-2 rounded-full"
                          style={{
                            animation: `pulse 1.4s infinite ${dot * 0.2}s`,
                            background:
                              dot % 2 === 0 ? "var(--clr-p)" : "var(--clr-s)",
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Interest Selection */}
            {conversationStep === "interest" && !isLoading && (
              <div className="flex gap-2 justify-end p-4 bg-gray-50 shrink-0">
                <div className="max-w-xs">
                  <div
                    className="p-3 text-white"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--clr-p) 0%, var(--clr-s) 100%)",
                      borderRadius: "12px 12px 0px 12px",
                    }}
                  >
                    <p className="text-sm mb-3">Please select your interest:</p>

                    <div className="space-y-2">
                      {interestOptions.map((option) => (
                        <button
                          key={option}
                          onClick={() => handleInterestSelect(option)}
                          disabled={isLoading || isSubmitting}
                          className="w-full text-left p-2 rounded border-2 border-white text-white transition hover:bg-white hover:text-gray-800 disabled:opacity-50"
                        >
                          <p className="text-xs font-medium">{option}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Property Category Selection */}
            {conversationStep === "propertyCategory" && !isLoading && (
              <div className="flex gap-2 justify-end p-4 bg-gray-50 shrink-0">
                <div className="max-w-xs">
                  <div
                    className="p-3 text-white"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--clr-p) 0%, var(--clr-s) 100%)",
                      borderRadius: "12px 12px 0px 12px",
                    }}
                  >
                    <p className="text-sm mb-3">
                      What type of property are you looking for?
                    </p>

                    <div className="space-y-2">
                      {propertyOptions.map((option) => (
                        <button
                          key={option.id}
                          onClick={() => handlePropertyCategorySelect(option)}
                          disabled={isLoading || isSubmitting}
                          className="w-full text-left p-2 rounded border-2 border-white text-white transition hover:bg-white hover:text-gray-800 disabled:opacity-50"
                        >
                          <p className="text-xs font-medium">{option.label}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Property Type Selection */}
            {conversationStep === "propertyType" && !isLoading && (
              <div className="flex gap-2 justify-end p-4 bg-gray-50 shrink-0">
                <div className="max-w-xs">
                  <div
                    className="p-3 text-white"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--clr-p) 0%, var(--clr-s) 100%)",
                      borderRadius: "12px 12px 0px 12px",
                    }}
                  >
                    <p className="text-sm mb-3">
                      {collectedData.propertyCategory ===
                      "Residential Apartment"
                        ? "Which apartment configuration interests you?"
                        : "Which commercial property are you interested in?"}
                    </p>

                    <div
                      className={
                        collectedData.propertyCategory ===
                        "Residential Apartment"
                          ? "grid grid-cols-2 gap-2"
                          : "space-y-2"
                      }
                    >
                      {visiblePropertyOptions.map((option) => (
                        <button
                          key={option}
                          onClick={() => handlePropertyTypeSelect(option)}
                          disabled={isLoading || isSubmitting}
                          className="w-full text-left p-2 rounded border-2 border-white text-white transition hover:bg-white hover:text-gray-800 disabled:opacity-50"
                        >
                          <p className="text-xs font-medium">{option}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Input Area */}
            {(conversationStep === "name" ||
              conversationStep === "phone" ||
              conversationStep === "message") &&
              !isLoading && (
                <div className="p-4 border-t bg-white shrink-0 space-y-3">
                  <div className="flex gap-2">
                    <div className="flex-1 flex items-center gap-2 border-2 rounded-lg px-3 border-gray-300">
                      {conversationStep === "name" ? (
                        <FiUser size={16} className="text-gray-500" />
                      ) : conversationStep === "phone" ? (
                        <FiPhone size={16} className="text-gray-500" />
                      ) : (
                        <FiMessageCircle size={16} className="text-gray-500" />
                      )}

                      <input
                        type={conversationStep === "phone" ? "tel" : "text"}
                        className="w-full py-3 outline-none text-sm"
                        placeholder={
                          conversationStep === "name"
                            ? "Enter your name..."
                            : conversationStep === "phone"
                              ? "Enter mobile number..."
                              : "Enter your message ..."
                        }
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") handleSendMessage();
                        }}
                        disabled={isSubmitting}
                      />
                    </div>

                    <button
                      onClick={handleSendMessage}
                      disabled={
                        isSubmitting ||
                        (conversationStep !== "message" && !inputValue.trim())
                      }
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg transition disabled:opacity-50"
                      style={{
                        background:
                          "linear-gradient(135deg, var(--clr-p) 0%, var(--clr-s) 100%)",
                      }}
                    >
                      {isSubmitting ? (
                        <span className="text-xs">...</span>
                      ) : (
                        <FiSend size={18} />
                      )}
                    </button>
                  </div>
                </div>
              )}

            {/* Confirmation State */}
            {conversationStep === "confirmation" && (
              <div className="p-4 border-t bg-white shrink-0 text-center space-y-2">
                {submissionSuccess ? (
                  <>
                    <p className="text-sm font-medium text-gray-700">
                      ✅ Your response has been submitted
                    </p>

                    <p className="text-xs text-gray-500">
                      Our team will contact you soon
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-sm font-medium text-red-600">
                      ❌ Request submission failed
                    </p>

                    <p className="text-xs text-gray-500">
                      Sorry, we are unable to fulfill your request at the
                      moment.
                    </p>

                    {!submittedRef.current && (
                      <button
                        onClick={handleRetrySubmission}
                        disabled={isSubmitting}
                        className="mt-2 px-4 py-2 rounded-lg text-white text-xs font-medium disabled:opacity-50"
                        style={{
                          background:
                            "linear-gradient(135deg, var(--clr-p) 0%, var(--clr-s) 100%)",
                        }}
                      >
                        {isSubmitting ? "Submitting..." : "Try Again"}
                      </button>
                    )}
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Floating Button */}
      {!open && (
        <>
          {/* Animated Chat Bubble */}
          {showBubble && (
            <div className="fixed lg:bottom-24 bottom-38 right-10 z-40 max-w-xs">
              <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105">
                <button
                  onClick={() => setShowBubble(false)}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-colors"
                  aria-label="Close chat bubble"
                >
                  <FiX size={14} />
                </button>

                <div className="space-y-1">
                  <p className="font-semibold text-sm">
                    👋 Hey! I'm {currentBot.name}
                  </p>

                  <p className="text-xs opacity-90">
                    Need help with Godrej Varanya?
                  </p>

                  <button
                    onClick={() => setOpen(true)}
                    className="text-xs font-medium bg-white/20 rounded-full px-3 py-1 inline-block mt-2"
                  >
                    💬 Let's Chat!
                  </button>
                </div>

                <div className="absolute -bottom-2 right-8 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-purple-600"></div>
              </div>
            </div>
          )}

          {/* Bot Avatar Button */}
          <button
            onClick={() => setOpen(true)}
            className="fixed lg:bottom-6 bottom-20 right-6 z-50 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-3xl border-4 border-white bg-gradient-to-br from-pink-400 to-purple-500"
            aria-label="Open chatbot"
          >
            <img
              src={currentBot.image}
              alt="Chat with Godrej Varanya"
              className="w-12 h-12 object-cover rounded-full"
            />

            <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white animate-ping">
              <div className="w-2 h-2 bg-green-300 rounded-full mx-auto mt-0.5 animate-pulse"></div>
            </div>
          </button>
        </>
      )}

      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes pulse {
              0%, 100% {
                opacity: 0.3;
              }
              50% {
                opacity: 1;
              }
            }
          `,
        }}
      />
    </>
  );

}
