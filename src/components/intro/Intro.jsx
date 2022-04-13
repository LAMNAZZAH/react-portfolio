import React from "react";
import "./intro.scss";
import profile from "../../assets/profile.png";
import scroll from "../../assets/scroll.svg";

function intro() {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Azul, my name is</h2>
          <h1 className="i-name">Mohammed LAMNAZZAH</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developper</div>
              <div className="i-title-item">System administrator</div>
              <div className="i-title-item">UX/UI designer</div>
              <div className="i-title-item">3d artist</div>
            </div>
          </div>
          <p className="i-desc">
            I'm a frontend developper, specialized in the javascript <br />
            stacks like PERN and MERN, it is really awesome!
          </p>
          <img src={scroll} alt="" className="i-scroll" />
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={profile} alt="" className="i-image" />
      </div>
    </div>
  );
}

export default intro;
