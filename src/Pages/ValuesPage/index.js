import React from "react";
import Sticky from "react-sticky-el";
import "./ValuesPage.scss";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
} from "react-share";

import ceoPhoto from "../../Assets/Home/ceo-photo.jpg";
import seoSign from "../../Assets/Home/seo-sign.png";
// import checkmark from "../../Assets/Common/checkmark.png";
import phone from "../../Assets/Home/phone.png";
import mail from "../../Assets/Home/mail.png";
import printer from "../../Assets/Home/printer.png";

import valFacebookIcon from "../../Assets/Home/val-facebook.png";
import valLinkedIn from "../../Assets/Home/valLinkedIn.png";
import valTwitter from "../../Assets/Home/valTwitter.png";
import valWhatsApp from "../../Assets/Home/valWhatsApp.png";
// import valLink from "../../Assets/Home/valLink.png";
import valMail from "../../Assets/Home/valMail.png";
// import valPrinter from "../../Assets/Home/valPrinter.png";

const values = [
  {
    title: "Dear Customers,",
    explain: [
      {
        des:
          "We know you have many choices when it comes to tutoring needs, so thank you for choosing GradeGetter!",
      },
      {
        des:
          "GradeGetter is an immigrant-owned family business centered on Christian values and faith. ",
      },
    ],
  },
  {
    title: "Here is what we believe:",
    explain: [
      {
        des: `Tutoring is expensive. Choose your price:  At GradeGetter, we let our customers choose what they can pay for online and one-on-one tutoring. Paying a little more helps to offset the cost for families who might not be able to afford tutoring regularly. With this approach, we are able to make private tutoring more accessible and affordable for everyone. `,
      },
    ],
  },
  {
    title: "We’re Committed to Maximum Transparency:",
    explain: [
      {
        des: "",
      },
    ],
  },
  {
    title: "Treat others how you would like to be treated    ",
    explain: [
      {
        des:
          "We only hire tutors to work with our customers if we would be 100% comfortable with that same tutor teaching our own children. We strive to tutor and mentor your students as if they were our own.  ",
      },
    ],
  },
  {
    title: "Serve others",
    explain: [
      {
        des:
          "Our focus is on serving our customers and students to ensure the highest levels of academic success. If at any time a tutor fails to meet our high standards, clients can request a full refund and a new tutor.           .",
      },
    ],
  },
  {
    title: "What Would Jesus Do?      ",
    explain: [
      {
        des: `In everything we do, we strive to live by Christian faith and ideals. We are motivated not by profit, but by faith. If there’s a problem? We start by asking ourselves “what would Jesus do in this situation” 
          `,
      },
    ],
  },
  {
    title: "Giving back",
    explain: [
      {
        des:
          "We’re committed to giving 10% of all profits to Christian organizations that work towards the mandate in the Bible to “go and make disciples of all nations”           ",
      },
      {
        des:
          "We’re here because of you. Please help us share our mission statement across the entire internet! In doing so, you will help us accomplish two things: ",
      },
      {
        des:
          "1. Encourage other faith-based organizations to put their faith front and center in their business practices           ",
      },
      {
        des:
          "2. Helping GradeGetter provide quality, affordable tutoring to everyone           ",
      },
    ],
  },
];

// const dataPoint = [
//   { title: "Number of active tutors: ", price: "1000" },
//   { title: "Number of active clients: ", price: "3000" },
//   { title: "Average tutoring rate per hour: ", price: "$40.00" },
//   { title: "Revenue to date: ", price: "$1,00,000.00" },
//   { title: "Raised for non-profits: ", price: "$100,000" },
// ];

const phoneMail = [
  { img: phone, des: "(877) 904 0134" },
  { img: mail, des: "Roland@gradegetter.com" },
  { img: printer, des: "(877) 904 0134" },
];

const transparencyTableData = [
  { title: "Payment to tutor", price: "$20.00" },
  { title: "Software cost", price: "$3.00" },
  { title: "Service cost", price: "$2.50" },
  { title: "Support cost", price: "$2.50" },
  { title: "Admin cost", price: "$2.50" },
  { title: "Advistising cost", price: "$7.00" },
  { title: "TOTAL COST", price: "$38.50" },
];

