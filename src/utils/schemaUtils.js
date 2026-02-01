// GTM-compatible schema utilities
export const createProductSchema = (priceData) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Godrej Varanya",
  "description": "Premium luxury apartments in Kharghar by Godrej Properties. 2 & 3 BHK homes with world-class amenities.",
  "brand": {
    "@type": "Brand",
    "name": "Godrej Properties"
  },
  "category": "Real Estate",
  "offers": priceData.map(item => ({
    "@type": "Offer",
    "name": `${item.type} Apartment`,
    "description": `${item.type} luxury apartment with ${item.area} carpet area`,
    "price": Math.round(
      parseFloat(item.price.replace(/[^\d.]/g, '')) * 10000000
    ).toString(),
    "priceCurrency": "INR",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": "Godrej Properties"
    }
  })),
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "75"
  }
});


// Push schema to GTM dataLayer
export const pushSchemaToGTM = (schemaData, eventName) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      schema: schemaData
    });
  }
};