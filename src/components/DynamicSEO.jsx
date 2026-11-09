
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const seoData = {
  "/": {
    title: "Godrej Varanya Kharghar | 2 & 3 BHK Apartments in Navi Mumbai",
    description:
      "Explore Godrej Varanya in Kharghar, Navi Mumbai. Discover 2 & 3 BHK apartments, project amenities, floor plans, pricing and location details.",
  },
  "/privacy": {
    title: "Privacy Policy | Godrej Varanya",
    description:
      "Read the privacy policy explaining how information is collected and used on the Godrej Varanya website.",
  },
};

const WEBSITE_URL = "https://godrejkhargar.com";

const DynamicSEO = () => {
  const location = useLocation();

  const currentSEO = seoData[location.pathname] || seoData["/"];
  const canonicalURL = `${WEBSITE_URL}${location.pathname}`;

  return (
    <Helmet>
      <title>{currentSEO.title}</title>

      <meta name="description" content={currentSEO.description} />

      <link rel="canonical" href={canonicalURL} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={currentSEO.title} />
      <meta property="og:description" content={currentSEO.description} />
      <meta property="og:url" content={canonicalURL} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={currentSEO.title} />
      <meta name="twitter:description" content={currentSEO.description} />
    </Helmet>
  );
};

export default DynamicSEO;