export default class ValuesPage extends React.Component {
  render() {
    const ShareURL = process.env.REACT_APP_PUBLIC_DOMAIN;
    return (
      <div className="values-page">
        <div className="container values-container">
          <div className="row main-row">
            <div className="col-lg-3 values-left">
              <div className="ceo-img-name text-center">
                <img src={ceoPhoto} alt="core-bg" className="ceo-photo" />
                <p className="ceo-name">Roladn Omene</p>
                <p className="ceo-mail">CEO @ GradeGetter</p>
              </div>
              <div className="ceo-phone-mail">
                {phoneMail.map((item, index) => {
                  return (
                    <div key={index} className="phone-mail-item">
                      <img src={item.img} alt="checkmark" />
                      <p className="des">{item.des}</p>
                    </div>
                  );
                })}
              </div>
              <Sticky
                stickyStyle={{ zIndex: 1 }}
                style={{ zIndex: 1 }}
                className="share-sticky"
              >
                <div className="ceo-share">
                  <p className="share-header">
                    Make this the most shared value statement in the internet
                  </p>
                  <p className="share-title">Share</p>
                  <div className="share-icon-block">
                    <FacebookShareButton url={ShareURL} className="share-btn" >
                      <img src={valFacebookIcon} alt="facebook" />
                    </FacebookShareButton>
                    <LinkedinShareButton url={ShareURL} className="share-btn" >
                      <img src={valLinkedIn} alt="linkedin" />
                    </LinkedinShareButton>
                    <TwitterShareButton url={ShareURL} className="share-btn" >
                      <img src={valTwitter} alt="twitter" />
                    </TwitterShareButton>
                    <WhatsappShareButton url={ShareURL} className="share-btn" >
                      <img src={valWhatsApp} alt="whatsApp" />
                    </WhatsappShareButton>
                    <EmailShareButton url={ShareURL} className="share-btn" >
                      <img src={valMail} alt="mail" />
                    </EmailShareButton>
                  </div>
                </div>
              </Sticky>
            </div>

            <div className="col-lg-9 values-right">
              {values.map((item, index) => {
                return (
                  <div className="values-block" key={index}>
                    <h3 className="item-title">{item.title}</h3>
                    {item.explain.map((ex_item, index) => {
                      return (
                        <div key={index}>
                          <p className="item-description">{ex_item.des}</p>
                        </div>
                      );
                    })}
                    {index === 2 ? (
                      <div className="max-transparency">
                        <div className="col-lg-8 col-md-12 col-sm-12 col-12 price-table-block mx-auto">
                          <div className=" price-table">
                            {transparencyTableData.map((item, index) => {
                              return (
                                <div key={index} className="table-item">
                                  <div
                                    className={`col-lg-6   ${
                                      index % 2 === 0
                                        ? "table-left1"
                                        : "table-left"
                                    }`}
                                  >
                                    <p
                                      className={` ${
                                        index === 6 ? "total-cost" : ""
                                      }`}
                                    >
                                      {item.title}
                                    </p>
                                  </div>
                                  <div
                                    className={`col-lg-6  ${
                                      index % 2 === 0
                                        ? "table-right1"
                                        : "table-right"
                                    }`}
                                  >
                                    <p
                                      className={` ${
                                        index === 6 ? "total-cost" : ""
                                      }`}
                                    >
                                      {item.price}
                                    </p>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                          <div className="under-dot additional-bg" />
                        </div>
                        {/* <div className="data-points-block">
                          <p className="data-points-title">
                            Key business data points:
                          </p>
                          {dataPoint.map((item, index) => {
                            return (
                              <div key={index} className="data-points-explain">
                                <img src={checkmark} alt="checkmark" />
                                <p className="explain-des">{item.title}</p>
                                <p className="explain-price">{item.price}</p>
                              </div>
                            );
                          })}
                        </div>
                        <div className="data-pooints-note">
                          <div>
                            <p className="note-title">Note: </p>
                          </div>
                          <div>
                            <p className="note-des">
                              This is living document and we will keep updating
                              the numbers as they become available
                            </p>
                          </div>
                        </div> */}
                      </div>
                    ) : null}
                  </div>
                );
              })}
              <div className="final-block">
                <p className="sincerely-mail">Sincerly,</p>
                <p className="ceo-name">Roland Omene ,</p>
                <p className="sincerely-mail">CEO @ GradeGetter</p>
              </div>
              <img src={seoSign} alt="core-bg" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
