import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { Link } from "react-router-dom";
import "./buttons.styles.scss";

const Buttons = () => {
  return (
    <nav className="nav-menu">
      <div className="buttons-container">
        <Button buttonType="about-button">
          <Link className="nav-link" to="/about">
            About us
          </Link>
        </Button>
        <Button buttonType="meet-team-button">
          <Link className="nav-link" to="/meet-the-team">
            Meet the team
          </Link>
        </Button>
        <Button buttonType="our-work-button">
          <Link className="nav-link" to="/our-work">
            Our work
          </Link>
        </Button>
        <Button buttonType="services-button">
          <Link className="nav-link" to="/services">
            Services
          </Link>
        </Button>
        <Button buttonType="work-with-us-button">
          <Link className="nav-link" to="/work-with-us">
            Work with us
          </Link>
        </Button>
      </div>
    </nav>
  );
};

export default Buttons;
