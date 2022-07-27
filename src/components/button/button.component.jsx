import "./button.styles.scss";

const Button = (props) => {
  return (
    <div className="button-container">
      <span>{props.buttonText}</span>
    </div>
  );
};

export default Button;
