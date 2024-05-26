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
      <h2>Footer</h2>
      <a href="tel:979-900-6015">
        <i className="fa-solid fa-phone"></i>
      </a>
      <a href="mailto:katherine.ellis333@gmail.com" target="_blank">
        <i className="fa-solid fa-envelope"></i>
      </a>
      <a href="http://instagram.com/_u/katherinee.ellis/" target="_blank">
        <i className="fa-brands fa-square-instagram"></i>
      </a>
      {/* Site Map, Privacy Policy, Terms of Service, Social Media, Logo, Contact Information, Copyright */}
      <p>&copy; 2024 Key Six Designs, LLC.</p>
      <p onClick={handlePrivacy}>Privacy Policy</p>
      <p onClick={handleToS}>Terms of Service</p>

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
