import React, { useState } from "react";
import "./index.scss";
import ListCard from "../../components/ListCard";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Products = () => {
  const cateId = parseInt(useParams().categoryId);
  /*Load slowly under lots of data
   const [maxPrice, setMaxPrice] = useState(1000);*/
  const [sortPrice, setSortPrice] = useState(null);

  const [selectedSubCate, setSelectedSubCate] = useState([]);
  // console.log(cateId);
  // console.log(maxPrice);
  const { data, loading, error } = useFetch(
    `/sub-categories?filters[categories][id][$eq]=${cateId}`
  );
  // console.log(data);
  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    setSelectedSubCate(
      isChecked
        ? [...selectedSubCate, value]
        : selectedSubCate.filter((item) => item !== value)
    );
  };
  console.log(selectedSubCate);
  return (
    <div className="products">
      <div className="left">
        <div className="items">
          <h2>Product Category</h2>
          {data.map((item) => (
            <div className="inputItem" key={item.id}>
              <input
                type="checkbox"
                id={item.id}
                value={item.id}
                onChange={handleChange}
              />
              <label htmlFor={item.id}>{item.title}</label>
            </div>
          ))}
        </div>
        {/* <div className="items">
          <h2>Filiter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div> */}

        <div className="items">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input
              type="radio"
              id="df"
              value="default"
              name="sort"
              checked={sortPrice === null}
              onChange={(e) => setSortPrice(null)}
            />
            <label htmlFor="df">Recommended</label>
          </div>

          <div className="inputItem">
            <input
              type="radio"
              id="lf"
              value="lowfirst"
              name="sort"
              onChange={(e) => setSortPrice("asc")}
            />
            <label htmlFor="lf">Price (Lowest First)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="hf"
              value="highfirst"
              name="sort"
              onChange={(e) => setSortPrice("desc")}
            />
            <label htmlFor="hf">Price (Highest First)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          className="cateImage"
          src="https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg"
          alt=""
        />
        <ListCard
          cateId={cateId}
          // maxPrice={maxPrice}
          sortPrice={sortPrice}
          subCateId={selectedSubCate}
        />
      </div>
    </div>
  );
};

export default Products;
