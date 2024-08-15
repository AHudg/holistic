import { useState, useEffect } from "react";

import PageBreak from "../../components/PageBreak/PageBreak.jsx";
import "./contact.css";

function Contact({}) {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const breakpoint = 1200;

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    const debounceResize = debounce(handleResize, 150);

    window.addEventListener("resize", debounceResize);

    return () => {
      window.removeEventListener("resize", debounceResize);
    };
  }, []);

  const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  };

  return (
    <section className="contactPage">
      <div className="infoFrame">
        <div>
          <h2>Let's keep in touch!</h2>
          <p>
            Interested in connecting to learn more? I'd love to hear from you,
            and would be honored to be apart of your journey! Feel free to use
            the form below to start the conversation, send me an email directly,
            or reach out via phone call / text.
          </p>
        </div>

        <div>
          <div className="info">
            <a href="tel:979-900-6015" aria-label="Phone">
              <i className="fa-solid fa-phone fa-lg"></i>
            </a>
            <span id="myPhone">979.900.6015</span>
          </div>

          <div className="info">
            <a
              href="mailto:katherine@tendertouchdoula.com"
              target="_blank"
              aria-label="Email"
            >
              <i className="fa-solid fa-envelope fa-lg"></i>
            </a>
            <span id="myEmail">katherine@tendertouchdoula.com</span>
          </div>

          <div className="info">
            <a
              href="http://instagram.com/_u/katherinee.ellis/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fa-brands fa-square-instagram fa-lg"></i>
            </a>
            <p>Don't forget to follow on Instagram!</p>
          </div>
        </div>
      </div>

      <div className="formFrame">
        {screenSize <= breakpoint && (
          <PageBreak textColor={"var(--paleCrumble)"} />
        )}

        <form name="contact" method="post" aria-label="Contact Form">
          <input type="hidden" name="form-name" value="contact"></input>

          <div>
            <div className="nameDiv">
              <label htmlFor="firstName">First Name:</label>
              <input type="text" id="firstName" name="firstName"></input>
            </div>

            <div className="nameDiv">
              <label htmlFor="lastName">Last Name:</label>
              <input type="text" name="lastName"></input>
            </div>
          </div>

          <label htmlFor="email">Email:</label>
          <input type="text" id="email" name="email"></input>

          <label htmlFor="phone">Phone:</label>
          <input type="text" id="phone" name="phone"></input>

          <label htmlFor="method">Preferred Contact Method:</label>
          <select id="method" name="method">
            <option value="" hidden>
              Select an option
            </option>
            <option value="Email">Email</option>
            <option value="Call">Phone Call</option>
            <option value="Text">Text Message</option>
          </select>

          <label htmlFor="due">Expected Due Date:</label>
          <input type="date" id="due" name="due"></input>

          <label htmlFor="location">Provider/Planned Birth Location:</label>
          <input type="text" id="location" name="location"></input>

          <label htmlFor="Message">Message:</label>
          <input type="textarea" id="Message" name="Message"></input>

          <label htmlFor="referral">How did you hear about me?</label>
          <select id="referral" name="referral">
            <option value="" hidden>
              Select an option
            </option>
            <option value="BirthingCenter">Birthing Center</option>
            <option value="Friend">Friend</option>
            <option value="PreviousClient">Previous Client</option>
            <option value="Google">Google</option>
            <option value="Social">Social Media</option>
            <option value="Other">Other</option>
          </select>

          <button type="submit" className="contactBtn">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
