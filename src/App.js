import React, { useEffect } from "react";
import "./App.scss";
import { Header, Sidebar, Footer } from "./Components";
import { HomePage, AboutUsPage } from "./Pages";
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
