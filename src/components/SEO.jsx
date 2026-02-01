import { useEffect } from 'react';

const SEO = ({ title, description, keywords, canonical }) => {
  useEffect(() => {
    // Update title
    if (title) {
      document.title = title;
    }

    // Update meta description
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      }
    }

    // Update meta keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      }
    }

    // Update canonical URL
    if (canonical) {
      let linkCanonical = document.querySelector('link[rel="canonical"]');
      if (linkCanonical) {
        linkCanonical.setAttribute('href', canonical);
      }
    }
  }, [title, description, keywords, canonical]);

  return null;
};

export default SEO;

// SEO Keywords for Godrej Varanya
export const seoKeywords = {
  primary: [
    'Godrej Varanya',
    'Godrej Properties Kharghar',
    'luxury apartments Kharghar',
    '2 BHK Kharghar',
    '3 BHK Kharghar',
    'new launch Kharghar',
    'Godrej project Kharghar'
  ],
  secondary: [
    'best property invest Navi Mumbai',
    'Godrej Varanya luxury apartment',
    'launching soon Kharghar',
    'premium flats Kharghar',
    'Godrej properties Navi Mumbai',
    'residential projects Kharghar',
    'luxury homes Kharghar',
    'property near Kharghar metro',
    'apartments near Kharghar railway station'
  ],
  location: [
    'Kharghar Navi Mumbai',
    'near Kharghar Metro Station',
    'near Kharghar Railway Station',
    'Mumbai Pune Expressway',
    'Belapur CBD',
    'Central Park Kharghar',
    'Navi Mumbai International Airport'
  ],
  amenities: [
    'luxury amenities',
    'swimming pool',
    'gym',
    'clubhouse',
    'children play area',
    'landscaped gardens',
    'security',
    'parking',
    'Godrej Properties amenities'
  ]
};
