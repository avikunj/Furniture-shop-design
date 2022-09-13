import React from "react";
import "./home.scss";
import Person from "../../img/person.jpg";
const Header = () => {
  return (
    <div className="FurnitureDesignHeader">
      <div className="Heading">
        <h2>Modern Frniture</h2>
        <p>for your house</p>
      </div>
      <div className="profile">
        <img src={Person} height={60} width={60} className="profilepic" />
      </div>
    </div>
  );
};

export default Header;
