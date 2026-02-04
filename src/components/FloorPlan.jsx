import React from "react";
import oneCrestMasterPlan from "../assets/plans/one-crest-master-plan.webp";
import oneCrestUnitPlan from "../assets/plans/one-crest-unit-floor-plan.webp";
import Divider from "./Divider";

const FloorPlan = ({ onRequestCallBack }) => {
  const plans = [
    {
       buttonText: "Request Master Plan Layout",
      title: "Master Plan Layout",
      img: oneCrestMasterPlan,
      alt: "One Crest master plan layout - Satyam Metro Developers Kharghar project site plan",
    },
    {
      buttonText: "Request Unit Plan Layout",
      title: "View Unit Plan",
      img: oneCrestUnitPlan,
      alt: "One Crest unit floor plan - 2 3 4 BHK apartment layouts Godrej Varanya",
    },
  ];

  return (
    <section id="floorplan" className="bg-white py-4 px-6 max-w-7xl mx-auto">
      {/* Page Title */}
      <h2 className="lg:text-3xl text-2xl font-semibold text-[var(--clr-p)] text-center mb-4 ">
        Godrej Varanya - Floor Plan
      </h2>
      <Divider />

      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 mt-4">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="w-full max-w-md border border-[var(--clr-p)] p-4 bg-white shadow-sm flex flex-col items-center"
          >
            {/* Image Container with Overlay */}
             <p className="text-center font-semibold text-[var(--clr-p)] text-xl mb-2">
              {plan.title}
            </p>
             <Divider />
            <div className="relative w-full aspect-4/3 overflow-hidden group cursor-pointer mt-2">
           
              <img
                src={plan.img}
                alt={plan.alt}
                className="w-full h-full object-cover"
              />
              {/* Dark Overlay with Text */}
              <div className="absolute inset-x-0 top-0 h-0 bg-black/40 flex items-center justify-center transition-all duration-500 ease-in-out group-hover:h-full origin-top">
                <button
                  onClick={onRequestCallBack}
                 className="mt-6 animated-gradient animated-border text-white px-10 py-2.5 rounded-full text-sm font-medium shadow-md hover:opacity-90 transition-opacity hover:cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200"
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>

           
          </div>
        ))}
      </div>
    </section>
  );
};

export default FloorPlan;
