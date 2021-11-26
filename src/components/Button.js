import './Button.css';

function Button({ children, onClick, small = false, outline = false, disabled = false }) {
  const buttonSize = small ? "small" : "large";
  const buttonColor = outline ? "outline" : "primary";
  const buttonPointer = disabled ? "disabled-button-pointer" : "enabled-button-pointer";

  return (
    <button
      className={`cta-button monospace-font ${buttonSize} ${buttonColor} ${buttonPointer}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
