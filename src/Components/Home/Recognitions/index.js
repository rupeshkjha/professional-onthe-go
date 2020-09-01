import React from "react";
import "./Recognitions.scss";
import coreBG from "../../../Assets/Home/core-bg.png";
import checkmark from "../../../Assets/Common/checkmark.png";
import { StartButton } from "../../";
import { NavLink } from "react-router-dom";

const texts = [
  "We believe every student can excel if matched with the right tutor ",
  "We believe a good tutor should be patient, kind, and knowledgeable in their field ",
  "We believe one-on-one tutoring should be affordable and accessible to all",
  "We believe the future of education will be online, and that online platforms have a significant advantage ",
  "We believe in Christian values and philosophy, which guide all of our business decisions, including how we price our services to those who would otherwise not be able to afford it.  GradeGetter is meant to be a welcoming place for all students, from all walks of life where each student feels that they are welcomed, valued, and honored. ",
];

export default class Recognitions extends React.Component {
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
