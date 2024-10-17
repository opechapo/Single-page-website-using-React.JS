import React from "react";
import "./home.css";
import FIDO from "/fido-dido.jpg";

function Home() {
  return (
    <div className="heroContainer">
      <div className="heroText">
        <h1>Lorem ipsum dolor sit amet.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam maiores
          odit repellendus 
        </p>
      </div>
      <div className="imgContainer">
        <img src={FIDO} alt="" />
      </div>
    </div>
  );
}

export default Home;
