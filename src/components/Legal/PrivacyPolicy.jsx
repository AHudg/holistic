import "./legal.css";

function PrivacyPolicy({ setOpenPrivacy, setModalClass }) {
  const handleClose = () => {
    setOpenPrivacy(false);
    setModalClass(false);
  };

  return (
    <div className="background">
      <article>
        <span onClick={handleClose}>
          <i className="fa-solid fa-x"></i>
        </span>
        <h5>Privacy Policy</h5>
        <h6>Effective Date: 05/25/2024</h6>
        <br />

        <p>
          <span>1. Introduction</span>Welcome to Tender Touch Doula Services
          ("Company," "we," "our," "us"). We are committed to protecting your
          privacy and ensuring that your personal information is handled in a
          safe and responsible manner. This Privacy Policy explains how we
          collect, use, and protect your information when you use our website,
          https://tendertouchdoula.com/ ("Website").
        </p>
        <br />

        <p>
          <span>2. Information We Collect</span>We collect personal information
          that you voluntarily provide to us through our contact form, including
          your first and last names, email address, and phone number.
        </p>
        <br />

        <p>
          <span>3. How We Use Your Information</span>The information you provide
          is used solely for the purpose of contacting you to discuss our doula
          services. We do not store your information in a database; it is only
          present in the email sent to our company email. We do not use your
          information for any other purpose.
        </p>
        <br />

        <p>
          <span>4. Information Sharing and Disclosure</span>We do not share,
          sell, rent, or trade your personal information with any third parties.
          Your information is strictly confidential and is used only by Tender
          Touch Doula Services for the purposes described in this Privacy
          Policy.
        </p>
        <br />

        <p>
          <span>5. Data Security</span>We take the security of your personal
          information seriously. We implement reasonable security measures to
          protect your information from unauthorized access, use, alteration, or
          destruction. However, please note that no method of transmission over
          the Internet or method of electronic storage is completely secure.
        </p>
        <br />

        <p>
          <span>6. Your Rights</span>You have the right to:
        </p>
        <br />
        <ul>
          <li>Access the personal information we hold about you. </li>
          <li>
            Request corrections to any inaccurate or incomplete information.
          </li>
          <li>Request the deletion of your personal information.</li>
          <li>
            Withdraw your consent for us to use your personal information.
          </li>
        </ul>
        <p>
          To exercise these rights, please contact us at
          katherine@tendertouchdoula.com.
        </p>
        <br />

        <p>
          <span>7. Changes to This Privacy Policy</span>We may update this
          Privacy Policy from time to time to reflect changes in our practices
          or for other operational, legal, or regulatory reasons. We will notify
          you of any significant changes by posting the new Privacy Policy on
          our Website. Your continued use of the Website after any changes to
          this Privacy Policy constitutes your acceptance of the revised policy.
        </p>
        <br />

        <p>
          <span>8. Children's Privacy</span>
          Our services are not directed to individuals under the age of 18. We
          do not knowingly collect personal information from children under 18.
          If we become aware that a child under 18 has provided us with personal
          information, we will take steps to delete such information.
        </p>
        <br />

        <p>
          <span>9. Governing Law</span>
          This Privacy Policy is governed by the laws of the State of Texas and
          applicable federal law. Any disputes arising from this Privacy Policy
          will be resolved in accordance with Texas law.
        </p>
        <br />

        <p>
          <span>10. Consent</span>
          By using our Website, you consent to the terms of this Privacy Policy.
        </p>
        <br />

        <p>
          <span>11. Contact Us</span>If you have any questions or concerns about
          this Privacy Policy or our privacy practices, please contact us at:
        </p>
        <br />
        <ul>
          <li>Tender Touch Doula Services</li>
          <li>katherine@tendertouchdoula.com</li>
          <li>+1 (979) 900-6015</li>
        </ul>
      </article>
    </div>
  );
}

export default PrivacyPolicy;
