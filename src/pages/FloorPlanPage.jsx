import React, { useState } from 'react';
import FloorPlan from '../components/FloorPlan';
import OfferPriceForm from '../components/OfferPriceForm';
import SEO from '../components/SEO';

const FloorPlanPage = () => {
  const [isOfferPriceFormOpen, setIsOfferPriceFormOpen] = useState(false);

  return (
    <>
      <SEO 
        title="Floor Plans | Godrej Varanya Kharghar | 2, 3, 4 BHK Layouts"
        description="View detailed floor plans and unit layouts for 2, 3 & 4 BHK apartments at Godrej Varanya, Kharghar. Download master plan and unit plans."
        keywords="floor plans Godrej Varanya, 2 BHK layout Kharghar, 3 BHK floor plan, 4 BHK unit plan, apartment layouts Navi Mumbai, master plan Kharghar"
        canonical="https://godrejkhargar.com/floorplan"
      />
      <FloorPlan onOfferPriceClick={() => setIsOfferPriceFormOpen(true)} />
      {isOfferPriceFormOpen && (
        <OfferPriceForm onClose={() => setIsOfferPriceFormOpen(false)} />
      )}
    </>
  );
};

export default FloorPlanPage;