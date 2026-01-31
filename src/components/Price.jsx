import React, { useEffect } from "react";
import oneCrestPriceSheet from "../assets/Prices/one-crest-price-detail-sheet.jpg";
import { createProductSchema, pushSchemaToGTM } from "../utils/schemaUtils";
import Divider from "./Divider";

const Price = ({ onOfferPriceClick }) => {
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

  useEffect(() => {
    // Push product schema to GTM dataLayer
    const productSchema = createProductSchema(priceData);
    pushSchemaToGTM(productSchema, "price_page_view");
  }, []);

  return (
    <section
      id="price"
      className="bg-white py-4 px-4 lg:px-6 max-w-7xl mx-auto mt-4"
    >
      {/* Page Title */}
       <h2 className="lg:text-3xl text-2xl font-semibold text-[var(--clr-p)] text-center mb-4 ">
        Godrej Varanya - Area & Pricing
      </h2>
      <Divider />
   

      <div className="flex flex-col lg:flex-row gap-8 items-start mt-4">
        {/* --- PRICING SECTION --- */}
        <div className="grow w-full">
          {/* Desktop Table: Hidden on Mobile, Visible on LG+ */}
          <div className="hidden lg:block border border-[var(--clr-p)] rounded-[32px] overflow-hidden">
            <table className="w-full text-left border-collapse ">
              <thead className="bg-[var(--clr-p)]">
                <tr className="border-b  border-[var(--clr-p)] text-white ">
                  <th className="pl-8 py-3 ">Type</th>
                  <th className="pl-8 py-3  ">Carpet Area</th>
                  <th className="pl-8  py-3 ">Price</th>
                  <th className="pl-8 py-3 "></th>
                </tr>
              </thead>
              <tbody>
                {priceData.map((item, index) => (
                  <tr
                    key={index}
                    className={`border-b border-[var(--clr-p)] last:border-0 ${
                      index % 2 === 1 ? "bg-slate-50/50" : ""
                    }`}
                  >
                    <td className="pl-8 py-3 font-medium text-slate-700">
                      {item.type}
                    </td>
                    <td className="pl-8 py-3 text-slate-600">{item.area}</td>
                    <td className="pl-8 py-3 font-bold text-slate-900">
                      {item.price}
                    </td>
                    <td className="p-4 text-right">
                      <button
                        onClick={() => onOfferPriceClick("price-breakup")}
                        className="animated-gradient animated-border text-white px-10 py-2 rounded-lg text-[16px] font-semibold text-xl transition-all active:scale-95 cursor-pointer mb-2"
                      >
                        Complete Costing Detail
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards: Visible on Mobile, Hidden on LG+ */}
          <div className="lg:hidden border border-[var(--clr-p)] rounded-[28px] border-3 flex flex-col gap-2">
            {priceData.map((item, index) => (
              <div
                key={index}
                className={` flex flex-col items-center text-center p-2`}
              >
                {/* BHK Type */}
                <h3 className="text-2xl  text-slate-800 font-semibold mb-1">
                  {item.type}
                </h3>

                {/* Area */}
                <p className="text-lg text-slate-600 mb-1">
                  {item.area}{" "}
                  <span className="text-sm opacity-80">(Carpet Area)</span>
                </p>

                {/* Price */}
                <p className="text-xl  text-slate-900 font-semibold mb-2">
                  {item.price}
                </p>

                {/* Button */}
                <button
                  onClick={() => onOfferPriceClick("price-breakup")}
                  className="animated-gradient animated-border text-white px-10 py-2 rounded-lg text-[16px]  font-semibold text-xl transition-all active:scale-95 cursor-pointer mb-2"
                >
                  Complete Costing Detail
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* --- RIGHT PREVIEW SECTION --- */}
        {/* <div className="w-full lg:w-[320px] shrink-0 flex flex-col items-center">
          <div className="border border-orange-300 p-2 bg-white shadow-sm w-full">
            <div className="border border-gray-300 aspect-[3/2.2] relative overflow-hidden backdrop-blur-2xl bg-white group">
              <img
                src={oneCrestPriceSheet}
                alt="One Crest price detail sheet - Payment schedule Satyam Metro Showstopper Kharghar pricing"
                className="w-full h-full object-cover opacity-80 "
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/5 group-hover:bg-transparent transition-colors">
                <span className="sr-only">
                  Detail Sheet and Payment Schedule
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={() => onOfferPriceClick('costing-details')}
            className="mt-6 w-full animated-gradient text-white px-6 py-4 lg:py-3 rounded-full text-md font-semibold shadow-md hover:bg-[#b07848] transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
          >
            Complete Costing Details
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Price;
