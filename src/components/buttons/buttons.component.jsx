import Button from "../button/button.component";
import "./buttons.styles.scss";

const Buttons = () => {
  return (
    <div className="buttons-container">
      <Button buttonText="About Us" />
      <Button buttonText="Meet the team" />
      <Button buttonText="Our Work" />
      <Button buttonText="Services" />
      <Button buttonText="Work with us" />
    </div>
  );
};

export default Buttons;
