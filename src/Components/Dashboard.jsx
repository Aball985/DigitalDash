import "../css/Dashboard/Dashboard.css";
import About from "./About";
import Test from "./Test";
import Extra1 from "./Extra1";
import { SiKotlin } from "react-icons/all";
const Dashboard = () => {
  return (
    <div className="Dashboard">
      <div className="left__Sidebar">
        <span>
          <SiKotlin className="kotlin__icon" />
        </span>
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
      <Test />
      <Extra1 />
    </div>
  );
};

export default Dashboard;
