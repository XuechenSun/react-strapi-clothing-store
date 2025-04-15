import React from "react";
import "./index.scss";
import { ListProductsData } from "../../Data";

import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const Cart = () => {
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {ListProductsData.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <div className="price">1 x ${item.price}</div>
          </div>
          <DeleteOutlineOutlinedIcon className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Reset Cart</span>
    </div>
  );
};

export default Cart;
