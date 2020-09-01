import React from "react";
import "./ScheduleLessonPage.scss";
import search from "../../Assets/Icon/search.svg";
import cancel from "../../Assets/Icon/cancel.svg";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { InputBox, SelectBox, Avatar, TimeZone } from "../../Components";
import { TutorList } from "./TutorList";
import { ReactSVG } from "react-svg";
import left from "../../Assets/Icon/left.svg";
import right from "../../Assets/Icon/right.svg";
import success from "../../Assets/Icon/success.png";
import Calendar from "react-calendar";
import moment from "moment-timezone";

const timeList = [
  "1:30 pm",
  "2:00 pm",
  "2:30 pm",
  "3:00 pm",
  "3:30 pm",
  "4:00 pm",
  "1:30 am",
];

const tutorLengths = [
  {
    id: 0,
    name: "1.5hr",
  },
  {
    id: 1,
    name: "2hr",
  },
  {
    id: 2,
    name: "2.5hr",
  },
];

const tutorTypes = ["Online Tutoring", "In-Person Tutoring"];

const tutorRepeats = [
  {
    id: 0,
    name: "3 Weeks",
  },
  {
    id: 1,
    name: "2 Weeks",
  },
  {
    id: 2,
    name: "1 Week",
  },
];

class ScheduleLessonPage extends React.Component {
  state = {
    titleList: [],
    Tutors: TutorList,
    searchText: "",
    depth: null,
    selectedTutor: {},

    tutor_date: "",
    selected_time: "",

    tutor_length: "1.5hr",
    tutor_type: "",
    tutor_repeat: "3 Weeks",
    tutor_note: "",
    step: 1,
    current_timezone: moment.tz.guess(true),
  };

  componentDidMount() {
    if (this.props.match.params.tutor_id) {
      let index = this.state.Tutors.findIndex(
        (temp) => temp.id === parseInt(this.props.match.params.tutor_id, 10)
      );
      this.selectTutor(this.state.Tutors[index]);
    }
  }

  formatInitialData = () => {
    this.setState({
      tutor_date: "",
      selected_time: "",

      tutor_length: "1.5hr",
      tutor_type: "",
      tutor_repeat: "3 Weeks",
      tutor_note: "",
    });
  };

  // static getDerivedStateFromProps(props, state) {
  //     return {
  //         depth: props.depth
  //     }
  // }

  selectTutor = (tutor) => {
    let temp = tutor || {};
    this.setState({
      selectedTutor: temp,
    });
    this.formatInitialData();
    this.formatTitle();
    this.updateTitle("push", "Schedule a lesson", 2);
  };

  deleteTutor = (e, item) => {
    e.stopPropagation();
    let temp = this.state.Tutors;
    let index = temp.findIndex((a) => a.id === item.id);
    temp.splice(index, 1);
    this.setState({
      Tutors: temp,
    });
    if (item.id === this.state.selectedTutor.id) {
      this.formatInitialData();
      this.formatTitle();
    }
  };

  selectDate = (date) => {
    this.setState({
      tutor_date: date,
      selected_time: "",
    });
  };

  updateTitle = (flag, newTitle = "", lengthLimit = 0) => {
    let { titleList, depth } = this.state;
    if (flag === "push") {
      if (lengthLimit > 1 && titleList.length === lengthLimit) {
        titleList[depth] = newTitle;
      } else {
        depth++;
        titleList.push(newTitle);
      }
    } else {
      depth--;
      titleList.pop();
    }
    this.setState({
      titleList: titleList,
      step: 2,
    });
  };

  formatTitle = () => {
    let temp = [];
    temp.push(this.props.title);
    this.setState({
      titleList: temp,
      depth: 0,
    });
  };

  render() {
    const {
      searchText,
      depth,
      selectedTutor,
      Tutors,
      tutor_date,
      selected_time,
      tutor_length,
      tutor_type,
      tutor_repeat,
      tutor_note,
      current_timezone,
      step,
    } = this.state;
    const list = Tutors.filter(
      (tutor) => tutor.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1
    );
    console.log("depth", depth);
    return (
      <div className="schedulelesson-page">
        <div className={"content-area scroll-area v-r"}>
          {step === 1 && (
            <div className="date-content">
              <div className="date-select-area v-r">
                <Calendar
                  className="calendar"
                  onChange={this.selectDate}
                  value={tutor_date || new Date()}
                  calendarType="US"
                  prevLabel={<ReactSVG src={left} className="svg-icon" />}
                  nextLabel={<ReactSVG src={right} className="svg-icon" />}
                />
                <TimeZone
                  value={current_timezone}
                  onChange={(val) => this.setState({ current_timezone: val })}
                />
                {/* <div className="region v-c">
                                <ReactSVG src={earth} className="svg-icon" />
                                Central Time USA Canada (10:30pm)
                            </div> */}
              </div>
              {tutor_date.toString().length > 0 && (
                <div className="time-select v-r">
                  <div className="time-header v-c v-r">
                    <h1>{moment(tutor_date).format("dddd, MMMM D, YYYY")}</h1>
                    <p>Please select start time</p>
                  </div>
                  <div className="time-list v-r">
                    {timeList.map((item, index) => (
                      <div
                        className={`time-container v-c ${
                          selected_time === item ? "active" : ""
                        }`}
                        key={index}
                      >
                        <div
                          className="time-item sub-item v-c h-c"
                          onClick={(e) =>
                            this.setState({ selected_time: item })
                          }
                        >
                          {item}
                        </div>
                        <div
                          className="confirm-item sub-item v-c h-c"
                          onClick={(e) =>
                            this.updateTitle("push", "Schedule a lesson", 3)
                          }
                        >
                          Confirm
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {step === 2 && (
            <div className="success-area v-c h-c">
              <div className="success-content v-r h-c v-c">
                <h2>Success!</h2>
                <img src={success} alt="success" />
                <p>
                  Thanks for taking the time to complete this application.
                  Please click on the scheduled interview below to book a phone
                  interview with a member of our hiring team.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, {})(withRouter(ScheduleLessonPage));
