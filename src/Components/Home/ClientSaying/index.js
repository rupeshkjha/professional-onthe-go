import React from "react";
import "./ClientSaying.scss";
import Loadable from "@loadable/component";
import Media from "react-media";
import { ClientFeedback } from "../../";
import { CarouselLeftButton, CarouselRightButton } from "../../../Constant";

const OwlCarousel = Loadable(() => import("react-owl-carousel"));

export default class ClientSaying extends React.Component {
  getConnection() {
    return this.props.clients.map((client) => {
      return {
        name: client.tutor.name,
        address: client.tutor.location,
        level: 1,
        knowledge: 3.5,
        presentation: 4.7,
        comment_date: new Date(client.reviewed_on).toDateString(),
        description: client.review_content,
      };
    });
  }

  render() {
    const clients = this.getConnection();
    return (
      <div className="clientsaying-component">
        <div className="container clientsaying-container">
          <div className="title">Clients are saying</div>
          <div className="col-lg-12 main-row">
            <Media
              queries={{
                lg: "(min-width: 1200px)",
                md: "(min-width: 992px) and (max-width: 1199px)",
              }}
            >
              {(matches) => (
                <OwlCarousel
                  className="owl-theme"
                  rewind
                  nav
                  stagePadding={matches.lg ? 20 : matches.md ? 20 : 15}
                  margin={matches.lg ? 28 : matches.md ? 33 : 20}
                  items={matches.lg ? 3 : matches.md ? 2 : 1}
                  dots={false}
                  navText={[CarouselLeftButton, CarouselRightButton]}
                >
                  {clients.map((item, index) => (
                    <ClientFeedback key={index} item={item} />
                  ))}
                </OwlCarousel>
              )}
            </Media>
          </div>
        </div>
      </div>
    );
  }
}
