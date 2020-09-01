import React from "react";
import "./ArticleHeader.scss";
import mortarboard from "../../../Assets/Common/mortarboard.png";
import bank from "../../../Assets/Common/bank.png";

function innerFunc(item) {
  return { __html: item };
}

export default class ArticleHeader extends React.Component {
  render() {
    const { article } = this.props;
    return (
      <div className="articleheader-component">
        <div
          className="bg-area"
          style={{ backgroundImage: `url(${article.picture})` }}
        />
        <div className="bg-hide show-web" />
        <div className="container header-container">
          <div className="article-info shadow-object">
            <div className="article-info-bg" />
            <div className="category-area">
              <div className="category">{article.topic.name}</div>
            </div>
            <h1 dangerouslySetInnerHTML={innerFunc(article.title)}></h1>
            <div className="tutor-info">
              <img
                src={article.poster.picture}
                alt="tutor_photo"
                className="photo"
              />
              <div className="tutor-details">
                <h1>
                  About {article.poster.name}
                  <span className="show-web mid-dot">&bull;</span>
                  {/* <span className="birthday">{article.poster.birthday}</span> */}
                </h1>
                <div className="tutor-detail-sub">
                  <img src={mortarboard} alt="mortarboard" />
                  <span className="sub-span">
                    {article.poster.profile_title}
                  </span>
                </div>
                <div className="tutor-detail-sub sub2">
                  <img src={bank} alt="bank" />
                  <span className="sub-span">{article.poster.school}</span>
                </div>
              </div>
            </div>
            <div className="bg-dot custom-bg-dot"></div>
          </div>
        </div>
      </div>
    );
  }
}
