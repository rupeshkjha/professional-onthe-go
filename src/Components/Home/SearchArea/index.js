import React from "react";
import "./SearchArea.scss";
import blogRight from "../../../Assets/Blog/headerbg.png";

export default class SearchArea extends React.Component {
  render() {
    return (
      <div className="blogfooter-component">
        <div className="container blogfooter-container">
          <div className="row main-row">
            <div className="col-lg-6 left-area">
              <h1>We register 10% of all Indian companies .</h1>

              <p>That’s one company every 9 minutes</p>
              <div className="form-area">
                <div className="email-area">
                  <div className="send-box">
                    <input
                      className="email-input"
                      placeholder="Enter your business name"
                    />
                    <button className="send-btn">Get Started</button>
                  </div>
                  <div className="explain">
                    Over 10,000 registered and background checks
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 right-area show-web-flex">
              <img src={blogRight} alt="right-bg" style={{ height: "100%" }} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
