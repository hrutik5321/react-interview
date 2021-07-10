import React from "react";
import { useState } from "react";
import "./Countdiv.css";

function Countdiv() {
  const counts = [
    { count: 1, text: "Pending" },
    { count: 2, text: "Pending" },
    { count: 3, text: "Pending" },
    { count: 4, text: "Pending" },
  ];

  return (
    <div className="top-bar">
      {counts.map((data) => {
        return (
          <div className="count-div">
            <span className="count-div_number">{data.count}</span>
            <span className="count-div_text">{data.text}</span>
          </div>
        );
      })}
    </div>
  );
}

export default Countdiv;
