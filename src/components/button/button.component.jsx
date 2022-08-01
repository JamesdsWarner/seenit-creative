import "./button.styles.scss";

const Button = ({ buttonType, children, ...otherProps }) => {
  return (
    <div className="button-container">
      <div className={`base-button ${buttonType}`}>{children}</div>
    </div>
  );
};

export default Button;
