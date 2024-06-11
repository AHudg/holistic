import { useLocation } from "react-router-dom";
import "./nav.css";

function Nav({ navLinks, currentLocale }) {
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
