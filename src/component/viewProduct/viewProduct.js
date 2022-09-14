import React from "react";
import Chair from "../../img/chair.jpg";
import BottomMenu from "../home/bottomMenu";
import "./viewproduct.scss";

const ViewProduct = () => {
  return (
    <>
      <div className="ViewProduct">
        <img src={Chair} width="100%" />
        <div className="Fullproduct">

        <div className="product">
          <img src={Chair} height="20%" width="30%" className="viewfullProduct" />
          <div className="cost">

          <h4>Sandy Chair</h4>
          <h5>$150</h5>
          </div>
        </div>
        </div>
      </div>
      
      <BottomMenu />
    </>
  );
};

export default ViewProduct;
