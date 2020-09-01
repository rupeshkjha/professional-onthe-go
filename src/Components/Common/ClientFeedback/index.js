import React from "react";
import "./ClientFeedback.scss";

export default class ClientFeedback extends React.Component {
  render() {
    const { item, className } = this.props;
    const nameArray = item.name.split(" ");
    const initialName =
      nameArray.length === 2
        ? nameArray[0][0] +
          (nameArray[1][0] ? nameArray[1][0] : nameArray[0][1])
        : nameArray[0][0];
    return (
      <div className={`clientfeedback-component ${className || ""}`}>
        <div className="client-item">
          <div className="client-header">
            <div className={`initial initial-${item.level}`}>{initialName}</div>
            <div className="user-info">
              <div className="basic">
                {" "}
                <span className="name">{item.name}</span> from {item.address}{" "}
              </div>
            </div>
          </div>
          <div className="client-body">
            <div className="description">{item.description}</div>
            <div className="comment-date">{item.comment_date}</div>
          </div>
        </div>
        <div className="bg-dot small-dot span-dot" alt="bgdot" />
      </div>
    );
  }
}
