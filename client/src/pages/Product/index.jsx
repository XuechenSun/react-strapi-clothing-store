import React, { useState } from "react";
import "./index.scss";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/styles.min.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

const Product = () => {
  const images = [
    "https://images.pexels.com/photos/4519118/pexels-photo-4519118.jpeg",
    "https://images.pexels.com/photos/4519122/pexels-photo-4519122.jpeg",
  ];
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  function decreseQuantity() {
    setQuantity((preQuantity) => (preQuantity === 1 ? 1 : preQuantity - 1));
  }

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={() => setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={() => setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <InnerImageZoom
            className="innerImg"
            src={images[selectedImg]}
            zoomSrc={images[selectedImg]}
            zoomType="hover"
            zoomScale={0.5}
            alt=""
          />
        </div>
      </div>
      <div className="right">
        <h1>Minimalist Sports Bralette and Lounge Shorts Set</h1>
        <span className="price">$199</span>
        <p>
          This casual set features a sleek black crop top paired with
          relaxed-fit white shorts—designed for ultimate comfort and everyday
          style. Perfect for lounging, layering, or making a minimalist
          statement, this look embraces individuality with confidence and ease.
        </p>
        <div className="quantity">
          <button onClick={decreseQuantity}>-</button>
          {quantity}
          <button onClick={() => setQuantity((preQuantity) => preQuantity + 1)}>
            +
          </button>
        </div>
        <button className="add">
          <AddShoppingCartIcon />
          ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon />
            ADD TO WISH LIST
          </div>
          <div className="item">
            <BalanceIcon /> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor: HazelStore </span>
          <span>Product Type: Casual Set</span>
          <span>Tag: Set, Women, Casual</span>
        </div>
        <hr />
        <div className="details">
          <span>DESCRIPTION</span>
          <p>
            -Top: 95% Cotton, 5% Spandex <br />
            -Shorts: 100% Cotton
          </p>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <p>Made in PRC</p>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Product;
