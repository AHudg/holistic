import { useState, useEffect } from "react";

import Loading from "./pages/Loading/Loading";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);

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
        <div>
          <Header />
          <Outlet />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
