import React from "react";
import Leftbar from "../Leftbar/Leftbar";
import "./Base.css";
function Base({ children }) {
  return (
    <div className="main-container">
      <Leftbar />
      {children}
    </div>
  );
}

export default Base;
