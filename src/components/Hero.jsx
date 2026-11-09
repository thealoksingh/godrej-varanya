
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import godrejBanner from "../assets/godrej-homeBanner.png";
import godrejOutsideView from "../assets/godrej-outsideView.png";
import godrejVaranyaTopSwimmingPool from "../assets/godrej-topSwimmigPool.png";
import buildingImage from "../assets/building-image.png";

import "swiper/css";
import "swiper/css/pagination";

const images = [
  {
    src: buildingImage,
    alt: "Godrej Varanya residential building exterior in Kharghar, Navi Mumbai",
  },
  {
    src: godrejBanner,
    alt: "Godrej Varanya luxury residential apartments exterior view",
  },
  {
    src: godrejOutsideView,
    alt: "Godrej Varanya residential tower facade and architecture",
  },
  {
    src: godrejVaranyaTopSwimmingPool,
    alt: "Godrej Varanya swimming pool and residential tower view",
  },
];

const Hero = ({ onRequestCallBack }) => {
  return (
    <div id="hero" className="font-sans text-gray-800">
      <div className="relative w-full flex flex-col lg:block">

        {/* Hero Image Slider */}
        <div className="relative md:h-[50vh] h-[25vh] lg:h-[85vh] sm:h-[25vh] w-full overflow-hidden">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            pagination={{ clickable: true }}
            className="h-full w-full hero-swiper"
            aria-label="Godrej Varanya project image gallery"
          >
            {images.map((image, index) => (
              <SwiperSlide key={image.src}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover object-center"
                  loading={index === 0 ? "eager" : "lazy"}
                  fetchPriority={index === 0 ? "high" : "auto"}
                  decoding="async"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Project Information Card */}
        <div
          className="
            bg-white shadow-2xl rounded-2xl
            max-w-4xl mx-auto
            w-[90%] mt-4 mb-4
            lg:absolute lg:top-6 lg:left-6
            lg:mt-0 lg:max-w-sm lg:z-10
            overflow-hidden
          "
        >
          <div className="text-center space-y-2 flex flex-col items-center">

            <div className="animated-gradient text-white w-full shadow-lg">
              <div className="flex flex-col gap-2 border-dashed border-yellow-300 p-2 text-left">
                <p className="text-center justify-center font-bold">
                  Booking Open
                </p>
              </div>
            </div>

            <h1 className="text-xl lg:text-xl font-bold text-slate-900 leading-tight">
              Godrej Varanya Kharghar
            </h1>

            <div className="text-sm text-gray-600">
              <p className="font-bold">By Godrej Properties</p>
              <p>At Sector 5A, Kharghar-Belpada, Navi Mumbai</p>
            </div>

            <div className="animated-gradient-secondary text-white w-full shadow-lg">
              <div className="flex flex-col gap-2 border-b-3 border-t-3 border-dashed border-yellow-300 p-2 text-left">
                <p className="text-center justify-center">
                  ◆ EOI Benefits Upto ₹40 Lacs*
                </p>
              </div>
            </div>

            {/* Project Offers */}
            <div className="animated-gradient text-white w-full shadow-lg">
              <div className="flex flex-col gap-2 border-b-3 border-t-3 border-dashed border-yellow-300 p-2 text-left">
                <p className="text-center justify-center border-b border-yellow-200 pb-2">
                  ◆ EOI Starts ₹2.25 Lacs*
                </p>

                <p className="text-center justify-center border-b border-yellow-200 pb-2">
                  ◆ 16 Mins* Navi Mumbai Int'l Airport
                </p>

                <p className="text-center justify-center">
                  ◆ 2 Mins* Metro & Rly Stn. Sion Panvel Hwy
                </p>
              </div>
            </div>

            <p className="text-gray-600 font-medium">
              Luxury 2 & 3 BHK Apartments Starting
            </p>

            <p className="text-xl lg:text-2xl font-bold text-[var(--clr-p)]">
              ₹2.25 Cr* Onwards
            </p>

            <button
              type="button"
              onClick={onRequestCallBack}
              className="animated-gradient animated-border mb-4 text-white py-2 px-12 rounded-md font-semibold transition-colors flex items-center gap-2 hover:cursor-pointer"
            >
              Enquire Now
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
