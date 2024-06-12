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

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navLinks = [
    "Home",
    "About",
    // "Testimonials",
    "Services",
    "FAQs",
    "Contact",
  ];

  return (
    <header
      className={currentLocale === "home" ? "absoluteHeader" : ""}
      style={{ backgroundColor: bgColor }}
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
