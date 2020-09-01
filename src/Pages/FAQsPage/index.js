import React from "react";
import "./FAQsPage.scss";
import { Accordion } from "../../Components";

const faqs = [
  {
    title: "What grade levels do you tutor?",
    content:
      " GradeGetter tutors grades K - 12, College, and we also provide tutoring for test preparation.",
  },

  {
    title: "Where do you offer tutoring? ",
    content:
      "We only offer online tutoring, but our sister company Frog Tutoring offers both in person and online tutoring.",
  },
  {
    title: "What if I miss a tutoring session? ",
    content:
      " In the event that you miss a tutoring session, several things can happen. If the student is a no-show to the lesson without any communication prior, you will be charged 100% for the lesson. If you need to cancel the session with less than 24 hours notice, you will be charged 50% of the lesson price. If you cancel with more than 24 hours notice, your tutoring credit will remain the same and you can reschedule with your tutor. ",
  },

  {
    title: "What if I don’t like the tutor I was assigned? ",
    content:
      "GradeGetter has a 100% tutor satisfaction policy. If you don’t like the tutor you are assigned, we will assign you a new tutor at no additional cost. ",
  },
  {
    title: "What is your reimbursement policy? ",
    content:
      "We do offer one free lesson to make sure that you like the tutor you are placed with. If you do not like the tutor you are assigned, we will place you with another tutor at no additional cost. Yes! GradeGette was founded on Christian principles, but one of those important principles is to be open and welcoming to everyone, regardless of race, gender, or any religious affiliation.",
  },
  {
    title: "Why is GradeGetter priced so uniquely?  ",
    content:
      " We want to make sure everyone has access to affordable tutoring services, so we have implemented a “pay what you can afford” policy to ensure that tutoring is more accessible to those who might not be able to afford it otherwise  ",
  },
  {
    title: "How are GradeGetter tutors qualified?   ",
    content: ` Tutors are required to maintain a minimum 3.5 GPA in their areas of tutoring specifications 
  Prior tutoring experience 
  All tutors must pass a background check
  All tutors must complete GradeGetter training 
  We look for tutors with empathy who care deeply about the success of their students. 
  We look for mentors and not just tutors 
  `,
  },
  {
    title: "If my child gets good grades, why do they need tutoring?   ",
    content: `Even if your child maintains excellent grades, tutoring is still an excellent idea. Tutoring can provide an additional challenge in allowing students to work on advanced content, and our unique one on one model encourages a love of learning that cannot be replicated in a classroom.`,
  },
  {
    title: `My child is not motivated, can you help? 
  `,
    content: `Yes! Our tutors are passionate about about education and tutoring and are experts in getting their students excited about school.
  `,
  },

  {
    title: `How do I claim my referral credit? 
  `,
    content: `Contact us at support@gradegetter.com
  `,
  },
  {
    title: `How do I cancel my account? 
  `,
    content: `Log into your account and tap rate plan to cancel or suspend your account.
  `,
  },
];

export default class FAQsPage extends React.Component {
  render() {
    return (
      <div className="faqs-page">
        <div className="container faqs-container">
          <div className="title">FAQs</div>
          <div className="faqs-list shadow-object">
            {faqs.map((item, index) => {
              return (
                <Accordion
                  className="accordion"
                  title={item.title}
                  content={item.content}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
