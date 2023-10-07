import "./Navbar.css";
import { Logo, CloseIcon, MenuIcon } from "../assets";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav>
      <a href="#" className="Logo" aria-label="loopstudios">
        <img src={Logo} alt="" />
      </a>
      <div className="Menu">
        {!isMenuOpen ? (
          <button onClick={() => setIsMenuOpen((prev) => !prev)}>
            <img src={MenuIcon} alt="" />
          </button>
        ) : (
          <button onClick={() => setIsMenuOpen((prev) => !prev)}>
            <img src={CloseIcon} alt="" />
          </button>
        )}
      </div>
      <ul className={isMenuOpen ? "NavLinks open" : "NavLinks"}>
        <li className="NavLinks-Link">
          <a href="#" onClick={() => setIsMenuOpen((prev) => !prev)}>
            about
          </a>
        </li>
        <li className="NavLinks-Link">
          <a href="#" onClick={() => setIsMenuOpen((prev) => !prev)}>
            careers
          </a>
        </li>
        <li className="NavLinks-Link">
          <a href="#" onClick={() => setIsMenuOpen((prev) => !prev)}>
            events
          </a>
        </li>
        <li className="NavLinks-Link">
          <a href="#" onClick={() => setIsMenuOpen((prev) => !prev)}>
            products
          </a>
        </li>
        <li className="NavLinks-Link">
          <a href="#" onClick={() => setIsMenuOpen((prev) => !prev)}>
            support
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
