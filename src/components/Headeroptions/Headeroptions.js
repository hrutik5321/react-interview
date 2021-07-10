import React from "react";
import "./Headeroptions.css";

function Headeroptions() {
  const options = [
    { option: "Undo Batch" },
    { option: "Assign Supplies" },
    { option: "Generate Po" },
  ];
  return (
    <div className="main-header">
      <div className="header">
        {options.map((data) => (
          <div className="header-option">
            <span>{data.option}</span>
          </div>
        ))}
      </div>
      <div className="sub-header">
        <span>Executing Agri-Input Orders</span>
        <span>Batchd By</span>
      </div>
    </div>
  );
}

export default Headeroptions;
