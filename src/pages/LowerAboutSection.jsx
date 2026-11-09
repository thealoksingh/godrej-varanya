
import React from "react";
import Divider from "../components/Divider";

const LowerAboutSection = () => {
  return (
    <section
      id="lower-about"
      className="max-w-7xl mx-auto scroll-mt-20 bg-white p-6 shadow-md mt-4"
      aria-labelledby="lower-about-heading"
    >
      <h2
        id="lower-about-heading"
        className="lg:text-3xl text-2xl font-semibold text-[var(--clr-p)] text-center mb-4"
      >
        About Godrej Properties
      </h2>

      <Divider />

      <div className="p-4">
        <p className="text-justify text-[14px]">
          Godrej Properties Limited (GPL) is the real estate arm of the
          Godrej Group. Established in 1990 and headquartered in Mumbai,
          the company operates in India's real estate sector, with residential,
          commercial, and township developments across several major cities,
          including Mumbai, Delhi-NCR, Bengaluru, Pune, and Hyderabad.
          The company focuses on innovation, sustainable development,
          thoughtful design, and quality construction.
        </p>

        <p className="text-justify text-[14px] mt-2">
          Godrej Properties follows its commitment to sustainability through
          initiatives focused on environmental responsibility, energy
          efficiency, and social inclusivity. The company is publicly listed
          on the BSE and NSE and continues to develop residential and
          commercial properties across India. Gaurav Pandey serves as its
          Managing Director and CEO.
        </p>

        {/* <p className="text-justify text-[14px] mt-2">
          To learn more about the company, visit the{" "}
          <a
            href="https://www.godrejproperties.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--clr-p)] underline font-medium"
          >
            official Godrej Properties website
          </a>.
        </p> */}
      </div>
    </section>
  );
};

export default LowerAboutSection;
