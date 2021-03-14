//Add React Router
import "../css/Dashboard/Dashboard.css";
import About from "./About";
import { GiEarthAmerica } from "react-icons/all";
import { useState, useEffect } from "react";
import Map from "./Map";
import Loader from "./Loader";
import Header from "./Header";
import Homepage from "./Homepage";

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
    <div className="Dashboard">
      <div className="left__Sidebar">
        <div className="icon">
          <span>
            <GiEarthAmerica className="kotlin__icon" />
          </span>
        </div>

        <div className="navigation__buttons">
          <button className="learn-more">Home</button>
          <button className="learn-more">NASA Event Tracker</button>
          <button className="learn-more">COVID</button>
          <button className="learn-more">About</button>
        </div>
      </div>
      <div className="right__Sidebar">
        <div className="top__Navbar">
          <h1>Kotlin Vibes</h1>
        </div>
        <div className="middle__Content">
          <Homepage />
          {/* {!loading ? <Map eventData={eventData} /> : <Loader />} */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
