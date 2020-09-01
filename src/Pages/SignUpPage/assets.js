import boy from "../../Assets/Common/boy.png";
import girl from "../../Assets/Common/girl.png";
import both from "../../Assets/Common/both.png";
import credit from "../../Assets/Common/credit-card.png";
import paypal from "../../Assets/Common/paypal.png";
import envelope from "../../Assets/Common/envelope.png";
import facebook from "../../Assets/Common/facebook-logo.png";
import twitter from "../../Assets/Common/twitter-logo.png";

export const GradeLevels = [
  "High School",
  "Middle School",
  "Elementary School",
  "College",
  "Test Prep",
  "Computer",
  "Language",
];

export const Plan = ["Weekly", "Biweekly", "Monthly", "One Time"];

export const Subjects = [
  "Maths",
  "Algebra",
  "Calculus",
  "Geometry",
  "Study skills",
  "Tutoring program",
  "Accounting",
  "Grammar",
];

export const TutorTypes = [
  { picture: boy, type: "Male" },
  { picture: girl, type: "Female" },
  { picture: both, type: "Either" },
];

export const Dates = [
  { month: "Mar", day: 17, weekday: "Tuesday", tutor_date: "2020-03-17" },
  { month: "Mar", day: 18, weekday: "Wednesday", tutor_date: "2020-03-18" },
  { month: "Mar", day: 19, weekday: "Thursday", tutor_date: "2020-03-19" },
  { month: "Mar", day: 20, weekday: "Friday", tutor_date: "2020-03-20" },
  { month: "Mar", day: 21, weekday: "Saturday", tutor_date: "2020-03-21" },
  { month: "Mar", day: 22, weekday: "Sunday", tutor_date: "2020-03-22" },
  { month: "Mar", day: 23, weekday: "Monday", tutor_date: "2020-03-23" },
];

export const Times = [
  { partOfDay: "Morning", duration: "1 am - 12 noon" },
  { partOfDay: "Afternoon", duration: "12 noon - 6 pm" },
  { partOfDay: "Evening", duration: "6 pm - 12 am" },
  { partOfDay: "Right Now", duration: "Within 30m - 1hr" },
];

export const Feedback = {
  name: "Alex Tyshchenko",
  address: "Aledo, TX",
  level: 1,
  knowledge: 5,
  presentation: 3,
  comment_date: "March 19, 2019",
  description:
    "Jordan did a great job tutoring me. He listened to my problems and questions carefully and answered them thoroughly. He was easy to work with and excited to help me with my goals. He was very knowledgeable and quick to help me find solutions.",
};

export const PaymentInformations = [
  "Pay what you can  ",
  "Your payment plan only kicks in 48 hours after you successfully complete your free lesson  ",
  "Cancel any time",
  "100% tutor satisfaction",
];

export const InfosAfterPayment = [
  {
    title: "How do I get matched with a tutor?",
    content: `We use the information you provided us - grade level, subjects, start date, schedule, and tutor preferences to determine a good fit for the student using our large network of qualified tutors`,
  },
  {
    title: "How do I know who my tutor is?",
    content: `Once we match you with a tutor, we give you full access to their profile which includes their biography and qualifications. The tutor assigned to you will contact you for introductions and make arrangements for the first lesson. 
    `,
  },
  {
    title: "How do I track progress?",
    content: `You will receive a detailed report from your tutor at the conclusion of each tutoring session, which tells you: 
    What was accomplished during each lesson 
    Current strengths and weaknesses
    Next steps laid out by the tutor for future lessons
    `,
  },
  {
    title: "How do I pay for tutoring?",
    content: `Your first payment is due 48 hours after you successfully complete your free trial lesson. If your free lesson lasts more than the allocated 30 minutes for the trial lesson, your subscription plan will kick in immediately. If you want to schedule an additional lesson outside of your subscription plan, we will charge you individually for any additional lessons. 
    `,
  },
  {
    title: "What are the payment terms?     ",
    content: `On the GradeGetter platform, your subscription includes a set number of tutoring minutes for a specified period of time. The tutoring minutes do not roll over from one period to another, and we do not issue refunds. Cancel at any time. You are billed either weekly, biweekly, monthly, or one time depending on your plan. Additional tutoring sessions not covered by your plan will be billed individually. Your membership will be renewed automatically at the beginning of each cycle until you cancel 
    `,
  },
];

export const Payments = [
  { picture: credit, type: "Credit Card" },
  { picture: paypal, type: "Paypal" },
];

export const Shares = [
  { picture: envelope, type: "Share Via Email" },
  { picture: facebook, type: "Share on Facebook" },
  { picture: twitter, type: "Share on Twitter" },
];

export const FreeLesson = [
  { des: "One free trial lesson is included- up to 30 minutes   " },
  {
    des:
      "If you are not satisfied with the tutor assigned for the free trial, we will assign you another tutor at no additional cost       ",
  },
  {
    des:
      "Your payment plan only kicks in 48 hours after you successfully complete your free lesson   ",
  },
];

export const PaymentPlan = [
  { des: "Suspend and cancel your account at any time — no contracts   " },
  { des: "No payment due today" },
  { des: "Recurring weekly payment" },
];
