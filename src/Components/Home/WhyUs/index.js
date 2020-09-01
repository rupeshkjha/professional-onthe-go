import React from "react";
import "./WhyUs.scss";
import { StartButton } from "../../";
import tick from "../../../Assets/Common/tick.svg";
import { ReactSVG } from "react-svg";
import { NavLink } from "react-router-dom";

const leftTexts = [
  "GradeGetter will only charge you if you are 100% satisfied",
  "No contracts, no commitments, and cancel any time",
  "Choose from a network of thousands of certified tutors ",
  "Find a price that works for your lifestyle ",
  "All tutors are based in the U.S. and must pass a background check ",
  "GradeGetter uses a reliable and easy to use platform for online tutoring ",
];

const rightTexts = [
  "We're disrupting the expensive and un affordable tutoring market",
  "We have done background checks on all our tutors",
  "We have the most reliable and easy to use tutoring platform",
  "We only offer online tutoring",
  "We only hire US based tutor",
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
            <StartButton className="start-btn" startText="Start Free Tiral" />
          </NavLink>
        </div>
      </div>
    );
  }
}
