import React from "react";
import { NavLink } from "react-router-dom";

const mainNavigation = (props) => (
  <nav>
    <ul>
      <li>
        <NavLink to="../About.jsx">About</NavLink>
      </li>
    </ul>
  </nav>
);
export default mainNavigation;
