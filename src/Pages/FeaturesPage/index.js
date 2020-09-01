import React from "react";
import "./FeaturesPage.scss";
import { StartButton } from "../../Components";
import code from "../../Assets/Common/code.png";
import computer from "../../Assets/Common/computer.png";
import edit from "../../Assets/Common/edit.png";
import playbutton from "../../Assets/Common/play-button.png";
import webcam from "../../Assets/Common/webcam.png";
import reload from "../../Assets/Common/value.png";
import img1 from "../../Assets/Features/img1.png";
import img2 from "../../Assets/Features/img2.png";
import img3 from "../../Assets/Features/img3.png";
import img4 from "../../Assets/Features/img4.png";
import img5 from "../../Assets/Features/img5.png";
import img6 from "../../Assets/Features/img6.png";

const contents = [
  {
    left_img: webcam,
    right_img: img1,
    title: "High Quality Video Chat",
    explain:
      "Get face-to-face interaction with a tutor in an online environment optimized for learning",
  },
  {
    left_img: edit,
    right_img: img2,
    title: "Shared Whiteboard",
    explain:
      "Our interactive whiteboard allows students and tutors to collaborate in real-time. Draw, annotate, highlight, upload images and pdf's, and more!",
  },
  {
    left_img: computer,
    right_img: img3,
    title: "Live Document Editor",
    explain:
      "Work with your tutor to finish a paper! Collaborate on a shared document in real-time to edit and share ideas",
  },
  {
    left_img: code,
    right_img: img4,
    title: "Collaborative Code Editor ",
    explain:
      "Perfect for working through coding assignments together or learning to code for the first time, our collaborative system allows students to understand code with syntax highlighting for multiple programming languages from C to SQL.",
  },
  {
    left_img: playbutton,
    right_img: img5,
    title: "Record Live Lessons",
    explain:
      "All tutoring sessions are automatically recorded so students have access to videos to review past lessons. Review for tests, quizzes, and more!",
  },
  {
    left_img: reload,
    right_img: img6,
    title: "Capture Whiteboard To PDF",
    explain:
      "No need to take meticulous notes! With a single click, capture the entire whiteboard and convert it into a PDF document for your records.",
  },
];

function innerFunc(item) {
  return { __html: item.explain };
}

export default class FeaturesPage extends React.Component {
  render() {
    return (
      <div className="features-page">
        <div className="container features-container">
          <div className="title">Our Features</div>
          {contents.map((item, index) => {
            return (
              <div
                className={`row main-row ${index === 0 && "first-row"}`}
                key={index}
              >
                <div className="col-lg-6 order-lg-first order-second left-area">
                  <img src={item.left_img} alt="tutor_mean" />
                  <h1>{item.title}</h1>
                  <p dangerouslySetInnerHTML={innerFunc(item)}></p>
                </div>
                <div className="col-lg-6 order-lg-second order-first right-area ">
                  <div className="image-container">
                    <img src={item.right_img} alt="tutor_content" />
                    <div className="bg-dot small-dot span-dot" alt="bgdot" />
                  </div>
                </div>
              </div>
            );
          })}
          <StartButton
            className="start-btn"
            onClick={() => this.props.history.push("/sign-up")}
          />{" "}
        </div>
      </div>
    );
  }
}
