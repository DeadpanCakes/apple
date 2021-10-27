import "./Hero.css";

const Hero = () => {
  return (
    <a href="https://web.archive.org/web/20140301004610/http://www.apple.com/your-verse/">
      <div className="hero">
        <hgroup className="heroTxt">
          <h1>What will your verse be?</h1>
          <h2>
            Everyone has something to share. See how people are using iPad in
            their unique ways to add te the world's story.
          </h2>
          <a
            className="heroLink"
            href="https://web.archive.org/web/20140301004610/http://www.apple.com/your-verse/#video-your-verse"
          >
            <h3>Watch the "Your Verse" film and explore the stories</h3>
          </a>
        </hgroup>
      </div>
    </a>
  );
};

export default Hero;
