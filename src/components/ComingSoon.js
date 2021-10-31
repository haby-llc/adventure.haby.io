import './ComingSoon.css';

function ComingSoon() {
  return (
    <div className="coming-soon">
      <p className="coming-soon-text monospace-font">
        Launching November 11, 2021
      </p>
      <div className="cta">
        <a
          className="cta-button"
          href="https://discord.gg/nWZNmJmQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join our Discord
        </a>
      </div>
    </div>
  );
};

export default ComingSoon;
