import { useLocation } from "react-router-dom";
import "./hamburger.css";

function Hamburger({ hamLinks, currentLocale, setModalClass }) {
  const handleHamburger = () => {
    const hamburgerCheckbox = document.getElementById("hamburgerCheckbox");
    const hamburgerMenu = document.getElementById("hamburgerMenu");

    if (hamburgerCheckbox.checked) {
      hamburgerMenu.style = "transform: translateY(100vh);";
      setModalClass(true);
    } else {
      hamburgerMenu.style = "transform: translateY(0);";
      setModalClass(false);
    }
  };

  return (
    <div>
      <label htmlFor="hamburgerCheckbox" className="hamburgerContainer">
        <input
          type="checkbox"
          id="hamburgerCheckbox"
          className="hamburgerCheckbox"
          onClick={handleHamburger}
        />
        <div className="hamburger">
          <span className="bar bar1"></span>
          <span className="bar bar2"></span>
          <span className="bar bar3"></span>
          <span className="bar bar4"></span>
        </div>
      </label>
      <div className="hamburgerFrame">
        <div id="hamburgerMenu">
          <div id="hamburgerHeading">
            <h3>Tender Touch</h3>
            <span>Doula Services</span>
          </div>
          <nav className="hamburgerNav">
            <ul>
              {hamLinks.map((link) => {
                return (
                  <li key={"li" + link}>
                    <a
                      href={link === "Home" ? "/" : "/" + link.toLowerCase()}
                      key={link}
                      className={
                        currentLocale === link.toLowerCase()
                          ? "hamLink active"
                          : "hamLink"
                      }
                    >
                      {link}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Hamburger;
