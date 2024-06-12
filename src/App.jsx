import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Loading from "./pages/Loading/Loading.jsx";
import Header from "./components/Header/Header.jsx";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  const [loading, setLoading] = useState(true);
  const [modalClass, setModalClass] = useState(false);

  let currentLocale = useLocation().pathname.split("/")[1];

  // to allow "Home" to highlight if active; lowercase to match later logic
  if (!currentLocale) {
    currentLocale = "home";
  }

  let bgColor;
  let textColor;

  switch (currentLocale) {
    case "about":
      bgColor = "var(--paleCherry)";
      textColor = "var(--paleCrumble)";
      break;
    case "services":
      bgColor = "var(--paleCrumble)";
      textColor = "var(--meadow)";
      break;
    case "faqs":
      bgColor = "var(--meadow)";
      textColor = "var(--paleCrumble)";
      break;
    case "contact":
      bgColor = "var(--sage)";
      textColor = "var(--paleCrumble)";
      break;
    default:
      bgColor;
      textColor = "white";
      break;
  }

  useEffect(() => {
    // call the user defined function checkLoad every second, only when variable loading has changed
    setInterval(checkLoad, 1000);
  }, [loading]);

  function checkLoad() {
    if (document.getElementsByTagName("body") === undefined) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }

  return (
    <div>
      {loading === true ? (
        <Loading />
      ) : (
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
            bgColor={bgColor}
            textColor={textColor}
          />
        </div>
      )}
    </div>
  );
}

export default App;
