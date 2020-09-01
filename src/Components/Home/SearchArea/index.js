import React from "react";
import "./SearchArea.scss";
import coreBG from "../../../Assets/Home/core-bg.png";
import checkmark from "../../../Assets/Common/checkmark.png";
import { StartButton } from "../../";
import { NavLink } from "react-router-dom";

const texts = [
  "Lorem ipsum dolor amet mustache knausgaard +1, blue bottle waistcoat tbh semiotics artisan synth stumptown gastropub cornhole celiac swag.",
  "Lorem ipsum dolor amet mustache knausgaard +1, blue bottle waistcoat tbh semiotics artisan synth stumptown gastropub cornhole celiac swag.",
  "Lorem ipsum dolor amet mustache knausgaard +1, blue bottle waistcoat tbh semiotics artisan synth stumptown gastropub cornhole celiac swag.",
  "Lorem ipsum dolor amet mustache knausgaard +1, blue bottle waistcoat tbh semiotics artisan synth stumptown gastropub cornhole celiac swag.",
  "Lorem ipsum dolor amet mustache knausgaard +1.",
];

export default class SearchArea extends React.Component {
  render() {
    return (
      <div className="ourcore-component">
        <div className="container ourcore-container">
          <div className="title">SearchArea</div>
          <div className="form-area">

            <div className="send-box">
              <input className="text-input" placeholder="Enter Your Query: " />
              <button className="send-btn">Get Started</button>
              <div className="bg-dot" alt="bgdot"></div>
            </div>

          </div>
          <div className="row main-row">
            <div className="col-lg-6 left-area">
              <img src={coreBG} alt="core-bg" />
            </div>
            <div className="col-lg-6 right-area">
              {texts.map((item, index) => {
                return (
                  <div className="core-explain" key={index}>
                    <img src={checkmark} alt="checkmark" />
                    <div className="explain">{item}</div>
                  </div>
                );
              })}
              <NavLink style={{ textDecoration: "none" }} to="/sign-up">
                <StartButton
                  className="start-btn"
                  startText="Start Free Tiral"
                />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
