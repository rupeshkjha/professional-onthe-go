import React from "react";
import "./BlogListPage.scss";
import { BlogStartArea, BlogFooter, ArticlePreview } from "../../Components";
// import { Articles } from "../../Api";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getBlogListingAction } from "../../Redux/Actions";
const categories = ["All", "Maths", "Category19"];

class BlogListPage extends React.Component {
  state = {
    selected_category: "All",
    categoryToShow: 6,
    filteredArticles: [],
    articleToShow: 3,
    categories: [],
  };

  componentDidMount() {
    this.setState({
      filteredArticles: [],
    });
    this.props.getBlogListingAction();
  }

  componentDidUpdate(prevProps, PrevState) {
    if (prevProps.bloglist !== this.props.bloglist && this.props.bloglist) {
      this.prepareBlogData(this.props.bloglist);
    }
  }

  prepareBlogData(blogs) {
    if (blogs && blogs.length) {
      const category = ["All"];
      blogs.forEach((element) => {
        if (!category.includes(element.topic.name)) {
          category.push(element.topic.name);
        }
      });
      this.setState({
        filteredArticles: blogs,
      });
      this.setState({ categories: category, Articles: blogs });
    }
  }

  changeCategory = (category) => {
    if (this.state.selected_category !== category) {
      const listToShow =
        category === "All"
          ? this.state.Articles
          : this.state.Articles.filter((item) => item.topic.name === category);
      this.setState({
        selected_category: category,
        filteredArticles: listToShow,
        articleToShow: 3,
      });
    }
  };

  navigateToArticle = (id) => {
    this.props.history.push(`/blog/${id}`);
  };

  render() {
    const {
      selected_category,
      categoryToShow,
      filteredArticles,
      articleToShow,
      categories,
    } = this.state;
    const remainingCategory = categories.length - categoryToShow;
    const remainingArticle = filteredArticles.length - articleToShow;

    return (
      <div className="bloglist-page">
        <BlogStartArea />
        <div className="container bloglist-container">
          <div className="categories-area">
            <h1>Categories</h1>
            <div className="category-list">
              {categories &&
                categories.length &&
                categories.map((item, index) => {
                  return index < categoryToShow ? (
                    <div
                      className={`category ${
                        selected_category === item ? "selected" : ""
                      }`}
                      key={index}
                      onClick={(e) => this.changeCategory(item)}
                    >
                      {" "}
                      {item}
                    </div>
                  ) : (
                    <div style={{ display: "none" }} key={index} />
                  );
                })}
              {remainingCategory > 0 && (
                <div
                  className="category category_plus"
                  onClick={(e) =>
                    this.setState({ categoryToShow: categoryToShow + 6 })
                  }
                >
                  +{remainingCategory} categories
                </div>
              )}
            </div>
          </div>
          <div className="article-area">
            {filteredArticles.map((item, index) => {
              return index >= articleToShow ? (
                <div style={{ display: "none" }} key={index} />
              ) : index === 0 ? (
                <div className="row article-row first-row" key={index}>
                  <div className="col-lg-12">
                    <ArticlePreview
                      data={item}
                      first
                      onClick={(e) => this.navigateToArticle(item.id)}
                    />
                  </div>
                </div>
              ) : index % 2 === 1 ? (
                <div className="row article-row" key={index}>
                  <div className="col-lg-6">
                    <ArticlePreview
                      data={filteredArticles[index]}
                      onClick={(e) => this.navigateToArticle(item.id)}
                    />
                  </div>
                  <div className="col-lg-6 second-col">
                    {filteredArticles[index + 1] && (
                      <ArticlePreview
                        data={filteredArticles[index + 1]}
                        onClick={(e) => this.navigateToArticle(item.id)}
                      />
                    )}
                  </div>
                </div>
              ) : (
                <div style={{ display: "none" }} key={index} />
              );
            })}
          </div>

          {remainingArticle > 0 && (
            <div className="btn-area">
              <button
                className="load-more"
                onClick={(e) =>
                  this.setState({ articleToShow: articleToShow + 2 })
                }
              >
                Load More
              </button>
              <div className="bg-dot" alt="bgdot" />
            </div>
          )}
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
  withRouter(BlogListPage)
);
