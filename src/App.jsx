import { useState } from "react";
import { useLocation } from "react-router-dom";

import Header from "./components/Header/Header.jsx";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  const [modalClass, setModalClass] = useState(false);

  let currentLocale = useLocation().pathname.split("/")[1];

  // Default to "home" if no path segment is found
  currentLocale = currentLocale || "home";

  const colorConfig = {
    about: { bgColor: "var(--paleCherry)", textColor: "var(--paleCrumble)" },
    testimonials: {
      bgColor: "var(--testimonial)",
      textColor: "var(--paleCrumble)",
    },
    services: { bgColor: "var(--paleCrumble)", textColor: "var(--meadow)" },
    faqs: { bgColor: "var(--meadow)", textColor: "var(--paleCrumble)" },
    contact: { bgColor: "var(--sage)", textColor: "var(--paleCrumble)" },
    home: { bgColor: "rgba(0,0,0,0.3", textColor: "white" },
  };

  const { bgColor, textColor } = colorConfig[currentLocale] || {
    bgColor: "var(--paleCrumble)",
    textColor: "var(--cherry)",
  };

  return (
    <div>
      {/* <div id="frame" className={modalClass ? "disableScroll" : ""}> */}
      <div className={modalClass ? "disableScroll" : ""}>
        <Header
          setModalClass={setModalClass}
          currentLocale={currentLocale}
          bgColor={bgColor}
          textColor={textColor}
        />
        <Outlet />
        <Footer
          setModalClass={setModalClass}
          currentLocale={currentLocale}
          bgColor={bgColor}
          textColor={textColor}
        />
      </div>
    </div>
  );
}

export default App;
