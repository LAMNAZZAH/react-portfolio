import React from "react";
import "./ProductList.scss";
import Product from "../product/Product.jsx";
import { products } from "../../data";

function ProductList() {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">my skills</h1>
        <p className="pl-desc">
          these are things that i do with the percentages of how much i know
          something <br />
          it's really cool and informative stuff to keep in mind
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
