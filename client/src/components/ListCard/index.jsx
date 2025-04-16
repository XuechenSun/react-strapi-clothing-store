import React from "react";
import "./index.scss";
import { ListProductsData } from "../../Data";
import Card from "../Card";

const ListCard = () => {
  return (
    <div className="listCard">
      {ListProductsData.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ListCard;