import './Title.css';

function Title() {
  return (
    <div className="title">
      <div className="title-header">
        <h1 className="title-header-text serif-font">
          Welcome Adventurer!
        </h1>
      </div>
      <div className="title-description">
        <p className="title-description-text monospace-font">
          Mint your <span className="highlight">Character</span> and join a new
          world of adventure that is inspired by and built on top of&nbsp; 
          <a
            href="https://www.lootproject.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="link monospace-font"
          >
            Loot
          </a>.
          Your character is randomly generated and stored on chain. Each 
          character has <span className="highlight">stats</span> and skills. 
          Use them to clear dungeons and <span className="highlight">earn gold</span>.
          Be the adventurer you were always born to be.
        </p>
      </div>
    </div>
  );
};

export default Title;
