import './Button.css';

function Button({ children, onClick, small = false, outline = false }) {
  const buttonSize = small ? "small" : "large";
  const buttonColor = outline ? "outline" : "primary"; 

  return (
    <button
      className={`cta-button monospace-font ${buttonSize} ${buttonColor}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
