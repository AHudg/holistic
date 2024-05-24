function Contact({}) {
  return (
    <div>
      <h2>Let's keep in touch!</h2>

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam atque
        dolorem deserunt dolore. Quis iste minus, mollitia sit laudantium
        tenetur sunt labore quas rerum sequi blanditiis hic est magnam numquam!
      </p>

      <span id="myPhone">979.900.6015</span>
      <span id="myEmail">katherine.ellis333@gmail.com</span>

      <i className="fa-brands fa-square-instagram"></i>

      <form name="contact" method="post">
        <input type="hidden" name="form-name" value="contact"></input>

        <div className="">
          <div className="">
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName"></input>
          </div>

          <div className="">
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
          <option value="email">Email</option>
          <option value="call">Phone Call</option>
          <option value="text">Text Message</option>
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
          <option value="center">Birthing Center</option>
          <option value="friend">Friend</option>
          <option value="previous">Previous Client</option>
          <option value="google">Google</option>
          <option value="social">Social Media</option>
          <option value="other">Other</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
