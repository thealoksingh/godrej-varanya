import React from "react";
import {
  FiMapPin,
  FiNavigation,
  FiTrendingUp,
  FiBriefcase,
  FiShoppingBag,
  FiBookOpen,
  FiHeart,
  FiClock,
} from "react-icons/fi";
import flightIcon from "../assets/flightIcon.png";
import Map from "./Map";
const locationGroups = [
  {
    title: "Effortless Connectivity",
    icon: FiNavigation,
    places: [
      ["Sion-Panvel Highway", "1 min"],
      ["Utsav Chowk Metro Station", "2 min"],
      ["Kharghar Railway Station", "5 min"],
      ["Navi Mumbai Intl. Airport", "16 min"],
    ],
  },
  {
    title: "Educational Institutes",
    icon: FiBookOpen,
    places: [
      ["Bharati Vidyapeeth University", "2 min"],
      ["National Institute of Fashion Technology", "3 min"],
      ["VIBGYOR High School", "9 min"],
      ["DY Patil University", "12 min"],
    ],
  },
  {
    title: "Hospitals",
    icon: FiHeart,
    places: [
      ["MITR Hospital", "4 min"],
      ["Medicover Hospital", "8 min"],
      ["Tata Memorial Hospital", "8 min"],
      ["Geo Medcare Satyam Multispeciality Hospital", "9 min"],
    ],
  },
  {
    title: "Other Attractions",
    icon: FiMapPin,
    places: [
      ["Kharghar Central Park", "4 min"],
      ["Kharghar Valley Golf Course", "5 min"],
      ["Taloja Creek", "9 min"],
      ["Pandavkada Waterfall", "20 min"],
    ],
  },
  {
    title: "Curated Retail & Shopping",
    icon: FiShoppingBag,
    places: [
      ["Little World Mall", "6 min"],
      ["Shree Krishna Paradise Shopping Zone", "6 min"],
      ["Nexus Seawoods", "15 min"],
      ["Paradise Mall", "15 min"],
    ],
  },
  {
    title: "Corporate Hubs",
    icon: FiBriefcase,
    places: [
      ["CIDCO International Corporate Park (BKC 2.0)", "6 min"],
      ["Vishwaroop IT Park", "16 min"],
      ["Reliance Corporate Park", "24 min"],
      ["Mindspace Business Park, Airoli", "30 min"],
    ],
  },
];

const growthHighlights = [
  {
    number: "01",
    title: "NMIA: Your Gateway to the World",
    icon: FiNavigation,
    description:
      "Just approximately 16 minutes* from Navi Mumbai International Airport (NMIA), offering domestic and international connectivity while supporting economic growth through increased investments and large-scale job creation.",
  },
  {
    number: "02",
    title: "Upcoming NAINA: Shaping the Next Phase of Growth",
    icon: FiTrendingUp,
    description:
      "Spread across approximately 225+ million sq. m., NAINA City (Navi Mumbai Airport Influence Notified Area) is a CIDCO-planned city, supported by ₹6,600+ crore in infrastructure investment.",
  },
  {
    number: "03",
    title: "Upcoming BKC 2.0: Navi Mumbai's Next Business Hub",
    icon: FiBriefcase,
    description:
      "CIDCO's International Corporate Park (ICP), spread across approximately 1.4–1.6 million sq. m. (345–385 acres), is envisioned as a major corporate destination attracting enterprises, talent and investment.",
  },
  {
    number: "04",
    title: "Upcoming Kharghar Coastal Road",
    icon: FiMapPin,
    description:
      "The proposed 9.5 km Kharghar Coastal Road along Navi Mumbai's waterfront is planned to strengthen connectivity between Kharghar, Belapur and Nerul while improving airport access.",
  },
  {
    number: "05",
    title: "Upcoming Kharghar–Turbhe Link Road",
    icon: FiNavigation,
    description:
      "This proposed corridor aims to improve connectivity between South and North Navi Mumbai, with the stated travel time expected to reduce from approximately 40 minutes to 10 minutes.",
  },
];

