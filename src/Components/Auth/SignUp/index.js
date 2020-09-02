import React from "react";
import "./SignUp.scss";
import email from "../../../Assets/Common/email.svg";
import key from "../../../Assets/Common/key.svg";
import { NavLink } from "react-router-dom";
import { StartButton } from "../../";
import { ReactSVG } from "react-svg";
import { withRouter } from "react-router-dom";



class Login extends React.Component {
  state = {
    fullname: "",
    email: "",
    password: "",
    phonenumber: "",

  };



  doSignIn = () => {
    const { email, password } = this.state;
    if (email.length === 0 || password.length === 0) return;
    console.log(this.state);

  };



  render() {
    const { email, password, fullname, phonenumber } = this.state;
    const { signErr } = this.props
    return (
      <div className="login-component">
        <h1>Create an Account</h1>
        {signErr ? <p className="alert alert-danger">{signErr}</p> : null}
        <div className="input-group custom-input">
          <div className="input-group-prepend">
            <span className="input-group-text">
              {" "}
              <ReactSVG src={email} className="input-icon" />{" "}
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="FullName"
            value={fullname}
            onChange={(e) => this.setState({ fullname: e.target.value })}
          />
        </div>
        <div className="input-group custom-input">
          <div className="input-group-prepend">
            <span className="input-group-text">
              {" "}
              <ReactSVG src={email} className="input-icon" />{" "}
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </div>
        <div className="input-group custom-input append-input">
          <div className="input-group-prepend">
            <span className="input-group-text">
              {" "}
              <ReactSVG src={key} className="input-icon" />{" "}
            </span>
          </div>
          <input
            type="password"
            className="form-control"
            placeholder="************"
            value={password}
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          <div className="input-group custom-input">
            <div className="input-group-prepend">
              <span className="input-group-text">
                {" "}
                <ReactSVG src={email} className="input-icon" />{" "}
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="PhoneNumber"
              value={phonenumber}
              onChange={(e) => this.setState({ phonenumber: e.target.value })}
            />
          </div>
          <div className="input-group-append">
            <span className="input-group-text">
              {" "}
              <NavLink to="/forgot-password">Forgot Password?</NavLink>
            </span>
          </div>
        </div>
        <div className="action-area">
          <div className="sign-up">
            Haven’t an account? <NavLink to="/sign-up">Sign Up</NavLink>
          </div>
          <div className="show-web" onClick={() => this.doSignIn()}>
            <StartButton
              className="start-btn"
              height="65px"
              startText="Continue"
            />
          </div>
          <div className="show-mobile" onClick={() => this.doSignIn()}>
            <StartButton
              className="start-btn"
              height="50px"
              startText="Continue"
            />
          </div>
        </div>
      </div>
    );
  }
}



export default (withRouter(Login));
