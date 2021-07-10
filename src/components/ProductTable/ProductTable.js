import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectProduct } from "../../store/actions";
import "./ProductTable.css";

function ProductTable() {
  const dispatch = useDispatch();
  const tableToggle = useSelector((state) => state.showTable);

  const tableContent = useSelector((state) => state.productTable);

  return (
    <div className="productTable">
      {tableToggle ? (
        <table>
          <tr className="table-head">
            <th></th>
            <th>Agri-Input Category</th>
            <th>Product Image</th>
            <th>Product Description</th>
            <th>Order Quantity</th>
          </tr>
          {tableContent.map((data) => (
            <tr onClick={() => dispatch(selectProduct(data))}>
              <td>{data.index}.</td>
              <td>{data.category}</td>
              <td>
                <img className="productTable-image" src={data.image} alt="" />
              </td>
              <td>{data.description}</td>
              <td>{data.quantity}</td>
              <td className="table-icon">
                <Link
                  to="/product"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <i class="fas fa-external-link-alt"></i>
                </Link>
              </td>
            </tr>
          ))}
        </table>
      ) : (
        ""
      )}
    </div>
  );
}

export default ProductTable;
