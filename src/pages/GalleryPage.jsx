import React from 'react';
import Gallery from '../components/Gallery';
import SEO from '../components/SEO';

const GalleryPage = () => {
  return (
    <>
      <SEO 
        title="Gallery | Godrej Varanya Kharghar | Interior & Exterior Images"
        description="View stunning interior and exterior images of Godrej Varanya luxury apartments in Kharghar. Explore premium designs and architectural excellence."
        keywords="Godrej Varanya gallery, interior images Kharghar, luxury apartment photos, premium design Navi Mumbai, architectural images"
        canonical="https://godrejkhargar.com/gallery"
      />
      <Gallery />
    </>
  );
};

export default GalleryPage;