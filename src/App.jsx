import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Loading from "./pages/Loading/Loading.jsx";
import Header from "./components/Header/Header.jsx";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  // const [loading, setLoading] = useState(true);
  const [modalClass, setModalClass] = useState(false);

  let currentLocale = useLocation().pathname.split("/")[1];

  // to allow "Home" to highlight if active; lowercase to match later logic
  // if (!currentLocale) {
  //   currentLocale = "home";
  // }

  // Default to "home" if no path segment is found
  currentLocale = currentLocale || "home";

  const colorConfig = {
    about: { bgColor: "var(--paleCherry)", textColor: "var(--paleCrumble)" },
    services: { bgColor: "var(--paleCrumble)", textColor: "var(--meadow)" },
    faqs: { bgColor: "var(--meadow)", textColor: "var(--paleCrumble)" },
    contact: { bgColor: "var(--sage)", textColor: "var(--paleCrumble)" },
    home: { bgColor: "", textColor: "white" },
  };

  const { bgColor, textColor } = colorConfig[currentLocale] || {
    bgColor: "var(--paleCrumble)",
    textColor: "var(--cherry)",
  };

  // let bgColor;
  // let textColor;

  // switch (currentLocale) {
  //   case "about":
  //     bgColor = "var(--paleCherry)";
  //     textColor = "var(--paleCrumble)";
  //     break;
  //   case "services":
  //     bgColor = "var(--paleCrumble)";
  //     textColor = "var(--meadow)";
  //     break;
  //   case "faqs":
  //     bgColor = "var(--meadow)";
  //     textColor = "var(--paleCrumble)";
  //     break;
  //   case "contact":
  //     bgColor = "var(--sage)";
  //     textColor = "var(--paleCrumble)";
  //     break;
  //   case "home":
  //     bgColor;
  //     textColor = "white";
  //     break;
  //   default:
  //     bgColor = "var(--paleCrumble)";
  //     textColor = "var(--cherry)";
  // }

  // useEffect(() => {
  //   // call the user defined function checkLoad every second, only when variable loading has changed
  //   setInterval(checkLoad, 1000);
  // }, [loading]);

  // function checkLoad() {
  //   if (document.getElementsByTagName("body") === undefined) {
  //     setLoading(true);
  //   } else {
  //     setLoading(false);
  //   }
  // }

  return (
    <div>
      <div id="frame" className={modalClass ? "disableScroll" : ""}>
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
