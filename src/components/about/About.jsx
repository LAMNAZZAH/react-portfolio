import React from "react";
import "./about.scss";

function about() {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src="https://images.pexels.com/photos/270373/pexels-photo-270373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
          <h1 className="a-title">About me</h1>
          <p className="a-sub">I'm a fulltime freelancer developper very passionate about what I do <br /> in the field since 2018</p>
          <p className="a-desc">I had my highschool degree in 2019, I joined <br /> the superior school of technologies <br /> In 2020 and since then i realized how much I love DEV!</p>
      </div>
    </div>
  );
}

export default about;
