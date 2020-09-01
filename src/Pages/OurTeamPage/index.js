import React from 'react';
import './OurTeamPage.scss';
import Media from 'react-media';
import team1 from '../../Assets/Team/team-1.jpg';
import team2 from '../../Assets/Team/team-2.png';
import team3 from '../../Assets/Team/team-3.png';
import team4 from '../../Assets/Team/team-4.png';
import team5 from '../../Assets/Team/team-5.png';
import team6 from '../../Assets/Team/team-6.png';
import team7 from '../../Assets/Team/team-7.jpg';
import team8 from '../../Assets/Team/team-8.jpg';
import { Tutor, TutorModal } from '../../Components';
import { connect } from 'react-redux';
import { toggleTutorModal } from '../../Redux/Actions';
import { withRouter } from 'react-router-dom';

const members = [
    { name: 'Roland Omene', profile_title: 'CEO', picture: team1, about_me: 'During his former years at Texas Christian University, Roland began developing FrogTutoring in the confines of his student apartment with the aid of a single laptop. After graduating from TCU with a BS degree in Biochemistry in 2008, Roland finally founded his first company FrogTutoring a year later. FrogTutoring provides one-on-one private home tutoring and now successfully operates in more than 33 cities across the nation.' },
    { name: 'Anh Pham', profile_title: 'CTO', picture: team2, about_me: 'Anh graduated from Texas Christian University in 2010 with a BS degree in Maths and Computer Science. During his years at TCU, Anh worked with Roland developing his FrogTutoring startup phase. Since graduating, he has been programming and developing the FrogTutoring and Amumba platforms full-time, as well as other major projects that he is involved in. Anh continues to actively work with Roland in maintaining and developing all the technical-related and web-based aspects of the business.' },
    { name: 'Kristin DeGrate', profile_title: 'COO', picture: team4, about_me: 'Kristin was awarded her Bachelors Degree from The University of Texas, where she studied Business and Communication. She loves making a positive impact in the lives of others and possesses a "nothing is impossible" attitude. ' },
    { name: 'Jael Calia', profile_title: 'Enrollment Advisor', picture: team3, about_me: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque, neque non hendrerit mattis, risus mi condimentum justo, id consequat nulla ipsum ut erat. Maecenas eget bibendum nunc. Duis rutrum ligula at velit facilisis, a eleifend dolor consequat. Cras laoreet, neque elementum pulvinar mattis, magna nisl tincidunt dui, ut sollicitudin ipsum elit et nulla. Aliquam erat volutpat. Vivamus blandit, nulla vel tincidunt accumsan, odio massa gravida magna, a varius quam nunc vel lacus. Vivamus sollicitudin, diam eget elementum dapibus, sem sem tincidunt tortor, non efficitur lectus lacus non mauris. Nullam elementum tempus libero vel fermentum.' },
    { name: 'Renee Knight', profile_title: 'Enrollment Advisor', picture: team5, about_me: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque, neque non hendrerit mattis, risus mi condimentum justo, id consequat nulla ipsum ut erat. Maecenas eget bibendum nunc. Duis rutrum ligula at velit facilisis, a eleifend dolor consequat. Cras laoreet, neque elementum pulvinar mattis, magna nisl tincidunt dui, ut sollicitudin ipsum elit et nulla. Aliquam erat volutpat. Vivamus blandit, nulla vel tincidunt accumsan, odio massa gravida magna, a varius quam nunc vel lacus. Vivamus sollicitudin, diam eget elementum dapibus, sem sem tincidunt tortor, non efficitur lectus lacus non mauris. Nullam elementum tempus libero vel fermentum.' },
    { name: 'Stacey Tadiff', profile_title: 'Enrollment Advisor', picture: team6, about_me: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque, neque non hendrerit mattis, risus mi condimentum justo, id consequat nulla ipsum ut erat. Maecenas eget bibendum nunc. Duis rutrum ligula at velit facilisis, a eleifend dolor consequat. Cras laoreet, neque elementum pulvinar mattis, magna nisl tincidunt dui, ut sollicitudin ipsum elit et nulla. Aliquam erat volutpat. Vivamus blandit, nulla vel tincidunt accumsan, odio massa gravida magna, a varius quam nunc vel lacus. Vivamus sollicitudin, diam eget elementum dapibus, sem sem tincidunt tortor, non efficitur lectus lacus non mauris. Nullam elementum tempus libero vel fermentum.' },
    { name: 'Kyle Allorde', profile_title: 'Instructor Hiring Coordinator', picture: team8, about_me: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque, neque non hendrerit mattis, risus mi condimentum justo, id consequat nulla ipsum ut erat. Maecenas eget bibendum nunc. Duis rutrum ligula at velit facilisis, a eleifend dolor consequat. Cras laoreet, neque elementum pulvinar mattis, magna nisl tincidunt dui, ut sollicitudin ipsum elit et nulla. Aliquam erat volutpat. Vivamus blandit, nulla vel tincidunt accumsan, odio massa gravida magna, a varius quam nunc vel lacus. Vivamus sollicitudin, diam eget elementum dapibus, sem sem tincidunt tortor, non efficitur lectus lacus non mauris. Nullam elementum tempus libero vel fermentum.' },
    { name: 'Alex Yexel', profile_title: 'Frontend Developer', picture: team7, about_me: 'Alex joined FrogTutoring in 2020 and has been developing frontend parts.' },
];

class OurTeamPage extends React.Component {
    showTutorInfo = (item, rect) => {
        this.props.toggleTutorModal(true, item, rect);
    }

    render() {
        return (
            <div className="ourteam-page">
                <TutorModal />
                <div className="container ourteam-container">
                    <div className="title">Meet Our Team</div>
                    <Media queries={{
                        lg: "(min-width: 1200px)",
                        md: "(min-width: 992px) and (max-width: 1199px)",
                        sm: "(min-width: 768px) and (max-width: 991px)",
                        normal: "(max-width: 767px)",
                        }}>
                        {matches => (
                            <div className={`team-members 
                                ${
                                    matches.lg ? 'member-list-lg' :
                                    matches.md ? 'member-list-md' : 
                                    matches.sm ? 'member-list-sm' : 'member-list-normal'    
                                }`}>
                            {
                                members.map((item, index) => {
                                    return (
                                        <Tutor key={index} tutor_info={item} className="member" onClick={(rect) => this.showTutorInfo(item, rect)}/>
                                    )
                                })
                            }
                            </div>
                        )}
                    </Media>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
    }
}
  
export default connect(mapStateToProps, { toggleTutorModal })(withRouter(OurTeamPage));
  