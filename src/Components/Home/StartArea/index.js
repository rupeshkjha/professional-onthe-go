import React from "react";
import "./StartArea.scss";

export default class StartArea extends React.Component {
  render() {
    return (
      <div className="blogfooter-component">
        <div className="container blogfooter-container">
          <div className="row main-row">
            <div className="col-lg-6 left-area">
              <h1>Lorem ipsum </h1>
              <h1>Lorem ipsum dolor sit amet</h1>
              <p>
                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
              </p>
              <div className="form-area">
                <div className="email-area">
                  <div className="send-box">
                    <input
                      className="email-input"
                      placeholder="Enter your Email"
                    />
                    <button className="send-btn">Get Started</button>
                  </div>
                  <div className="explain">
                    Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 right-area show-web-flex">

            </div>
          </div>
        </div>
      </div>
    );
  }
}
