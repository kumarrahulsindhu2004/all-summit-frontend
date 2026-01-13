import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Left links (internal routes) */}
      <div className="footer-left">
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/terms">Terms of Use</Link>
        <Link to="/cookies">Cookie Settings</Link>
      </div>

      {/* Right social links (external → a tag is CORRECT here) */}
      <div className="footer-right">
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          in
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          ig
        </a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          f
        </a>
      </div>
    </footer>
  );
};

export default Footer;
