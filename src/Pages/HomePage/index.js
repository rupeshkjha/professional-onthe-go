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

class HomePage extends React.Component {
  state = {};

  componentDidMount() {}

  render() {
    const { tutors, connections, plans } = this.props;
    console.log("Connection Here ->", connections);
    console.log("Tutor Here ->", tutors);
    console.log("Plans Here ->", plans);

    return (
      <div className="home-page" ref={this.workContainer}>
        <SearchArea />
        <Features />
        <Clients />
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
