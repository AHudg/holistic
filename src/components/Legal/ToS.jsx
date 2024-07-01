import "./legal.css";

function ToS({ setOpenToS, setModalClass }) {
  const handleClose = () => {
    setOpenToS(false);
    setModalClass(false);
  };

  return (
    <div className="background">
      <article>
        <span onClick={handleClose}>
          <i className="fa-solid fa-x"></i>
        </span>
        <h5>Terms of Service</h5>
        <h6>Last Updated: 05/25/2024</h6>
        <br />
        <p>
          Welcome to Tender Touch Doula Services (“we,” “us,” “our”). By
          accessing or using our website (the “Site”), you agree to comply with
          and be bound by these Terms of Service (“Terms”). Please read these
          Terms carefully before using our Site.
        </p>
        <br />
        <p>
          <span>1. Acceptance of Terms</span>
          By accessing or using our Site, you agree to be bound by these Terms
          and our Privacy Policy. If you do not agree to these Terms, please do
          not use our Site.
        </p>
        <br />
        <p>
          <span>2. Services</span>Our Site provides information about doula
          services, service packages, FAQs, testimonials, and a contact form.
          The contact form collects users' first and last names, email
          addresses, and phone numbers solely for the purpose of initiating
          services.
        </p>
        <br />
        <p>
          <span>3. Use of Information</span>The personal information collected
          through our contact form is used only to contact you regarding our
          services. We do not maintain a database of your information, and it is
          only stored in the email sent to our company email. While we strive to
          protect your personal information, please be aware that no method of
          internet transmission is completely secure.
        </p>
        <br />
        <p>
          <span>4. Intellectual Property</span>
          All content on this Site, including but not limited to text, graphics,
          logos, images, and software, is the property of Key Six Designs, LLC
          and is protected by United States and international copyright laws.
          You may not use, reproduce, or distribute any content from this Site
          without our prior written permission, except for sharing the website
          to spread awareness of our company.
        </p>
        <br />
        <p>
          <span>5. Disclaimers and Limitation of Liability</span>We provide the
          Site on an “as is” and “as available” basis. We make no
          representations or warranties of any kind, express or implied,
          regarding the operation of the Site or the information, content,
          materials, or products included on the Site. We are not liable for any
          errors, downtime, or damages arising from the use of the Site. Your
          use of the Site is at your own risk
        </p>
        <br />
        <p>
          <span>6. Dispute Resolution</span>Any disputes arising out of or
          relating to these Terms or your use of the Site shall be resolved
          through mediation. You agree to attempt to resolve disputes informally
          before initiating any legal action. If mediation is unsuccessful, you
          agree to not pursue further legal action such as suing or arbitration.
        </p>
        <br />
        <p>
          <span>7. Changes to Terms</span>We reserve the right to modify these
          Terms at any time. Any changes will be effective immediately upon
          posting on the Site. Your continued use of the Site following the
          posting of revised Terms signifies your acceptance of those changes.
        </p>
        <br />
        <p>
          <span>8. Governing Law</span>These Terms are governed by and construed
          in accordance with the laws of the State of Texas, United States,
          without regard to its conflict of law principles.
        </p>
        <br />
        <p>
          <span>9. Contact Information</span>
          If you have any questions about these Terms, please contact us at
          katherine@tendertouchdoula.com.
        </p>
        <br />
        <p>
          <span>10. Consent</span>
          By using our Site, you acknowledge that you have read, understood, and
          agree to be bound by these Terms.
        </p>
        <br />
        <ul>
          <li>Tender Touch Doula Services</li>
          <li>katherine@tendertouchdoula.com</li>
          <li>+1 (979) 900-6015</li>
          <li>tendertouchdoula.com</li>
        </ul>
      </article>
    </div>
  );
}

export default ToS;
