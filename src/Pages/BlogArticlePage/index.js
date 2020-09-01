import React from "react";
import "./BlogArticlePage.scss";
import {
  BlogFooter,
  ArticlePreview,
  ArticleHeader,
  Comment,
} from "../../Components";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import facebook from "../../Assets/Common/facebook-logo.png";
import linkedin from "../../Assets/Common/linked-in-logo.png";
import twitter from "../../Assets/Common/twitter-logo.png";
import pinterest from "../../Assets/Common/pinterest-logo.png";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  PinterestShareButton,
} from "react-share";
import { getBlogListingAction } from "../../Redux/Actions";

function innerFunc(item) {
  return { __html: item };
}

class BlogArticlePage extends React.Component {
  state = {
    article: null,
    startFloat: false,
    post_id: null,
    post: null,
    bloglist: [],
  };

  constructor(props) {
    super(props);
    this.otherArticleWrapper = React.createRef();
  }

  componentDidMount() {
    this.setState({ post_id: parseInt(this.props.match.params.id, 10) });
    this.props.getBlogListingAction();

    window.addEventListener("scroll", this.onWindowScroll);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.bloglist !== this.props.bloglist && this.props.bloglist) {
      const post = this.props.bloglist.filter(
        (item) => item.id === this.state.post_id
      );

      this.setState({
        article: post && post[0] ? post[0] : null,
        bloglist: this.props.bloglist,
      });
    }
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onWindowScroll);
  }

  onWindowScroll = (e) => {
    if (window.outerWidth >= 991) {
      this.setState({
        startFloat:
          window.scrollY >= 600 &&
          window.scrollY < this.otherArticleWrapper.current.offsetTop - 350,
      });
    }
  };

  navigateToArticle = (id) => {
    this.props.history.push(`/blog/${id}`);
  };

  render() {
    const { article, startFloat, bloglist } = this.state;
    const ShareURL =
      process.env.REACT_APP_PUBLIC_DOMAIN + this.props.location.pathname;
    return (
      <div className="blogarticle-page">
        {article && (
          <>
            <ArticleHeader article={article} />
            <div className="container blogarticle-container">
              <div
                className="article-content"
                dangerouslySetInnerHTML={innerFunc(article.content)}
              />
              <div className={`share-area ${startFloat ? "floating" : ""}`}>
                <div className="share-title">Share</div>
                <div className="logo-area">
                  <FacebookShareButton url={ShareURL} className="share-logo">
                    <img src={facebook} alt="facebook" />
                  </FacebookShareButton>
                  <LinkedinShareButton url={ShareURL} className="share-logo">
                    <img src={linkedin} alt="linkedin" />
                  </LinkedinShareButton>
                  <TwitterShareButton url={ShareURL} className="share-logo">
                    <img src={twitter} alt="twitter" />
                  </TwitterShareButton>
                  <PinterestShareButton url={ShareURL} className="share-logo">
                    <img src={pinterest} alt="whatsApp" />
                  </PinterestShareButton>
                </div>
              </div>
              <div className="article-content">
                <div className="author-area">
                  <img
                    src={article.poster.picture}
                    alt="author"
                    className="author-photo"
                  />
                  <div className="author-card shadow-object">
                    <div className="personal-info">
                      <div className="author-name">
                        About {article.poster.name}
                      </div>
                      <div className="author-role">
                        {article.poster.profile_title}
                      </div>
                    </div>
                    <div className="author-overview">
                      {article.poster.overview}
                    </div>
                  </div>
                  <div className="bg-dot custom-bg-dot"></div>
                </div>
                <Comment />
              </div>
            </div>
          </>
        )}

        <div className="otherarticle-content">
          <div
            className="container otherarticle-container"
            ref={this.otherArticleWrapper}
          >
            <h3>Read Other Articles</h3>
            {bloglist && bloglist.length && (
              <div className="row article-row">
                <div className="col-lg-6">
                  <ArticlePreview
                    data={bloglist[1]}
                    onClick={(e) => this.navigateToArticle(bloglist[1].id)}
                  />
                </div>
                <div className="col-lg-6">
                  <ArticlePreview
                    data={bloglist[2]}
                    onClick={(e) => this.navigateToArticle(bloglist[2].id)}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        <BlogFooter />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    bloglist: state.Core.bloglist,
  };
}

export default connect(mapStateToProps, { getBlogListingAction })(
  withRouter(BlogArticlePage)
);
