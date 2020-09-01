import React from "react";
import "./Footer.scss";
import facebook from "../../../Assets/Home/facebook.png";
import twitter from "../../../Assets/Home/twitter.png";
import youtube from "../../../Assets/Home/youtube.png";
import instagram from "../../../Assets/Home/instagram.png";
import arrow from "../../../Assets/Common/arrow.svg";
import { ReactSVG } from "react-svg";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Footer extends React.Component {
  checkSignInPage = () => {
    const pathName = this.props.location.pathname;
    if (
      pathName === "/sign-in" ||
      pathName === "/forgot-password" ||
      pathName === "/new-password" ||
      pathName === "/sign-up" ||
      pathName === "/tutor-signup"
    ) {
      return true;
    }
    return false;
  };

  render() {
    return (
      <div
        className="footer-component"
        style={{ display: this.checkSignInPage() && "none" }}
      >
        <div className="container">
          <div className="link-area">
            <div className="contact-row">
              <div className="action-row">
                <NavLink className="action" exact to="/contact-us">
                  Contact Us
                </NavLink>
                <NavLink className="action" exact to="/about-us">
                  About Us
                </NavLink>
                <NavLink className="action" exact to="/faqs">
                  FAQs
                </NavLink>
                <NavLink className="action" exact to="/blog">
                  Blog
                </NavLink>
                <NavLink className="action" exact to="/team">
                  Team
                </NavLink>
                <NavLink className="action" exact to="/refund">
                  Refund
                </NavLink>
              </div>
              <div className="social-row">
                <a
                  href="https://www.facebook.com/gradegetter"
                  className="social"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={facebook} alt="facebook" />
                </a>
                <a
                  href="https://twitter.com/GradeGetter"
                  className="social"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={twitter} alt="twitter" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UC6howHvJniKu7YypUvFps9Q/?guided_help_flow=5"
                  className="social"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={youtube} alt="youtube" />
                </a>
                <a
                  href="https://www.instagram.com/gradegetter"
                  className="social"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={instagram} alt="instagram" />
                </a>
              </div>
            </div>
            <div className="tutor-area-mobile">
              <div className="tutor-btn">
                <NavLink to="/tutor-home" className="sub-btn tutor-name">
                  Become a tutor
                </NavLink>
                {/* <div className="sub-btn tutor-name">Become a tutor</div> */}
                <div className="sub-btn arrow-btn">
                  <ReactSVG src={arrow} style={{ fill: "white" }} />
                </div>
              </div>
            </div>
            <div className="term-row">
              <NavLink className="term" exact to="/">
                © {new Date().getFullYear()} GradeGetter
              </NavLink>
              <NavLink className="term" exact to="/terms">
                Terms of Service
              </NavLink>
              <NavLink className="term" exact to="/privacy">
                Privacy Policy
              </NavLink>
            </div>
          </div>
          <div className="tutor-btn tutor-area-web">
            <NavLink to="/tutor-home" className="sub-btn tutor-name">
              Become a tutor
            </NavLink>
            {/* <div className="sub-btn tutor-name">Become a tutor</div> */}
            <div className="sub-btn arrow-btn">
              <ReactSVG src={arrow} style={{ fill: "white" }} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, {})(withRouter(Footer));
