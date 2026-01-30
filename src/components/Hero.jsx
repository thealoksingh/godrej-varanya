import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import godrejBanner from "../assets/godrej-homeBanner.png";
import godrejOutsideView from "../assets/godrej-outsideView.png";
import godrejVaranyaTopSwimmingPool from "../assets/godrej-topSwimmigPool.png";

import "swiper/css";
import "swiper/css/pagination";

const Hero = ({ onRequestCallBack }) => {
  const images = [
    {
      src: godrejBanner,
      alt: "One Crest luxury apartments exterior view - Satyam Metro Developers Kharghar",
    },
    {
      src: godrejOutsideView,
      alt: "One Crest building facade and architecture - Premium residential project Sector 20 Kharghar",
    },
    {
      src: godrejVaranyaTopSwimmingPool,
      alt: "One Crest tower elevation - Satyam Metro luxury development Navi Mumbai",
    },
  ];

  return (
    <div id="hero" className="font-sans text-gray-800">
      {/* Wrapper */}
      <div className="relative w-full flex flex-col lg:block">
        {/* Image Section */}
        <div className="relative md:h-[50vh] h-[25vh] lg:h-[85vh] sm:h-[25vh]  w-full overflow-hidden">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            pagination={{ clickable: true }}
            className="h-full w-full hero-swiper"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div
                  className="h-full w-full bg-cover bg-center scale-100"
                  style={{ backgroundImage: `url('${image.src}')` }}
                  role="img"
                  aria-label={image.alt}
                >
                    </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Info Card */}
        <div
          className="
        bg-white shadow-2xl rounded-2xl 
        max-w-4xl
        mx-auto
        w-[90%] mx-auto mt-4
        lg:absolute lg:top-6 lg:left-6 lg:mt-0 lg:max-w-sm lg:z-10 overflow-hidden
      "
        >
          <div className="text-center space-y-2 flex flex-col items-center">
            <div className="animated-gradient text-white w-full shadow-lg">
              <div className="flex flex-col gap-2 border-dashed border-yellow-300 p-2 text-left">
                <p className="flex gap-2 text-center justify-center font-bold ">
                  Booking Open
                </p>
              </div>
            </div>

            <h1 className="text-xl lg:text-xl font-bold text-slate-900 leading-tight">
             GODREJ VARANYA
            </h1>

            <div className="text-sm text-gray-600">
              <p className="font-bold">By Satyam Godrej Properties</p>
              <p>At Sector 5A, Kharghar-Belpada, Navi Mumbai</p>
            </div>
            <div className="animated-gradient-secondary text-white w-full shadow-lg">
              <div className="flex flex-col gap-2 border-b-3 border-t-3 border-dashed border-yellow-300 p-2 text-left">
                <p className="flex gap-2 text-center justify-center ">
                  ◆ EOI Benefits Upto ₹40 Lacs*
                </p>
              </div>
            </div>
            {/* Offer Box */}
            <div className="animated-gradient text-white w-full shadow-lg">
              <div className="flex flex-col gap-2 border-b-3 border-t-3  border-dashed border-yellow-300 p-2 text-left">
                <p className="flex gap-2 text-center justify-center border-b border-yellow-200 pb-2">
                  ◆ EOI Starts ₹ 2.25 Lacs*
                </p>
                <p className="flex gap-2 text-center justify-center border-b border-yellow-200 pb-2">
                  ◆ 16 Mins* Navi Mumbai Int'l Airport
                </p>
                <p className="flex gap-2 text-center justify-center">
                  ◆ 2 Mins* Metro & Rly Stn. Sion Panvel Hwy
                </p>
              </div>
            </div>

            <p className="text-gray-600 font-medium">Luxury 2 & 3 BHK Starts</p>

            <div className="text-xl lg:text-2xl font-bold text-[var(--clr-p)]">
              ₹ 2.25 Cr* Onwards
            </div>

            <button
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
