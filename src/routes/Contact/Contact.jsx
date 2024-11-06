import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6";
import "./Contact.css";

const Contact = () => {
  return (
    <section
      id="contact"
      className="section4 flex justify-center items-center mb-8 pt-16 max-sm:pt-10"
    >
      <div className="contact-box flex">
        <div className="contact-links w-1/2">
          <h2>CONTACT</h2>
          <div className="links">
            <div className="link">
              <a>
                <FaFacebook className="icon" />
              </a>
            </div>
            <div className="link">
              <a>
                <FaInstagram className="icon" />
              </a>
            </div>
            <div className="link">
              <a>
                <FaLinkedin className="icon" />
              </a>
            </div>
            <div className="link">
              <a>
                <FaXTwitter className="icon" />
              </a>
            </div>
          </div>
          <div className="contact-left">
            <h3>Adrian Popowich</h3>

            <p className="flex items-center w-8/12">
              <span className="icon-contact">
                <FaPhone className="" />
              </span>
              250-320-7432
            </p>

            <p className="flex items-center w-8/12">
              <span className="icon-contact">
                <FaEnvelope className="" />
              </span>
              popowichan@gmail.com
            </p>
          </div>
        </div>

        <div className="contact-form-wrapper w-1/2 ">
          <form>
            <div className="form-item">
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
              ></input>
              <label htmlFor="firstName">First Name:</label>
            </div>
            <div className="form-item">
              <input type="text" id="lastName" name="lastName" required></input>
              <label htmlFor="lastName">Last Name:</label>
            </div>
            <div className="form-item">
              <input type="email" id="email" name="email" required></input>
              <label htmlFor="email">Email:</label>
            </div>
            <div className="form-item">
              <input type="text" id="company" name="company" required></input>
              <label htmlFor="company">Company:</label>
            </div>
            <div className="form-item">
              <input type="tel" id="phone" name="phone" required></input>
              <label htmlFor="phone">Phone:</label>
            </div>
            <div className="form-item">
              <textarea id="message" name="message" required></textarea>
              <label htmlFor="message">Message:</label>
            </div>
            <button className="submit-btn">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
