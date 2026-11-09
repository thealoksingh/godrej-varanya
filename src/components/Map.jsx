
import React from "react";
import { contactConfig } from "../config/credential";
import godrejVaranyaTopSwimmingPool from "../assets/godrej-topSwimmigPool.jpg";

const Map = () => {
  const latitude = contactConfig.propertyLocation.latitude;
  const longitude = contactConfig.propertyLocation.longitude;

  const mapUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;

  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;

  return (
    <div className="relative w-full mb-4 h-[350px] lg:h-[500px] mt-8 rounded-sm p-4 overflow-hidden ">
      <iframe
        title="Map showing Godrej Varanya location in Kharghar, Navi Mumbai"
        src={mapUrl}
        className="w-full h-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      {/* Map Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent pointer-events-none" />

      {/* Property Marker */}
      <a
        href={directionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open Godrej Varanya location on Google Maps"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full z-10"
      >
        <div className="relative flex items-center justify-center">
          <span className="absolute w-20 h-20 rounded-full bg-[var(--clr-p)]/30 animate-ping" />

          <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-[var(--clr-p)] shadow-xl">
            <img
              src={godrejVaranyaTopSwimmingPool}
              alt="Swimming pool at Godrej Varanya"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </a>

      {/* Property Information */}
      <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-white/95 backdrop-blur-md rounded-xl shadow-2xl p-4 z-20">
        <p className="font-semibold text-lg">Godrej Varanya</p>

        <p className="text-sm text-gray-600">
          Kharghar, Navi Mumbai
        </p>

        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 text-sm font-semibold text-[var(--clr-p)] hover:underline"
        >
          Get Directions →
        </a>
      </div>
    </div>
  );
};

export default Map;
