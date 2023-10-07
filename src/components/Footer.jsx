import "./Footer.css";
import { IconContext } from "react-icons";
import {
  FaFacebookSquare,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";
import { Logo } from "../assets";

function Footer() {
  return (
    <footer>
      <a href="#" className="FooterLogo">
        <img src={Logo} alt="loopstudios" />
      </a>
      <ul className="FooterLinks">
        <li className="FooterLinks-Link">
          <a href="#">about</a>
        </li>
        <li className="FooterLinks-Link">
          <a href="#">careers</a>
        </li>
        <li className="FooterLinks-Link">
          <a href="#">events</a>
        </li>
        <li className="FooterLinks-Link">
          <a href="#">products</a>
        </li>
        <li className="FooterLinks-Link">
          <a href="#">suport</a>
        </li>
      </ul>

      <ul className="SocialIconsBox">
        <li>
          <IconContext.Provider value={{ className: "socialIcon" }}>
            <div>
              <FaFacebookSquare />
            </div>
          </IconContext.Provider>
        </li>
        <li>
          <IconContext.Provider value={{ className: "socialIcon" }}>
            <div>
              <FaTwitter />
            </div>
          </IconContext.Provider>
        </li>
        <li>
          <IconContext.Provider value={{ className: "socialIcon" }}>
            <div>
              <FaPinterest />
            </div>
          </IconContext.Provider>
        </li>
        <li>
          <IconContext.Provider value={{ className: "socialIcon" }}>
            <div>
              <FaInstagram />
            </div>
          </IconContext.Provider>
        </li>
      </ul>
      <p className="CopyRight">&copy;2023 Loopstudios. All rights reserved.</p>
    </footer>
  );
}
export default Footer;
