import React from "react";
import "./Header.scss";
import logo from "../../../Assets/Common/logo.png";

import hamburger from "../../../Assets/Header/hamburger.svg";
import { NavLink, withRouter } from "react-router-dom";
import { ReactSVG } from "react-svg";
import { GetDashboardUrl } from "../../../Constant";

class Header extends React.Component {
  state = {
    transform: false,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = (event) => {
    this.setState({
      transform: window.scrollY > 0 ? true : false,
    });
  };

  checkRoute = () => {
    if (
      this.props.location.pathname === "/" ||
      this.props.location.pathname === "/profile"
    ) {
      return true;
    }
    return false;
  };

  checkSignInPage = () => {
    const pathName = this.props.location.pathname;
    if (
      pathName === "/sign-in" ||
      pathName === "/forgot-password" ||
      pathName === "/new-password"
    ) {
      return true;
    }
    return false;
  };

  checkPage = () => {
    const pathName = this.props.location.pathname;
    if (pathName === "/sign-up" || pathName === "/profile")
      return "sign-up";
    if (
      pathName === "/sign-in" ||
      pathName === "/forgot-password" ||
      pathName === "/new-password"
    )
      return "sign-in";
    return "normal";
  };

  checkProfile = () => {
    const pathName = this.props.location.pathname;
    return pathName === "/profile" ? true : false;
  };

  isLogin() {
    return !!this.props.token;
  }

  isLogOut = () => {
    sessionStorage.clear();
    localStorage.clear();
    window.location.href = "/";
  };

  render() {
    const { user, token } = this.props;
    return (
      <React.Fragment>
        {this.checkPage() === "sign-up" ? (
          <div className="signup-header-component">
            <div className="container signup-container">
              <NavLink className="menu-item" exact to="/">
                <img src={logo} alt="logo" style={{ height: 150 }} />
              </NavLink>
            </div>
          </div>
        ) : this.checkPage() === "sign-in" ? (
          <div className={`header-component`}>
            <div className="container signin-container">
              <NavLink className="menu-item" exact to="/">
                <img src={logo} alt="logo" style={{ width: 150 }} />
              </NavLink>
            </div>
          </div>
        ) : (
              <div
                className={`header-component ${
                  this.state.transform || !this.checkRoute()
                    ? "transform-header"
                    : ""
                  }`}
              >
                <div className="container normal-container">
                  <NavLink className="menu-item show-web-flex" exact to="/">
                    <img
                      src={logo}
                      alt="logo"
                      style={{ width: 200, marginRight: 20 }}
                    />
                  </NavLink>
                  <NavLink className="menu-item show-mobile" exact to="/">
                    <img src={logo} alt="logo" />
                  </NavLink>
                  {this.checkProfile() ? (
                    <div className="menu">
                      <NavLink className="menu-item extra-item" exact to="/sign-in">
                        Sign In
                  </NavLink>
                      <NavLink className="menu-item extra-item" exact to="/sign-up">
                        Get Started
                  </NavLink>
                    </div>
                  ) : (
                      <div className="menu">
                      </div>
                    )}
                  {this.checkProfile() ? (
                    <div className="menu extra-menu">
                      <NavLink className="menu-item" exact to="/sign-in">
                        Sign In
                  </NavLink>
                      <NavLink
                        className="menu-item sign-up"
                        exact
                        to="/profile"
                      >
                        Get Started
                  </NavLink>
                    </div>
                  ) : (
                      <div className="menu extra-menu">
                        {this.isLogin() ? (
                          <>
                            <a className="menu-item" onClick={this.isLogOut}>
                              Signout
                      </a>
                            <a
                              href={GetDashboardUrl(
                                this.props.user,
                                this.props.token
                              )}
                              className="shadow-object box-item v-c h-c"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Profile
                      </a>
                          </>
                        ) : (
                            <>
                              <NavLink className="menu-item" exact to="/about-us">
                                About Us
                      </NavLink>
                              <NavLink className="menu-item" exact to="/about-us">
                                Business Setup
                      </NavLink>

                              <NavLink className="menu-item" exact to="/about-us">
                                Trademark & IP
                      </NavLink>
                              <NavLink className="menu-item" exact to="/about-us">
                                Fundraising
                      </NavLink>
                              <NavLink className="menu-item" exact to="/">
                                Sign In
                      </NavLink>
                              <NavLink className="menu-item sign-up" exact to="/">
                                Get Started
                      </NavLink>
                            </>
                          )}
                      </div>
                    )}
                  <div className="show-mobile">
                    <NavLink className="header-start-button" exact to="/sign-up">
                      Get Started
                </NavLink>
                  </div>
                  <div className="hamburger" onClick={this.openSidebar}>
                    <ReactSVG src={hamburger} />
                  </div>
                </div>
              </div>
            )}
      </React.Fragment>
    );
  }
}

export default (withRouter(Header));
