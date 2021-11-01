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
          Mint your&nbsp;
          <a
            href="https://habylabs.notion.site/Character-0e4068e606a74f0195685e83564046d5"
            target="_blank"
            rel="noopener noreferrer"
            className="link monospace-font"
          >
            Character
          </a> and join a new
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
          character has&nbsp;
          <a
            href="https://habylabs.notion.site/Stats-8b5e87f09c974062b7ddc6930231ca36"
            target="_blank"
            rel="noopener noreferrer"
            className="link monospace-font"
          >
            Stats
          </a> and skills. 
          Use them to clear dungeons and earn gold.
          Be the adventurer you were always born to be.
        </p>
      </div>
    </div>
  );
};

export default Title;
