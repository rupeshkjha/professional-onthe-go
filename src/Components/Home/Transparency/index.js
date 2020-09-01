import React from "react";
import "./Transparency.scss";
import { StartButton } from "../../";
import transparencyRight from "../../../Assets/Home/transparency-right.png";
import { NavLink } from "react-router-dom";

const transparencyTableData = [
  { title: "Payment to tutor", price: "$20.00" },
  { title: "Software cost", price: "$3.00" },
  { title: "Service cost", price: "$2.50" },
  { title: "Support cost", price: "$2.50" },
  { title: "Admin cost", price: "$2.50" },
  { title: "Advistising cost", price: "$7.00" },
  { title: "TOTAL COST", price: "$38.50" },
];

export default class Transparency extends React.Component {
  render() {
    return (
      <div className="transparency-component">
        <div className="container transparency-container">
          <div className="title">We're Committed to Maximum Transparency</div>
          <div className="description">
            Cost of providing one hour of tutoring
          </div>
          <div className="row-container">
            <div className="main-row show-web-flex">
              <div className="col-lg-6 col-md-12 col-area">
                <div className="price-table">
                  {transparencyTableData.map((item, index) => {
                    return (
                      <div key={index} className="table-item">
                        <div
                          className={`col-lg-6   ${
                            index % 2 === 0 ? "table-left1" : "table-left"
                          }`}
                        >
                          <p className={` ${index === 6 ? "total-cost" : ""}`}>
                            {item.title}
                          </p>
                        </div>
                        <div
                          className={`col-lg-6  ${
                            index % 2 === 0 ? "table-right1" : "table-right"
                          }`}
                        >
                          <p className={` ${index === 6 ? "total-cost" : ""}`}>
                            {item.price}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-area text-center">
                <img src={transparencyRight} alt="core-bg" />
              </div>
            </div>

            <div className="main-row show-mobile">
              <div className=" col-lg-6 show-mobile">
                <img
                  src={transparencyRight}
                  alt="core-bg"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="col-lg-6 col-area">
                <div className="price-table show-mobile">
                  {transparencyTableData.map((item, index) => {
                    return (
                      <div key={index} className="table-item">
                        <div
                          className={`col-lg-6   ${
                            index % 2 === 0 ? "table-left1" : "table-left"
                          }`}
                        >
                          <p className={` ${index === 6 ? "total-cost" : ""}`}>
                            {item.title}
                          </p>
                        </div>
                        <div
                          className={`col-lg-6  ${
                            index % 2 === 0 ? "table-right1" : "table-right"
                          }`}
                        >
                          <p className={` ${index === 6 ? "total-cost" : ""}`}>
                            {item.price}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    );
  }
}
