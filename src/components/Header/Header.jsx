import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Hamburger from "../Hamburger/Hamburger.jsx";
import Nav from "../Nav/Nav.jsx";

import "./header.css";

function Header({ setModalClass }) {
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

  let currentLocale = useLocation().pathname.split("/")[1];

  // to allow "Home" to highlight if active; lowercase to match later logic
  if (!currentLocale) {
    currentLocale = "home";
  }

  return (
    <header>
      <h1>
        <a href="/" className="cormorant normal">
          Tender Touch
        </a>
        <span className="cormorant italics">Doula Services</span>
      </h1>
      {screenSize < breakpoint ? (
        <Hamburger
          hamLinks={navLinks}
          currentLocale={currentLocale}
          setModalClass={setModalClass}
        />
      ) : (
        <Nav navLinks={navLinks} currentLocale={currentLocale} />
      )}
    </header>
  );
}

export default Header;
