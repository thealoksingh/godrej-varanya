
import React from "react";
import Divider from "./Divider";

const highlightsLeft = [
  "Sprawling 6.5-acre prime residential land parcel setting",
  "Surrounded by serene hillside greenery and scenic views",
  "Spacious 2 & 3 BHK residences in Kharghar",
  "Ample parking spaces for residents and guests",
];

const highlightsRight = [
  "State-of-the-art clubhouse with curated amenities",
  "Eco-conscious planning and high-end security",
  "Convenient access to metro, railway and highway connectivity",
  "Approximately fourteen minutes from Navi Mumbai International Airport",
];

const Highlight = () => {
  return (
    <section
      id="highlight"
      aria-labelledby="highlight-heading"
      className="max-w-7xl mx-auto px-6 py-4 bg-white scroll-mt-20 mt-4"
    >
      <h2
        id="highlight-heading"
        className="lg:text-3xl text-2xl font-semibold text-[var(--clr-p)] text-center mb-4"
      >
        Godrej Varanya - Project Highlights
      </h2>

      <Divider />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-[16px] p-4">
        {[highlightsLeft, highlightsRight].map((items, index) => (
          <ul key={index} className="flex flex-col gap-4">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span aria-hidden="true" className="text-green-600">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
};

export default Highlight;
