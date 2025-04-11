import React from "react";
import "./index.scss";
import Slider from "../../components/Slider";
import FeaturedProducts from "../../components/FeaturedProducts";
import { featuredProductsData, trendingProductsData } from "../../Data";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts
        type="featured"
        about=" Fresh drops, cult classics, and everything your wardrobe’s been waiting for."
        data={featuredProductsData}
      />
      <FeaturedProducts
        type="trending"
        about="Stay ahead of the style game with our most talked-about pieces."
        data={trendingProductsData}
      />
    </div>
  );
};

export default Home;
