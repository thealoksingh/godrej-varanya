
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const seoData = {
  "/": {
    title: "Godrej Varanya Kharghar | 2 & 3 BHK Apartments in Navi Mumbai",
    description:
      "Explore Godrej Varanya in Kharghar, Navi Mumbai. Discover 2 & 3 BHK apartments, project amenities, floor plans, pricing and location details.",
  },

  "/about": {
    title: "About Godrej Varanya | Kharghar, Navi Mumbai",
    description:
      "Learn about Godrej Varanya, its residential offerings, location and features in Kharghar, Navi Mumbai.",
  },

  "/privacy": {
    title: "Privacy Policy | Godrej Varanya",
    description:
      "Read the privacy policy explaining how information is collected and used on the Godrej Varanya website.",
  },
};

const DynamicSEO = () => {
  const location = useLocation();

  useEffect(() => {
    const currentSEO = seoData[location.pathname] || seoData["/"];

    document.title = currentSEO.title;

    let description = document.querySelector(
      'meta[name="description"]'
    );

    if (description) {
      description.setAttribute("content", currentSEO.description);
    }

    let canonical = document.querySelector(
      'link[rel="canonical"]'
    );

    if (canonical) {
      canonical.setAttribute(
        "href",
        `https://godrejkhargar.com${location.pathname}`
      );
    }
  }, [location.pathname]);

  return null;
};

export default DynamicSEO;
