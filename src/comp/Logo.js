import React from "react";
import Tilt from "react-parallax-tilt";
import "./Logo.css";
import lg from "./lg.png";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 55 }}
        style={{ height: 100, width: 100 }}
      >
        <div className="Tilt-inner pa0">
          <img style={{ paddingTop: "18px" }} src={lg} />{" "}
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
