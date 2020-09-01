import React from "react";
import "./StartArea.scss";
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

export default class StartArea extends React.Component {
  state = {
    currentHourlyRate: 1,
  };

  hourlyRate = (value) => {
    this.setState({ currentHourlyRate: value });
  };
  componentDidMount() {
    this.setState({ currentHourlyRate: this.props.plans[0].min_rate });
  }
  render() {
    const { plans } = this.props;

    return (
      <div className="startarea-component">
        <div className="startarea-content">
          <div className="container startarea-container">
            <div className="main-row">
              <div className="col-lg-6 left-area">
                <div className="left-text">
                  <h1>
                    One on one online tutoring for K - College & Test Prep.
                  </h1>
                  {/* <h1>for K - College & Test Prep.</h1> */}
                </div>
                <div className="first-lesson">
                  <p>First lesson is </p>
                  <img src={freeBg} alt="right-bg" />
                  <p className="free-text">FREE</p>
                </div>
              </div>
              <div className="col-lg-6 right-area">
                <AliceCarousel
                  autoPlay={true}
                  keysControlDisabled={true}
                  autoPlayInterval={7000}
                  dotsDisabled={true}
                  buttonsDisabled={true}
                >
                  <img src={homeRightImg1} />
                  <img src={homeRightImg2} />
                  <img src={homeRightImg3} />
                  <img src={homeRightImg4} />
                  <img src={homeRightImg5} />
                </AliceCarousel>
              </div>
            </div>

            <div className="col-lg-4 pay-startBtn">
              {/* <div className="pay-startBtn"> */}
              <div className="pay-afford">
                <p>Pay what you can afford</p>
                <HourlyRateSlider
                  min={plans[0].min_rate}
                  max={plans[0].max_rate}
                  hourlyValue={this.state.currentHourlyRate}
                  hourlyRate={(e) => this.hourlyRate(e)}
                />
                <p className="text-center display-hourlyRate">
                  {this.state.currentHourlyRate}$/hr
                </p>
              </div>
              <div className="form-area">
                <NavLink style={{ textDecoration: "none" }} to="/sign-up">
                  <StartButton
                    className="start-btn"
                    startText="Start Free Tiral"
                  />
                </NavLink>
                {/* </div> */}
              </div>
            </div>

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
