import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import kidsPlayArea from "../assets/Amenities/Kids Play Area.webp";
import swimmingpool from "../assets/Amenities/Swimming Pool.webp";
import clubHouse from "../assets/Amenities/Clubhouse.webp";
import gardens from "../assets/Amenities/landcape-garden.webp";
import gymnasium from "../assets/Amenities/Gymnasium.webp";
import security from "../assets/Amenities/security.webp";
import Divider from "./Divider";

const Amenities = () => {
  const amenities = [
    {
      title: "24x7 Security",
      img: security,
      alt: "",
    },
    {
      title: "gymnasium",
      img: gymnasium,
      alt: "",
    },
    {
      title: "landscaped gardens",
      img: gardens,
      alt: "",
    },
    {
      title: "swimming pool",
      img: swimmingpool,
      alt: "",
    },
    {
      title: "KIDS PLAY AREA",
      img: kidsPlayArea,
      alt: "",
    },
    {
      title: "club house ",
      img: clubHouse,
      alt: "",
    },

  ];

  const firstSwiperAmenities = amenities.filter((_, i) => i % 2 === 0);
  const secondSwiperAmenities = amenities.filter((_, i) => i % 2 !== 0);

  return (
    <section id="amenities" className="bg-[#EFEBEB] py-4 px-5 mt-4">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-10">
          <h2 className="lg:text-3xl text-2xl font-semibold text-[var(--clr-p)] text-center mb-4 ">
           Godrej Varanya - Luxurious Amenities
          </h2>
          <Divider />
          </header>

        {/* Mobile View: Horizontal Swiper – Screenshot Style */}
        <div className="lg:hidden mb-8">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            centeredSlides
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Autoplay]}
          >
            {firstSwiperAmenities.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center">
                  <div className="w-full overflow-hidden mb-3">
                    <img
                      src={item.img}
                      alt={item.alt}
                      className="w-full h-57.5 object-cover"
                    />
                  </div>
                <span className="absolute bottom-6 left-2 text-sm font-bold text-white tracking-wider uppercase bg-black/60 px-3 py-1 border border-[var(--clr-p)] border-l-4 border-0">
                    {item.title}
                  </span>
                </div>
              </SwiperSlide>
            ))}
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
            {secondSwiperAmenities.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center">
                  <div className="w-full overflow-hidden mb-3">
                    <img
                      src={item.img}
                      alt={item.alt}
                      className="w-full h-57.5 object-cover"
                    />
                  </div>
                   <span className="absolute bottom-6 left-2 text-sm font-bold text-white tracking-wider uppercase bg-black/60 px-3 py-1 border border-[var(--clr-p)] border-l-4 border-0">
                  {item.title}
                </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop View: Grid Layout */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-4 p-4">
          {amenities.map((item, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="w-full aspect-4/3 overflow-hidden mb-4 shadow-sm relative">
                <img
                  src={item.img}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute bottom-2 left-2 text-sm font-bold text-white tracking-wider uppercase bg-black/60 px-3 py-1 border border-[var(--clr-p)] border-l-4 border-0">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
