import React from "react";
import "./index.scss";
import Slider from "../../components/Slider";
import FeaturedProducts from "../../components/FeaturedProducts";
import Categories from "../../components/Categories";
import { featuredProductsData, trendingProductsData } from "../../Data";
import Contact from "../../components/Contact";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts
        type="featured"
        about=" Fresh drops, cult classics, and everything your wardrobe’s been waiting for."
        data={featuredProductsData}
      />
      <Categories />
      <FeaturedProducts
        type="trending"
        about="Stay ahead of the style game with our most talked-about pieces."
        data={trendingProductsData}
      />
      <Contact />
    </div>
  );
};

export default Home;
