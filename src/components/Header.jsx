import { useState, useEffect } from "react";

import Hamburger from "./Hamburger";
import Nav from "./Nav";

function Header({}) {
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

  return (
    <header>
      <h1>
        <a href="/">Tender Touch</a>
        <span>Doula Services</span>
      </h1>
      {screenSize < breakpoint ? <Hamburger /> : <Nav />}
    </header>
  );
}

export default Header;
