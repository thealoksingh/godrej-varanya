
import React from "react";
import priceSheet from "../assets/Prices/one-crest-price-detail-sheet.jpg";
import Divider from "./Divider";

const priceData = [
  {
    type: "2 BHK",
    area: "725 - 775 Sq. Ft.",
    price: "₹ 2.25 Cr* - 2.39 Cr*",
  },
  {
    type: "3 BHK",
    area: "1100 - 1200 Sq. Ft.",
    price: "₹ 3.99 Cr* - 4.39 Cr*",
  },
];

const Price = ({ onRequestCallBack }) => {
  return (
    <section
      id="price"
      aria-labelledby="price-heading"
      className="bg-[#EFEBEB] mb-4 py-4 px-4 lg:px-6 max-w-7xl mx-auto mt-4"
    >
      <h2
        id="price-heading"
        className="lg:text-3xl text-2xl font-semibold text-[var(--clr-p)] text-center mb-4"
      >
        Godrej Varanya - Area & Pricing
      </h2>

      <Divider />

      <div className="flex flex-col lg:flex-row gap-8 items-start mt-4">
        <div className="grow w-full">
          {/* Desktop pricing table */}
          <div className="hidden lg:block border border-[var(--clr-p)] rounded-[32px] overflow-hidden">
            <table className="w-full text-left border-collapse">
              <caption className="sr-only">
                Godrej Varanya 2 BHK and 3 BHK carpet areas and prices
              </caption>

              <thead className="bg-[var(--clr-p)]">
                <tr className="border-b border-[var(--clr-p)] text-white">
                  <th scope="col" className="pl-8 py-3">Type</th>
                  <th scope="col" className="pl-8 py-3">Carpet Area</th>
                  <th scope="col" className="pl-8 py-3">Price</th>
                  <th scope="col" className="pl-8 py-3">Enquiry</th>
                </tr>
              </thead>

              <tbody>
                {priceData.map((item) => (
                  <tr
                    key={item.type}
                    className="border-b border-[var(--clr-p)] last:border-0"
                  >
                    <td className="pl-8 py-3 font-medium text-slate-700">
                      {item.type}
                    </td>

                    <td className="pl-8 py-3 text-slate-600">
                      {item.area}
                    </td>

                    <td className="pl-8 py-3 font-bold text-slate-900">
                      {item.price}
                    </td>

                    <td className="p-4 text-right">
                      <button
                        type="button"
                        onClick={onRequestCallBack}
                        className="animated-gradient animated-border text-white px-10 py-2 rounded-lg text-[16px] font-semibold transition-all active:scale-95 cursor-pointer mb-2"
                      >
                        Complete Costing Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile pricing cards */}
          <div className="lg:hidden border border-[var(--clr-p)] rounded-[28px] border-3 flex flex-col gap-2">
            {priceData.map((item) => (
              <div
                key={item.type}
                className="flex flex-col items-center text-center p-2"
              >
                <h3 className="text-2xl text-slate-800 font-semibold mb-1">
                  {item.type}
                </h3>

                <p className="text-lg text-slate-600 mb-1">
                  {item.area}{" "}
                  <span className="text-sm opacity-80">
                    (Carpet Area)
                  </span>
                </p>

                <p className="text-xl text-slate-900 font-semibold mb-2">
                  {item.price}
                </p>

                <button
                  type="button"
                  onClick={onRequestCallBack}
                  className="animated-gradient animated-border text-white px-10 py-2 rounded-lg text-[16px] font-semibold transition-all active:scale-95 cursor-pointer mb-2"
                >
                  Complete Costing Details
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Price sheet preview */}
        <div className="w-full lg:w-[320px] shrink-0 flex flex-col items-center">
          <div className="border border-orange-300 p-2 bg-white shadow-sm w-full">
            <div className="border border-gray-300 aspect-[3/2.2] relative overflow-hidden backdrop-blur-2xl bg-white group">
              <img
                src={priceSheet}
                alt="Godrej Varanya price details and payment schedule"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover opacity-80"
              />

              <div className="absolute inset-0 flex items-center justify-center bg-black/5 group-hover:bg-transparent transition-colors">
                <span className="sr-only">
                  Price details and payment schedule
                </span>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={onRequestCallBack}
            className="mt-6 w-full animated-gradient text-white px-6 py-4 lg:py-3 rounded-full text-md font-semibold shadow-md hover:bg-[#b07848] transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
          >
            Complete Costing Details
          </button>
        </div>
      </div>
    </section>
  );
};

export default Price;
