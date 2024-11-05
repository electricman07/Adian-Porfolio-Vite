import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="">
          <FaFacebook className="footer-icon" />
        </a>

        <a href="">
          <FaInstagram className="footer-icon" />
        </a>

        <a href="">
          <FaLinkedin className="footer-icon" />
        </a>

        <a href="">
          <FaXTwitter className="footer-icon" />
        </a>
      </div>

      <p className="copyright">
        Copyright &copy;{new Date().getFullYear()} Arian Popowich - Created by{" "}
        <a href="#">Glen Popowich</a>
      </p>
    </footer>
  );
};
export default Footer;
