import "../styles/Dashboard/Dashboard.css";
import About from "./About";

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <div className="left__Sidebar">
        <h1>Left Side</h1>
      </div>
      <div className="right__Sidebar">
        <div className="top__Navbar">
          <h1>Top Navbar</h1>
        </div>
        <div className="middle__Content">
          <h1>This is content</h1>
        </div>
      </div>
      <About />
    </div>
  );
};

export default Dashboard;
