import React from "react";
import "./HomePage.scss";
import { connect } from "react-redux";
import {
  StartArea,
  Instructors,
  ClientSaying,
  Tutors,
  Pricing,
  HowItWorks,
  WhyUs,
  Transparency,
  OurCore,
  TutoringPhilosophy,
  BlogStartArea,
  OurService,
  OurSupport,
  Recognitions,
  SearchArea,
  Features,
  Clients,
} from "../../Components";
import { withRouter } from "react-router-dom";
const plans = [
  {
    name: "Lorem ",
    min_hour: 1,
    max_hour: 25,
    min_rate: 25,
    max_rate: 75,
  },
  {
    name: "Lorem",
    min_hour: 1,
    max_hour: 50,
    min_rate: 27.5,
    max_rate: 75,
  },
  {
    name: "Lorem",
    min_hour: 2,
    max_hour: 100,
    min_rate: 30,
    max_rate: 75,
  },
  {
    name: "Lorem",
    min_hour: 2,
    max_hour: 200,
    min_rate: 35,
    max_rate: 75,
  },
];
class HomePage extends React.Component {
  state = {};

  componentDidMount() {}

  render() {
    const { tutors, connections } = this.props;
    console.log("Lorem Here ->", connections);
    console.log("Lorem Here ->", tutors);
    console.log("Lorem Here ->", plans);

    return (
      <div className="home-page" ref={this.workContainer}>
        <SearchArea />
        <Features />
        <Clients />
        {plans ? <Pricing plans={plans} /> : null}
        <OurService />
        <WhyUs />
        <Recognitions />
        <ClientSaying />
        <OurSupport />
        <HowItWorks />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(withRouter(HomePage));
