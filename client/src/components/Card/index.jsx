import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const Card = ({ item }) => {
  return (
    <Link to={`/product/${item.id}`} className="link">
      <div className="card">
        <div className="image">
          {/* A <span> is always generated, even if it contains an empty string.*/}
          {/* <span>{item.isNew ? "New Season" : ""}</span> */}
          {item.isNew && <span>New Season</span>}
          <img src={item.img} alt="" className="mainImg" />
          <img src={item.img2} alt="" className="secondImg" />
        </div>
        <h2>{item.title}</h2>
        <div className="prices">
          {item.oldPrice && <h3 className="old">${item.oldPrice}</h3>}
          <h3 className="current">${item.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
