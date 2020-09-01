import React from "react";
import "./ArticlePreview.scss";
import arrow from "../../../Assets/Common/arrow.svg";
import { ReactSVG } from "react-svg";

function innerFunc(item) {
  return { __html: item.title };
}

export default class ArticlePreview extends React.Component {
  render() {
    const { className, data, first, onClick } = this.props;
    console.log("ArticlePreview", data);
    return (
      <div
        className={`articlepreview-component ${first ? "first" : ""} ${
          className || ""
        }`}
        onClick={onClick}
      >
        <img src={data.picture} className="bg" alt="bg" />
        <div className="article-info shadow-object">
          <h1 dangerouslySetInnerHTML={innerFunc(data)}></h1>
          <div className="sub-info property-info">
            <div className="category">{data.topic.name}</div>
            <div className="last_read">{data.read_time} read</div>
          </div>
          <div className="sub-info detail-info">
            <div className="description">{data.excerpt}</div>
            <div className="read-btn">
              <ReactSVG src={arrow} style={{ fill: "#23A4EF" }} />
            </div>
          </div>
        </div>
        <div className="bg-dot custom-bg-dot"></div>
      </div>
    );
  }
}
