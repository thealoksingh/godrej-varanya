import React, { useState, useRef, useEffect } from "react";
import AboutImage from "../assets/about.png";
import { Download } from "lucide-react";
const About = () => {
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
      id="about"
      className="max-w-7xl mx-auto scroll-mt-20 bg-white p-6 shadow-md "
    >
      <h2 className="lg:text-3xl text-2xl text-center lg:pl-6 lg:text-start font-semibold text-[var(--clr-p)] lg:mb-0 mb-4">
        About Godrej Varanya
      </h2>
      <div className="  overflow-hidden flex flex-col-reverse lg:flex-row ">
        <div className="lg:w-[55%] w-full lg:p-6  text-justify ">
          <p className="text-sm">
            Godrej Kharghar–Belpada rises as a refined residential address in
            one of Navi Mumbai’s most coveted green corridors. Spread across a
            sprawling 6.5-acre land parcel and surrounded by serene hill views,
            this thoughtfully planned development offers spacious 2 & 3 BHK
            residences that blend contemporary design with a sense of calm.
            Landscaped open spaces, ample parking, and eco-sensitive planning
            create a setting that feels private and peaceful, without cutting
            you off from the pulse of the city.
          </p>

          {isExpanded && (
            <p className="text-sm mt-2">
              Strategically located just minutes from Utsav Chowk Metro Station,
              Kharghar Railway Station, and the Sion–Panvel Highway, the project
              enjoys unmatched connectivity. Key landmarks like the 150-acre
              Kharghar Golf Course, Central Park, ISKCON Temple, BKC-2
              commercial hub, reputed schools, colleges, DY Patil Stadium, and
              the newly inaugurated Navi Mumbai International Airport are all
              within easy reach. With premium amenities, a modern clubhouse, and
              the assurance of Godrej Properties' trusted legacy, this landmark
              development promises long-term value, comfort, and a lifestyle
              shaped by location and foresight.
            </p>
          )}
          <span
            className="text-blue-500 font-bold cursor-pointer "
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Read Less-" : "Read More+"}
          </span>
          <div className="flex justify-center lg:justify-start p-4 lg:pl-0">
            <button className="animated-gradient flex items-center gap-2  animated-border text-white px-12 py-2.5 rounded-lg text-sm shadow-md hover:opacity-90">
              <Download size={18} className="animate-bounce" /> Download
              Brochure
            </button>
          </div>
        </div>
        <div className="lg:w-[45%] w-full  flex flex-col justify-center items-center ">
          <img
            src={AboutImage}
            alt="window view of godrej varanya"
            className=""
          />
        </div>
      </div>
    </section>
  );
};

export default About;
