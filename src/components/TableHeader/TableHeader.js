import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTable } from "../../store/actions";
import { CSVLink } from "react-csv";
import "./TableHeader.css";

function TableHeader({ downarrow }) {
  const dispatch = useDispatch();
  const tableContent = useSelector((state) => state.productTable);
  const headers = [
    { label: "Index", key: "index" },
    { label: "Category", key: "category" },
    { label: "Image", key: "image" },
    { label: "Description", key: "description" },
    { label: "Quantity", key: "quantity" },
  ];

  const csvReport = {
    filename: "productinfo.csv",
    headers: headers,
    data: tableContent,
  };
  return (
    <div className="tableHeader">
      <div
        className="tableHeader-content1"
        onClick={() => dispatch(toggleTable())}
      >
        <span className={downarrow ? "content1-btn-wt" : "content1-btn"}></span>
        <span style={{ marginLeft: "15px" }}>AGBUY13042020_1042</span>
        {downarrow ? (
          <span style={{ marginLeft: "15px" }}>
            <i class="fas fa-chevron-down"></i>
          </span>
        ) : (
          <span style={{ marginLeft: "15px" }}>
            <i class="fas fa-chevron-up"></i>
          </span>
        )}
      </div>
      <div className="tableHeader-content1 tableHeader-avatar">
        <img
          src="https://www.pinclipart.com/picdir/middle/547-5474602_character-avatar-clipart.png"
          alt=""
          className="tableHeader-image"
        />
        <div className="avatar-info">
          <h4>Alex Lee</h4>
          <p>Mon, 13 Apr, 10:42 AM</p>
        </div>
      </div>
      <div className="tableHeader-content1">
        <img
          src="https://w7.pngwing.com/pngs/117/809/png-transparent-microsoft-excel-training-computer-software-microsoft-office-excel-template-angle-text.png"
          className="tableHeader-image"
          alt=""
        />
        <span style={{ marginLeft: "10px" }}>
          <CSVLink
            {...csvReport}
            style={{ textDecoration: "none", color: "black" }}
          >
            RFQList_13042020_1042
          </CSVLink>
        </span>
        <span style={{ marginLeft: "10px" }}>
          <i class="fas fa-download"></i>
        </span>
      </div>
    </div>
  );
}

export default TableHeader;
