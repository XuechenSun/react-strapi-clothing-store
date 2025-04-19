import React from "react";
import "./index.scss";
import Slider from "../../components/Slider";
import FeaturedProducts from "../../components/FeaturedProducts";
import Categories from "../../components/Categories";
import Contact from "../../components/Contact";

const Home = () => {
  // const BuggyComponent = () => {
  //   throw new Error("This is a deliberate error to test ErrorBoundary!");
  // };
  return (
    <div className="home">
      {/* <BuggyComponent /> */}
      <Slider />
      <FeaturedProducts
        type="featured"
        about=" Fresh drops, cult classics, and everything your wardrobe’s been waiting for."
      />
      <Categories />
      <FeaturedProducts
        type="trending"
        about="Stay ahead of the style game with our most talked-about pieces."
      />
      <Contact />
    </div>
  );
};

export default Home;
