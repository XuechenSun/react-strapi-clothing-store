import React, { useEffect, useState } from "react";

import "./index.scss";

import Card from "../Card";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type, about }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}&pagination[limit]=4`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} Products</h1>
        <p>{about}</p>
      </div>

      <div className="bottom">
        {error
          ? "Something went wrong!"
          : loading
          ? "Loading..."
          : data.map((dataObj) => <Card item={dataObj} key={dataObj.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
