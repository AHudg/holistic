import { useState, useEffect } from "react";

import Hamburger from "../Hamburger/Hamburger.jsx";
import Nav from "../Nav/Nav.jsx";

import "./header.css";

function Header({ setModalClass, currentLocale, bgColor, textColor }) {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const breakpoint = 768;

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    const debounceResize = debounce(handleResize, 150);

    window.addEventListener("resize", debounceResize);

    return () => {
      window.removeEventListener("resize", debounceResize);
    };
  }, []);

  const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    // { name: "Testimonials", path: "/testimonials" },
    { name: "Services", path: "/services" },
    { name: "FAQs", path: "/faqs" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={currentLocale === "home" ? "absoluteHeader" : ""}
      style={{ backgroundColor: bgColor }}
      role="banner"
    >
      <h1>
        <a href="/" style={{ color: textColor }}>
          Tender Touch
        </a>
        <span style={{ color: textColor }}>Doula Services</span>
      </h1>

      {screenSize < breakpoint ? (
        <Hamburger
          setModalClass={setModalClass}
          currentLocale={currentLocale}
          hamLinks={navLinks}
          textColor={textColor}
        />
      ) : (
        <Nav navLinks={navLinks} currentLocale={currentLocale} />
      )}
    </header>
  );
}

export default Header;
