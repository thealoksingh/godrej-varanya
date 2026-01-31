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
    alt: "flat Gallery",
  },
  {
    id: 2,
    title: "Artistic Impression",
    src: galleryImage2,
    alt: "hall area",
  },
  {
    id: 3,
    title: "Artistic Impression",
    src: galleryImage3,
    alt: "Premium Master bedroom",
  },
  {
    id: 4,
    title: "Artistic Impression",
    src: galleryImage4,
    alt: "sofa area",
  },
  {
    id: 5,
    title: "Artistic Impression",
    src: galleryImage5,
    alt: "Luxury interior bedroom",
  },
  {
    id: 6,
    title: "Artistic Impression",
    src: galleryImage6,
    alt: "Modern living hall area",
  },
];

// Clone for infinite loop
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
  const sliderRef = useRef(null);

  // Responsive items
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

  // Infinite loop correction
  useEffect(() => {
    if (!sliderRef.current) return;

    if (currentIndex === images.length - 1) {
      setTimeout(() => {
        sliderRef.current.style.transition = "none";
        setCurrentIndex(1);
      }, 500);
    }

    if (currentIndex === 0) {
      setTimeout(() => {
        sliderRef.current.style.transition = "none";
        setCurrentIndex(images.length - 2);
      }, 500);
    }
  }, [currentIndex]);

  // Restore transition
  useEffect(() => {
    if (!sliderRef.current) return;
    sliderRef.current.style.transition = "transform 0.5s ease-in-out";
  }, [currentIndex]);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => prev + 1);
  const prevSlide = () => setCurrentIndex((prev) => prev - 1);

  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl lg:text-3xl font-semibold text-center text-[var(--clr-p)] mb-3">
          Godrej Varanya – Project Gallery
        </h2>

        <Divider />

        {/* Slider */}
        <div className="relative mt-6 overflow-hidden">
          <div
            ref={sliderRef}
            className="flex"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            }}
          >
            {images.map((img, i) => (
              <div
                key={i}
                className={`px-2 flex-shrink-0 w-full ${
                  itemsPerView === 2 ? "md:w-1/2" : ""
                } ${itemsPerView === 3 ? "lg:w-1/3" : ""}`}
              >
                <div
                  onClick={() => setSelectedImage(img)}
                  className="relative cursor-pointer  shadow-md hover:shadow-xl transition"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-52 object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute bottom-2 right-0 bg-black/70 text-white text-xs px-2 py-1 rounded-l-full">
                    {img.title}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Arrows - Overlay */}
          <button
            onClick={prevSlide}
            className="md:hidden absolute left-2 top-1/2 -translate-y-1/2 bg-white w-9 h-9 rounded-full shadow flex items-center justify-center"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={nextSlide}
            className="md:hidden absolute right-2 top-1/2 -translate-y-1/2 bg-white w-9 h-9 rounded-full shadow flex items-center justify-center"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Desktop Arrows - Below Slider */}
        <div className="hidden md:flex w-full p-4 items-center justify-center gap-10">
          <button
            onClick={prevSlide}
            className="bg-gray-200 w-12 h-12 rounded-full 
               shadow-[0_8px_20px_rgba(0,0,0,0.45)]
               hover:shadow-[0_10px_26px_rgba(0,0,0,0.55)]
               transition-shadow
               flex items-center justify-center"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={nextSlide}
            className="bg-gray-200 w-12 h-12 rounded-full 
               shadow-[0_8px_20px_rgba(0,0,0,0.45)]
               hover:shadow-[0_10px_26px_rgba(0,0,0,0.55)]
               transition-shadow
               flex items-center justify-center"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 z-100 flex items-center justify-center p-10">
            <div className="relative max-w-4xl">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-10 -right-10 text-white mt-2"
              >
                <X size={32} />
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-h-[90vh] object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
