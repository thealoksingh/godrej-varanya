
import React, { useState, useEffect, useRef } from "react";
import Divider from "./Divider";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import galleryImage1 from "../assets/Gallery/Gallery 1.webp";
import galleryImage2 from "../assets/Gallery/Gallery 2.webp";
import galleryImage3 from "../assets/Gallery/Gallery 3.webp";
import galleryImage4 from "../assets/Gallery/Gallery 4.webp";
import galleryImage5 from "../assets/Gallery/Gallery 5.webp";
import galleryImage6 from "../assets/Gallery/Gallery 6.webp";

const galleryImages = [
  {
    id: 1,
    title: "Artistic Impression",
    src: galleryImage1,
    alt: "Godrej Varanya residential building artistic impression",
  },
  {
    id: 2,
    title: "Artistic Impression",
    src: galleryImage2,
    alt: "Godrej Varanya apartment hall interior",
  },
  {
    id: 3,
    title: "Artistic Impression",
    src: galleryImage3,
    alt: "Godrej Varanya premium master bedroom interior",
  },
  {
    id: 4,
    title: "Artistic Impression",
    src: galleryImage4,
    alt: "Godrej Varanya apartment living room interior",
  },
  {
    id: 5,
    title: "Artistic Impression",
    src: galleryImage5,
    alt: "Godrej Varanya luxury bedroom interior",
  },
  {
    id: 6,
    title: "Artistic Impression",
    src: galleryImage6,
    alt: "Godrej Varanya modern living hall interior",
  },
];

const images = [
  galleryImages[galleryImages.length - 1],
  ...galleryImages,
  ...galleryImages,
  ...galleryImages,
  galleryImages[0],
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const sliderRef = useRef(null);
  const touchTimerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (currentIndex === images.length - 1 || currentIndex === 0) {
      touchTimerRef.current = setTimeout(() => {
        setTransitionEnabled(false);
        setCurrentIndex(
          currentIndex === images.length - 1 ? 1 : images.length - 2
        );
      }, 500);
    }

    return () => clearTimeout(touchTimerRef.current);
  }, [currentIndex]);

  useEffect(() => {
    if (!transitionEnabled) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setTransitionEnabled(true));
      });
    }
  }, [transitionEnabled]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => prev + 1);
  const prevSlide = () => setCurrentIndex((prev) => prev - 1);

  const handleImageOpen = (img) => setSelectedImage(img);
  const handleImageClose = () => setSelectedImage(null);

  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") handleImageClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  return (
    <section
      id="gallery"
      className="py-8 bg-white mt-4"
      aria-labelledby="gallery-heading"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2
          id="gallery-heading"
          className="text-2xl lg:text-3xl font-semibold text-center text-[var(--clr-p)] mb-3"
        >
          Godrej Varanya – Project Gallery
        </h2>

        <Divider />

        <div className="relative mt-6 overflow-hidden">
          <div
            ref={sliderRef}
            className="flex"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              transition: transitionEnabled
                ? "transform 0.5s ease-in-out"
                : "none",
            }}
          >
            {images.map((img, i) => (
              <div
                key={`${img.id}-${i}`}
                className="px-2 flex-shrink-0"
                style={{ width: `${100 / itemsPerView}%` }}
              >
                <button
                  type="button"
                  onClick={() => handleImageOpen(img)}
                  aria-label={`View larger image: ${img.alt}`}
                  className="relative block w-full cursor-pointer shadow-md hover:shadow-xl transition"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-52 object-cover hover:scale-105 transition-transform duration-500"
                  />

                  <span className="absolute bottom-2 right-0 bg-black/70 text-white text-xs px-2 py-1 rounded-l-full">
                    {img.title}
                  </span>
                </button>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous gallery image"
            className="md:hidden absolute left-2 top-1/2 -translate-y-1/2 bg-white w-9 h-9 rounded-full shadow flex items-center justify-center"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next gallery image"
            className="md:hidden absolute right-2 top-1/2 -translate-y-1/2 bg-white w-9 h-9 rounded-full shadow flex items-center justify-center"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="hidden md:flex w-full p-4 items-center justify-center gap-10">
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous gallery image"
            className="bg-gray-200 w-12 h-12 rounded-full shadow hover:shadow-lg transition-shadow flex items-center justify-center"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next gallery image"
            className="bg-gray-200 w-12 h-12 rounded-full shadow hover:shadow-lg transition-shadow flex items-center justify-center"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4"
            onClick={handleImageClose}
            role="dialog"
            aria-modal="true"
            aria-label="Gallery image preview"
          >
            <div
              className="relative max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={handleImageClose}
                aria-label="Close image preview"
                className="absolute -top-10 right-0 text-white"
              >
                <X size={32} />
              </button>

              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-h-[90vh] max-w-full object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
