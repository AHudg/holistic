import "./nav.css";

function Nav({ navLinks, currentLocale }) {
  const getNavStyles = (locale) => {
    switch (locale) {
      case "about":
      case "testimonials":
      case "faqs":
      case "contact":
        return {
          textColor: "var(--paleCrumble)",
          activeClass: "activeCrumble",
        };
      case "services":
        return { textColor: "var(--meadow)", activeClass: "activeMeadow" };
      case "home":
        return { textColor: "white", activeClass: "activeWhite" };
      default:
        return { textColor: "var(--cherry)" };
    }
  };

  const { textColor, activeClass } = getNavStyles(currentLocale);

  return (
    <nav className="desktopNav" role="navigation" aria-label="Main Navigation">
      <ul>
        {navLinks.map((link) => {
          return (
            <li key={"li" + link.name}>
              <a
                href={link.path}
                key={link.name}
                className={
                  currentLocale === link.name.toLowerCase() ? activeClass : ""
                }
                style={{ color: textColor }}
              >
                {link.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Nav;