const Location = () => {
  return (
    <section
      id="location"
      className="w-full overflow-hidden bg-white"
      aria-labelledby="location-heading"
    >
      
      {/* Nearby Locations */}
      <div className="px-4 py-16 sm:px-8 sm:py-20 lg:px-16">
        <div className="mx-auto max-w-7xl">

          {/* Heading */}
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
            <span
              className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em]"
              style={{ color: "var(--clr-p)" }}
            >
              <FiMapPin />
              Location Advantage
            </span>

            <h2
              id="location-heading"
              className="text-3xl font-semibold leading-tight text-[#20251A] sm:text-4xl lg:text-5xl"
            >
              Everything Closer.
              <span
                className="block mt-1"
                style={{ color: "var(--clr-p)" }}
              >
                Life Made Easier.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#777B70] sm:text-base">
              Experience the convenience of a well-connected address,
              surrounded by educational institutions, healthcare,
              entertainment, shopping and emerging business destinations.
            </p>
          </div>

          {/* Location Cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {locationGroups.map((group, index) => {
              const Icon = group.icon;

              return (
                <article
                  key={group.title}
                  className="group relative overflow-hidden border border-[#E8EBDD] bg-[#FAFBF7] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#6b8d14]/40 hover:shadow-xl sm:p-7"
                >
                  {/* Decorative background */}
                  <div
                    className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-[0.06] transition-transform duration-500 group-hover:scale-150"
                    style={{ backgroundColor: "var(--clr-p)" }}
                  />

                  <div className="relative">
                    <div className="mb-6 flex items-center justify-between">
                      <div
                        className="flex h-12 w-12 items-center justify-center"
                        style={{
                          backgroundColor: "rgba(107,141,20,0.10)",
                          color: "var(--clr-p)",
                        }}
                      >
                        <Icon size={22} />
                      </div>

                      <span className="text-xs font-medium tracking-widest text-[#A2A69A]">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="mb-5 text-lg font-semibold text-[#25291F] sm:text-xl">
                      {group.title}
                    </h3>

                    <div className="space-y-0">
                      {group.places.map(([place, time]) => (
                        <div
                          key={place}
                          className="flex items-start justify-between gap-3 border-t border-[#E7E9E0] py-3.5"
                        >
                          <span className="text-[13px] leading-5 text-[#666B60] sm:text-sm">
                            {place}
                          </span>

                          <span
                            className="flex shrink-0 items-center gap-1.5 whitespace-nowrap text-xs font-semibold sm:text-sm"
                            style={{ color: "var(--clr-p)" }}
                          >
                            <FiClock size={13} />
                            {time}*
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <p className="mt-6 text-center text-[11px] leading-5 text-[#999D93]">
            *Approximate travel times. Actual journey times may vary
            depending on traffic and route conditions.
          </p>
        </div>
      </div>

      {/* NMIA Highlight */}
      <div className="px-4 pb-16 sm:px-8 sm:pb-20 lg:px-16">
        <div
          className="relative mx-auto max-w-7xl overflow-hidden px-6 py-10 sm:px-10 sm:py-14 lg:px-16 lg:py-16"
          style={{
            background:
              "linear-gradient(115deg, var(--clr-p), #425B0B 75%, #34470A)",
          }}
        >
          <div className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-10 -top-20 h-60 w-60 rounded-full border border-white/10" />

          <div className="relative grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div className="max-w-3xl">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
                Global Access. Local Advantage.
              </span>

              <h3 className="mt-4 text-2xl font-semibold leading-tight text-white sm:text-3xl lg:text-4xl">
                Find Global Access, With NMIA Just 16 Minutes Away.*
              </h3>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
                Enjoy convenient access to the world with Navi Mumbai
                International Airport (NMIA), approximately 16 minutes
                away*. Its domestic and international connections further
                strengthen Kharghar's position as an emerging destination
                in Navi Mumbai.
              </p>
            </div>

            <div className="flex h-24 w-24 shrink-0 items-center justify-center border border-white/30 sm:h-32 sm:w-32">
  <img
    src={flightIcon}
    alt="Airplane"
    className="h-14 w-14 object-contain sm:h-20 sm:w-20"
    loading="lazy"
  />
</div>
          </div>

          <div className="relative mt-9 flex items-center gap-3 border-t border-white/20 pt-5 text-xs text-white/70">
            <FiMapPin />
            <span>Navi Mumbai International Airport</span>
          </div>
        </div>
      </div>

      {/* Future Growth */}
      <div className="bg-[#F6F8F1] px-4 py-16 sm:px-8 sm:py-20 lg:px-16">
        <div className="mx-auto max-w-7xl">

          {/* Growth Heading */}
          <div className="mb-12 grid gap-6 md:grid-cols-2 md:items-end">
            <div>
              <span
                className="text-xs font-bold uppercase tracking-[0.25em]"
                style={{ color: "var(--clr-p)" }}
              >
                The Future of Kharghar
              </span>

              <h3 className="mt-4 text-3xl font-semibold leading-tight text-[#20251A] sm:text-4xl lg:text-5xl">
                An Address of Today.
                <span
                  className="block"
                  style={{ color: "var(--clr-p)" }}
                >
                  An Opportunity for Tomorrow.
                </span>
              </h3>
            </div>

            <p className="text-sm leading-7 text-[#777B70] sm:text-base md:pb-1">
              Kharghar is emerging as an important growth destination,
              supported by planned infrastructure, expanding business
              districts and enhanced regional connectivity. Upcoming
              developments are expected to shape the area's future.
            </p>
          </div>

          {/* Growth Highlights */}
          <div className="grid gap-0 border-y border-[#DDE3D2] md:grid-cols-2">
            {growthHighlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className={`group border-b border-[#DDE3D2] p-6 transition-colors duration-300 hover:bg-white sm:p-8 ${
                    index % 2 === 0
                      ? "md:border-r"
                      : ""
                  } ${index === growthHighlights.length - 1 ? "md:col-span-2 md:border-r-0" : ""}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center"
                      style={{
                        backgroundColor: "rgba(107,141,20,0.10)",
                        color: "var(--clr-p)",
                      }}
                    >
                      <Icon size={21} />
                    </div>

                    <span
                      className="text-3xl font-light"
                      style={{ color: "rgba(107,141,20,0.35)" }}
                    >
                      {item.number}
                    </span>
                  </div>

                  <h4 className="mt-6 max-w-xl text-lg font-semibold leading-snug text-[#25291F] sm:text-xl">
                    {item.title}
                  </h4>

                  <p className="mt-3 max-w-2xl text-sm leading-7 text-[#777B70]">
                    {item.description}
                  </p>

                  <div
                    className="mt-5 h-[2px] w-10 transition-all duration-300 group-hover:w-20"
                    style={{ backgroundColor: "var(--clr-p)" }}
                  />
                </article>
              );
            })}
          </div>

          <p className="mt-6 text-[11px] leading-5 text-[#92978A]">
            Infrastructure projects, proposed developments, distances
            and timelines are subject to the respective authorities'
            plans, approvals and updates.
          </p>
        </div>
      </div>
      <Map/>
    </section>
  );
};

export default Location;
