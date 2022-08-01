import creativeLogo from "../../images/Seenit-Creative-Intro-(0-00-01-12).png";
import Buttons from "../../components/buttons/buttons.component";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "./banner.styles.scss";

const Banner = () => {
  return (
    <>
      <div className="wrapper">
        <div className="banner-inner">
          <Link to="/">
            <img src={creativeLogo} className="creative-logo" />
          </Link>
          <Buttons />
          <div className="menu-icon-container">
            <i className="menu-icon" />
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Banner;
