import React from "react";
import "./Leftbar.css";
import { NavLink } from "react-router-dom";

function Leftbar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <NavLink
            to="/purchase"
            className="nav-link"
            activeClassName="nav-link-active"
          >
            Agri-Purchase Management
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/input"
            className="nav-link"
            activeClassName="nav-link-active"
          >
            Agri-input Master Maintanance
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/supplier"
            className="nav-link"
            activeClassName="nav-link-active"
          >
            Supplier Master Maintanance
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className="nav-link"
            activeClassName="nav-link-active"
          >
            Agri-input Purchase Request
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Leftbar;
