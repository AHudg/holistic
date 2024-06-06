import { useLocation } from "react-router-dom";
import "./nav.css";

function Nav({}) {
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
    <nav className="desktopNav">
      <ul>
        {navLinks.map((link) => {
          return (
            <li key={"li" + link}>
              <a
                href={link === "Home" ? "/" : "/" + link.toLowerCase()}
                key={link}
                className={
                  currentLocale === link.toLowerCase()
                    ? "navLink active"
                    : "navLink"
                }
              >
                {link}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Nav;
