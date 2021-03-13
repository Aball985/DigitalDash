import "../styles/About/About.css";
function About() {
  return (
    <div>
      <h1>About us</h1>
      <div className="about_Box">
        <div className="goals">
          <h2>Goals of the app</h2>
          <p>
            Inform people of vital information for their safety in a fun
            innovative way!
          </p>
          <ul>
            <li>list</li>
          </ul>
        </div>
        <div className="bios">
          <div className="bio_Box">
            <p>about austin</p>
          </div>
          <div className="bio_Box">
            <p>about greg</p>
          </div>
          <div className="bio_Box"></div>
          <p>about halina</p>
        </div>
        <div className="bio_Box">
          <p>about owen</p>
        </div>
      </div>
    </div>
  );
}

export default About;
