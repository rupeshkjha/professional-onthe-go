import React from "react";
import "./TutorSignUpPage.scss";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import arrow from "../../Assets/Common/left-arrow.svg";
import { ReactSVG } from "react-svg";
import { YesNo, Subjects } from "./assets";
import { SelectBox, StartButton, InputBox, ModalPopUp } from "../../Components";
import shoppingList from "../../Assets/Common/shopping-list.svg";
import telephone from "../../Assets/Common/telephone.svg";
import place from "../../Assets/Common/place.svg";
import navigation from "../../Assets/Common/navigation-arrow.svg";
import add from "../../Assets/Common/add.svg";
import {
  tutorSignUpAction,
  getLevelAction,
  getSubjectAction,
  getSchoolAction,
} from "../../Redux/Actions";
import MultiSelect from "react-multi-select-component";

const options = [
  { label: "Grapes", value: "grapes" },
  { label: "Grapes1", value: "grapes1" },
  { label: "Grapes3", value: "grapes3" },
];

class TutorSignUpPage extends React.Component {
  state = {
    currentProgress: 1,

    zipcode: "",
    city: "",
    phone: "",
    deliver: "",
    referal_code: "",

    college_interest: "",
    college_subject: [],

    high_interest: "",
    high_subject: [],

    undergraduate_school: "",
    major: "",
    gpa: "",

    graduate_school_1: "",
    degree_1: "",
    type_1: "",

    graduate_school_2: "",
    degree_2: "",
    type_2: "",

    profile_title: "",
    fan_facts: "",
    about_me: "",
    experience: "",
    approach: "",
    showPopUp: false,
    college_subject_dropdown: [],
  };

  constructor(props) {
    super(props);
    this.workContainer = React.createRef();
  }

