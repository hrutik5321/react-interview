import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Base from "../../layout/Base/Base";
import "./Product.css";

function Product() {
  const product = useSelector((state) => state.product);
  useEffect(() => {
    console.log(product);
  }, []);
  return (
    <Base>
      <div className="product-container">
        <h1>Product Details</h1>
        <div className="product-info">
          <img src={product.image} alt="" className="product-image" />
          <div className="product-details">
            <h2>Category:</h2>
            <h4>{product.category}</h4>
            <h2>Description:</h2>
            <h4>{product.description}</h4>
            <h2>Quantity:</h2>
            <h4>{product.quantity}</h4>
          </div>
        </div>
      </div>
    </Base>
  );
}

export default Product;
