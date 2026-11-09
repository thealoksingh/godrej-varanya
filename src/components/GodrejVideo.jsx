import React, { useState } from "react";
import { FiArrowUpRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const videos = [
  {
    id: "F27A3sK1pbM",
    title: "Experience Elevated Living.",
    subtitle: "Discover Godrej Varanya",
  },
  {
    id: "E3KKfbEvVo8",
    title: "Explore Your Dream Home.",
    subtitle: "Discover More",
  },
];

const GodrejVideo = () => {
  const [activeVideo, setActiveVideo] = useState(0);

  const currentVideo = videos[activeVideo];

  const handlePrevious = () => {
    setActiveVideo((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveVideo((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full bg-white py-14 sm:py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <p
            className="uppercase tracking-[0.3em] text-xs sm:text-sm mb-3 font-semibold"
            style={{ color: "var(--clr-p)" }}
          >
            Discover Godrej Varanya
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#20251A]">
            Experience Elevated Living.
          </h2>

          <p className="text-[#777B70] text-sm sm:text-base mt-4 max-w-2xl mx-auto">
            Explore thoughtfully designed spaces, modern comforts, and a
            lifestyle that brings nature and luxury together at Godrej Varanya.
          </p>
        </div>

        {/* Video Container */}
        <div
          className="relative w-full aspect-video overflow-hidden
          border border-[#6b8d14]/30 bg-[#F5F7EF] group shadow-lg"
        >
          {/* YouTube Video */}
          <iframe
            key={currentVideo.id}
            className="absolute inset-0 w-full h-full pointer-events-none"
            src={`https://www.youtube-nocookie.com/embed/${currentVideo.id}?autoplay=1&mute=1&loop=1&playlist=${currentVideo.id}&controls=0&rel=0&playsinline=1`}
            title="Godrej Varanya Property Video"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />

          {/* Clickable Overlay */}
          <a
            href="https://virtualrealty.org.in/properties"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Explore properties on Virtual Realty"
            className="absolute inset-0 z-10 bg-transparent
            hover:bg-black/[0.03] transition-colors duration-300"
          />

          {/* Bottom CTA */}
          <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
            <div className="bg-gradient-to-t from-black/80 via-black/30 to-transparent px-5 sm:px-8 py-6 sm:py-10">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p
                    className="text-xs uppercase tracking-[0.25em] mb-2 font-semibold"
                    style={{ color: "var(--clr-s)" }}
                  >
                    {currentVideo.subtitle}
                  </p>

                  <h3 className="text-white text-lg sm:text-2xl md:text-3xl font-semibold">
                    {currentVideo.title}
                  </h3>

                  <p className="text-white/80 text-xs sm:text-sm mt-2">
                    Click anywhere to explore our properties.
                  </p>
                </div>

                <div
                  className="shrink-0 w-10 h-10 sm:w-14 sm:h-14 border flex items-center justify-center
                  transition-all duration-300 group-hover:text-white"
                  style={{
                    borderColor: "var(--clr-s)",
                    color: "var(--clr-s)",
                  }}
                >
                  <FiArrowUpRight className="text-xl sm:text-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Navigation */}
        <div className="flex items-center justify-center gap-5 mt-6">
          <button
            onClick={handlePrevious}
            aria-label="Previous video"
            className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center
            border border-[#6b8d14]/40 text-[#6b8d14]
            hover:bg-[#6b8d14] hover:text-white transition-all duration-300"
          >
            <FiChevronLeft className="text-xl" />
          </button>

          <div className="flex items-center gap-2">
            {videos.map((video, index) => (
              <button
                key={video.id}
                onClick={() => setActiveVideo(index)}
                aria-label={`Play video ${index + 1}`}
                aria-current={activeVideo === index ? "true" : undefined}
                className={`h-2 transition-all duration-300 ${
                  activeVideo === index
                    ? "w-8"
                    : "w-2 bg-gray-300"
                }`}
                style={
                  activeVideo === index
                    ? { backgroundColor: "var(--clr-p)" }
                    : {}
                }
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            aria-label="Next video"
            className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center
            border border-[#6b8d14]/40 text-[#6b8d14]
            hover:bg-[#6b8d14] hover:text-white transition-all duration-300"
          >
            <FiChevronRight className="text-xl" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default GodrejVideo;