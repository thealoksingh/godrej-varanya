import React from 'react';
import Amenities from '../components/Amenities';
import SEO from '../components/SEO';

const AmenitiesPage = () => {
  return (
    <>
      <SEO 
        title="Amenities | Godrej Varanya Kharghar | 30+ Premium Facilities"
        description="Explore 30+ world-class amenities at Godrej Varanya including swimming pool, gymnasium, clubhouse, spa, kids play area, and more luxury facilities in Kharghar."
        keywords="amenities Godrej Varanya, swimming pool Kharghar, gymnasium Navi Mumbai, clubhouse facilities, luxury amenities, premium facilities Kharghar"
        canonical="https://godrejkhargar.com/amenities"
      />
      <Amenities />
    </>
  );
};

export default AmenitiesPage;