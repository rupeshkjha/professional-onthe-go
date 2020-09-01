import React from 'react';
import './TutorJobs.scss';
import arrow from '../../../Assets/Tutor/left-arrow.png';
import Loadable from '@loadable/component';
import { CarouselLeftButton2, CarouselRightButton2 } from '../../../Constant';
import { StartButton } from '../../Common';

const OwlCarousel = Loadable(() => import('react-owl-carousel'));

const Jobs = [
    {
        id: 1,
        name: 'Aswathy A.',
        address: 'Aledo, TX',
        contents: [
            { title: 'Subject', description: 'ACT Prep Math'},
            { title: 'Grade Level', description: 'Test Prep'},
            { title: 'Time', description: 'I really struggle with math, and it’a holding me back from getting the score I want'},
        ]
    },
    {
        id: 2,
        name: 'Aswathy A.',
        address: 'Aledo, TX',
        contents: [
            { title: 'Subject', description: 'ACT Prep Math'},
            { title: 'Grade Level', description: 'Test Prep'},
            { title: 'Time', description: 'I really struggle with math, and it’a holding me back from getting the score I want'},
        ]
    },
    {
        id: 3,
        name: 'Aswathy A.',
        address: 'Aledo, TX',
        contents: [
            { title: 'Subject', description: 'ACT Prep Math'},
            { title: 'Grade Level', description: 'Test Prep'},
            { title: 'Time', description: 'I really struggle with math, and it’a holding me back from getting the score I want'},
        ]
    }
];

export default class TutorJobs extends React.Component {
    render() {
        return (
            <div className="tutorjobs-component">
                <div className="container v-r">
                    <h1>Jobs</h1>
                    <div className="jobs-list show-web-flex v-r">
                        <div className="jobs v-r">
                            {Jobs.map((item, index) => <div className="job-item v-c" key={index}>
                                <div className="user-area v-c">
                                    <div className={`avatar v-r h-c v-c user-${item.id}`}>AT</div>
                                    <div className="user-info v-r">
                                        <h2>{item.name}</h2>
                                        <p>from {item.address}</p>
                                    </div>
                                </div>
                                <img src={arrow} alt="arrow" />
                                <div className="content-list v-r">
                                    {item.contents.map((content, contentIndex) => <div className="content-item" key={contentIndex}>
                                        <b>{content.title}: </b>&nbsp;&nbsp;{content.description}
                                    </div>)}
                                </div>
                            </div>)}
                        </div>
                        <div className="bg-dot" />
                    </div>
                    <div className="show-mobile-flex v-r">
                        <OwlCarousel
                            className="owl-theme"
                            nav
                            stagePadding={15}
                            margin={15}
                            items={1}
                            dots={false}
                            navText={[CarouselLeftButton2, CarouselRightButton2]}
                            >
                            { Jobs.map((item, index) => {
                                return (
                                    <div className="job-mobile-container v-r" key={index}>
                                        <div className="job-item v-r">
                                            <div className="user-area v-c">
                                                <div className={`avatar v-r h-c v-c user-${item.id}`}>AT</div>
                                                <div className="user-info v-r">
                                                    <h2>{item.name}</h2>
                                                    <p>from {item.address}</p>
                                                </div>
                                            </div>
                                            <div className="content-list v-r">
                                                {item.contents.map((content, contentIndex) => <div className="content-item" key={contentIndex}>
                                                    <b>{content.title}: </b>&nbsp;&nbsp;{content.description}
                                                </div>)}
                                            </div>
                                        </div>
                                        <div className="bg-dot" />
                                    </div>
                                )
                            })}
                        </OwlCarousel>
                    </div>
                    <StartButton onClick={() => this.props.onNext({})} className="start-btn" />
                </div>
            </div>
        );
    }
}
