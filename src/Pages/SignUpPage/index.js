import React from "react";
import "./SignUpPage.scss";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import moment from "moment";
import arrow from "../../Assets/Common/left-arrow.svg";
import { ReactSVG } from "react-svg";
import { getDetailsDays } from "../../Util/util";
import {
  GradeLevels,
  Plan,
  Subjects,
  TutorTypes,
  Times,
  Feedback,
  PaymentInformations,
  InfosAfterPayment,
  Payments,
  Shares,
  FreeLesson,
  PaymentPlan,
} from "./assets";
import {
  SelectBox,
  StartButton,
  Toggle,
  ClientFeedback,
  InputBox,
  Accordion,
  WeekHourSlider,
  HourlyRateSlider,
} from "../../Components";
import shoppingList from "../../Assets/Common/shopping-list.svg";
import tick from "../../Assets/Common/tick.svg";
import user from "../../Assets/Common/user.svg";
import email from "../../Assets/Common/email.svg";
import key from "../../Assets/Common/key.svg";
import telephone from "../../Assets/Common/telephone.svg";
import checkmark from "../../Assets/Common/checkmark.png";
import rightArrow from "../../Assets/Common/arrow-point-to-right.svg";
import creditcard from "../../Assets/Common/credit-card.svg";
import home from "../../Assets/Common/home.svg";
import place from "../../Assets/Common/place.svg";
import narrow from "../../Assets/Common/navigation-arrow.svg";
import Media from "react-media";
import { CarouselLeftButton, CarouselRightButton } from "../../Constant";
import Loadable from "@loadable/component";
import $ from "jquery";
import {
  getLevelAction,
  getSubjectAction,
  getConnectionAction,
  getPlanAction,
  signUpAction,
} from "../../Redux/Actions";

const OwlCarousel = Loadable(() => import("react-owl-carousel"));
const Dates = getDetailsDays(60);

