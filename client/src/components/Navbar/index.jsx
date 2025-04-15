import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss";

import Cart from "../Cart";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Navbar = () => {
  const [openCart, setOpenCart] = useState(false);
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
            <Link className="link" to="products/1">
              Women
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="products/2">
              Men
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="products/3">
              Children
            </Link>
          </div>
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
            <Link className="link" to="/">
              About
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Contract
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
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
      {openCart && <Cart />}
    </div>
  );
};

export default Navbar;
