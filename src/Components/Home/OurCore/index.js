import React from "react";
import "./OurCore.scss";
import coreBG from "../../../Assets/Home/core-bg.png";
import checkmark from "../../../Assets/Common/checkmark.png";
import { StartButton } from "../../";
import { NavLink } from "react-router-dom";

const texts = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
];

export default class OurCore extends React.Component {
  render() {
    return (
      <div className="ourcore-component">
        <div className="container ourcore-container">
          <div className="title">At Our Core</div>
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
                  startText="Lorem ipsum "
                />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
