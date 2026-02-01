import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { submitToIndexNow } from '../utils/indexNow';

const DynamicSEO = () => {
  const location = useLocation();
  
  const seoData = {
    '/': {
      title: 'Godrej Varanya Kharghar | New Launch Luxury Apartments Navi Mumbai | Best Property Investment 2025',
      description: 'Discover Godrej Varanya - Premium 2 & 3 BHK luxury apartments in Kharghar, Navi Mumbai. New launch by Godrej Properties with world-class amenities. Best property investment opportunity.',
      keywords: 'Godrej Varanya, Godrej Properties Kharghar, new launch Kharghar, best property invest Navi Mumbai, luxury apartments Kharghar, Godrej project Kharghar'
    },
    '/about': {
      title: 'About Godrej Varanya | Premium Luxury Apartments Kharghar Navi Mumbai | Godrej Properties',
      description: 'Learn about Godrej Varanya - Premium residential project by Godrej Properties in Kharghar, Navi Mumbai. Luxury 2 & 3 BHK apartments with world-class amenities.',
      keywords: 'Godrej Varanya about, Godrej Properties Kharghar, luxury apartments Navi Mumbai, premium residential project'
    },
    '/price': {
      title: 'Godrej Varanya Price List | 2 & 3 BHK Rates Kharghar | Godrej Properties Navi Mumbai',
      description: 'Check latest prices for 2 & 3 BHK luxury apartments at Godrej Varanya, Kharghar. Best property investment rates by Godrej Properties in Navi Mumbai.',
      keywords: 'Godrej Varanya price, 2 BHK price Kharghar, 3 BHK price Navi Mumbai, Godrej Properties rates'
    },
    '/amenities': {
      title: 'Godrej Varanya Amenities | World-Class Facilities Kharghar | Godrej Properties Navi Mumbai',
      description: 'Explore world-class amenities at Godrej Varanya Kharghar including swimming pool, gymnasium, clubhouse, landscaped gardens by Godrej Properties.',
      keywords: 'Godrej Varanya amenities, swimming pool Kharghar, gymnasium Navi Mumbai, Godrej Properties facilities'
    },
    '/floorplan': {
      title: 'Godrej Varanya Floor Plans | 2 & 3 BHK Layouts Kharghar | Godrej Properties Navi Mumbai',
      description: 'View detailed floor plans and unit layouts for 2 & 3 BHK apartments at Godrej Varanya, Kharghar by Godrej Properties.',
      keywords: 'Godrej Varanya floor plans, 2 BHK layout Kharghar, 3 BHK apartment layouts Navi Mumbai'
    },
    '/location': {
      title: 'Godrej Varanya Location | Prime Connectivity Kharghar | Near Metro Station Navi Mumbai',
      description: 'Discover the prime location of Godrej Varanya in Kharghar, Navi Mumbai. Minutes from Metro Station, Railway Station, and major landmarks.',
      keywords: 'Godrej Varanya location, Kharghar connectivity, near metro station, Godrej Properties Navi Mumbai'
    },
    '/gallery': {
      title: 'Godrej Varanya Gallery | Luxury Apartment Images Kharghar | Godrej Properties Navi Mumbai',
      description: 'View stunning interior and exterior images of Godrej Varanya luxury apartments in Kharghar, Navi Mumbai by Godrej Properties.',
      keywords: 'Godrej Varanya gallery, luxury apartment images Kharghar, Godrej Properties photos Navi Mumbai'
    }
  };

  useEffect(() => {
    const currentSEO = seoData[location.pathname] || seoData['/'];
    
    // Update document title
    document.title = currentSEO.title;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', currentSEO.description);
    }
    
    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', currentSEO.keywords);
    }
    
    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', `https://godrejkhargar.com${location.pathname}`);
    }
    
    // Update Open Graph title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', currentSEO.title);
    }
    
    // Update Open Graph description
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', currentSEO.description);
    }
    
    // Update Open Graph URL
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', `https://godrejkhargar.com${location.pathname}`);
    }
    
    // Update Twitter title
    let twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', currentSEO.title);
    }
    
    // Update Twitter description
    let twitterDescription = document.querySelector('meta[property="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', currentSEO.description);
    }
    // Submit current URL to IndexNow for instant indexing
    const currentUrl = `https://godrejkhargar.com${location.pathname}`;
    submitToIndexNow([currentUrl]);
    
  }, [location.pathname]);

  return null;
};

export default DynamicSEO;