import React from "react";
import "./StartArea.scss";
import blogRight from "../../../Assets/Blog/footerbg.png";
import footerPrice from "../../../Assets/Blog/footer-price.png";

export default class StartArea extends React.Component {
  render() {
    return (
      <div className="blogfooter-component">
        <div className="container blogfooter-container">
          <div className="row main-row">
            <div className="col-lg-6 left-area">
              <h1>No contract.</h1>
              <h1>No min commitment.</h1>
              <img
                src={footerPrice}
                className="show-mobile"
                alt="footer-price"
              />
              <p>
                Only 1-on-1 Pay As You Go Online Tutoring With U.S Based Tutors
                In All Subjects & Test Prep
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
                    Over 10,000 verified and background checks U.S tutors ready
                    to work with you
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 right-area show-web-flex">
              <img src={blogRight} alt="right-bg" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
