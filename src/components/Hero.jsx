
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import godrejBanner from "../assets/godrej-homeBanner.jpg";
import godrejOutsideView from "../assets/godrej-outsideView.png";
import godrejVaranyaTopSwimmingPool from "../assets/godrej-topSwimmigPool.jpg";
import buildingImage from "../assets/building-image.jpg";
import swimmingpool from "../assets/warm-swimming-pool.jpg";
import godrejGarden from "../assets/godrej-garden.jpg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const images = [
  {
    src: godrejBanner,
    alt: "Godrej Varanya luxury residential apartments exterior view",
  },
  {
    src: buildingImage,
    alt: "Godrej Varanya residential building exterior in Kharghar, Navi Mumbai",
  },
  // {
  //   src: godrejOutsideView,
  //   alt: "Godrej Varanya residential tower architecture",
  // },
  {
    src: godrejVaranyaTopSwimmingPool,
    alt: "Godrej Varanya swimming pool, residential tower Outside view",
  },{
    src: godrejGarden,
    alt: "Godrej Varanya Garden view",
  },{
    src: swimmingpool,
    alt: "Godrej Varanya Temprature Control swimming pool",
  },
];

const Hero = ({ onRequestCallBack }) => {
  return (
    <section
      id="hero"
      className="font-sans text-gray-800"
      aria-labelledby="hero-heading"
    >
      <div className="relative w-full flex flex-col lg:block">
        {/* Hero Image Slider */}
        <div className="relative h-[25vh] md:h-[50vh] lg:h-[85vh] w-full overflow-hidden group">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            pagination={{ clickable: true }}
            navigation={{
              prevEl: ".hero-prev",
              nextEl: ".hero-next",
            }}
            className="h-full w-full hero-swiper"
            role="region"
            aria-roledescription="carousel"
            aria-label="Godrej Varanya project images"
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

          {/* Previous Button */}
          <button
            type="button"
            className="hero-prev absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20
              flex items-center justify-center w-9 h-9 sm:w-12 sm:h-12
              rounded-full bg-white/80 text-[var(--clr-p)] shadow-lg
              backdrop-blur-sm hover:bg-white hover:scale-110 transition-all"
            aria-label="Previous image"
          >
            <ChevronLeft size={26} />
          </button>

          {/* Next Button */}
          <button
            type="button"
            className="hero-next absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20
              flex items-center justify-center w-9 h-9 sm:w-12 sm:h-12
              rounded-full bg-white/80 text-[var(--clr-p)] shadow-lg
              backdrop-blur-sm hover:bg-white hover:scale-110 transition-all"
            aria-label="Next image"
          >
            <ChevronRight size={26} />
          </button>
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
                <p className="text-center font-bold">Booking Open</p>
              </div>
            </div>

            <h1
              id="hero-heading"
              className="text-xl lg:text-xl font-bold text-slate-900 leading-tight"
            >
              Godrej Varanya Kharghar
            </h1>

            <div className="text-sm text-gray-600">
              <p className="font-bold">By Godrej Properties</p>
              <p>At Sector 5A, Kharghar-Belpada, Navi Mumbai</p>
            </div>

            <div className="animated-gradient-secondary text-white w-full shadow-lg">
              <div className="flex flex-col gap-2 border-b-3 border-t-3 border-dashed border-yellow-300 p-2 text-left">
                <p className="text-center">◆ The Luxury You Deserve</p>
              </div>
            </div>

            {/* Project Offers */}
            <div className="animated-gradient text-white w-full shadow-lg">
              <div className="flex flex-col gap-2 border-b-3 border-t-3 border-dashed border-yellow-300 p-3">
                <p className="text-center border-b border-yellow-200 pb-2 font-semibold">
                  ◆ 2 BHK Apartments – ₹2.30 Cr* Onwards
                </p>

                <p className="text-center font-semibold">
                  ◆ 3 BHK Apartments – ₹3.67 Cr* Onwards
                </p>
              </div>
            </div>

            <p className="text-lg lg:text-xl font-bold text-[var(--clr-p)]">
              Contact for Best Quotation
            </p>

            <p className="text-gray-600 font-medium">
              Luxury 2 &amp; 3 BHK Apartments Starting
            </p>

            <p className="text-xl lg:text-2xl font-bold text-[var(--clr-p)]">
              ₹2.3 Cr* Onwards
            </p>

            <button
              type="button"
              onClick={onRequestCallBack}
              className="animated-gradient animated-border mb-4 text-white py-2 px-12 rounded-md font-semibold transition-colors hover:cursor-pointer"
              aria-label="Enquire about Godrej Varanya apartments"
            >
              Enquire Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
