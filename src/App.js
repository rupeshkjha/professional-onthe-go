import React, { useEffect } from "react";
import "./App.scss";
import { Header, Sidebar, Footer } from "./Components";
import {
  HomePage,
  AboutUsPage,
  FeaturesPage,
  FAQsPage,
  ContactUsPage,
  OurTeamPage,
  SiteInfoPage,
  AuthPage,
  BlogListPage,
  BlogArticlePage,
  SignUpPage,
  DemoPage,
  ValuesPage,
  PricePage,
  TutorHomePage,
  TutorSignupPage,
  ScheduleLessonPage
} from "./Pages";
import { BrowserRouter, Switch, Route, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { initAppAction } from "./Redux/Actions";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

class App extends React.Component {
  state = {
    isBlur: false,
  };

  static getDerivedStateFromProps(props, state) {
    return {
      isBlur: props.isSidebarOpen,
    };
  }

  componentDidMount() {
    this.props.initAppAction();
  }

  render() {
    const { isBlur } = this.state;

    if (isBlur) {
      if (document.body) {
        const body = document.body;
        body.classList.add("modal-open");
      }
    } else {
      if (document.body) {
        const body = document.body;
        body.classList.remove("modal-open");
      }
    }

    return (
      <BrowserRouter>
        <ScrollToTop />
        <div className="App">
          <Sidebar />
          <div id="main" className={`${isBlur ? "blur" : ""}`}>
            <Header />
            <div className="content">
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/about-us" component={AboutUsPage} />
                <Route exact path="/features" component={FeaturesPage} />
                <Route exact path="/faqs" component={FAQsPage} />
                <Route exact path="/terms" component={SiteInfoPage} />
                <Route exact path="/privacy" component={SiteInfoPage} />
                <Route exact path="/refund" component={SiteInfoPage} />
                <Route exact path="/contact-us" component={ContactUsPage} />
                <Route exact path="/team" component={OurTeamPage} />
                <Route exact path="/sign-in" component={AuthPage} />
                <Route exact path="/forgot-password" component={AuthPage} />
                <Route exact path="/new-password" component={AuthPage} />
                <Route exact path="/blog" component={BlogListPage} />
                <Route exact path="/blog/:id" component={BlogArticlePage} />
                <Route exact path="/sign-up" component={SignUpPage} />
                <Route exact path="/demo" component={DemoPage} />
                <Route exact path="/values" component={ValuesPage} />
                <Route exact path="/price" component={PricePage} />
                <Route exact path="/tutor-home" component={TutorHomePage} />
                <Route exact path="/tutor-signup" component={TutorSignupPage} />
                <Route exact path="/schedule-lesson" component={ScheduleLessonPage} />
              </Switch>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isSidebarOpen: state.Sidebar.isOpen,
  };
};

export default connect(mapStateToProps, { initAppAction })(App);
