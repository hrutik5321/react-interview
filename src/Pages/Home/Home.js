import React from "react";
import Base from "../../layout/Base/Base";
import Countdiv from "../../components/Countdiv/Countdiv";
import Headeroptions from "../../components/Headeroptions/Headeroptions";
import TableHeader from "../../components/TableHeader/TableHeader";
import "./Home.css";
import ProductTable from "../../components/ProductTable/ProductTable";

function Home() {
  return (
    <Base>
      <div className="home">
        <h1>Agri-Input Master Maintenance</h1>
        <Countdiv />
        <Headeroptions />
        <TableHeader />
        <ProductTable />
        <TableHeader downarrow={true} />
      </div>
    </Base>
  );
}

export default Home;
