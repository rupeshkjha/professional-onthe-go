import React from "react";
import "./Tutors.scss";
import Loadable from "@loadable/component";
import Media from "react-media";
import { CarouselLeftButton, CarouselRightButton } from "../../../Constant";
import tutor1 from "../../../Assets/Home/tutor-photo-1.png";
import tutor2 from "../../../Assets/Home/tutor-photo-2.png";
import tutor3 from "../../../Assets/Home/tutor-photo-3.png";
import tutor4 from "../../../Assets/Home/tutor-photo-4.png";
import { Tutor } from "../../";

// const tutors = [
//   {
//     name: "1. Aswathy A.",
//     photo: tutor1,
//     job: "Graduate CS Student at UTA",
//     school: "University of Texas in Arlington",
//     description:
//       "I am a Bachelor's Degree student at University of Texas at Arlington.",
//   },
// ];

const OwlCarousel = Loadable(() => import("react-owl-carousel"));

export default class Tutors extends React.Component {
  render() {
    const { tutors } = this.props;
    console.log("tutors", tutors);
    return (
      <div className="tutors-component">
        <div className="container tutors-container">
          <div className="title">Who are our tutors</div>
          <div className="col-lg-12 main-row">
            <Media
              queries={{
                lg: "(min-width: 1200px)",
                md: "(min-width: 992px) and (max-width: 1199px)",
                sm: "(min-width: 768px) and (max-width: 991px)",
                normal: "(max-width: 767px)",
              }}
            >
              {(matches) => (
                <OwlCarousel
                  className="owl-theme"
                  nav
                  stagePadding={
                    matches.lg ? 0 : matches.md ? 0 : matches.sm ? 0 : 15
                  }
                  margin={
                    matches.lg ? 28 : matches.md ? 33 : matches.sm ? 45 : 20
                  }
                  items={matches.lg ? 4 : matches.md ? 3 : matches.sm ? 2 : 1}
                  dots={false}
                  navText={[CarouselLeftButton, CarouselRightButton]}
                >
                  {tutors.map((item, index) => {
                    return <Tutor key={index} tutor_info={item} />;
                  })}
                </OwlCarousel>
              )}
            </Media>
          </div>
        </div>
      </div>
    );
  }
}
