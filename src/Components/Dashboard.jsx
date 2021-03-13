import "../styles/Dashboard/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <div className="left__Sidebar">
        <h1>Left Side</h1>
      </div>
      <div className="right__Sidebar">
        <h1>Right Side</h1>
        <div className="top__Navbar"></div>
        <div className="middle__Content">
          <h1>This is content</h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
