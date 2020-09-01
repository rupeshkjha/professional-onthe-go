import React from "react";
import "./TutorStartArea.scss";
import user from "../../../Assets/Common/user.svg";
import email_ico from "../../../Assets/Common/email.svg";
import key from "../../../Assets/Common/key.svg";
import { InputBox, CheckBox } from "../../Common";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { tutorSignUpAction, initAppAction } from "../../../Redux/Actions";

class TutorStartArea extends React.Component {
  state = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    checked: null,
  };

  doStart = () => {
    console.log("State Values ->", this.state);
    this.props.initAppAction();
    // this.props.history.push('/tutor-signup');
    this.props.onNext({
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password,
      checked: this.state.checked,
    });
  };

  render() {
    const { first_name, last_name, email, password, checked } = this.state;
    return (
      <div className="tutorstartarea-component">
        <div className="container v-r">
          <h1>Access Hundreds of Online Tutoring Jobs </h1>
          <h2>Join our Team!</h2>
          <div className="row inner-area">
            <div className="col-lg-6">
              <InputBox
                className="input-box"
                icon={user}
                value={first_name}
                placeholder="Type Your First Name"
                onChange={(e) => this.setState({ first_name: e })}
              />
            </div>
            <div className="col-lg-6">
              <InputBox
                className="input-box"
                value={last_name}
                placeholder="Type Your Last Name"
                onChange={(e) => this.setState({ last_name: e })}
              />
            </div>
          </div>
          <div className="row inner-area">
            <div className="col-lg-6">
              <InputBox
                className="input-box"
                icon={email_ico}
                value={email}
                placeholder="Type Your E-mail"
                onChange={(e) => this.setState({ email: e })}
              />
            </div>
            <div className="col-lg-6">
              <InputBox
                className="input-box"
                icon={key}
                value={password}
                type="password"
                placeholder="Create Password"
                onChange={(e) => this.setState({ password: e })}
              />
            </div>
          </div>
          <div className="inner-area content-part">
            <CheckBox
              className="check-box"
              value={checked}
              onChange={(e) => this.setState({ checked: e })}
            />
            <p>
              I agree to GradeGetters’ terms of service and privacy policy for
              tutors
              <NavLink to="/privacy">Read More</NavLink>{" "}
            </p>
          </div>
          {this.state.checked === false && (
            <span className="text-center text-danger">
              PLEASE AGREE TO TERMS
            </span>
          )}
          {!this.state.checked ? (
            <div
              className="inner-area start-btn2 v-c h-c"
              onClick={() => this.setState({ checked: false })}
            >
              Get Started
            </div>
          ) : (
            <div
              className="inner-area start-btn2 v-c h-c"
              onClick={(e) => this.doStart()}
            >
              Get Started
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.Auth.token,
  user: state.Auth.user,
  signErr: state.Auth.signErr,
});

export default connect(mapStateToProps, { tutorSignUpAction, initAppAction })(
  withRouter(TutorStartArea)
);