  componentDidMount() {
    console.log("pushed state", this.props.location.state);
    window.addEventListener("keydown", this.checkEnterPress);
    this.props.getLevelAction();
    this.props.getSubjectAction();
    this.props.getSchoolAction();
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.checkEnterPress);
  }

  checkEnterPress = (e) => {
    if (e.keyCode !== 13) return;
  };

  goBack = () => {
    this.props.history.push("/tutor-home");
  };

  changeProgress_1 = (property, value, movePart = 0) => {
    this.setState({ [property]: value });
    movePart === 0 ? this.scrollToDom(0, 0) : this.scrollToDom(1, movePart);
  };

  inputProgress_1 = (property, value) => {
    if (value && value.name) {
      this.setState({ [property]: value.name });
    } else {
      this.setState({ [property]: value });
    }
  };

  selectCollegeSubject = (value, is_delete = false) => {
    let { college_subject } = this.state;
    let index = college_subject.indexOf(value);
    if (is_delete) {
      college_subject.splice(index, 1);
    } else {
      if (index === -1) {
        college_subject.push(value);
      }
    }
    this.setState({ college_subject });
  };

  selectHighSubject = (value, is_delete = false) => {
    let { high_subject } = this.state;
    let index = high_subject.indexOf(value);
    if (is_delete) {
      high_subject.splice(index, 1);
    } else {
      if (index === -1) {
        high_subject.push(value);
      }
    }
    this.setState({ high_subject });
  };

  scrollToDom = (section, part) => {
    const heightFromTop =
      (window.outerHeight -
        this.refs[`section${section}${part}`].offsetHeight) /
      2;
    const yToReach =
      this.refs[`section${section}${part}`].offsetTop - heightFromTop;
    this.workContainer.current.scrollTo({
      left: 0,
      top: yToReach,
      behavior: "smooth",
    });
  };

  moveSection = (flag) => {
    const current = this.state.currentProgress;
    const next =
      flag === "next" ? current + 1 : current === 1 ? 1 : current - 1;
    if (next === 3) {
      this.goBack();
      return;
    }
    if (next !== current) {
      this.setState({ currentProgress: next });
      this.workContainer.current.scrollTo(0, 0);
    }
  };

  pickFileForPhoto = (e) => {
    e.preventDefault();
    if (!e.target.files[0]) return;
    this.setState({
      progress_4: {
        ...this.state.progress_4,
        photo: URL.createObjectURL(e.target.files[0]),
      },
    });
  };

  onSubmit() {
    const SignUpState = this.props.location.state;
    const payload = {
      zipcode: this.state.zipcode,
      city: this.state.city,
      deliver: this.state.deliver,
      referal_code: this.state.referal_code,
      first_name: SignUpState.first_name,
      last_name: SignUpState.last_name,
      email: SignUpState.email,
      password: SignUpState.password,
      phone: this.state.phone,
      birth_date: "‘1999-01-12’",
      undergraduate_school: this.state.undergraduate_school,
      major: this.state.major,
      gpa: this.state.gpa,
      graduate_school_1: this.state.graduate_school_1,
      degree_1: this.state.degree_1,
      type_1: this.state.type_1,
      graduate_school_2: this.state.graduate_school_2,
      degree_2: this.state.degree_2,
      type_2: this.state.type_1,
      classifications: "{}",
      school1_id: 1,
      major_gpa: 10.8,
      school2_id: 1,
      degree2: "string",
      degree2_type: "string",
      school3_id: "integer",
      degree3: "string",
      degree3_type: "string",
      profile_title: this.state.profile_title,
      fun_facts: "asdsa",
      about_me: this.state.about_me,
      experience: this.state.experience,
      approach: this.state.approach,
      // picture: file
    };
    console.log("TutorSignUpPage onSubmit -> ", this.state);
    // this.props.tutorSignUpAction(payload);
    this.setState({
      showPopUp: true,
    });
    // this.moveSection("next");
  }

  toggleReviewModal = (e) => {
    console.log("e", e);
    this.setState({ showPopUp: false });
  };

  selectCollegeSubjectMap = (e) => {
    console.log(e);
    this.setState({
      college_subject_dropdown: e,
      college_subject: e.map((s) => {
        return { id: s.value, name: s.label };
      }),
    });
  };

  render() {
    const {
      currentProgress,
      college_interest,
      college_subject,
      high_interest,
      high_subject,
      profile_title,
      fan_facts,
      about_me,
      experience,
      approach,
    } = this.state;
    const { subjects, schools, levels, signErr } = this.props;
    console.log("subjects", subjects);
    const subjectsMap =
      subjects && subjects.length
        ? subjects.map((s) => {
            return {
              label: s.name,
              value: s.id,
            };
          })
        : [];
    return (
      <div className="tutorsignup-page">
        <div className="progress-explain">
          <ReactSVG
            src={arrow}
            style={{
              fill: "white",
              cursor: "pointer",
              top: "32px",
              left: "31px",
              position: "absolute",
            }}
            onClick={(e) => this.goBack()}
          />
          <div className="bg-dot custom-bg" />
          <div className="explain-content">
            {currentProgress === 1 && (
              <div id="section-explain-1">
                <h1>Become a Tutor</h1>
                <p>
                  GradeGetter is the only platform for one on one online
                  Tutoring for K-12, College, and Test Prep where our customers
                  pay what they can afford. This model was influenced by the
                  GradeGetter’s founders Christian faith in his calling to make
                  tutoring available to everyone — not just a select few. We
                  would love to have you join us!
                </p>
              </div>
            )}
            {currentProgress === 2 && (
              <div id="section-explain-2">
                <h1>Become a Tutor</h1>
                <p>
                  Over 10,000 verified background checked U.S based tutors ready
                  to work you
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="work-area" ref={this.workContainer}>
          <div className="container work-container">
            {currentProgress === 1 && (
              <div className="work-content" id="section-1">
                <div className="row show-mobile-flex" id="section-1-title">
                  <div className="col-lg-12">
                    <h2>Become a tutor</h2>
                  </div>
                </div>
                <div className="row section-1-row" id="section-1-1">
                  <div className="col-lg-12">
                    <h1>Personal Info</h1>
                  </div>
                  <div className="col-lg-6 profile-col">
                    {" "}
                    <InputBox
                      icon={place}
                      placeholder="Zipcode"
                      onChange={(e) => this.inputProgress_1("zipcode", e)}
                    />{" "}
                  </div>
                  <div className="col-lg-6 profile-col">
                    {" "}
                    <InputBox
                      icon={navigation}
                      placeholder="City"
                      onChange={(e) => this.inputProgress_1("city", e)}
                    />{" "}
                  </div>
                  <div className="col-lg-12 profile-col">
                    {" "}
                    <InputBox
                      icon={telephone}
                      placeholder="Type Your Phone"
                      onChange={(e) => this.inputProgress_1("phone", e)}
                    />{" "}
                  </div>
                  <div className="col-lg-12 profile-col">
                    <SelectBox
                      placeholder="How would you deliver tutoring?"
                      show_arrow
                      options={[{ id: 1, name: "deliver1" }]}
                      onChange={(e) => this.inputProgress_1("deliver", e)}
                    />
                  </div>
                  <div className="col-lg-12 profile-col">
                    {" "}
                    <InputBox
                      placeholder="Have a referal code (optional)"
                      onChange={(e) => this.inputProgress_1("referal_code", e)}
                    />{" "}
                  </div>
                </div>
                <div
                  className="row section-1-row"
                  id="section-1-2"
                  ref="section12"
                >
                  <div className="col-lg-12">
                    <h1>
                      Are you interested in tutoring some College level
                      subjects?
                    </h1>
                  </div>
                  {YesNo.map((item, index) => (
                    <div
                      className="col-lg-6 col-md-6 col-sm-6 col-6 grade-level-col"
                      key={index}
                      style={{ position: "relative" }}
                      onClick={(e) =>
                        this.changeProgress_1(
                          "college_interest",
                          item,
                          index + 3
                        )
                      }
                    >
                      <div
                        className={`grade-level center-item ${
                          college_interest === item ? "active" : ""
                        }`}
                      >
                        {item}
                      </div>
                      <div className="under-dot grade-level-bg" />
                    </div>
                  ))}
                </div>
                <div
                  className="row section-1-row"
                  id="section-1-3"
                  ref="section13"
                >
                  <div className="col-lg-12">
                    <h1>College level subjects your interested in tutoring</h1>
                  </div>
                  <div className="col-lg-12">
                    <div className="col-lg-12 subject-container">
                      {college_subject.map((item, index) => (
                        <div className="subject-item v-c" key={index}>
                          <p>{item.name}</p>
                          <ReactSVG
                            src={add}
                            className="svg-icon"
                            onClick={(e) => this.selectCollegeSubject(e, true)}
                          />
                        </div>
                      ))}
                    </div>
                    {subjects && subjects.length ? (
                      <MultiSelect
                        options={subjectsMap}
                        value={this.state.college_subject_dropdown}
                        onChange={(e) => this.selectCollegeSubjectMap(e)}
                        labelledBy={"Select"}
                      />
                    ) : null}
                  </div>
                </div>
                <div
                  className="row section-1-row"
                  id="section-1-4"
                  ref="section14"
                >
                  <div className="col-lg-12">
                    <h1>
                      Are you interested in tutoring some High level subjects?
                    </h1>
                  </div>
                  {YesNo.map((item, index) => (
                    <div
                      className="col-lg-6 col-md-6 col-sm-6 col-6 grade-level-col"
                      key={index}
                      style={{ position: "relative" }}
                      onClick={(e) =>
                        this.changeProgress_1("high_interest", item, index + 5)
                      }
                    >
                      <div
                        className={`grade-level center-item ${
                          high_interest === item ? "active" : ""
                        }`}
                      >
                        {item}
                      </div>
                      <div className="under-dot grade-level-bg" />
                    </div>
                  ))}
                </div>
                <div
                  className="row section-1-row"
                  id="section-1-5"
                  ref="section15"
                >
                  <div className="col-lg-12">
                    <h1>High level subjects your interested in tutoring</h1>
                  </div>
                  <div className="col-lg-12">
                    {/* <SelectBox
                      icon={shoppingList}
                      placeholder="Type subject"
                      options={subjects || []}
                      onChange={(e) => this.selectHighSubject("HighSubject", e)}
                    /> */}
                    <div className="col-lg-12 subject-container">
                      {high_subject.map((item, index) => (
                        <div className="subject-item v-c" key={index}>
                          <p>{item}</p>
                          <ReactSVG
                            src={add}
                            className="svg-icon"
                            onClick={(e) => this.selectHighSubject(e, true)}
                          />
                        </div>
                      ))}
                    </div>
                    {subjects && subjects.length ? (
                      <MultiSelect
                        options={subjectsMap}
                        value={this.state.college_subject_dropdown}
                        onChange={(e) => this.selectCollegeSubjectMap(e)}
                        labelledBy={"Select"}
                      />
                    ) : null}
                  </div>
                </div>
                <div
                  className="row section-1-row"
                  id="section-1-6"
                  ref="section16"
                >
                  <div className="col-lg-12">
                    <h1>Education</h1>
                  </div>
                  <div className="col-lg-12 profile-col">
                    {" "}
                    <SelectBox
                      icon={shoppingList}
                      placeholder="Type Undergraduate School"
                      show_arrow
                      options={schools || []}
                      onChange={(e) =>
                        this.inputProgress_1("undergraduate_school", e)
                      }
                    />{" "}
                  </div>
                  <div className="col-lg-12 profile-col">
                    {" "}
                    <InputBox
                      placeholder="Major"
                      onChange={(e) => this.inputProgress_1("major", e)}
                    />{" "}
                  </div>
                  <div className="col-lg-12 profile-col third-col">
                    {" "}
                    <InputBox
                      placeholder="What is your major GPA?"
                      onChange={(e) => this.inputProgress_1("gpa", e)}
                    />{" "}
                  </div>
                  <div className="col-lg-12 profile-col">
                    {" "}
                    <SelectBox
                      placeholder="Type Graduate School (optional)"
                      show_arrow
                      options={schools || []}
                      onChange={(e) =>
                        this.inputProgress_1("graduate_school_1", e)
                      }
                    />{" "}
                  </div>
                  <div className="col-lg-12 profile-col">
                    {" "}
                    <InputBox
                      placeholder="Degree"
                      onChange={(e) => this.inputProgress_1("degree_1", e)}
                    />{" "}
                  </div>
                  <div className="col-lg-12 profile-col third-col">
                    <SelectBox
                      placeholder="Please select a type"
                      show_arrow
                      options={levels || []}
                      onChange={(e) => this.inputProgress_1("type_1", e)}
                    />
                  </div>
                  {/* <div className="col-lg-12 profile-col">
                    {" "}
                    <InputBox
                      placeholder="Type Graduate School (optional)"
                      onChange={(e) =>
                        this.inputProgress_1("graduate_school_2", e)
                      }
                    />{" "}
                  </div> */}
                  {/* <div className="col-lg-12 profile-col">
                    {" "}
                    <InputBox
                      placeholder="Degree"
                      onChange={(e) => this.inputProgress_1("degree_2", e)}
                    />{" "}
                  </div> */}
                  {/* <div className="col-lg-12 profile-col">
                    <SelectBox
                      placeholder="Please select a type"
                      show_arrow
                      options={levels || []}
                      onChange={(e) => this.inputProgress_1("type_2", e)}
                    />
                  </div> */}
                </div>
                <div
                  className="row section-1-row"
                  id="section-1-6"
                  ref="section16"
                >
                  <div className="col-lg-12">
                    <h1>Profile Title</h1>
                  </div>
                  <div className="col-lg-12">
                    <textarea
                      placeholder="Experienced Math & Science Ivy League Tutor"
                      value={profile_title}
                      onChange={(e) =>
                        this.inputProgress_1("profile_title", e.target.value)
                      }
                    />
                    <div className="under-dot additional-bg" />
                  </div>
                </div>
                <div
                  className="row section-1-row"
                  id="section-1-6"
                  ref="section16"
                >
                  <div className="col-lg-12">
                    <h1>Fan Facts</h1>
                  </div>
                  <div className="col-lg-12">
                    <textarea
                      placeholder="One passion people quickly learn about me is that I LOVE golf! Any time I have a chance, you will find me playing or studying the sport. I am the oldest of seven, and have never been out of Texas."
                      value={fan_facts}
                      onChange={(e) =>
                        this.inputProgress_1("fan_facts", e.target.value)
                      }
                    />
                    <div className="under-dot additional-bg" />
                  </div>
                </div>
                <div
                  className="row section-1-row"
                  id="section-1-6"
                  ref="section16"
                >
                  <div className="col-lg-12">
                    <h1>About Me</h1>
                  </div>
                  <div className="col-lg-12">
                    <textarea
                      placeholder="I am a senior Accounting major at Texas Christian University. I've been on the Dean's List for 2 years in a row! When I graduate, I hope to attend the University of Texas is Arlington to earn my Masters."
                      value={about_me}
                      onChange={(e) =>
                        this.inputProgress_1("about_me", e.target.value)
                      }
                    />
                    <div className="under-dot additional-bg" />
                  </div>
                </div>
                <div
                  className="row section-1-row"
                  id="section-1-6"
                  ref="section16"
                >
                  <div className="col-lg-12">
                    <h1>Experience</h1>
                  </div>
                  <div className="col-lg-12">
                    <textarea
                      placeholder="As a member of National Junior Honor Society, I had the opportunity to tutor students bi-weekly in all subject areas during my senior year in high school."
                      value={experience}
                      onChange={(e) =>
                        this.inputProgress_1("experience", e.target.value)
                      }
                    />
                    <div className="under-dot additional-bg" />
                  </div>
                </div>
                <div
                  className="row section-1-row"
                  id="section-1-6"
                  ref="section16"
                >
                  <div className="col-lg-12">
                    <h1>Approach</h1>
                  </div>
                  <div className="col-lg-12">
                    <textarea
                      placeholder="As a child, I struggled in school and found learning to be difficult and demoralizing. In middle school, I was fortunate enough to have a teacher who, through positive encouragement and persistence."
                      value={approach}
                      onChange={(e) =>
                        this.inputProgress_1("approach", e.target.value)
                      }
                    />
                    <div className="under-dot additional-bg" />
                  </div>
                </div>
              </div>
            )}
            {currentProgress === 2 && (
              <div className="work-content v-r" id="section-2">
                <div className="row show-mobile-flex" id="section-2-title">
                  <div className="col-lg-12">
                    <h2>Become a tutor</h2>
                  </div>
                </div>
                <h3>
                  Thanks for taking the time to complete this application.
                  Please click on the scheduled interview below to book a phone
                  interview with a member of our hiring team
                </h3>
                <br />
                {signErr ? (
                  <span className="margin text-center text-danger">
                    {signErr}
                  </span>
                ) : null}
                <br />
                <StartButton
                  className="start-btn show-web-flex"
                  height="65px"
                  startText="Schedule Interview"
                  onClick={() => this.onSubmit()}
                />
                <StartButton
                  className="start-btn show-mobile-flex"
                  height="50px"
                  startText="Schedule Interview"
                  onClick={() => this.onSubmit()}
                />
              </div>
            )}
          </div>
          {currentProgress === 1 && (
            <div className={`submit-area`}>
              <div
                className="container submit-container"
                style={{ paddingBottom: window.outerHeight / 2 + 100 }}
              >
                <div className="btn-area" ref="section00">
                  <div
                    className="back-btn"
                    onClick={(e) => this.moveSection("previous")}
                  >
                    <div className="back-icon center-item">
                      <ReactSVG src={arrow} style={{ fill: "#C0C5C9" }} />
                    </div>
                    <div className="back-text center-item">Back</div>
                  </div>
                  <StartButton
                    className="start-btn show-web-flex"
                    height="65px"
                    startText="Continue"
                    onClick={(e) => this.moveSection("next")}
                  />
                  <StartButton
                    className="start-btn show-mobile-flex"
                    height="50px"
                    startText="Continue"
                    onClick={(e) => this.moveSection("next")}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        {this.state.showPopUp && (
          <ModalPopUp
            toggleReviewModal={this.toggleReviewModal}
            isOpen={this.state.showPopUp}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  subjects: state.Core.subjects,
  schools: state.Core.schools,
  levels: state.Core.levels,
  token: state.Auth.token,
  user: state.Auth.user,
  signErr: state.Auth.signErr,
});

export default connect(mapStateToProps, {
  getLevelAction,
  getSubjectAction,
  tutorSignUpAction,
  getSchoolAction,
})(withRouter(TutorSignUpPage));
