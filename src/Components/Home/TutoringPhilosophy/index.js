import React from "react";
import "./TutoringPhilosophy.scss";
import clock from "../../../Assets/Home/clock.png";
import speed from "../../../Assets/Home/speed.png";
import arm from "../../../Assets/Home/arm.png";
import tutor_1 from "../../../Assets/Home/tutor-1.png";
import tutor_2 from "../../../Assets/Home/tutor-2.png";
import tutor_3 from "../../../Assets/Home/tutor-3.png";
import { StartButton } from "../../";
import { NavLink } from "react-router-dom";

const tutors = [
  {
    left_img: clock,
    right_img: tutor_1,
    title: "Lorem ipsum dolor sit amet",
    explain:
      "Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet ",
  },
  {
    left_img: speed,
    right_img: tutor_2,
    title: "Lorem ipsum dolor sit amet",
    explain:
      "Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit amet ",
  },
  {
    left_img: arm,
    right_img: tutor_3,
    title: "Lorem ipsum dolor sit amet",
    explain:
      "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ",
  },
];

export default class TutoringPhilosophy extends React.Component {
  render() {
    return (
      <div className="tutoringphilosophy-component">
        <div className="container tutoringphilosophy-container">
          <div className="title">Lorem ipsum dolor sit amet</div>
          {tutors.map((item, index) => {
            return (
              <div
                className={`row main-row ${index === 0 && "first-row"}`}
                key={index}
              >
                <div className="col-lg-6 order-lg-first order-second left-area">
                  <img src={item.left_img} alt="tutor_mean" />
                  <h1>{item.title}</h1>
                  <p>{item.explain}</p>
                </div>
                <div className="col-lg-6 order-lg-second order-first right-area ">
                  <div className="image-container">
                    <img src={item.right_img} alt="tutor_content" />
                    <div className="bg-dot small-dot span-dot" alt="bgdot" />
                  </div>
                </div>
              </div>
            );
          })}
          <NavLink style={{ textDecoration: "none" }} to="/sign-up">
            <StartButton className="start-btn" startText="Start Free Tiral" />
          </NavLink>
        </div>
      </div>
    );
  }
}
