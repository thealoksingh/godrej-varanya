import React from 'react';
import SEO from '../components/SEO';
import About from '../components/About';

const AboutPage = ({onRequestCallBack}) => {
  return (
    <>
      <SEO 
        title="About Godrej Varanya | Premium Luxury Apartments in Kharghar, Navi Mumbai"
        description="Discover Godrej Varanya - Premium 2 & 3 BHK luxury apartments in Kharghar, Navi Mumbai. New launch by Godrej Properties with world-class amenities. Best property investment opportunity."
        keywords="Godrej Varanya, Godrej Properties Kharghar, luxury apartments Kharghar, new launch Kharghar, best property invest Navi Mumbai, Godrej project Kharghar, 2 BHK 3 BHK Kharghar"
        canonical="https://godrejkhargar.com/about"
      />
      <About onRequestCallBack={onRequestCallBack}/>
    </>
  );
};

export default AboutPage;