import { useState, useEffect } from "react";
import Hero from "../components/Hero";
import Price from "../components/Price";
import Amenities from "../components/Amenities";
import FloorPlan from "../components/FloorPlan";
import Location from "../components/Location";
import Gallery from "../components/Gallery";
import NRIServices from "../components/NRIServices";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MobileFooter from "../components/MobileFooter";
import InterestForm from "../components/InterestForm";
import DynamicSEO from "../components/DynamicSEO";
import AboutPage from "./AboutPage";
import HighlightPage from "./HighlightPage";
import AmenitiesPage from "./AmenitiesPage";
import GalleryPage from "./GalleryPage";
import ContactPage from "./ContactPage";
import LowerAboutSection from "./LowerAboutSection";

// Popup timing configuration
const INITIAL_POPUP_DELAY = 3000; // 3 seconds
const REPEAT_POPUP_INTERVAL = 10000; // 10 seconds

const HomePage = () => {
  const [isInterestFormOpen, setIsInterestFormOpen] = useState(false);
  const [isBrochureFormOpen, setIsBrochureFormOpen] = useState(false);
  const [formMode, setFormMode] = useState("");

  useEffect(() => {
    console.log("HomePage mounted - useEffect running");

    // Check if form was already submitted
    const submitted = localStorage.getItem("interestFormSubmitted");
    console.log("Form submitted status:", submitted);

    if (submitted === "true") {
      console.log("Form already submitted, skipping popup");
      return;
    }

    console.log("Setting up timers...");

    // Show form after 3 seconds on initial load
    const initialTimer = setTimeout(() => {
      console.log("Initial timer fired - opening form");
      setIsInterestFormOpen(true);
    }, INITIAL_POPUP_DELAY);

    // Then show every 10 seconds
    const repeatTimer = setInterval(() => {
      console.log("Repeat timer fired");
      const isSubmitted = localStorage.getItem("interestFormSubmitted");
      if (isSubmitted !== "true") {
        console.log("Opening form from repeat timer");
        setIsInterestFormOpen(true);
      }
    }, REPEAT_POPUP_INTERVAL);

    return () => {
      console.log("Cleaning up timers");
      clearTimeout(initialTimer);
      clearInterval(repeatTimer);
    };
  }, []);

  const handleInterestFormClose = (submitted = false) => {
    console.log("Closing form, submitted:", submitted);
    setIsInterestFormOpen(false);
    if (submitted) {
      console.log("Saving to localStorage");
      localStorage.setItem("interestFormSubmitted", "true");
    }
  };

  return (
    <>
      <DynamicSEO />
      <Hero
        onRequestCallBack={() => {
          setIsInterestFormOpen(true);
          setFormMode("Get Detail About Varanya");
        }}
      />
      {isInterestFormOpen && (
        <InterestForm mode={formMode} onClose={handleInterestFormClose} />
      )}
      <div className="lg:p-4 p-2 bg-[#E2E6E9]">
           <AboutPage
          onRequestCallBack={() => {
            setIsInterestFormOpen(true);
            setFormMode("Download Brochure");
          }}
        />
        <HighlightPage />
        <Price
         onRequestCallBack={() => {
          setIsInterestFormOpen(true);
          setFormMode("Get Detail About Varanya");
        }}
        />
        <FloorPlan
         onRequestCallBack={() => {
          setIsInterestFormOpen(true);
          setFormMode("Get Detail About Varanya");
        }}
         
        />

        <AmenitiesPage />

        <GalleryPage />
        <Location
          onRequestCallBack={() => {
            setIsInterestFormOpen(true);
            setFormMode("Get Location Detail");
          }}
        />
        <ContactPage/>
        <LowerAboutSection/>
          <Footer />
      </div>

    
      {/* <NRIServices /> */}
    
      <MobileFooter  onRequestCallBack={() => {
          setIsInterestFormOpen(true);
          setFormMode("Get Detail About Varanya");
        }} />
    </>
  );
};

export default HomePage;
