import "../css/About/About.css";
import { GiTurtle } from "react-icons/all";
import { WiMoonAltThirdQuarter } from "react-icons/all";
import { GiAppleMaggot } from "react-icons/all";

function About() {
  return (
    <div>
      <div className="title">
        <h1>About Us</h1>
      </div>
      <div className="about__Section">
        <div className="left__Side">
          <h2>Goals</h2>
          <p>
            We use data from APIs 🛰️ to help inform people on safety issues such
            as:
          </p>
          <li>COVID</li>
          <li>wild fires</li>
        </div>
        <div className="right__Side">
          <div className="bio__Card">
            <h3>Austin</h3>
            <p>does cool stuff</p>
          </div>
          <div className="bio__Card">
            <h3>
              Greg <WiMoonAltThirdQuarter />
            </h3>
            <p>Sophomore in college. I enjoy coding cool stuff.</p>
          </div>
          <div className="bio__Card">
            <h3>
              Halina <GiTurtle />
            </h3>
            <p>
              I am a junior in high school. I like coding, hiking, and video
              games.
            </p>
          </div>
          <div className="bio__Card">
            <h3>
              Owen <GiAppleMaggot />
            </h3>
            <p>I'm a freshman in highschool and I like to code stuff.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
