import React from "react";
import "./AboutUsPage.scss";

export default class AboutUsPage extends React.Component {
  render() {
    return (
      <div className="aboutus-page">
        <div className="container aboutus-container">
          <div className="title">About Us</div>

          <div className="row main-row">
            <div className="col-lg-6 order-lg-first order-second left-area bg-dark">
              <div className="image-container">
                <h3>2020</h3>
              </div>
            </div>
            <div className="col-lg-6 order-lg-second order-first right-area ">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>

          <div className="row main-row">
            <div className="col-lg-6 order-lg-first order-second left-area ">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="col-lg-6 order-lg-second order-first right-area bg-dark">
              <div className="image-container">
                <h3>2015</h3>
              </div>
            </div>
          </div>
          <div className="row main-row">
            <div className="col-lg-6 order-lg-first order-second left-area bg-dark">
              <div className="image-container">
                <h3>2010</h3>
              </div>
            </div>
            <div className="col-lg-6 order-lg-second order-first right-area ">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
