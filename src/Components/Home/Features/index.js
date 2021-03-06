import React from "react";
import "./Features.scss";
import img6 from "../../../Assets/Features/img6.png";
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

export default class Features extends React.Component {
  render() {
    return (
      <div className="ourcore-component">
        <div className="container ourcore-container">
          <div className="title">Features</div>
          <div className="row main-row">
            <div className="col-lg-6 left-area">
              <img style={{ position: 'relative', zIndex: '1', boxShadow: '0px 9px 45px rgba(0, 0, 0, 0.08)' }} src={img6} alt="core-bg" />
              <div className="bg-dot row-dot show-web my-bg-dot" alt="bgdot" />
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
            </div>

          </div>
        </div>
      </div>
    );
  }
}
