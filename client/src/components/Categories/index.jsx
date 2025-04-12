import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg"
            alt=""
          />
          <button>
            <Link className="link" to="sale">
              Sale
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://images.pexels.com/photos/2744193/pexels-photo-2744193.jpeg"
            alt=""
          />
          <button>
            <Link className="link" to="products/1">
              Women
            </Link>
          </button>
        </div>
      </div>

      <div className="col">
        <div className="row">
          <img
            src="https://images.pexels.com/photos/977380/pexels-photo-977380.jpeg"
            alt=""
          />
          <button>
            <Link className="link" to="newseason">
              New Season
            </Link>
          </button>
        </div>
      </div>

      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src=" https://images.pexels.com/photos/23879708/pexels-photo-23879708/free-photo-of-photo-of-a-tattooed-man-in-a-white-shirt-and-eyeglasses-posing-outside.jpeg"
                alt=""
              />
              <button>
                <Link className="link" to="products/2">
                  Men
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img
                src="https://images.pexels.com/photos/325527/pexels-photo-325527.jpeg"
                alt=""
              />
              <button>
                <Link className="link" to="accessories">
                  Accessories
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://images.pexels.com/photos/6153367/pexels-photo-6153367.jpeg"
            alt=""
          />
          <button>
            <Link className="link" to="shoes">
              Shoes
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
