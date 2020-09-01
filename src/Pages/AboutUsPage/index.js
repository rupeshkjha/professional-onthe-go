import React from "react";
import "./AboutUsPage.scss";
import { StartButton, Transparency } from "../../Components";
import book from "../../Assets/Common/book.png";
import target from "../../Assets/Common/target.png";
import value from "../../Assets/Common/value.png";
import img1 from "../../Assets/AboutUs/img1.png";
import img2 from "../../Assets/AboutUs/img2.png";
import img3 from "../../Assets/AboutUs/img3.png";

const contents = [
  {
    left_img: book,
    right_img: img1,
    title: "Our Story",
    explain:
      "In 2009, Roland Omene, a TCU biochemistry graduate, founded FrogTutoring. The company originated in Fort Worth, TX, and has quickly expanded to cities all over the country. Over the past few years, FrogTutoring has expanded its brand to include GradeGetter, the first of its kind to pioneer a “pay what you can” approach to make tutoring more accessible to everyone! GradeGetter was founded under the belief that all students deserve to be successful in school regardless of age, gender, or socioeconomic status.",
  },
  {
    left_img: target,
    right_img: img2,
    title: "Our Tutors Excel",
    explain: `We believe the first step in successful tutoring is finding the "right" tutor. Matching a student’s particular needs to the right instructor can make all the difference in the world. That’s why we only hire the top students and graduates from local colleges in the area. Each one of our well-trained tutors is a hero in our mind and specializes in at least one area of expertise and is eager to aid in the academic success of the students they tutor. We ensure tutors’ expertise by requiring that they maintain a minimum GPA of 3.5 in their area of specialization through our unique 3-step training program.`,
  },
  {
    left_img: value,
    right_img: img3,
    title: "Mission",
    explain: `GradeGetter exists to make a positive difference in the lives of students through personalized tutoring and mentoring. First and foremost, GradeGetter is a family! We focus on mentoring and building relationships because we believe that a person-to-person connection is the best way to grow our clients from everyday students into motivated achievers. In everything we do, we strive to perform to the highest degree of quality, accountability, and transparency, all of which are influenced by our Christian faith. We have three basic tutoring philosophies: One Step Ahead, Reinforcement, and Organization & Study Skills.
    `,
  },
  {
    left_img: value,
    right_img: img3,
    title: "Our Story",
    explain: `Traditional tutoring programs focus on small group tutoring at in-person centers. However, this approach may be financially unattainable for many families, and studies have shown that students learn far more effectively in a one-on-one setting in the comfort of their own home. So rather than having you come to us, we maximize your child’s learning potential by bringing our tutoring services to you! Our groundbreaking, faith-centered approach allows students and parents to pay what they can, when they can without any contracts or up-front payments. We also understand that it’s more than tutoring, it’s mentoring. Our tutors, or “heroes” as we like to call them,  make a conscious effort to get to know their students, build relationships with them, and motivate and encourage each child individually`,
  },
];

function innerFunc(item) {
  return { __html: item.explain };
}

export default class AboutUsPage extends React.Component {
  render() {
    return (
      <div className="aboutus-page">
        <div className="container aboutus-container">
          <div className="title">About Us</div>
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
          <Transparency />
          <StartButton
            className="start-btn"
            onClick={() => this.props.history.push("/sign-up")}
          />
        </div>
      </div>
    );
  }
}
