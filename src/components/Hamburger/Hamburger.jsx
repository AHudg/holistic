import { useState, useEffect } from "react";
import "./hamburger.css";

function Hamburger({ setModalClass, currentLocale, hamLinks, textColor }) {
  const [colorBar, setcolorBar] = useState(textColor);
  const [transBar, setTransBar] = useState(textColor);

  const handleHamburger = () => {
    const hamburgerCheckbox = document.getElementById("hamburgerCheckbox");
    const hamburgerMenu = document.getElementById("hamburgerMenu");

    if (hamburgerCheckbox.checked) {
      hamburgerMenu.style = "transform: translateY(100vh);";
      setcolorBar("black");
      setTransBar("transparent");
      setModalClass(true);
    } else {
      hamburgerMenu.style = "transform: translateY(0);";
      setcolorBar(textColor);
      setTransBar(textColor);
      setModalClass(false);
    }
  };

  console.log(hamLinks);

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
          <span
            className="bar bar1"
            style={{ backgroundColor: colorBar }}
          ></span>
          <span
            className="bar bar2"
            style={{ backgroundColor: transBar }}
          ></span>
          <span
            className="bar bar3"
            style={{ backgroundColor: transBar }}
          ></span>
          <span
            className="bar bar4"
            style={{ backgroundColor: colorBar }}
          ></span>
        </div>
      </label>
      <div id="hamburgerMenu">
        <div id="hamburgerHeading">
          <h3>Tender Touch</h3>
          <span className="italics">Doula Services</span>
        </div>
        <nav className="hamburgerNav">
          <ul>
            {hamLinks.map((link) => {
              return (
                <li key={"li" + link.name}>
                  <a
                    href={link.path}
                    key={link.name}
                    className={
                      currentLocale === link.name.toLowerCase()
                        ? "hamLink active"
                        : "hamLink"
                    }
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Hamburger;
