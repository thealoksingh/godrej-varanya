
import React from "react";
import AboutImage from "../assets/about.png";
import MesmerisingViewImage from "../assets/mesmerisingViewImage.png";
import {
  Download,
  Mountain,
  Trees,
  Building2,
  Waves,
  Eye,
  Home,
  ArrowUpRight,
} from "lucide-react";
import Divider from "./Divider";

const About = ({ onRequestCallBack }) => {
  const highlights = [
    {
      icon: Building2,
      value: "26,466 sq. m.",
      subtitle: "(6.54 Acres)",
      title: "Expansive Development",
      description: "A vast land parcel designed for elevated living.",
    },
    {
      icon: Mountain,
      value: "360°",
      subtitle: "Panoramic Surroundings",
      title: "Stunning Views in Every Direction",
      description:
        "Surrounded by Kharghar Hills, mangroves, creek and the city skyline.",
    },
    {
      icon: Home,
      value: "4,645 sq. m.",
      subtitle: "(50,000 sq. ft.)",
      title: "Grand Clubhouse",
      description: "A world of leisure, wellness and community.",
    },
    {
      icon: Trees,
      value: "4,831 sq. m.",
      subtitle: "(52,000 sq. ft.)",
      title: "Expansive Open Podium Spaces",
      description: "One of the largest open podiums in Kharghar.",
    },
  ];

  const viewTypes = [
    "Panvel Creek View*",
    "City View*",
    "Panvel Creek and Hill View",
    "Hill View",
  ];

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="w-full bg-white scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

        {/* ABOUT GODREJ VARANYA */}
        <div className="mb-12">
          <h2
            id="about-heading"
            className="text-2xl sm:text-3xl text-center lg:text-left font-semibold"
            style={{ color: "var(--clr-p)" }}
          >
            About Godrej Varanya
          </h2>

          <div className="block lg:hidden mt-3">
            <Divider />
          </div>

          <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-10 mt-6">
            {/* Left Content */}
            <div className="w-full lg:w-[55%] lg:pr-5">
              <span
                className="text-xs font-bold uppercase tracking-[0.2em]"
                style={{ color: "var(--clr-p)" }}
              >
                A New Perspective on Living
              </span>

              <h3 className="mt-3 mb-5 text-2xl sm:text-3xl font-semibold leading-snug text-[#25291F]">
                A Development Shaped by Nature, Perfected by Design.
              </h3>

              <p className="text-sm sm:text-base leading-7 text-[#686D62] text-justify">
                Godrej Varanya at Kharghar–Belpada brings together expansive
                open spaces, thoughtful architecture and the beauty of its
                natural surroundings. Spread across approximately 26,466 sq. m.
                (6.54 acres), this residential development offers spacious
                2 and 3 BHK homes designed for a comfortable and elevated
                lifestyle.
              </p>

              <p className="mt-4 text-sm sm:text-base leading-7 text-[#686D62] text-justify">
                With a grand clubhouse, expansive open podium spaces and
                stunning views of the Kharghar Hills, mangroves, Panvel Creek
                and city skyline, Godrej Varanya creates a setting where
                everyday living meets nature, leisure and convenience.
              </p>

              <div className="mt-7 flex justify-center lg:justify-start">
                <button
                  type="button"
                  onClick={onRequestCallBack}
                  className="animated-gradient animated-border flex items-center gap-2 px-8 sm:px-10 py-3 rounded-lg text-sm font-semibold text-white shadow-md hover:opacity-90 transition"
                >
                  <Download size={18} />
                  Download Brochure
                </button>
              </div>
            </div>

            {/* Existing About Image - Same Position */}
            <div className="w-full lg:w-[45%] flex justify-center items-center">
              <img
                src={AboutImage}
                alt="Godrej Varanya residential development in Kharghar, Navi Mumbai"
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* DEVELOPMENT HIGHLIGHTS */}
        <div className="mt-16 sm:mt-24">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <span
              className="text-xs font-bold uppercase tracking-[0.25em]"
              style={{ color: "var(--clr-p)" }}
            >
              Thoughtfully Planned Spaces
            </span>

            <h3 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#25291F] leading-snug">
              A Development Shaped by Nature,
              <span
                className="block mt-1"
                style={{ color: "var(--clr-p)" }}
              >
                Perfected by Design.
              </span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[#E8EBDD]">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className={`group p-6 sm:p-7 bg-white hover:bg-[#F8FAF3] transition-colors duration-300 ${
                    index !== 3 ? "border-b sm:border-b-0 lg:border-r border-[#E8EBDD]" : ""
                  } ${
                    index === 1 ? "sm:border-r lg:border-r" : ""
                  } ${
                    index === 2 ? "sm:border-b lg:border-b-0" : ""
                  }`}
                >
                  <div
                    className="w-12 h-12 flex items-center justify-center mb-6"
                    style={{
                      backgroundColor: "rgba(107,141,20,0.10)",
                      color: "var(--clr-p)",
                    }}
                  >
                    <Icon size={23} strokeWidth={1.5} />
                  </div>

                  <p
                    className="text-xl sm:text-2xl font-semibold"
                    style={{ color: "var(--clr-p)" }}
                  >
                    {item.value}
                  </p>

                  <p className="text-xs text-[#92978A] mt-1">
                    {item.subtitle}
                  </p>

                  <h4 className="mt-5 text-base font-semibold text-[#292D24]">
                    {item.title}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-[#777B70]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* SPACIOUS HOMES */}
        <div className="mt-20 sm:mt-28">
          <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-center">
            <div>
              <span
                className="text-xs font-bold uppercase tracking-[0.25em]"
                style={{ color: "var(--clr-p)" }}
              >
                Thoughtful Home Design
              </span>

              <h3 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-semibold leading-snug text-[#25291F]">
                Spacious Homes with Decks That Frame the Horizon.
              </h3>

              <p className="mt-5 text-sm sm:text-base leading-7 text-[#777B70]">
                Step into spacious homes where nature unfolds in its most
                breathtaking form, with thoughtfully planned interiors
                that evoke a sense of openness and ease.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { icon: Home, label: "Homes with Decks" },
                  { icon: Eye, label: "Mesmerising Views*" },
                  { icon: Building2, label: "Efficient Layouts" },
                ].map((feature) => {
                  const Icon = feature.icon;

                  return (
                    <div
                      key={feature.label}
                      className="border-t-2 pt-4"
                      style={{ borderColor: "var(--clr-s)" }}
                    >
                      <Icon
                        size={21}
                        style={{ color: "var(--clr-p)" }}
                      />
                      <p className="mt-3 text-sm font-semibold text-[#454A3E]">
                        {feature.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div
              className="relative overflow-hidden p-8 sm:p-10"
              style={{ backgroundColor: "#F5F7EF" }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-[#6b8d14]/20" />

              <div className="relative">
                <p
                  className="text-xs uppercase tracking-[0.2em] font-semibold"
                  style={{ color: "var(--clr-p)" }}
                >
                  Designed Around You
                </p>

                <p className="mt-5 text-xl sm:text-2xl font-semibold leading-relaxed text-[#34392C]">
                  More than just a home. A space to breathe, unwind and
                  experience the beauty of every day.
                </p>

                <div
                  className="mt-7 h-[2px] w-16"
                  style={{ backgroundColor: "var(--clr-s)" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* MESMERISING VIEWS */}
        <div className="mt-20 sm:mt-28">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span
              className="text-xs font-bold uppercase tracking-[0.25em]"
              style={{ color: "var(--clr-p)" }}
            >
              Nature All Around
            </span>

            <h3 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#25291F]">
              Find Mesmerising Views*
              <span
                className="block mt-1"
                style={{ color: "var(--clr-p)" }}
              >
                In Every Direction.
              </span>
            </h3>

            <p className="mt-4 text-sm sm:text-base leading-7 text-[#777B70]">
              The timeless presence of the Kharghar Hills creates a backdrop
              of quiet majesty, while the shimmering expanse of Panvel Creek
              brings calm and serenity into your everyday.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.5fr] gap-6 lg:gap-10 items-stretch">
            {/* View Types */}
            <div className="flex flex-col justify-center border border-[#E8EBDD] bg-[#FAFBF7] p-6 sm:p-9">
              <h4 className="text-lg font-semibold text-[#30352A] mb-6">
                A View for Every Perspective
              </h4>

              <div className="space-y-0">
                {viewTypes.map((view, index) => (
                  <div
                    key={view}
                    className="flex items-center justify-between gap-3 border-t border-[#E4E8DC] py-5"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="w-8 h-8 shrink-0 flex items-center justify-center text-xs font-semibold"
                        style={{
                          backgroundColor: "rgba(107,141,20,0.10)",
                          color: "var(--clr-p)",
                        }}
                      >
                        0{index + 1}
                      </span>

                      <span className="text-sm sm:text-base font-medium text-[#50564A]">
                        {view}
                      </span>
                    </div>

                    <ArrowUpRight
                      size={17}
                      className="shrink-0"
                      style={{ color: "var(--clr-p)" }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* New Mesmerising View Image */}
           <div className="relative min-h-[280px] sm:min-h-[380px] lg:min-h-[440px] overflow-hidden group">
  <img
    src={MesmerisingViewImage}
    alt="Panoramic views of Kharghar Hills and Panvel Creek surrounding Godrej Varanya"
    loading="lazy"
    decoding="async"
    className="absolute inset-0 w-full h-full object-contain "
  />

  {/* <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" /> */}

  {/* <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
    <p className="text-white/80 text-xs uppercase tracking-[0.2em]">
      The Beauty of Kharghar
    </p>

    <h4 className="mt-2 text-xl sm:text-2xl font-semibold text-white">
      Nature in Every Direction.
    </h4>
  </div> */}
</div>
          </div>

          <p className="mt-4 text-[11px] leading-5 text-[#999D93]">
            *Views are indicative and depend on the apartment's location,
            floor and orientation. Imagery is for representation purposes only.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
