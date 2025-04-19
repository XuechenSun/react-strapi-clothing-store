import React, { useState } from "react";
import "./index.scss";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/styles.min.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import useFetch from "../../hooks/useFetch";
import { addToCart } from "../../redux/cartReducer";

const Product = () => {
  const { id } = useParams();
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);

  const { data, loading, error } = useFetch(
    `/products?filters[id][$eq]=${id}&populate=*`
  );

  const dispatch = useDispatch();

  function decreseQuantity() {
    setQuantity((preQuantity) => (preQuantity === 1 ? 1 : preQuantity - 1));
  }

  // Trying to access the image URL too early — the data hasn’t been loaded yet
  // console.log(import.meta.env.VITE_API_UPLOAD_URL + data[0][selectedImg].url);

  return (
    <div className="product">
      {loading ? (
        "Loading..."
      ) : (
        <>
          <div className="left">
            <div className="images">
              <img
                src={import.meta.env.VITE_API_UPLOAD_URL + data?.[0]?.img?.url}
                alt=""
                onClick={() => setSelectedImg("img")}
              />

              <img
                src={import.meta.env.VITE_API_UPLOAD_URL + data?.[0]?.img2?.url}
                alt=""
                onClick={() => setSelectedImg("img2")}
              />
            </div>

            <div className="mainImg">
              <InnerImageZoom
                className="innerImg"
                src={
                  import.meta.env.VITE_API_UPLOAD_URL +
                  data?.[0]?.[selectedImg]?.url
                }
                zoomSrc={
                  import.meta.env.VITE_API_UPLOAD_URL +
                  data?.[0]?.[selectedImg]?.url
                }
                zoomType="hover"
                zoomScale={0.5}
                alt=""
              />
            </div>
          </div>
          <div className="right">
            <h1>{data?.[0]?.title}</h1>
            <span className="price">${data[0]?.price}</span>
            <p>{data?.[0]?.description}</p>
            <div className="quantity">
              <button onClick={decreseQuantity}>-</button>
              {quantity}
              <button
                onClick={() => setQuantity((preQuantity) => preQuantity + 1)}
              >
                +
              </button>
            </div>
            <button
              className="add"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: data?.[0]?.id,
                    title: data?.[0]?.title,
                    img:
                      import.meta.env.VITE_API_UPLOAD_URL + data?.[0]?.img?.url,
                    price: data?.[0]?.price,
                    quantity,
                  })
                )
              }
            >
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
              <span>
                Product Type: {data[0]?.sub_categories?.map((sub) => sub.title)}
              </span>
              <span>
                Tag: {data[0]?.categories?.map((cat) => cat.title)},&nbsp;
                {data[0]?.sub_categories?.map((sub) => sub.title)}
              </span>
            </div>
            <hr />
            <div className="details">
              <span>DESCRIPTION</span>
              <p>-&nbsp;&nbsp;{data[0]?.material}</p>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              {data[0]?.origin && <p>Made in {data[0]?.origin}</p>}
              <hr />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
