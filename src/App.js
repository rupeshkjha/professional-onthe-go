import React, { useEffect } from "react";
import "./App.scss";
import { Header, Sidebar, Footer } from "./Components";
import { HomePage, AboutUsPage,  AuthPage } from "./Pages";
import { BrowserRouter, Switch, Route, useLocation } from "react-router-dom";

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
                <Route exact path="/sign-in" component={AuthPage} />
                <Route exact path="/sign-up" component={AuthPage} />
                <Route exact path="/forgot-password" component={AuthPage} />
                <Route exact path="/new-password" component={AuthPage} />
              </Switch>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}


export default (App);
