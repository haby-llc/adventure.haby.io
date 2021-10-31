import './ComingSoon.css';
import comingSoon from '../img/coming-soon-neon.jpg';

function ComingSoon() {
  return (
    <div>
      <div className="coming-soon">
        <img src={comingSoon} className="coming-soon-img" alt="Coming Soon!" />
      </div>

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
