import React from "react";
import "./TutorFeatures.scss";
import checkmark from "../../../Assets/Common/checkmark.png";

const Texts = [
  {
    title: "Qualification",
    contents: [
      "Expertise in at least one specific subject area ",
      "Minimum of 3.0 GPA ",
      "Previous tutoring experience preferred ",
      "Punctuality and self discipline ",
      "Excellent interpersonal skills ",
      "Passion for mentoring and working with all students ",
    ],
  },
  {
    title: "Benefits",
    contents: [
      "Competitive pay structure ",
      "Set your own schedule ",
      "Rewards available for tutors ",
      "Up to a $50 referral bonus ",
    ],
  },
  {
    title: "Job Description",
    contents: [
      "Provide one-on-one tutoring for students of all ages ",
      "Teach organization and study skills ",
      "Coordinate with students teachers, as needed ",
      "Work 5-15 hours per week ",
      "Create individual lesson plans for each student ",
      "Motivate students to achieve, learn, and foster a love for learning ",
    ],
  },
];

export default class TutorFeatures extends React.Component {
  render() {
    return (
      <div className="tutorfeatures-component">
        <div className="container v-r">
          <h1>Features</h1>
          <div className="row">
            {Texts.map((text, textIndex) => (
              <div
                className="col-lg-4 col-md-12 col-sm-12 sub-col v-r"
                key={textIndex}
              >
                <div className="text-container v-r">
                  <h2>{text.title}</h2>
                  {text.contents.map((content, contentIndex) => (
                    <div className="content-item" key={contentIndex}>
                      {textIndex <= 1 ? (
                        <img src={checkmark} alt="checkmark" />
                      ) : (
                        <span>{contentIndex + 1}. </span>
                      )}
                      <p>{content}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-dot small-dot" alt="bgdot" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
