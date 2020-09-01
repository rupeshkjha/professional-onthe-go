import React from "react";
import "./Pricing.scss";
import { StartButton } from "../../";
import freeBg from "../../../Assets/Home/free-bg2.png";
import menuDown from "../../../Assets/Home/menu-down.png";
import { WeekHourSlider, HourlyRateSlider } from "../../../Components";
import { NavLink } from "react-router-dom";

export default class Pricing extends React.Component {
  state = {
    currentCategory: 0,
    selectMenu: false,
    selectedMenuName: "Weekly",
    currentWeekHour: 1,
    currentHourlyRate: 1,
    selectedItem: 0,
  };

  componentDidMount() {
    this.setState({ selectedItem: this.props.plans[0] });
  }

  selectCategory = (item, index) => {
    console.log("selected category -> ", item);
    this.setState({
      selectedItem: item,
      currentWeekHour: item.min_hour,
      currentHourlyRate: item.min_rate,
    });
    this.setState({ currentCategory: index });
    this.setState({ selectedMenuName: item.name });
  };

  openCloseMenu = (selectMenu) => {
    this.setState({ selectMenu });
  };

  selectedMenu = (item) => {
    this.setState({ selectedMenuName: item.name });
    this.setState({ selectMenu: false });
  };

  weeklyHour = (value) => {
    this.setState({ currentWeekHour: value });
  };

  hourlyRate = (value) => {
    this.setState({ currentHourlyRate: value });
  };

  render() {
    const { plans } = this.props;
    return (
      <div className="pricing-component">
        <div className="container pricing-container">
          <div className="title">Pricing</div>
          <div className="show-web-flex">
            <div className="description mx-auto ">
              <p>Choose how much to pay and your first lesson is </p>
              <img src={freeBg} alt="right-bg" />
              <p className="free-txt">FREE</p>
            </div>
          </div>

          <div className="show-mobile mx-auto">
            <div className="description ">
              <p>Choose how much to pay and your first</p>
            </div>
          </div>

          <div className="show-mobile mx-auto">
            <div className="description des-position">
              <p>lesson is </p>
              <img src={freeBg} alt="right-bg" />
              <p className="free-txt">FREE</p>
            </div>
          </div>

          <div className="row main-row">
            <div className="pricing-header show-web-flex">
              {plans.map((item, index) => (
                <div
                  className={`center-item  ${
                    this.state.currentCategory === index
                      ? "category-active"
                      : "category-unActive"
                  }`}
                  key={index}
                  onClick={(e) => this.selectCategory(item, index)}
                >
                  {item.name}
                </div>
              ))}
            </div>

            <div
              className="show-mobile"
              style={{ width: "100%", paddingRight: 30 }}
            >
              {this.state.selectMenu ? (
                <div className="pricing-mobile-header-list">
                  <div className="col-lg-10 col-md-10 col-sm-10 col-10 menu-left-position">
                    {plans.map((item, index) => (
                      <div
                        className={`center-item   ${
                          index === 3 ? "prcing-menu-final" : "prcing-menu"
                        }`}
                        key={index}
                        onClick={(e) => this.selectedMenu(item)}
                      >
                        {item.name}
                      </div>
                    ))}
                  </div>

                  <div
                    className="col-lg-2 col-md-2 col-sm-2 col-2 menu-right-position"
                    onClick={(e) => this.openCloseMenu(false)}
                  >
                    <div className="drop-icon text-center">
                      <img src={menuDown} alt="right-bg" />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="pricing-mobile-header">
                  <div className="col-lg-10 col-md-10 col-sm-10 col-10 menu-left-position">
                    <div
                      className="center-item prcing-menu"
                      onClick={(e) => this.openCloseMenu(true)}
                    >
                      {this.state.selectedMenuName}
                    </div>
                  </div>

                  <div
                    className="col-lg-2 col-md-2 col-sm-2 col-2 menu-right-position"
                    onClick={(e) => this.openCloseMenu(true)}
                  >
                    <div className="drop-icon text-center">
                      <img src={menuDown} alt="right-bg" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="pricing-boday">
              <div className="slider-block">
                <div className="slider-item">
                  <div className="slider-des-header text-center">
                    {this.state.currentWeekHour}Hrs
                  </div>
                  <div className="slider-des-body text-center">
                    Hours needed per week?
                  </div>
                  <WeekHourSlider
                    min={this.state.selectedItem.min_hour}
                    max={this.state.selectedItem.max_hour}
                    weeklyValue={this.state.currentWeekHour}
                    weeklyHour={(e) => this.weeklyHour(e)}
                  />
                </div>
                <div className="slider-item">
                  <div className="slider-des-header text-center">
                    ${this.state.currentHourlyRate}/hr
                  </div>
                  <div className="slider-des-body text-center">
                    Choose your price
                  </div>
                  <HourlyRateSlider
                    min={this.state.selectedItem.min_rate}
                    max={this.state.selectedItem.max_rate}
                    hourlyValue={this.state.currentHourlyRate}
                    hourlyRate={(e) => this.hourlyRate(e)}
                  />
                </div>
              </div>
              <div className="total-price">
                <div className="text-center mx-auto">
                  <span>
                    {this.state.selectedMenuName} cost for{" "}
                    {this.state.currentWeekHour}hrs:{" "}
                  </span>
                  <span className="price">
                    ${this.state.currentWeekHour * this.state.currentHourlyRate}
                  </span>
                </div>
              </div>
              <div className="note">
                <p>
                  At GradeGetter, we let our customers choose what they can pay
                  for online and one-on-one tutoring. Paying a little more helps
                  to offset the cost for families who might not be able to
                  afford tutoring regularly. With this approach, we are able to
                  make private tutoring more accessible and affordable for
                  everyone.
                </p>
              </div>
            </div>
          </div>
          <NavLink style={{ textDecoration: "none" }} to="/sign-up">
            <StartButton className="start-btn" startText="Start Free Tiral" />
          </NavLink>
        </div>
      </div>
    );
  }
}
