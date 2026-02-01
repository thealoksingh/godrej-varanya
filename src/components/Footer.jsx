import React from "react";
import reraQr from "../assets/reraQrCode.png";
import logo from "../assets/godrejLogo.png";
const Footer = () => {
  return (
    <footer className="w-full font-sans text-[#333] bg-cyan-200">
      <div className="bg-[#EFEBEB] flex justify-center items-center p-6 flex-col">
        <img
          src={logo}
          alt="godrej varanya logo"
          className=" w-54  p-1  hover:scale-105 transition-transform duration-200"
        />
        <img
          src={reraQr}
          alt="godrej varanya logo"
          className=" w-32  p-1 mt-4 hover:scale-105 transition-transform duration-200"
        />
        <p className="text-[11px]">This project is RERA registered. </p>
        <p className="text-[14px]">Agent Rera Number : A51900029955</p>
        <p className="text-[14px] font-semibold">Project Rera Number : PM1271012502176</p>
        <p className="text-[10px] mt-4 text-justify">
          The content presented on this website is solely for informational
          purposes and does not constitute a service offer. Prices mentioned
          here are subject to change without prior notification, and the
          availability of the listed properties is not assured. Images showcased
          are illustrative and may not precisely represent the actual
          properties. Kindly be advised that this website operates as an
          authorized marketing partner (PropSolutions4U Pvt. Ltd). For necessary
          processing, we may share data with Real Estate Regulatory Authority
          (RERA) registered brokers/companies. Additionally, updates and
          information may be sent to the registered mobile number or email ID.
          All rights reserved. This website's content, design, and data are
          protected by copyright and other intellectual property rights.
          Unauthorized use or reproduction of the content may be subject to
          legal repercussions. For precise and current information on services,
          pricing, availability, or any other details, we recommend you contact
          us directly via the provided contact information on this website. We
          appreciate your visit.
        </p>
        <a 
         href="/privacy"
        >
 <p className="text-[12px] text-gray-600">© Privacy Policy | Terms & Conditions</p>
      
        </a>
        </div>
      <div className="bg-black flex justify-center items-center h-10 rounded-b-lg text-white text-[12px]">
        <p>All Rights Reserved. © 2026 PropSolutions4U Pvt. Ltd.</p>
      </div>
    </footer>
  );
};

export default Footer;
