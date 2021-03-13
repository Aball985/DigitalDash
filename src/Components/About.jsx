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
          <li></li>
        </div>
        <div className="bios">
          <div className="">
            <p>about austin</p>
          </div>
          <div className="Greg">
            <p>about greg</p>
          </div>
          <div id="Halina"></div>
          <p>about halina</p>
        </div>
        <div id="Owen">
          <p>about owen</p>
        </div>
      </div>
    </div>
  );
}

export default About;
