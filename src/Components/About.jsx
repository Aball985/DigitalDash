import "../css/About/About.css";

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
            <h3>Austin 💻</h3>
            <p>Senior in college. Loves react idk.</p>
          </div>
          <div className="bio__Card">
            <h3>Greg 🌙</h3>
            <p>Sophomore in college. I enjoy coding cool stuff.</p>
          </div>
          <div className="bio__Card">
            <h3>Halina 🐢</h3>
            <p>
              I am a junior in high school. I like coding, hiking, and video
              games.
            </p>
          </div>
          <div className="bio__Card">
            <h3>Owen 🍎</h3>
            <p>
              I'm a freshman in highschool and I like to work on small little
              projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
