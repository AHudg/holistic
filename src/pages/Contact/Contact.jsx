import PageBreak from "../../components/PageBreak";
import "./contact.css";

function Contact({}) {
  return (
    <section className="contactPage">
      <h2>Let's keep in touch!</h2>
      <p>
        Interested in connecting to learn more? I'd love to hear from you, and
        would be honored to be apart of your journey! Feel free to use the form
        below to start the conversation, send me an email directly, or reach out
        via phone call / text.
      </p>

      <div className="info">
        <a href="tel:979-900-6015">
          <i class="fa-solid fa-phone"></i>
        </a>
        <span id="myPhone">979.900.6015</span>
      </div>
      <div className="info">
        <a href="mailto:katherine.ellis333@gmail.com" target="_blank">
          <i class="fa-solid fa-envelope"></i>
        </a>
        <span id="myEmail">katherine.ellis333@gmail.com</span>
      </div>
      <div className="info">
        <a href="http://instagram.com/_u/katherinee.ellis/" target="_blank">
          <i className="fa-brands fa-square-instagram"></i>
        </a>
        <p>Don't forget to follow on Instagram!</p>
      </div>

      <PageBreak />

      <form name="contact" method="post">
        <input type="hidden" name="form-name" value="contact"></input>

        <div>
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName"></input>
          </div>

          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName"></input>
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

      <PageBreak />
    </section>
  );
}

export default Contact;
