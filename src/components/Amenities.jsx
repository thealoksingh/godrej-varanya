
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import kidsPlayArea from "../assets/Amenities/kids-garden.jpg";
import swimmingpool from "../assets/Amenities/warm-swimming-pool.jpg";
import clubHouse from "../assets/Amenities/Clubhouse.jpg";
import gardens from "../assets/Amenities/landcape-garden.jpg";
import gymnasium from "../assets/Amenities/Gymnasium.jpg";
import security from "../assets/Amenities/security.png";
import multiPurposeArea from "../assets/Amenities/multiPurposeArea.jpg";
import spa from "../assets/Amenities/spa.jpg";
import Divider from "./Divider";

const amenities = [
  {
    id: "swimming-pool",
    title: "Temp Control Swimming Pool",
    img: swimmingpool,
    alt: "Swimming pool amenity at Godrej Varanya",
  },
  {
    id: "security",
    title: "24x7 Security",
    img: security,
    alt: "Security facilities at Godrej Varanya residential project",
  },
  {
    id: "gymnasium",
    title: "Gymnasium",
    img: gymnasium,
    alt: "Gymnasium and fitness facilities at Godrej Varanya",
  },
  {
    id: "gardens",
    title: "Tropical Garden",
    img: gardens,
    alt: "Landscaped green gardens at Godrej Varanya Kharghar",
  },
  {
    id: "kids-play-area",
    title: "Kids Play Area",
    img: kidsPlayArea,
    alt: "Dedicated children's play area at Godrej Varanya",
  },
  {
    id: "clubhouse",
    title: "Clubhouse",
    img: clubHouse,
    alt: "Clubhouse facilities at Godrej Varanya Kharghar",
  },
   {
    id: "spa",
    title: "SPA & Wellness Center",
    img: spa,
    alt: "Spa and Wellness Care In Society at Godrej Varanya",
  },
  {
    id: "multipurpose-court",
    title: "multipurpose court",
    img: multiPurposeArea,
    alt: "Multipurpose court for sports and activities at Godrej Varanya",
  },
];

const firstSwiperAmenities = amenities.filter((_, i) => i % 2 === 0);
const secondSwiperAmenities = amenities.filter((_, i) => i % 2 !== 0);

const Amenities = () => {
  const renderAmenitySlide = (item) => (
    <SwiperSlide key={item.id}>
      <div className="relative flex flex-col items-center">
        <div className="w-full overflow-hidden mb-3">
          <img
            src={item.img}
            alt={item.alt}
            loading="lazy"
            decoding="async"
            className="w-full h-57.5 object-cover"
          />
        </div>

        <h3 className="absolute bottom-6 left-2 text-sm font-bold text-white tracking-wider uppercase bg-black/60 px-3 py-1 border border-[var(--clr-p)] border-l-4 border-0">
          {item.title}
        </h3>
      </div>
    </SwiperSlide>
  );

  return (
    <section
      id="amenities"
      aria-labelledby="amenities-heading"
      className="bg-[#EFEBEB] py-4 px-5 mt-4"
    >
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-10">
          <h2
            id="amenities-heading"
            className="lg:text-3xl text-2xl font-semibold text-[var(--clr-p)] mb-4"
          >
            Godrej Varanya - Luxurious Amenities
          </h2>

          <Divider />
        </header>

        {/* Mobile View */}
        <div className="lg:hidden mb-8">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            centeredSlides
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Autoplay]}
          >
            {firstSwiperAmenities.map(renderAmenitySlide)}
          </Swiper>
        </div>

        <div className="lg:hidden">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            centeredSlides
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Autoplay]}
          >
            {secondSwiperAmenities.map(renderAmenitySlide)}
          </Swiper>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-4 p-4">
          {amenities.map((item) => (
            <article
              key={item.id}
              className="flex flex-col items-center group"
            >
              <div className="w-full aspect-[4/3] overflow-hidden mb-4 shadow-sm relative">
                <img
                  src={item.img}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <h3 className="absolute bottom-2 left-2 text-sm font-bold text-white tracking-wider uppercase bg-black/60 px-3 py-1 border border-[var(--clr-p)] border-l-4 border-0">
                  {item.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
