import React from "react";
import "./OurSupport.scss";
import freeBg from "../../../Assets/Home/free-bg.png";
import cbs from "../../../Assets/Home/CBS.png";
import cnn from "../../../Assets/Home/CNN.png";
import fox from "../../../Assets/Home/FOX.png";
import boston from "../../../Assets/Home/The_Boston_Globe.png";
import miami from "../../../Assets/Home/The-Miami-Herald-Logo.png";
import homeRightImg1 from "../../../Assets/Home/home-rightImg1.png";
import homeRightImg2 from "../../../Assets/Home/home-rightImg2.png";
import homeRightImg3 from "../../../Assets/Home/home-rightImg3.png";
import homeRightImg4 from "../../../Assets/Home/home-rightImg4.png";
import homeRightImg5 from "../../../Assets/Home/home-rightImg5.png";
import { StartButton, HourlyRateSlider } from "../../Common";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { NavLink } from "react-router-dom";

export default class OurSupport extends React.Component {
  state = {
    currentHourlyRate: 1,
  };

  hourlyRate = (value) => {
    this.setState({ currentHourlyRate: value });
  };

  render() {
    return (
      <div className="startarea-component">
        <div className="startarea-content">
          <div className="container startarea-container">
            <h1>Our Partners/Support </h1>

            <div className="row show-web web-logo">
              <div className="col-lg-12 logo-area show-web-flex">
                <img src={cnn} alt="cnn" />
                <img src={cbs} alt="cbs" />
                <img src={fox} alt="fox" />
                <img src={boston} alt="boston" />
                <img src={miami} alt="miami" />
              </div>
            </div>
            <div className="show-mobile">
              <div className="col-lg-12 logo-area logo-area-mobile show-mobile-flex">
                <img src={cbs} alt="cbs" />
                <img src={cnn} alt="cnn" />
                <img src={fox} alt="fox" />
              </div>
              <div className="col-lg-12 logo-area logo-area-mobile show-mobile-flex">
                <img src={boston} alt="boston" />
                <img src={miami} alt="miami" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
