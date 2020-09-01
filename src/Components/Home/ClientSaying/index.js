import React from "react";
import "./ClientSaying.scss";
import Loadable from "@loadable/component";
import Media from "react-media";
import { ClientFeedback } from "../../";
import { CarouselLeftButton, CarouselRightButton } from "../../../Constant";

const OwlCarousel = Loadable(() => import("react-owl-carousel"));

export default class ClientSaying extends React.Component {
  render() {
    const clients = [
      {
        name: "Lorem",
        address: "Lorem",
        level: 1,
        comment_date: new Date().toDateString(),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
      {
        name: "Lorem",
        address: "Lorem",
        level: 1,
        comment_date: new Date().toDateString(),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
      {
        name: "Lorem",
        address: "Lorem",
        level: 1,
        comment_date: new Date().toDateString(),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
      {
        name: "Lorem",
        address: "Lorem",
        level: 1,
        comment_date: new Date().toDateString(),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
    ];
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
