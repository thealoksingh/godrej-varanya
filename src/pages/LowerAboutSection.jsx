import React, { useState, useRef, useEffect } from "react";
import { Download } from "lucide-react";
import Divider from "../components/Divider";
const LowerAboutSection = ({ onRequestCallBack }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section
      id="lower-about"
      className="max-w-7xl mx-auto scroll-mt-20 bg-white p-6 shadow-md mt-4 "
    >
      <h2 className="lg:text-3xl text-2xl font-semibold text-[var(--clr-p)] text-center mb-4 ">
        About Godrej Properties
      </h2>
        <Divider />
    
      <div className="p-4">
        <p className="text-justify text-[14px]">
          Godrej Properties Limited (GPL) is the real estate arm of the
          127-year-old Godrej Group, one of India's most trusted and diversified
          conglomerates. Established in 1990 and headquartered in Mumbai, the
          company has successfully translated its parent group's philosophy of
          innovation, sustainability, and excellence into the real estate
          industry, becoming the first Indian real estate developer to receive
          an ISO certification. GPL is currently one of India's largest and only
          truly pan-India developers, with landmark residential, commercial, and
          township projects in over 15 major cities, including Mumbai,
          Delhi-NCR, Bengaluru, Pune, and Hyderabad. The company has received
          over 400 awards for its commitment to cutting-edge design, green
          building practices, and quality construction, and achieved record
          pre-sales of over ₹29,444 crore in the financial year 2025,
          solidifying its market leadership.
        </p>
        <p className="text-justify text-[14px] mt-2">
          Godrej Properties is guided by a strong commitment to "shared value"
          through its "Good & Green" strategy, which focuses on creating a more
          inclusive and greener India by incorporating eco-friendly designs,
          energy efficiency, and social inclusivity in its developments. A
          significant portion of the promoter holding in the larger Godrej Group
          is held in trusts that invest in the environment, health, and
          education, underscoring this commitment. As a publicly listed company
          on the BSE and NSE since 2010, the developer is known for its
          transparency, customer-centric approach, and reliable project
          execution. Gaurav Pandey serves as the Managing Director and CEO,
          leading the company in its mission to create spaces that enable
          "Everyday Joys" for its customers. The company's official website is
          www.godrejproperties.com.
        </p>
      </div>
    </section>
  );
};

export default LowerAboutSection;