class SignUpPage extends React.Component {
  state = {
    currentProgress: 1,
    currentWeekHour: 1,
    currentHourlyRate: 1,
    progress_1: {
      grade_level: "",
      subject: "",
      tutor_type: "",
      payment_frequency: "",
    },
    progress_2: {
      tutor_date: "",
      tutor_date_index: 0,
      tutor_time: "",
      schedule: false,
    },
    progress_4: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      phone: "",
      photo: null,
    },
    progress_6: {
      payment_method: "",
    },
    progress_7: {
      card_number: "",
      month: "",
      year: "",
      cvv2: "",
      card_name: "",

      billing_address: "",
      zip_code: "",
      city: "",

      paypal_email: "",
      paymentQuestion: false,
    },
  };

  constructor(props) {
    super(props);

    this.workContainer = React.createRef();
    this.myUrl = React.createRef();
  }

  componentDidMount() {
    window.addEventListener("keydown", this.checkEnterPress);
    this.props.getLevelAction();
    this.props.getSubjectAction();
    this.props.getConnectionAction();
    this.props.getPlanAction();
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.checkEnterPress);
  }

  onSubmit() {
    console.log(this.state);
    const payload = {
      level_id: this.state.progress_1.grade_level.id,
      subject_id: this.state.progress_1.subject.id,
      tutoring_need: 1,
      start_when: this.state.progress_2.tutor_date, // when they want to start tutoring
      first_name: this.state.progress_4.first_name,
      last_name: this.state.progress_4.last_name,
      phone: this.state.progress_4.phone,
      email: this.state.progress_4.email,
      password: this.state.progress_4.password,
    };
    console.log();
    this.props.signUpAction(payload);
    // this.moveSection("next");
  }

  checkEnterPress = (e) => {
    if (e.keyCode !== 13) return;
  };

  goBack = () => {
    this.props.history.push("/");
  };

  changeProgress_1 = (property, value, movePart = 0) => {
    this.setState({
      progress_1: { ...this.state.progress_1, [property]: value },
    });
    movePart === 0 ? this.scrollToDom(0, 0) : this.scrollToDom(1, movePart);
  };

  changePricingPlan = (property, value, movePart = 0) => {
    this.setState({
      currentWeekHour: 1,
      currentHourlyRate: 1,
      progress_1: { ...this.state.progress_1, [property]: value },
    });
    // movePart === 0 ? this.scrollToDom(0, 0) : this.scrollToDom(1, movePart);
  };

  setStateAsync = (state) => {
    return new Promise((resolve) => {
      this.setState(state, resolve);
    });
  };

  selectDate = async (item, index) => {
    const itemWidth = $(`#carousel${index}`)[0].offsetWidth;
    const transformValue = -parseInt(
      $(".owl-stage")[0]
        .style.transform.split("(")[1]
        .split(",")[0]
        .slice(0, -2),
      10
    );
    const passedCount = parseInt(transformValue / itemWidth, 10);
    const itemCount = parseInt(
      $(`#carousel${index}`)[0].offsetParent.offsetLeft / itemWidth,
      10
    );
    const finalIndex = index - itemCount + passedCount;
    await this.setState({
      progress_2: {
        ...this.state.progress_2,
        tutor_date: item,
        tutor_date_index: finalIndex,
      },
    });
    await this.setState({
      progress_2: {
        ...this.state.progress_2,
        tutor_date: item,
        tutor_date_index: finalIndex,
      },
    });
    this.scrollToDom(2, 2);
  };

  changeProgress_2 = async (property, value, movePart = 0) => {
    await this.setState({
      progress_2: { ...this.state.progress_2, [property]: value },
    });
    await this.setState({
      progress_2: { ...this.state.progress_2, [property]: value },
    });
    movePart === 0 ? this.scrollToDom(0, 0) : this.scrollToDom(2, movePart);
  };

  selectSubject = (e) => {
    this.setState({ progress_1: { ...this.state.progress_1, subject: e } });
  };

  // getSubjectById = (id) => {
  //   const state = this.state.progress_1.grade_level
  //   if(state == "Middle School") {

  //   }
  // }
  changeLevel = (property, value, movePart = 0) => {
    this.setState({
      progress_1: {
        ...this.state.progress_1,
        [property]: value,
        subject: { id: null, name: "" },
      },
    });
    movePart === 0 ? this.scrollToDom(0, 0) : this.scrollToDom(1, movePart);
    this.props.getSubjectAction(value.id);
  };

  inputProgress_4 = (property, value) => {
    this.setState({
      progress_4: { ...this.state.progress_4, [property]: value },
    });
  };

  inputProgress_7 = (property, value) => {
    this.setState({
      progress_7: { ...this.state.progress_7, [property]: value },
    });
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
      flag === "next"
        ? current === 5
          ? 10
          : current === 10
          ? 6
          : current + 1
        : current === 1
        ? 1
        : current === 10
        ? 5
        : current - 1;

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

  changeProgress_6 = (property, value) => {
    this.setState({
      progress_6: { ...this.state.progress_6, [property]: value },
    });
    this.moveSection("next");
  };

  copyMyLink = () => {
    this.myUrl.select();
    document.execCommand("copy");
  };

  weeklyHour = (value) => {
    this.setState({ currentWeekHour: value });
  };

  hourlyRate = (value) => {
    this.setState({ currentHourlyRate: value });
  };
  paymentQuestionToggle = () => {
    this.setState({ paymentQuestion: !this.state.paymentQuestion });
  };
  getFirstConnection(client) {
    return {
      name: client.tutor.name,
      address: client.tutor.location,
      level: 1,
      knowledge: 3.5,
      presentation: 4.7,
      comment_date: new Date(client.reviewed_on).toDateString(),
      description: client.review_content,
    };
  }

  render() {
    const {
      currentProgress,
      progress_1,
      progress_2,
      progress_4,
      progress_6,
      progress_7,
    } = this.state;
    const { subjects, levels, connections, plans, signErr } = this.props;
    return (
      <div className="signup-page">
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
                <h1>Academic & tutoring needs</h1>
                <p>
                  Over 10,000 verified background checked U.S based tutors ready
                  to work you
                </p>
              </div>
            )}
            {currentProgress === 2 && (
              <div id="section-explain-2">
                <h1>Date & Time</h1>
                <p>
                  This could be solid or tentative start date. You can always
                  adjust start date and time once we connect you with a tutor.
                </p>
              </div>
            )}
            {currentProgress === 3 && (
              <div id="section-explain-3">
                <h1>Clients Are Saying</h1>
                <p>
                  Finding a reliable tutor or study coach is hard — but
                  GradeGetter is here to make it easier! All of our tutors are
                  verified, have passed background checks, and have been
                  screened and interviewed by our hiring team!
                </p>
              </div>
            )}
            {currentProgress === 4 && (
              <div id="section-explain-4">
                <h1>Create your account </h1>
                <p>
                  Your information is protected at a high level. We do not share
                  any personal information with third parties
                </p>
              </div>
            )}
            {currentProgress === 5 && (
              <div id="section-explain-5">
                <h1>All About Results</h1>
                <p>
                  If you like the tutor you are assigned - great! We can’t wait
                  to hear all about your success. However, if you feel the tutor
                  assigned was not a good fit, we will place you with another
                  instructor free of charge.
                </p>
              </div>
            )}
            {currentProgress === 10 && (
              <div id="section-explain-5">
                <h1>Choose your price</h1>
                <p>
                  At GradeGetter, we let our customers choose what they can pay
                  for online and one-on-one tutoring. Paying a little more helps
                  to offset the cost for families who might not be able to
                  afford tutoring regularly. With this approach, we are able to
                  make private tutoring more accessible and affordable for
                  everyone
                </p>
              </div>
            )}
            {(currentProgress === 6 || currentProgress === 7) && (
              <div id="section-explain-6">
                <h1>Payment Information</h1>
                <div className="provide-contents">
                  {PaymentInformations.map((item, index) => (
                    <div className="provide" key={index}>
                      <img src={checkmark} alt="checkmark" />
                      <div className="explain">{item}</div>
                    </div>
                  ))}
                </div>
                <div className="next-contents">
                  <div
                    className="question-header"
                    onClick={() => this.paymentQuestionToggle()}
                  >
                    <div className="explain">
                      What next after entering payment information?
                    </div>
                    <ReactSVG
                      src={rightArrow}
                      className={`icon ${
                        this.state.paymentQuestion
                          ? "has-icon-close"
                          : "icon-close"
                      }`}
                    />
                  </div>
                  {this.state.paymentQuestion ? (
                    <div className="content-list">
                      {InfosAfterPayment.map((item, index) => (
                        <Accordion
                          className="accordion"
                          title={item.title}
                          content={item.content}
                          icon={rightArrow}
                          key={index}
                        />
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            )}
            {currentProgress === 8 && (
              <div id="section-explain-8">
                <h1>Training Video</h1>
                <p>
                  This video gives you a quick overview on how our program
                  works.{" "}
                </p>
              </div>
            )}
            {currentProgress === 9 && (
              <div id="section-explain-9">
                <h1>Share Better Grades</h1>
                <p>
                  Give $25 in GradeGetter credit to a friend and receive $25 in
                  tutoring credit back after your friend completes their first
                  lesson!
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="work-area" ref={this.workContainer}>
          <div className="work-header show-web-flex">
            <div className="container work-container">
              <div className="row header-row">
                <div className="col-lg-2 header-col">
                  <div
                    className={`col-name ${
                      currentProgress >= 1 ? "active" : ""
                    } ${currentProgress > 1 ? "passed" : ""}`}
                  >
                    ACADEMICS
                  </div>
                </div>
                <div className="col-lg-2 header-col">
                  <div
                    className={`col-name ${
                      currentProgress >= 2 ? "active" : ""
                    } ${currentProgress > 2 ? "passed" : ""}`}
                  >
                    DATE
                  </div>
                </div>
                <div className="col-lg-2 header-col">
                  <div
                    className={`col-name ${
                      currentProgress >= 4 ? "active" : ""
                    } ${currentProgress > 5 ? "passed" : ""}`}
                  >
                    PROFILE
                  </div>
                </div>
                <div className="col-lg-2 header-col">
                  <div
                    className={`col-name ${
                      currentProgress >= 6 ? "active" : ""
                    } ${
                      currentProgress >= 6 && currentProgress < 10
                        ? "passed"
                        : ""
                    }`}
                  >
                    PLAN
                  </div>
                </div>
                <div className="col-lg-2 header-col">
                  <div
                    className={`col-name ${
                      currentProgress >= 6 && currentProgress < 10
                        ? "active"
                        : ""
                    } ${
                      currentProgress > 7 && currentProgress < 10
                        ? "passed"
                        : ""
                    }`}
                  >
                    PAYMENT
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container work-container">
            {currentProgress === 1 && (
              <div className="work-content" id="section-1">
                <div className="row show-mobile-flex" id="section-1-title">
                  <div className="col-lg-12">
                    <h2>Academic & tutoring needs</h2>
                  </div>
                </div>
                <div className="row" id="section-1-1">
                  <div className="col-lg-12">
                    <h1>Select grade level of student</h1>
                  </div>
                  {levels
                    ? levels.map((item, index) => (
                        <div
                          className="col-lg-6 col-md-6 col-sm-6 col-6 grade-level-col"
                          key={index}
                          style={{ position: "relative" }}
                          onClick={(e) =>
                            this.changeLevel("grade_level", item, 2)
                          }
                        >
                          <div
                            className={`grade-level center-item ${
                              progress_1.grade_level === item ? "active" : ""
                            }`}
                          >
                            {item.name}
                          </div>
                          <div className="under-dot grade-level-bg" />
                        </div>
                      ))
                    : null}
                </div>
                <div className="row" id="section-1-2" ref="section12">
                  <div className="col-lg-12">
                    <h1>Subjects</h1>
                  </div>
                  <div className="col-lg-12">
                    <SelectBox
                      icon={shoppingList}
                      placeholder="Type subject"
                      options={subjects || []}
                      selectedText={progress_1.subject.name}
                      onChange={(e) => this.selectSubject(e)}
                    />
                  </div>
                  {progress_1.subject && progress_1.subject.length > 0 && (
                    <div
                      className="col-lg-12 show-web-flex"
                      style={{ alignItems: "center" }}
                    >
                      <div
                        className="ok-btn center-item"
                        onClick={(e) => this.scrollToDom(1, 3)}
                      >
                        OK{" "}
                        <ReactSVG
                          src={tick}
                          style={{ fill: "white", marginLeft: "15px" }}
                        />
                      </div>
                      <div
                        className="center-item"
                        style={{ height: "100%", margin: "30px 0 0 20px" }}
                      >
                        Press <b style={{ marginLeft: "5px" }}>ENTER</b>
                      </div>
                    </div>
                  )}
                </div>
                <div className="row" id="section-1-3" ref="section13">
                  <div className="col-lg-12">
                    <h1>Additional Information</h1>
                  </div>
                  <div className="col-lg-12">
                    <textarea placeholder="What additional information would you like the tutor to know about student (optional)" />
                    <div className="under-dot additional-bg" />
                  </div>
                  <div
                    className="col-lg-12 show-web-flex"
                    style={{ alignItems: "center" }}
                  >
                    <div
                      className="ok-btn center-item"
                      onClick={(e) => this.scrollToDom(1, 4)}
                    >
                      OK{" "}
                      <ReactSVG
                        src={tick}
                        style={{ fill: "white", marginLeft: "15px" }}
                      />
                    </div>
                    <div
                      className="center-item"
                      style={{ height: "100%", margin: "30px 0 0 20px" }}
                    >
                      Press <b style={{ marginLeft: "5px" }}>ENTER</b>
                    </div>
                  </div>
                </div>
                <div className="row" id="section-1-4" ref="section14">
                  <div className="col-lg-12">
                    <h1>Preference on the type of tutor</h1>
                  </div>
                  {TutorTypes.map((item, index) => (
                    <div
                      className="col-lg-6 col-12 grade-level-col"
                      key={index}
                      style={{ position: "relative" }}
                      onClick={(e) =>
                        this.changeProgress_1("tutor_type", item.type)
                      }
                    >
                      <div
                        className={`grade-level center-item ${
                          progress_1.tutor_type === item.type ? "active" : ""
                        }`}
                      >
                        <img src={item.picture} alt="tutor" />
                        {item.type}
                      </div>
                      <div className="under-dot grade-level-bg" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentProgress === 2 && (
              <div className="work-content" id="section-2">
                <div className="row show-mobile-flex" id="section-2-title">
                  <div className="col-lg-12">
                    <h2>Date & Time</h2>
                  </div>
                </div>
                <div className="row" id="section-2-1">
                  <div className="col-lg-12">
                    <h1>When would you like to start tutoring?</h1>
                  </div>
                  <div className="col-lg-12">
                    <Media
                      queries={{
                        lg: "(min-width: 1200px)",
                        md: "(min-width: 992px) and (max-width: 1199px)",
                        sm: "(max-width: 991px)",
                      }}
                    >
                      {(matches) => (
                        <OwlCarousel
                          className="owl-theme"
                          rewind
                          nav
                          stagePadding={0}
                          margin={20}
                          items={matches.lg ? 4 : matches.md ? 3 : 2}
                          dots={false}
                          navText={[CarouselLeftButton, CarouselRightButton]}
                          startPosition={progress_2.tutor_date_index}
                        >
                          {Dates.map((item, index) => (
                            <div
                              key={index}
                              className="date-container"
                              id={`carousel${index}`}
                            >
                              <div
                                className={`tutor-date normal-item ${
                                  progress_2.tutor_date === item.tutor_date
                                    ? "active"
                                    : ""
                                }`}
                                onClick={(e) =>
                                  this.selectDate(item.tutor_date, index)
                                }
                              >
                                <div className="month">{item.month}</div>
                                <div className="day">{item.day}</div>
                                <div className="weekday">{item.weekday}</div>
                              </div>
                              <div className="under-dot tutor-date-bg" />
                            </div>
                          ))}
                        </OwlCarousel>
                      )}
                    </Media>
                  </div>
                </div>
                <div className="row" id="section-2-2" ref="section22">
                  <div className="col-lg-12">
                    <h1>Select time</h1>
                  </div>
                  {Times.map((item, index) => (
                    <div
                      className="col-lg-4 col-md-6 col-6 tutor-time-col"
                      key={index}
                      style={{ position: "relative" }}
                      onClick={(e) =>
                        this.changeProgress_2("tutor_time", item.partOfDay, 3)
                      }
                    >
                      <div
                        className={`tutor-time normal-item center-item ${
                          progress_2.tutor_time === item.partOfDay
                            ? "active"
                            : ""
                        }`}
                      >
                        <div className="part-of-day">{item.partOfDay}</div>
                        <div className="duration">{item.duration}</div>
                      </div>
                      <div className="under-dot tutor-time-bg" />
                    </div>
                  ))}
                </div>
                <div className="row" id="section-2-3" ref="section23">
                  <div className="col-lg-12 schedule-col">
                    <Toggle
                      value={progress_2.schedule}
                      onChange={(value) =>
                        this.changeProgress_2("schedule", value)
                      }
                    />
                    <p>I am not ready to schedule my first lesson</p>
                  </div>
                </div>
              </div>
            )}

            {currentProgress === 3 && (
              <div className="work-content" id="section-3">
                <div className="row show-mobile-flex" id="section-3-title">
                  <div className="col-lg-12">
                    <h2>Clients Are Saying</h2>
                  </div>
                </div>
                <div className="row" id="section-3-1">
                  <div className="col-lg-9">
                    {connections && connections.length ? (
                      <ClientFeedback
                        item={this.getFirstConnection(connections[0])}
                        className="custom-feedback"
                      />
                    ) : null}
                  </div>
                  <div className="col-lg-9 remarks">
                    *Students who use GradeGetter are likely to develop better
                    study habits and improve grades
                  </div>
                </div>
              </div>
            )}

            {currentProgress === 4 && (
              <div className="work-content" id="section-4">
                <div className="row show-mobile-flex" id="section-4-title">
                  <div className="col-lg-12">
                    <h2>Create your account</h2>
                  </div>
                </div>
                <div className="row" id="section-4-1">
                  <div className="col-lg-12">
                    <h1>Profile</h1>
                  </div>
                  <div className="col-lg-12 show-mobile-flex profile-col">
                    <div className="center-item initial-name">
                      {progress_4.photo ? (
                        <img
                          src={progress_4.photo}
                          style={{ width: "100%", height: "100%" }}
                          alt="avatar"
                        />
                      ) : (
                        <span>
                          {progress_4.first_name[0] || "A"}
                          {progress_4.last_name[0] || "L"}
                        </span>
                      )}
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      id="image_picker"
                      style={{ display: "none" }}
                      onChange={(e) => this.pickFileForPhoto(e)}
                    ></input>
                    <label htmlFor="image_picker">
                      <div className="upload-btn center-item">Upload Photo</div>
                    </label>
                  </div>
                  <div className="col-lg-6 profile-col">
                    {" "}
                    <InputBox
                      icon={user}
                      placeholder="Type Your First Name"
                      onChange={(e) => this.inputProgress_4("first_name", e)}
                    />{" "}
                  </div>
                  <div className="col-lg-6 profile-col">
                    {" "}
                    <InputBox
                      placeholder="Type Your Last Name"
                      onChange={(e) => this.inputProgress_4("last_name", e)}
                    />{" "}
                  </div>
                  <div className="col-lg-12 profile-col">
                    {" "}
                    <InputBox
                      icon={email}
                      placeholder="Type Your E-mail"
                      onChange={(e) => this.inputProgress_4("email", e)}
                    />{" "}
                  </div>
                  <div className="col-lg-12 profile-col">
                    {" "}
                    <InputBox
                      icon={key}
                      placeholder="Create Password"
                      type="password"
                      onChange={(e) => this.inputProgress_4("password", e)}
                    />{" "}
                  </div>
                  <div className="col-lg-12 profile-col">
                    {" "}
                    <InputBox
                      icon={telephone}
                      placeholder="Type Your Phone"
                      onChange={(e) => this.inputProgress_4("phone", e)}
                    />{" "}
                  </div>
                </div>
              </div>
            )}

            {currentProgress === 5 && (
              <div className="work-content" id="section-5">
                <div className="row show-mobile-flex" id="section-5-title">
                  <div className="col-lg-12">
                    <h2>All About Results</h2>
                  </div>
                </div>
                <div className="row" id="section-5-1">
                  <div className="col-lg-9">
                    {" "}
                    {connections && connections.length ? (
                      <ClientFeedback
                        item={this.getFirstConnection(connections[0])}
                        className="custom-feedback"
                      />
                    ) : null}
                  </div>
                  <div className="col-lg-9 remarks">
                    *Students who use GradeGetter are likely to develop better
                    study habits and improve grades
                  </div>
                </div>
              </div>
            )}

            {currentProgress === 10 && (
              <div className="work-content" id="section-10">
                <div className="row" id="section-1-1">
                  <div className="col-lg-12">
                    <h1>Your first lesson is Free</h1>
                  </div>
                  <div className="col-lg-12">
                    <p className="plan-small-title">
                      Select your payment frequency:
                    </p>
                  </div>
                  {plans
                    ? plans.map((item, index) => (
                        <div
                          className="col-lg-3 col-md-3 col-sm-6 col-6 grade-level-col"
                          key={index}
                          style={{ position: "relative" }}
                          onClick={(e) =>
                            this.changePricingPlan("payment_frequency", item, 2)
                          }
                        >
                          <div
                            className={`grade-level center-item ${
                              progress_1.payment_frequency === item
                                ? "active"
                                : ""
                            }`}
                          >
                            {item.name}
                          </div>
                          <div className="under-dot grade-level-bg" />
                        </div>
                      ))
                    : null}
                </div>
                <div className="row" id="section-1-1" ref="section12">
                  <div className="col-lg-12">
                    <p className="plan-small-title">
                      Select how many tutoring hours you need
                      {this.state.progress_1.payment_frequency.name}:
                    </p>
                    <div className="slider-bar">
                      <div className="slider-des-body text-center">
                        {this.state.currentWeekHour}Hrs
                      </div>
                      <WeekHourSlider
                        weeklyValue={this.state.currentWeekHour}
                        weeklyHour={(e) => this.weeklyHour(e)}
                        min={this.state.progress_1.payment_frequency.min_hour}
                        max={this.state.progress_1.payment_frequency.max_hour}
                      />
                    </div>
                  </div>
                </div>

                <div className="row" id="section-1-1" ref="section12">
                  <div className="col-lg-12">
                    <p className="plan-small-title">
                      Choose your price (hourly rate):
                    </p>
                    <div className="slider-bar">
                      <div className="slider-des-body text-center">
                        ${this.state.currentHourlyRate}/hr
                      </div>
                      <HourlyRateSlider
                        hourlyValue={this.state.currentHourlyRate}
                        hourlyRate={(e) => this.hourlyRate(e)}
                        min={this.state.progress_1.payment_frequency.min_rate}
                        max={this.state.progress_1.payment_frequency.max_hrate}
                      />
                    </div>
                  </div>
                </div>

                <div className="row" id="section-10-2">
                  <div className="col-lg-12 note">
                    <p>
                      {this.state.progress_1.grade_level.name} cost for{" "}
                      {this.state.currentWeekHour}hrs:{" "}
                      <span className="totoal-price">
                        $
                        {this.state.currentWeekHour *
                          this.state.currentHourlyRate}
                      </span>{" "}
                      (No payment due today. First lesson is FREE){" "}
                    </p>
                  </div>
                  <div className="col-lg-12"></div>
                  <div
                    className="col-lg-12 show-web-flex"
                    style={{ alignItems: "center" }}
                  >
                    <div
                      className="ok-btn center-item"
                      onClick={(e) => this.scrollToDom(10, 3)}
                    >
                      OK{" "}
                      <ReactSVG
                        src={tick}
                        style={{ fill: "white", marginLeft: "15px" }}
                      />
                    </div>
                    <div
                      className="center-item"
                      style={{ height: "100%", margin: "30px 0 0 20px" }}
                    >
                      Press <b style={{ marginLeft: "5px" }}>ENTER</b>
                    </div>
                  </div>
                </div>
                <div className="row" id="section-10-3" ref="section103">
                  <div className="col-lg-12">
                    <div className="free-lesson">
                      <div className="free-lesson-header">
                        <p className="text-center">One FREE lesson</p>
                        <h1 className="lesson-title text-center">
                          $0.00 due today
                        </h1>
                      </div>
                      <div className="free-lesson-body">
                        {FreeLesson.map((item, index) => {
                          return (
                            <div className="body-item" key={index}>
                              <div>
                                <img src={checkmark} alt="checkmark" />
                              </div>
                              <div className="explain">{item.des}</div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div className="under-dot additional-bg" />
                  </div>
                  <div
                    className="col-lg-12 show-web-flex"
                    style={{ alignItems: "center" }}
                  >
                    <div
                      className="ok-btn center-item"
                      onClick={(e) => this.scrollToDom(10, 4)}
                    >
                      OK{" "}
                      <ReactSVG
                        src={tick}
                        style={{ fill: "white", marginLeft: "15px" }}
                      />
                    </div>
                    <div
                      className="center-item"
                      style={{ height: "100%", margin: "30px 0 0 20px" }}
                    >
                      Press <b style={{ marginLeft: "5px" }}>ENTER</b>
                    </div>
                  </div>
                </div>

                <div className="row" id="section-10-3" ref="section104">
                  <div className="col-lg-12">
                    <div className="free-lesson">
                      <div className="free-lesson-header">
                        <p className="text-center">Weekly Payment Plan</p>
                        <h1 className="lesson-title text-center">
                          $
                          {this.state.currentWeekHour *
                            this.state.currentHourlyRate}
                          .00/wk
                        </h1>
                      </div>
                      <div className="free-lesson-body">
                        <div className="body-item">
                          <div>
                            <img src={checkmark} alt="checkmark" />
                          </div>
                          <div className="explain">
                            {" "}
                            ${this.state.currentWeekHour}/hr
                          </div>
                        </div>
                        <div className="body-item">
                          <div>
                            <img src={checkmark} alt="checkmark" />
                          </div>
                          <div className="explain">
                            {" "}
                            {this.state.currentWeekHour} &nbsp; tutoring hours
                            per week
                          </div>
                        </div>
                        {PaymentPlan.map((item, index) => {
                          return (
                            <div className="body-item" key={index}>
                              <div>
                                <img src={checkmark} alt="checkmark" />
                              </div>
                              <div className="explain">{item.des}</div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div className="under-dot additional-bg2" />
                  </div>
                  <div
                    className="col-lg-12 show-web-flex"
                    style={{ alignItems: "center" }}
                  >
                    <div
                      className="ok-btn center-item"
                      onClick={(e) => this.scrollToDom(0, 0)}
                    >
                      OK{" "}
                      <ReactSVG
                        src={tick}
                        style={{ fill: "white", marginLeft: "15px" }}
                      />
                    </div>
                    <div
                      className="center-item"
                      style={{ height: "100%", margin: "30px 0 0 20px" }}
                    >
                      Press <b style={{ marginLeft: "5px" }}>ENTER</b>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {currentProgress === 6 && (
              <div className="work-content" id="section-6">
                <div className="row show-mobile-flex" id="section-6-title">
                  <div className="col-lg-12">
                    <h2>Payment Information</h2>
                  </div>
                </div>
                <div className="row" id="section-6-1">
                  <div className="col-lg-12">
                    <h1>Choose Payment Method</h1>
                  </div>
                  {Payments.map((item, index) => (
                    <div
                      className="col-lg-6 col-12 grade-level-col"
                      key={index}
                      style={{ position: "relative" }}
                      onClick={(e) =>
                        this.changeProgress_6("payment_method", item.type)
                      }
                    >
                      <div className={`grade-level center-item`}>
                        <img src={item.picture} alt="tutor" />
                        {item.type}
                      </div>
                      <div className="under-dot grade-level-bg" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentProgress === 7 && (
              <div className="work-content" id="section-7">
                <div className="row show-mobile-flex" id="section-1-title">
                  <div className="col-lg-12">
                    <h2>Payment Information</h2>
                  </div>
                </div>
                {progress_6.payment_method === "Credit Card" && (
                  <div className="row" id="section-7-1" ref="section71">
                    <div className="col-lg-12">
                      <h1>Card Details</h1>
                    </div>
                    <div className="col-lg-12 profile-col">
                      {" "}
                      <InputBox
                        icon={creditcard}
                        placeholder="Card Number"
                        onChange={(e) => this.inputProgress_7("card_number", e)}
                      />{" "}
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-4 profile-col">
                      {" "}
                      <InputBox
                        placeholder="Month"
                        onChange={(e) => this.inputProgress_7("month", e)}
                      />{" "}
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-4 profile-col">
                      {" "}
                      <InputBox
                        placeholder="Year"
                        onChange={(e) => this.inputProgress_7("year", e)}
                      />{" "}
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-4 profile-col">
                      {" "}
                      <InputBox
                        placeholder="CVV2"
                        onChange={(e) => this.inputProgress_7("cvv2", e)}
                      />{" "}
                    </div>
                    <div className="col-lg-12 profile-col">
                      {" "}
                      <InputBox
                        icon={creditcard}
                        placeholder="Name of card"
                        onChange={(e) => this.inputProgress_7("card_name", e)}
                      />{" "}
                    </div>
                    {progress_7.card_number.length > 0 &&
                      progress_7.month.length > 0 &&
                      progress_7.year.length > 0 &&
                      progress_7.cvv2.length > 0 &&
                      progress_7.card_name.length > 0 && (
                        <div
                          className="col-lg-12 show-web-flex"
                          style={{ alignItems: "center" }}
                        >
                          <div
                            className="ok-btn center-item"
                            onClick={(e) => this.scrollToDom(7, 2)}
                          >
                            OK{" "}
                            <ReactSVG
                              src={tick}
                              style={{ fill: "white", marginLeft: "15px" }}
                            />
                          </div>
                          <div
                            className="center-item"
                            style={{ height: "100%", margin: "30px 0 0 20px" }}
                          >
                            Press <b style={{ marginLeft: "5px" }}>ENTER</b>
                          </div>
                        </div>
                      )}
                  </div>
                )}
                {progress_6.payment_method === "Credit Card" && (
                  <div className="row" id="section-7-2" ref="section72">
                    <div className="col-lg-12">
                      <h1>Billing address</h1>
                    </div>
                    <div className="col-lg-12 profile-col">
                      {" "}
                      <InputBox
                        icon={home}
                        placeholder="Address"
                        onChange={(e) =>
                          this.inputProgress_7("billing_address", e)
                        }
                      />{" "}
                    </div>
                    <div className="col-lg-6 profile-col">
                      {" "}
                      <InputBox
                        icon={place}
                        placeholder="Zipcode"
                        onChange={(e) => this.inputProgress_7("zip_code", e)}
                      />{" "}
                    </div>
                    <div className="col-lg-6 profile-col">
                      {" "}
                      <InputBox
                        icon={narrow}
                        placeholder="City"
                        onChange={(e) => this.inputProgress_7("city", e)}
                      />{" "}
                    </div>
                    {progress_7.billing_address.length > 0 &&
                      progress_7.zip_code.length > 0 &&
                      progress_7.city.length > 0 && (
                        <div
                          className="col-lg-12 show-web-flex"
                          style={{ alignItems: "center" }}
                        >
                          <div
                            className="ok-btn center-item"
                            onClick={(e) => this.scrollToDom(0, 0)}
                          >
                            OK{" "}
                            <ReactSVG
                              src={tick}
                              style={{ fill: "white", marginLeft: "15px" }}
                            />
                          </div>
                          <div
                            className="center-item"
                            style={{ height: "100%", margin: "30px 0 0 20px" }}
                          >
                            Press <b style={{ marginLeft: "5px" }}>ENTER</b>
                          </div>
                        </div>
                      )}
                  </div>
                )}
                {progress_6.payment_method === "Paypal" && (
                  <div className="row" id="section-7-3" ref="section73">
                    <div className="col-lg-12">
                      <h1>Paypal Details</h1>
                    </div>
                    <div className="col-lg-12 profile-col">
                      {" "}
                      <InputBox
                        icon={email}
                        placeholder="Email"
                        onChange={(e) =>
                          this.inputProgress_7("paypal_email", e)
                        }
                      />{" "}
                    </div>
                    {progress_7.paypal_email.length > 0 && (
                      <div
                        className="col-lg-12 show-web-flex"
                        style={{ alignItems: "center" }}
                      >
                        <div
                          className="ok-btn center-item"
                          onClick={(e) => this.scrollToDom(0, 0)}
                        >
                          OK{" "}
                          <ReactSVG
                            src={tick}
                            style={{ fill: "white", marginLeft: "15px" }}
                          />
                        </div>
                        <div
                          className="center-item"
                          style={{ height: "100%", margin: "30px 0 0 20px" }}
                        >
                          Press <b style={{ marginLeft: "5px" }}>ENTER</b>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {currentProgress === 8 && (
              <div className="work-content" id="section-8">
                <div className="row show-mobile-flex" id="section-8-title">
                  <div className="col-lg-12">
                    <h2>Training Video</h2>
                  </div>
                </div>
                <div className="row" id="section-8-1">
                  <div className="col-lg-12">
                    <div className="video-area shadow-object" />
                  </div>
                </div>
              </div>
            )}

            {currentProgress === 9 && (
              <div className="work-content" id="section-9">
                <div className="row show-mobile-flex" id="section-9-title">
                  <div className="col-lg-12">
                    <h2>Share Better Grades</h2>
                  </div>
                </div>
                <div className="row" id="section-9-1">
                  <div className="col-lg-12 grade-level-col">
                    <div className="custom-input">
                      <div className="inputbox-container">
                        <input
                          type="text"
                          className="search-text"
                          value="https://www.gradegetter.com/id=123"
                          readOnly
                          ref={(input) => (this.myUrl = input)}
                        />
                        <div
                          className="predend-text"
                          onClick={(e) => this.copyMyLink()}
                        >
                          COPY
                        </div>
                      </div>
                      <div className="under-dot inputbox-bg" />
                    </div>
                  </div>
                  {Shares.map((item, index) => (
                    <div
                      className="col-lg-6 grade-level-col"
                      key={index}
                      style={{ position: "relative" }}
                    >
                      <div className={`grade-level center-item`}>
                        <img src={item.picture} alt="tutor" />
                        {item.type}
                      </div>
                      <div className="under-dot grade-level-bg" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {currentProgress !== 6 && (
            <div
              className={`submit-area ${
                (currentProgress >= 3 && currentProgress < 6) ||
                currentProgress === 8
                  ? "custom-submit"
                  : ""
              } ${currentProgress === 9 ? "final-submit" : ""}`}
            >
              <div
                className="container submit-container"
                style={{ paddingBottom: window.outerHeight / 2 + 100 }}
              >
                {currentProgress < 7 && (
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
                )}
                <div>
                  {signErr ? (
                    <span className="text-danger float-right">{signErr}</span>
                  ) : null}
                </div>
                <br />
                {currentProgress === 7 && (
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
                      onClick={(e) => this.onSubmit()}
                    />
                    <StartButton
                      className="start-btn show-mobile-flex"
                      height="50px"
                      startText="Continue"
                      onClick={(e) => this.onSubmit()}
                    />
                  </div>
                )}
                {currentProgress === 10 && (
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
                )}
                {currentProgress === 8 && (
                  <div className="btn-area" ref="section00">
                    <div
                      className="back-btn back-btn2"
                      onClick={(e) => this.goBack()}
                    >
                      {" "}
                      <div className="back-text center-item">Skip</div>{" "}
                    </div>
                    <StartButton
                      className="start-btn show-web-flex"
                      height="65px"
                      startText="Done Watching"
                      onClick={(e) => this.moveSection("next")}
                    />
                    <StartButton
                      className="start-btn show-mobile-flex"
                      height="50px"
                      startText="Done Watching"
                      onClick={(e) => this.moveSection("next")}
                    />
                  </div>
                )}
                {currentProgress === 9 && (
                  <div className="btn-area" ref="section00">
                    <div
                      className="back-btn back-btn3"
                      onClick={(e) => this.goBack()}
                    >
                      {" "}
                      <div className="back-text center-item">Skip</div>{" "}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  subjects: state.Core.subjects,
  levels: state.Core.levels,
  connections: state.Core.connections,
  plans: state.Core.plans,
  signErr: state.Auth.signErr,
});

export default connect(mapStateToProps, {
  getLevelAction,
  getSubjectAction,
  getConnectionAction,
  getPlanAction,
  signUpAction,
})(withRouter(SignUpPage));
