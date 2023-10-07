import "./Header.css";
import Navbar from "./Navbar";

function Header() {
  return (
    <header>
      <Navbar />
      <div className="TitleBox">
        <h1 className="TitleBox-Title">
          Immersive experiences that <span>deliver</span>
        </h1>
      </div>
    </header>
  );
}
export default Header;
