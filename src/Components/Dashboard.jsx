//Add React Router
import "../css/Dashboard/Dashboard.css";
import About from "./About";
import { GiEarthAmerica } from "react-icons/all";
import { useState, useEffect } from "react";
import Map from "./Nasa/Map";
import Loader from "./Nasa/Loader";
import Homepage from "./Homepage";
import Covid from "./Covid";
import Darkmode from "./Darkmode/Darkmode";
import NasaLogo from "../assets/NASA_logo.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Dashboard = () => {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch(
        "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events"
      );
      const { events } = await res.json();

      setEventData(events);
      setLoading(false);
    };

    fetchEvents();
  }, []);

  return (
    <Router>
      <div className="Dashboard">
        <div className="left__Sidebar">
          <div className="icon">
            <span>
              <GiEarthAmerica className="kotlin__icon" />
            </span>
          </div>

          <div className="navigation__buttons">
            <Link to="/">
              <button className="learn-more">Home</button>
            </Link>
            <Link to="/NasaEventTracker">
              <button className="learn-more">NASA Event Tracker</button>
            </Link>
            <Link to="/Covid">
              <button className="learn-more">COVID</button>
            </Link>
            <Link to="/About">
              <button className="learn-more">About</button>
            </Link>
            <Darkmode />
          </div>
        </div>
        <div className="right__Sidebar">
          <div className="top__Navbar">
            <h1>Kotlin Vibes</h1>
            <span>
              <img src={NasaLogo} alt="" className="Nasa" />
            </span>
          </div>
          <div className="middle__Content">
            <Switch>
              <Route path="/" exact component={Homepage}></Route>
              <Route path="/Map" exact component={Map}></Route>
              {/* <Route path="/Covid" exact component={Covid}></Route> */}
              <Route path="/About" exact component={About}></Route>
              {!loading ? <Map eventData={eventData} /> : <Loader />}
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Dashboard;
