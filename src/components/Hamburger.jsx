import { useLocation } from "react-router-dom";

function Hamburger({}) {
  const handleHamburger = () => {
    const hamburgerCheckbox = document.getElementById("hamburgerCheckbox");
    const hamburgerMenu = document.getElementById("hamburgerMenu");

    if (hamburgerCheckbox.checked) {
      hamburgerMenu.style = "transform: translateY(100%); opacity: 1";
    } else {
      hamburgerMenu.style = "transform: translateY(0); opacity: 0";
    }
  };

  const hamLinks = [
    "Home",
    "About",
    "Testimonials",
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
      <div id="hamburgerMenu">
        <div id="hamburgerHeading">
          <h2>Tender Touch</h2>
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
  );
}

export default Hamburger;
