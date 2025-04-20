import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss";

import Cart from "../Cart";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import useFetch from "../../hooks/useFetch";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { data } = useFetch("/categories");
  const [openCart, setOpenCart] = useState(false);
  if (!data) {
    return null; // 或者 return <Loading />
  }

  const womenCategory = data.find((cate) => cate.title === "women");
  const menCategory = data.find((cate) => cate.title === "men");
  const childrenCategory = data.find((cate) => cate.title === "children");

  const products = useSelector((state) => state.cart.products);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/img/en.png" alt="New Zealand" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>NZD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            {womenCategory && (
              <Link className="link" to={`products/${womenCategory.id}`}>
                Women
              </Link>
            )}
          </div>
          <div className="item">
            {menCategory && (
              <Link className="link" to={`products/${menCategory.id}`}>
                Men
              </Link>
            )}
          </div>
          {childrenCategory && (
            <div className="item">
              <Link className="link" to={`products/${childrenCategory.id}`}>
                Children
              </Link>
            </div>
          )}
        </div>
        <div className="center">
          <Link className="link" to="/">
            HAZELSTORE
          </Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="/">
              Homepage
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/about">
              About
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/questions">
              FAQ
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Stores
            </Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonOutlineIcon />
            <FavoriteBorderIcon />
            <div className="cartIcon" onClick={() => setOpenCart(!openCart)}>
              <ShoppingCartOutlinedIcon />
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {openCart && <Cart />}
    </div>
  );
};

export default Navbar;
