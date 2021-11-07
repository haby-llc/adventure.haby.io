import './Button.js';

function Button({ children, onClick }) {
  return (
    <button className="cta-button monospace-font" style={{ border: "none", cursor: "pointer" }} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
