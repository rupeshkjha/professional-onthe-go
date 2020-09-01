import React from "react";
import "./index.scss";
import cbs from "../../../Assets/Home/CBS.png";
import cnn from "../../../Assets/Home/CNN.png";
import fox from "../../../Assets/Home/FOX.png";
import boston from "../../../Assets/Home/The_Boston_Globe.png";
import miami from "../../../Assets/Home/The-Miami-Herald-Logo.png";

import checkmark from "../../../Assets/Common/checkmark.png";
import { StartButton } from "../../";
import { NavLink } from "react-router-dom";

const texts = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
];

export default class Clients extends React.Component {
  render() {
    return (
      <div className="ourcore-component">
        <div className="container ourcore-container">
          <div className="title">Clients</div>
          <div className="main-row">
            <div className="mb-3">
              {/* {texts.map((item, index) => {
                return (
                  <div className="core-explain" key={index}>
                    <img src={checkmark} alt="checkmark" />
                    <div className="explain">{item}</div>
                  </div>
                );
              })} */}
              <div className="col-lg-12 logo-area show-web-flex">
                <img src={cnn} alt="cnn" />
                <img src={cbs} alt="cbs" />
                <img src={fox} alt="fox" />
                <img src={boston} alt="boston" />
                <img src={miami} alt="miami" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
