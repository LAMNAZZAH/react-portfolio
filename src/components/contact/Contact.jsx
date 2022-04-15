import React from "react";
import "./contact.scss";

function Contact() {
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img
                src="https://cdn-icons.flaticon.com/png/128/2859/premium/2859690.png?token=exp=1649924630~hmac=e1a4b9c3dd1073ff7c5679b8ae95bfae"
                alt=""
                className="c-icon"
              />{" "}
              contact@lamnazzah.com
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            this is a little <b>description</b> about what i do on the internet
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
