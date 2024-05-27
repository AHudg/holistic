import { useState, useEffect } from "react";

import Loading from "./pages/Loading/Loading.jsx";
import Header from "./components/Header/Header.jsx";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  const [loading, setLoading] = useState(true);
  const [modalClass, setModalClass] = useState(false);

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
          <Header setModalClass={setModalClass} />
          <Outlet />
          <Footer setModalClass={setModalClass} />
        </div>
      )}
    </div>
  );
}

export default App;
