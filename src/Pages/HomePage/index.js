import React from "react";
import "./HomePage.scss";
import {
  ClientSaying,
  Pricing,
  HowItWorks,
  WhyUs,
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

  componentDidMount() { }

  render() {

    return (
      <div className="home-page" ref={this.workContainer}>
        <SearchArea />
        <Features />
        <Clients />
        {plans ? <Pricing plans={plans} /> : null}
        {/* <OurService /> */}
        <WhyUs />
        <Recognitions />
        <ClientSaying />
        <OurSupport />
        <HowItWorks />
      </div>
    );
  }
}


export default (withRouter(HomePage));
