import React from "react";
import "./WhyUs.scss";
import { StartButton } from "../../";
import tick from "../../../Assets/Common/tick.svg";
import { ReactSVG } from "react-svg";
import { NavLink } from "react-router-dom";

const leftTexts = [
  "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
  "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
  "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
  "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ",
  "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ",
  "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
];

const rightTexts = [
  "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
  "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
  "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
  "Lorem ipsum dolor sit amet",
  "Lorem ipsum dolor sit amet",
];

export default class WhyUs extends React.Component {
  render() {
    return (
      <div className="whyus-component">
        <div className="container whyus-container">
          <div className="title">Why Us? </div>
          <div className="row-container">
            <div className="row main-row">
              <div className="col-lg-6 col-area left-col">
                {leftTexts.map((item, index) => {
                  return (
                    <div className="explain-item" key={index}>
                      <div className="explain-text">{item}</div>
                      <ReactSVG src={tick} style={{ fill: "#23A4EF" }} />
                    </div>
                  );
                })}
              </div>
              <div className="col-lg-6 col-area">
                {rightTexts.map((item, index) => {
                  return (
                    <div className="explain-item" key={index}>
                      <div className="explain-text">{item}</div>
                      <ReactSVG src={tick} style={{ fill: "#23A4EF" }} />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="bg-dot row-dot show-web" alt="bgdot" />
            <div
              className="bg-dot span-dot small-dot show-mobile"
              alt="bgdot"
            />
          </div>
          <NavLink style={{ textDecoration: "none" }} to="/sign-up">
            <StartButton className="start-btn" startText="Get Started" />
          </NavLink>
        </div>
      </div>
    );
  }
}
