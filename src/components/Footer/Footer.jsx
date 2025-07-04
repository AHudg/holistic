import { useState } from "react";

import PageBreak from "../PageBreak/PageBreak.jsx";
import PrivacyPolicy from "../Legal/PrivacyPolicy.jsx";
import ToS from "../Legal/ToS.jsx";
import "./footer.css";

function Footer({ setModalClass, currentLocale, bgColor, textColor }) {
  const [openPrivacy, setOpenPrivacy] = useState(false);
  const [openToS, setOpenToS] = useState(false);

  const handlePrivacy = () => {
    setOpenPrivacy(true);
    setModalClass(true);
  };

  const handleToS = () => {
    setOpenToS(true);
    setModalClass(true);
  };

  if (currentLocale === "home") {
    bgColor = "var(--sage)";
    textColor = "var(--paleCrumble)";
  }

  return (
    <div style={{ backgroundColor: bgColor }}>
      <PageBreak textColor={textColor} />
      <footer style={{ color: textColor }}>
        <div className="screenLeft">
          <div className="logo">
            <h4>Tender Touch</h4>
            <span>Doula Services</span>
          </div>

          <div className="footerContact">
            <a href="tel:979-900-6015" aria-label="Phone">
              <i
                className="fa-solid fa-phone fa-lg"
                style={{ color: textColor }}
              ></i>
            </a>

            <a
              href="mailto:katherine@tendertouchdoula.com"
              target="_blank"
              aria-label="Email"
            >
              <i
                className="fa-solid fa-envelope fa-lg"
                style={{ color: textColor }}
              ></i>
            </a>

            <a
              href="http://instagram.com/_u/katherinee.ellis/"
              target="_blank"
              aria-label="Instagram"
            >
              <i
                className="fa-brands fa-square-instagram fa-lg"
                style={{ color: textColor }}
              ></i>
            </a>
          </div>
        </div>

        <div className="screenRight">
          <div className="locales">
            <p>
              Proudly serving the Bryan / College Station and surrounding areas!
            </p>
          </div>

          <div className="legal">
            <p>&copy; 2024 Key Six Designs, LLC.</p>
            <div>
              <p onClick={handlePrivacy}>Privacy Policy</p>
              <p onClick={handleToS}>Terms of Service</p>
            </div>
          </div>
        </div>

        {openPrivacy && (
          <PrivacyPolicy
            setOpenPrivacy={setOpenPrivacy}
            setModalClass={setModalClass}
          />
        )}
        {openToS && (
          <ToS setOpenToS={setOpenToS} setModalClass={setModalClass} />
        )}
      </footer>
    </div>
  );
}

export default Footer;
