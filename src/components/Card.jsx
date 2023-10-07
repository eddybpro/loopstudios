import "./Card.css";
import { CardImgM, CardImgD } from "../assets";

function Card() {
  return (
    <div className="CardContainer">
      <div className="CardContainer-ImgBox">
        <picture>
          <source media="(max-width:768px)" srcSet={CardImgM} />
          <source media="(min-width:769px)" srcSet={CardImgD} />
          <img src={CardImgM} alt="interactive" />
        </picture>
      </div>
      <div className="CardContainer-TxtBox">
        <h1 className="CardContainer-TxtBox-Title">
          The leader in interactive VR
        </h1>
        <p className="CardContainer-TxtBox-Para">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </div>
  );
}
export default Card;
