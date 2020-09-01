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
} from "../../Components";
import {
  getTutorAction,
  getConnectionAction,
  getPlanAction,
} from "../../Redux/Actions";
import { withRouter } from "react-router-dom";

class HomePage extends React.Component {
  state = {};

  componentDidMount() {
    this.props.getTutorAction();
    this.props.getConnectionAction();
    this.props.getPlanAction();
    // this.workContainer.current.scrollTo(1, 5);
  }

  render() {
    const { tutors, connections, plans } = this.props;
    console.log("Connection Here ->", connections);
    console.log("Tutor Here ->", tutors);
    console.log("Plans Here ->", plans);

    return (
      <div className="home-page" ref={this.workContainer}>
        <BlogStartArea />
        <StartArea />
        <HowItWorks />
        <OurCore />
        <OurService />
        <OurSupport />
        <Recognitions />
        <div id="section-1-4">
          <WhyUs />
        </div>
        <div id="section-1-5">{plans && <Pricing plans={plans} />}</div>
        <Instructors />
        <div id="section-1-7">{tutors && <Tutors tutors={tutors} />}</div>
        <TutoringPhilosophy />
        <div id="section-1-9">
          {connections && <ClientSaying clients={connections} />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  tutors: state.Core.tutors,
  connections: state.Core.connections,
  plans: state.Core.plans,
});

export default connect(mapStateToProps, {
  getTutorAction,
  getConnectionAction,
  getPlanAction,
})(withRouter(HomePage));
