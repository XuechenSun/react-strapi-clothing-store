import React from "react";
import "./index.scss";
import Card from "../Card";
import useFetch from "../../hooks/useFetch";

const ListCard = ({ cateId, subCateId, sortPrice }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&filters[categories][id]=${cateId}${subCateId.map(
      (item) => `&filters[sub_categories][id][$eq]=${item}`
    )}${sortPrice ? `&sort=price:${sortPrice}` : ""}`
  );

  return (
    <div className="listCard">
      {loading
        ? "Loading..."
        : data.map((item) => <Card key={item.id} item={item} />)}
    </div>
  );
};

export default ListCard;
