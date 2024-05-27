import { useState } from "react";

import PrivacyPolicy from "../Legal/PrivacyPolicy.jsx";
import ToS from "../Legal/ToS.jsx";
import "./footer.css";

function Footer({ setModalClass }) {
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

  return (
    <footer id="footer">
      <div>
        <div className="logo">
          <h4>Tender Touch</h4>
          <span>Doula Services</span>
        </div>
        <div className="footerContact">
          <a href="tel:979-900-6015">
            <i className="fa-solid fa-phone fa-lg"></i>
          </a>
          <a href="mailto:katherine.ellis333@gmail.com" target="_blank">
            <i className="fa-solid fa-envelope fa-lg"></i>
          </a>
          <a href="http://instagram.com/_u/katherinee.ellis/" target="_blank">
            <i className="fa-brands fa-square-instagram fa-lg"></i>
          </a>
        </div>
      </div>
      <div className="legal">
        <p>&copy; 2024 Key Six Designs, LLC.</p>
        <div>
          <p onClick={handlePrivacy}>Privacy Policy</p>
          <p onClick={handleToS}>Terms of Service</p>
        </div>
      </div>

      {openPrivacy ? (
        <PrivacyPolicy
          setOpenPrivacy={setOpenPrivacy}
          setModalClass={setModalClass}
        />
      ) : (
        <div></div>
      )}
      {openToS ? (
        <ToS setOpenToS={setOpenToS} setModalClass={setModalClass} />
      ) : (
        <div></div>
      )}
    </footer>
  );
}

export default Footer;
