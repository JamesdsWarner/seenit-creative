import creativeLogo from "../../images/Seenit-Creative-Intro-(0-00-01-12).png";
import Button from "../button/button.component";
import Buttons from "../buttons/buttons.component";
import "./banner.styles.scss";

const Banner = () => {
  return (
    <div className="banner-container">
      <img src={creativeLogo} className="creative-logo" />
      <Buttons />
    </div>
  );
};

export default Banner;
