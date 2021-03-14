import React, { useState, useEffect } from "react";
import "../../css/Darkmode/Darkmode.css";
import "../../css/Dashboard/Dashboard.css";
import Dashboard from "../Dashboard.jsx";

function DarkModeToggle() {
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    const currentThemeColor = localStorage.getItem("theme-color");
    if (currentThemeColor === "theme-dark") {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, []);
  // add a class to add/remove
  const handleLabelClick = () => {
    if (isDark) {
      localStorage.setItem("theme-color", "theme-light");
      setIsDark(false);
    } else {
      localStorage.setItem("theme-color", "theme-dark");
      setIsDark(true);
    }
  };

  return (
    <div className={`Dashboard ${isDark ? "theme-dark" : ""}`}>
      <div className="theme-switcher-wrap">
        <label
          className={`theme-switcher-label ${isDark ? "active" : ""}`}
          onClick={handleLabelClick}
        >
          <input type="checkbox"></input>
          <div className="switch-path">
            <div className="switch-handle"></div>
          </div>
        </label>
      </div>
    </div>
  );
}

export default DarkModeToggle;
