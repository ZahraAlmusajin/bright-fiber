import { FaPhoneAlt, FaEnvelope, FaGlobe, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-inner footer-inner--row">
        <div className="footer-brand">
          <img className="footer-logo" src="/logon.png" alt="Logo" />
        </div>

        <div className="footer-contact footer-contact--row">
          <div className="contact-inline">
            <FaPhoneAlt className="contact-icon" />
            <a href="tel:+966552432553">+966-55-243-2553</a>
          </div>

          <div className="contact-inline">
            <FaEnvelope className="contact-icon" />
            <a href="mailto:info@brightfiber.co">info@brightfiber.co</a>
          </div>

          <div className="contact-inline">
            <FaGlobe className="contact-icon" />
            <a href="https://www.brightfiber.co" target="_blank" rel="noreferrer">
              www.brightfiber.co
            </a>
          </div>
          <div className="contact-inline">
            <FaLinkedin className="contact-icon" />
            <a href="https://www.linkedin.com/company/bright-fiber/" target="_blank" rel="noreferrer">
              bright fiber
            </a>
          </div>

          <div className="contact-inline">
            <FaMapMarkerAlt className="contact-icon" />
            <span>Eastern Province, Saudi Arabia</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
