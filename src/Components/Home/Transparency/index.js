import React from "react";
import "./Transparency.scss";
import { StartButton } from "../../";
import transparencyRight from "../../../Assets/Home/transparency-right.png";
import { NavLink } from "react-router-dom";

const transparencyTableData = [
  { title: "Lorem ipsum dolor sit amet", price: "$" },
  { title: "Lorem ipsum dolor sit amet", price: "$" },
  { title: "Lorem ipsum dolor sit amet", price: "$" },
  { title: "Lorem ipsum dolor sit amet", price: "$" },
  { title: "Lorem ipsum dolor sit amet", price: "$" },
  { title: "Lorem ipsum dolor sit amet", price: "$" },
  { title: "Lorem ipsum dolor sit amet", price: "$" },
];

export default class Transparency extends React.Component {
  render() {
    return (
      <div className="transparency-component">
        <div className="container transparency-container">
          <div className="title">Lorem ipsum dolor sit amet</div>
          <div className="description">
          Lorem ipsum dolor sit amet
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
