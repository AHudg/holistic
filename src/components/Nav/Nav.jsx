import "./nav.css";

function Nav({ navLinks, currentLocale }) {
  let textColor;
  let activeClass;

  switch (currentLocale) {
    case "about":
      textColor = "var(--paleCrumble)";
      activeClass = "activeCrumble";
      break;
    case "services":
      textColor = "var(--meadow)";
      activeClass = "activeMeadow";
      break;
    case "faqs":
      textColor = "var(--paleCrumble)";
      activeClass = "activeCrumble";
      break;
    case "contact":
      textColor = "var(--paleCrumble)";
      activeClass = "activeCrumble";
      break;
    case "home":
      textColor = "white";
      activeClass = "activeWhite";
      break;
    default:
      textColor = "var(--cherry)";
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
                  currentLocale === link.toLowerCase() ? activeClass : ""
                }
                style={{ color: textColor }}
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
