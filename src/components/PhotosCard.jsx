import "./PhotosCard.css";
import {
  CuriosityImgM,
  CuriosityImgD,
  DeepEarthImgM,
  DeepEarthImgD,
  FishEyeImgM,
  FishEyeImgD,
  FromAboveImgM,
  FromAboveImgD,
  GridImgM,
  GridImgD,
  NightArcadeImgM,
  NightArcadeImgD,
  PocketBorealisImgM,
  PocketBorealisImgD,
  SoccerTeamImgM,
  SoccerTeamImgD,
} from "../assets";

function PhotosCard() {
  return (
    <div className="PhotosCardContainer">
      <h1 className="PhotosCardContainer-Title">Our creations</h1>
      <div className="PhotosCardContainer-PhotosBox">
        <picture>
          <source media="(max-width:768px)" srcSet={DeepEarthImgM} />
          <source media="(min-width:769px)" srcSet={DeepEarthImgD} />
          <img src={DeepEarthImgM} alt="deep earth" />
        </picture>
        <picture>
          <source media="(max-width:768px)" srcSet={NightArcadeImgM} />
          <source media="(min-width:769px)" srcSet={NightArcadeImgD} />
          <img src={NightArcadeImgM} alt="night arcade" />
        </picture>
        <picture>
          <source media="(max-width:768px)" srcSet={SoccerTeamImgM} />
          <source media="(min-width:769px)" srcSet={SoccerTeamImgD} />
          <img src={SoccerTeamImgM} alt="soccer team" />
        </picture>
        <picture>
          <source media="(max-width:768px)" srcSet={GridImgM} />
          <source media="(min-width:769px)" srcSet={GridImgD} />
          <img src={GridImgM} alt="the grid" />
        </picture>
        <picture>
          <source media="(max-width:768px)" srcSet={FromAboveImgM} />
          <source media="(min-width:769px)" srcSet={FromAboveImgD} />
          <img src={FromAboveImgM} alt="from up above" />
        </picture>
        <picture>
          <source media="(max-width:768px)" srcSet={PocketBorealisImgM} />
          <source media="(min-width:769px)" srcSet={PocketBorealisImgD} />
          <img src={PocketBorealisImgM} alt="pocket borealis" />
        </picture>
        <picture>
          <source media="(max-width:768px)" srcSet={CuriosityImgM} />
          <source media="(min-width:769px)" srcSet={CuriosityImgD} />
          <img src={CuriosityImgM} alt="the curiosity" />
        </picture>
        <picture>
          <source media="(max-width:768px)" srcSet={FishEyeImgM} />
          <source media="(min-width:769px)" srcSet={FishEyeImgD} />
          <img src={FishEyeImgM} alt="fisheye" />
        </picture>
      </div>
      <button className="PhotosCardContainer-Btn"> See all</button>
    </div>
  );
}
export default PhotosCard;
