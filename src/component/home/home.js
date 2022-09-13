import React from "react";
import BottomMenu from "./bottommenu";
import Header from "./header";
import "./home.scss"
import List from "./list";
import Popularitem from "./popularitem";
import Productitem from "./product";



const Home = () => {
  return (
    <div className="FurnitureDesignHomePage">
      
      <Header />
      <List/>
      <Productitem/>
      <Popularitem/>
      <BottomMenu/>
    </div>
  );
};

export default Home;
