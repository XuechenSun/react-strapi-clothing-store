import React from "react";
import "./index.scss";

import Card from "../Card";

const FeaturedProducts = ({ type, about, data }) => {
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} Products</h1>
        <p>{about}</p>
      </div>

      <div className="bottom">
        {data.map((dataObj) => (
          <Card item={dataObj} key={dataObj.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
