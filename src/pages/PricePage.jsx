import React, { useState } from 'react';
import Price from '../components/Price';
import OfferPriceForm from '../components/OfferPriceForm';
import SEO from '../components/SEO';

const PricePage = () => {
  const [isOfferPriceFormOpen, setIsOfferPriceFormOpen] = useState(false);

  return (
    <>
      <SEO 
        title="Price & Floor Plans | Godrej Varanya Kharghar | 2, 3, 4 BHK Rates"
        description="Check latest prices for 2, 3 & 4 BHK luxury apartments at Godrej Varanya, Kharghar. Starting from ₹2.4 Cr. Get complete price breakup and payment plans."
        keywords="Godrej Varanya price, 2 BHK price Kharghar, 3 BHK price Navi Mumbai, 4 BHK luxury apartments cost, property rates Kharghar, apartment prices Sector 20"
        canonical="https://godrejkhargar.com/price"
      />
      <Price onOfferPriceClick={() => setIsOfferPriceFormOpen(true)} />
      {isOfferPriceFormOpen && (
        <OfferPriceForm onClose={() => setIsOfferPriceFormOpen(false)} />
      )}
    </>
  );
};

export default PricePage;