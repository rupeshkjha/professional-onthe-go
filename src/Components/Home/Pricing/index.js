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
    selectedMenuName: "Lorem",
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
          <div className="title">Our Services</div>
          <div className="show-web-flex">
            <div className="description mx-auto ">
              <p>Lorem ipsum dolor Lorem ipsum dolor</p>
              <img src={freeBg} alt="right-bg" />
              <p className="free-txt">Lorem </p>
            </div>
          </div>

          <div className="show-mobile mx-auto">
            <div className="description ">
              <p>Lorem ipsum dolor Lorem ipsum dolor</p>
            </div>
          </div>

          <div className="show-mobile mx-auto">
            <div className="description des-position">
              <p>Lorem ipsum dolor </p>
              <img src={freeBg} alt="right-bg" />
              <p className="free-txt">Lorem </p>
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
                 Lorem
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
            <div class="container">
  <div class="card-deck mb-3 text-center">
    <div class="card mb-4 shadow-sm">
      <div class="card-header">
        <h4 class="my-0 font-weight-normal">Lorem ipsum </h4>
      </div>
      <div class="card-body">
        <h1 class="card-title pricing-card-title">$ <small class="text-muted">/ mo</small></h1>
        <ul class="list-unstyled mt-3 mb-4">
          <li>Lorem ipsum dolor</li>
          <li>Lorem ipsum dolor</li>
          <li>Lorem ipsum dolor</li>
          <li>Lorem ipsum dolor</li>
        </ul>
        <a aria-current="page" class="menu-item active" href="/">Get Started</a>
      </div>
    </div>
    <div class="card mb-4 shadow-sm">
      <div class="card-header">
        <h4 class="my-0 font-weight-normal">Lorem ipsum </h4>
      </div>
      <div class="card-body">
        <h1 class="card-title pricing-card-title">$ <small class="text-muted">/ mo</small></h1>
        <ul class="list-unstyled mt-3 mb-4">
          <li>Lorem ipsum dolor</li>
          <li>Lorem ipsum dolor</li>
          <li>Lorem ipsum dolor</li>
          <li>Lorem ipsum dolor</li>
        </ul>
        <a aria-current="page" class="menu-item sign-up active" href="/">Get Started</a>
      </div>
    </div>
    <div class="card mb-4 shadow-sm">
      <div class="card-header">
        <h4 class="my-0 font-weight-normal">Lorem ipsum </h4>
      </div>
      <div class="card-body">
        <h1 class="card-title pricing-card-title">$ <small class="text-muted">/ mo</small></h1>
        <ul class="list-unstyled mt-3 mb-4">
          <li>Lorem ipsum dolor</li>
          <li>Lorem ipsum dolor</li>
          <li>Lorem ipsum dolor</li>
          <li>Lorem ipsum dolor</li>
        </ul>
        <a aria-current="page" class="menu-item sign-up active" href="/">Get Started</a>
      </div>
      
    </div>
  </div>

  
</div>
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}
