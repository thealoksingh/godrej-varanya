import React, { useState } from "react";
import { contactConfig } from "../config/credential";
import godrejVaranyaTopSwimmingPool from "../assets/godrej-topSwimmigPool.png";
import Divider from "./Divider";
import { Download, Info, MapIcon, MapPin } from "lucide-react";
import connectivity from "../assets/gifs/Connectivity.gif";
import education from "../assets/gifs/Education.gif";
import healthcare from "../assets/gifs/Healthcare.gif";
import MallShopping from "../assets/gifs/Mall.gif";
import techpark from "../assets/gifs/tech.gif";
import Recreation from "../assets/gifs/Hotel.gif";

const Location = ({ onRequestCallBack }) => {
  const [selectedCategory, setSelectedCategory] = useState("Connectivity");
  const locationData = [
    {
      category: "Connectivity",
      items: [
        "Kharghar Railway Station – 2 Min",
        "Utsav Chowk Metro Station – 2 Min",
        "CBD Belapur – 5 Mins",
        "Navi Mumbai International Airport – 14 Mins",
        "Sion–Panvel Highway (Kharghar) – 2 Min",
        "Mumbai–Pune Expressway (Kalamboli) – 5 Mins",
        "Central Park Kharghar – 5 Mins",
        "Taloja MIDC – 15 Mins",
        "Mumbai–Goa Highway (Palaspe Phata) – 15 Mins",
      ],
      icon: connectivity,
    },
    {
      category: "Education Hub",
      items: [
        "National Institute of Fashion Technology (NIFT) – 2 Mins",
        "AC Patil College of Engineering – 3 Mins",
        "Apeejay School – 5 Mins",
        "Radcliffe School – 5 Mins",
        "Ryan International School – 8 Mins",
        "Bal Bharati Public School – 3 Mins",
        "Institute of Technology & Mgmt (ITM) – 4 Mins",
        "ITM Business School – 5 Mins",
        "YMT College of Management – 2 Mins",
        "DAV International School – 8 Mins",
      ],
      icon: education,
    },
    {
      category: "Healthcare",
      items: [
        "MGM Hospital, Kharghar – 5 Mins",
        "Tata Memorial Hospital, Kharghar – 8 Mins",
        "Apollo Hospital, Navi Mumbai – 15 Mins",
        "Medicover Hospital – 5 Mins",
        "Matushree Gomati Hospital – 8 Mins",
      ],
      icon: healthcare,
    },
    {
      category: "Mall & Shopping",
      items: [
        "Glomax Mall – 4 Mins",
        "Royal Tulip Hotel – 5 Mins",
        "K Star Mall, CBD Belapur – 10 Mins",
        "ISKCON Temple – 5 mins",
        "D-Mart – 10 Mins",
        "Little World Mall – 5 mins",
        "Four Points by Sheraton, Navi Mumbai – 15 Mins",
        "Reliance Smart Superstore – 5 Mins",
        "The Park Hotel, CBD Belapur – 10 Mins",
        "Seawoods Grand Central Mall – 15 Mins",
        "Inorbit Mall, Vashi – 25 Mins",
      ],
      icon: MallShopping,
    },
    {
      category: "Tech Park",
      items: [
        "BKC 2 (Proposed Business Hub) – 2 Mins",
        "Vashi Tech Park – 16 Mins",
        "Belapur Station Complex – 10 Mins",
        "Turbhe MIDC – 22 Mins",
        "Millennium Business Park, Airoli – 30 Mins",
      ],
      icon: techpark,
    },
    {
      category: "Recreation",
      items: [
        "150-Acre Kharghar Golf Course – 2 Mins",
        "Mumbai's Largest Central Park – 2 Mins",
        "DY Patil Stadium – 5 Mins",
      ],
      icon: Recreation,
    },
  ];

  return (
    <section
      id="location"
      className="bg-[#EFEBEB] py-4 px-2 max-w-7xl mx-auto mt-4"
    >
      {/* Header Section */}
      <div className="mb-1">
        <h2 className="text-2xl lg:text-3xl font-semibold text-center text-[var(--clr-p)] mb-3">
          Godrej Varanya Location Advantage
        </h2>

        <Divider />
      </div>

      {/* Map Section */}
      <div className="relative w-full mb-4 h-[350px] lg:h-[500px] mt-8 rounded-2xl overflow-hidden shadow-lg transition-transform hover:scale-[1.01]">
        {/* MAP */}
        <iframe
          title="Godrej Varanya Location"
          src={`https://maps.google.com/maps?q=${contactConfig.propertyLocation.latitude},${contactConfig.propertyLocation.longitude}&z=15&output=embed`}
          className="w-full h-full border-0"
          loading="lazy"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent pointer-events-none"></div>

        {/* Decorative Marker */}
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${contactConfig.propertyLocation.latitude},${contactConfig.propertyLocation.longitude}`}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full z-10"
        >
          <div className="relative flex items-center justify-center cursor-pointer">
            <span className="absolute w-20 h-20 rounded-full bg-[var(--clr-p)]/30 animate-ping"></span>

            <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-[var(--clr-p)] shadow-xl">
              <img
                src={godrejVaranyaTopSwimmingPool}
                alt="Godrej Varanya"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </a>

        {/* Location Card */}
        <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-white/95 backdrop-blur-md rounded-xl shadow-2xl p-4 z-20">
          <p className="font-semibold text-lg">Godrej Varanya</p>

          <p className="text-sm text-gray-600">Kharghar, Navi Mumbai</p>

          <a
            href={`https://www.google.com/maps/search/?api=1&query=${contactConfig.propertyLocation.latitude},${contactConfig.propertyLocation.longitude}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-sm font-semibold text-[var(--clr-p)] hover:underline"
          >
            Get Directions →
          </a>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="">
        <div className="grid grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-2">
          {locationData.map((data) => (
            <div
              key={data.category}
              onClick={() => setSelectedCategory(data.category)}
              className={`p-2 flex lg:flex-row flex-col items-center justify-center gap-2 cursor-pointer
                rounded-sm lg:rounded-xl border-2 transition-all   lg:rounded-bl-none lg:rounded-br-none lg:border-b-0
                ${
                  selectedCategory === data.category
                    ? "animated-gradient text-white"
                    : "bg-gray-100 border-[var(--clr-p)] text-[var(--clr-p)] "
                }`}
            >
              <img
                src={data.icon}
                alt={data.category}
                className={`w-8 h-8 ${
                  selectedCategory === data.category
                    ? "filter brightness-0 invert"
                    : ""
                }`}
              />
              <p className="font-semibold text-sm">{data.category}</p>
            </div>
          ))}
        </div>

        <div className="border-2 bg-gray-100 border-[var(--clr-p)] lg:mt-0 mt-2">
          {locationData
            .filter((data) => data.category === selectedCategory)
            .map((data, index) => (
              <div key={index} className="p-4">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {data.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-3 text-sm"
                    >
                      <MapPin size={18} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
        <div className="flex justify-center p-4">
          <button
            onClick={onRequestCallBack}
            className="animated-gradient flex items-center gap-2  animated-border text-white px-12 py-2.5 rounded-lg text-sm shadow-md hover:opacity-90"
          >
            Request Location Detail
          </button>
        </div>
      </div>
    </section>
  );
};

export default Location;
