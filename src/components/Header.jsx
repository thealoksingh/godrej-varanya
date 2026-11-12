
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Info,
  IndianRupee,
  MapPin,
  Menu,
  X,
  Download,
  Waves,
  Building2,
  Images,
} from "lucide-react";

import logo from "../assets/godrejLogo.png";
import psImage from "../assets/psImage.png";

const navLinks = [
  {
    name: "About",
    section: "about",
    path: "/#about",
    icon: <Info size={18} />,
  },
  {
    name: "Pricing",
    section: "price",
    path: "/#price",
    icon: <IndianRupee size={18} />,
  },
  {
    name: "Floor",
    section: "floorplan",
    path: "/#floorplan",
    icon: <Building2 size={18} />,
  },
  {
    name: "Amenities",
    section: "amenities",
    path: "/#amenities",
    icon: <Waves size={18} />,
  },
  {
    name: "Gallery",
    section: "gallery",
    path: "/#gallery",
    icon: <Images size={18} />,
  },
  {
    name: "Location",
    section: "location",
    path: "/#location",
    icon: <MapPin size={18} />,
  },
];

const Header = ({ onBrochureClick }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Scroll to the requested homepage section after navigation.
  useEffect(() => {
    const hash = location.hash.replace("#", "");

    if (location.pathname === "/" && hash) {
      setActiveSection(hash);

      const timeout = setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);

      return () => clearTimeout(timeout);
    }

    if (location.pathname === "/") {
      setActiveSection("hero");
    } else {
      setActiveSection(location.pathname.replace("/", ""));
    }
  }, [location.pathname, location.hash]);

  // Update active navigation while scrolling through homepage sections.
  useEffect(() => {
    if (location.pathname !== "/") return;

    const sections = [
      "hero",
      "about",
      "price",
      "floorplan",
      "amenities",
      "gallery",
      "location",
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  const handleNavClick = (section) => {
    setIsOpen(false);
    setActiveSection(section);
  };

  const handleLogoClick = (event) => {
    event.preventDefault();
    setIsOpen(false);
    setActiveSection("hero");

    if (location.pathname !== "/") {
      navigate("/");
      return;
    }

    navigate("/", { replace: false });

    document.getElementById("hero")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const isActive = (section) => activeSection === section;

  const getLinkClasses = (section) => `
    relative flex items-center gap-2 cursor-pointer px-2 py-2
    transition-all duration-300
    ${
      isActive(section)
        ? "text-[var(--clr-p)] after:scale-x-100"
        : "text-gray-900 hover:text-[var(--clr-p)] after:scale-x-0 hover:after:scale-x-100"
    }
    after:content-[''] after:absolute after:left-0 after:bottom-0
    after:h-[2px] after:w-full after:bg-[var(--clr-p)]
    after:origin-left after:transition-transform after:duration-300
  `;

  return (
    <nav
      aria-label="Main navigation"
      className="bg-white shadow-md sticky top-0 z-[100] font-sans border-b-2 border-[#6b8d14]/20"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          onClick={handleLogoClick}
          aria-label="Godrej Varanya homepage"
          className="flex items-center"
        >
          <img
            src={logo}
            alt="Godrej Varanya"
            width="162"
height="36"
className="w-[162px] h-auto p-1 hover:scale-105 transition-transform duration-200"  />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-1 text-sm font-semibold">
          {navLinks.map((link) => (
            <Link
              key={link.section}
              to={link.path}
              onClick={() => handleNavClick(link.section)}
              aria-current={
                isActive(link.section) ? "location" : undefined
              }
              className={getLinkClasses(link.section)}
            >
              <span className="hover:scale-110 transition-transform duration-200">
                {link.icon}
              </span>
              {link.name}
            </Link>
          ))}

          <button
            type="button"
            onClick={onBrochureClick}
            className="animated-gradient flex items-center gap-2 text-white px-5 py-2.5 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 ml-3 hover:scale-105"
            aria-label="Download Godrej Varanya brochure"
          >
            <Download size={18} className="animate-bounce" />
            BROCHURE
          </button>

          <img
            src={psImage}
            alt="Project branding"
            width="48"
            height="48"
            loading="lazy"
            className="w-12 h-12 p-1 hover:scale-105 transition-transform duration-200"
          />
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="text-[#6b8d14] focus:outline-none hover:bg-[#6b8d14]/10 p-2 rounded-lg transition-colors"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        className={`lg:hidden fixed left-0 w-full bg-gradient-to-b from-white to-gray-50 shadow-2xl transition-all duration-300 ease-in-out z-50 ${
          isOpen
            ? "top-16 opacity-100 translate-y-0 visible"
            : "top-10 opacity-0 -translate-y-4 invisible pointer-events-none"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="px-6 py-4 space-y-2">
          {navLinks.map((link, index) => (
            <Link
              key={link.section}
              to={link.path}
              onClick={() => handleNavClick(link.section)}
              aria-current={
                isActive(link.section) ? "location" : undefined
              }
              tabIndex={isOpen ? 0 : -1}
              className={`flex items-center gap-3 font-semibold py-3 px-4 rounded-lg active:scale-95 transition-all duration-200 border ${
                isActive(link.section)
                  ? "text-[#6b8d14] bg-gradient-to-r from-[#f09051]/30 to-[#9e7242]/30 border-[#6b8d14]/50"
                  : "text-gray-700 hover:bg-gradient-to-r hover:from-[#f09051]/20 hover:to-[#9e7242]/20 hover:text-[#6b8d14] border-transparent hover:border-[#6b8d14]/30"
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <span className="text-[#6b8d14]">{link.icon}</span>
              {link.name}
            </Link>
          ))}

          <button
            type="button"
            onClick={() => {
              setIsOpen(false);
              onBrochureClick?.();
            }}
            className="animated-gradient w-full flex items-center justify-center gap-2 text-white py-3 px-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 mt-4"
          >
            <Download size={18} />
            DOWNLOAD BROCHURE
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
