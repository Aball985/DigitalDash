import "../css/About/About.css";
function About() {
  return (
    <div>
      <div className="about__Section">
        <h1>About Us</h1>
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
            <h3>Greg</h3>
            <p>greg things</p>
          </div>
          <div className="bio__Card">
            <h3>Halina</h3>
            <p>turtle</p>
          </div>
          <div className="bio__Card">
            <h3>Owen</h3>
            <p>java epic</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
