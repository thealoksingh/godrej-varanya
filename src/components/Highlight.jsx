import React, { useState, useRef, useEffect } from "react";
import projectPoster from "../assets/Poster/one-crest-project-poster.jpeg";
import Divider from "./Divider";

const Highlight = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [posterHeight, setPosterHeight] = useState(0);
  const posterRef = useRef(null);

  // Measure poster height to sync the text container
  useEffect(() => {
    if (posterRef.current) {
      setPosterHeight(posterRef.current.offsetHeight);
    }
  }, []);

  return (
    <section
      id="highlight"
      className="max-w-7xl mx-auto px-6 py-4 bg-white scroll-mt-20 mt-4"
    >
      <h2 className="lg:text-3xl text-2xl font-semibold text-[var(--clr-p)] text-center mb-4 ">
        Godrej Varanya - Highlights
      </h2>
      <Divider />
      <div className="flex lg:flex-row flex-col text-[16px] p-4">
        <div className="w-full lg:w-1/2  flex flex-col gap-4">
          <p>✓ Sprawling 6.5-acre prime residential land parcel setting</p>
          <p>✓ Surrounded entirely by serene hill-side greenery vistas</p>
          <p>✓ Spacious 2 & 3 BHK residences in Prime Kharghar</p>
          <p>✓ Ample parking spaces for residents and guests</p>
        </div>
        <div className="w-full lg:w-1/2  flex flex-col gap-4">
          <p>✓ State-of-the-art clubhouse with curated amenities</p>
          <p>✓ Eco-conscious planning and High-end security</p>
          <p>✓ One-minute access to metro, rail, highways connectivity</p>
          <p>✓ Fourteen minutes from Navi Mumbai International Airport</p>
        </div>
      </div>
    </section>
  );
};

export default Highlight;
