
import React, { useState } from "react";
import {
  FiArrowUpRight,
  FiChevronLeft,
  FiChevronRight,
  FiPlay,
} from "react-icons/fi";

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
  const [isPlaying, setIsPlaying] = useState(false);

  const currentVideo = videos[activeVideo];

  const handlePrevious = () => {
    setActiveVideo((prev) =>
      prev === 0 ? videos.length - 1 : prev - 1
    );
    setIsPlaying(false);
  };

  const handleNext = () => {
    setActiveVideo((prev) =>
      prev === videos.length - 1 ? 0 : prev + 1
    );
    setIsPlaying(false);
  };

  const handleVideoSelect = (index) => {
    setActiveVideo(index);
    setIsPlaying(false);
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
          {isPlaying ? (
            <iframe
              key={currentVideo.id}
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube-nocookie.com/embed/${currentVideo.id}?autoplay=1&mute=1&loop=1&playlist=${currentVideo.id}&controls=1&rel=0&playsinline=1`}
              title={currentVideo.title}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <>
              {/* Lightweight YouTube Thumbnail */}
              <img
                src={`https://i.ytimg.com/vi/${currentVideo.id}/hqdefault.jpg`}
                alt={`${currentVideo.title} video thumbnail`}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />

              {/* Thumbnail Overlay */}
              <div className="absolute inset-0 bg-black/20" />

              {/* Play Button */}
              <button
                type="button"
                onClick={() => setIsPlaying(true)}
                aria-label={`Play ${currentVideo.title}`}
                className="absolute inset-0 z-10 flex items-center justify-center"
              >
                <span
                  className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center
                  bg-white/90 text-[#6b8d14] rounded-full
                  shadow-xl transition-transform duration-300
                  hover:scale-110"
                >
                  <FiPlay className="text-3xl ml-1" />
                </span>
              </button>
            </>
          )}

          {/* Bottom CTA */}
          {!isPlaying && (
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
                      Explore our premium property collection.
                    </p>
                  </div>

                  <div
                    className="shrink-0 w-10 h-10 sm:w-14 sm:h-14 border flex items-center justify-center"
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
          )}
        </div>

        {/* Video Navigation */}
        <div className="flex items-center justify-center gap-5 mt-6">

          <button
            type="button"
            onClick={handlePrevious}
            aria-label="Previous video"
            className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center
            border border-[#6b8d14]/40 text-[#6b8d14]
            hover:bg-[#6b8d14] hover:text-white transition-all duration-300"
          >
            <FiChevronLeft className="text-xl" />
          </button>

          {/* Video Pagination */}
          <div className="flex items-center gap-2">
            {videos.map((video, index) => (
              <button
                key={video.id}
                type="button"
                onClick={() => handleVideoSelect(index)}
                aria-label={`Select video ${index + 1}`}
                aria-current={activeVideo === index ? "true" : undefined}
                className={`h-2 transition-all duration-300 ${
                  activeVideo === index ? "w-8" : "w-2 bg-gray-300"
                }`}
                style={
                  activeVideo === index
                    ? { backgroundColor: "var(--clr-p)" }
                    : {}
                }
              />
            ))}
          </div>

          {/* Explore Properties */}
          <a
            href="https://virtualrealty.org.in/properties"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Explore Virtual Realty properties"
            className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center
            border border-[#6b8d14]/40 text-[#6b8d14]
            hover:bg-[#6b8d14] hover:text-white transition-all duration-300"
          >
            <FiChevronRight className="text-xl" />
          </a>

        </div>
      </div>
    </section>
  );
};

export default GodrejVideo;
