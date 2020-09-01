import React from 'react';
import './Instructors.scss';
import university1 from '../../../Assets/Home/universities/tutor1.png';
import university2 from '../../../Assets/Home/universities/tutor2.png';
import university3 from '../../../Assets/Home/universities/tutor3.png';
import university4 from '../../../Assets/Home/universities/tutor4.png';
import university5 from '../../../Assets/Home/universities/tutor5.png';
import university6 from '../../../Assets/Home/universities/tutor6.png';
import university7 from '../../../Assets/Home/universities/tutor7.png';
import university8 from '../../../Assets/Home/universities/tutor8.png';
import university9 from '../../../Assets/Home/universities/tutor9.png';
import university10 from '../../../Assets/Home/universities/tutor10.png';
import left from '../../../Assets/Home/left-arrow.png';
import right from '../../../Assets/Home/right-arrow.png';
import play from '../../../Assets/Home/play.png';
import pause from '../../../Assets/Home/pause.jpg';

import checkmark from '../../../Assets/Common/checkmark.png';
import tuc from '../../../Assets/Home/University/tuc-university.png';
import harvard from '../../../Assets/Home/University/harvard-university.png';
import yale from '../../../Assets/Home/University/yale-university.png';
import NYU from '../../../Assets/Home/University/NYU-university.png';
import TEXAS from '../../../Assets/Home/University/TEXAS-university.png';
import Princeton from '../../../Assets/Home/University/Princeton-university.png';
import LSU from '../../../Assets/Home/University/LSU-university.png';
import Stanford from '../../../Assets/Home/University/Stanford-university.png';
import USC from '../../../Assets/Home/University/USC-university.png';
import columbia from '../../../Assets/Home/University/columbia-university.png';
import AliceCarousel from 'react-alice-carousel'
import { Player } from 'video-react';
import 'video-react/dist/video-react.css';

const texts = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
];

const universities = [
    {link: '', marker: tuc},
    {link: '', marker: harvard},
    {link: '', marker: yale},
    {link: '', marker: NYU},
    {link: '', marker: TEXAS},
    {link: '', marker: Princeton},
    {link: '', marker: LSU},
    {link: '', marker: Stanford},
    {link: '', marker: USC},
    {link: '', marker: columbia},
]

export default class Instructors extends React.Component {
    items = [
        <img src={university1} style={{width: '100%', height: '100%'}}/>,
        <img src={university2} style={{width: '100%', height: '100%'}}/>,
        <img src={university3} style={{width: '100%', height: '100%'}}/>,
        <img src={university4} style={{width: '100%', height: '100%'}}/>,
        <img src={university5} style={{width: '100%', height: '100%'}}/>,
        <img src={university6} style={{width: '100%', height: '100%'}}/>,
        <img src={university7} style={{width: '100%', height: '100%'}}/>,
        <img src={university8} style={{width: '100%', height: '100%'}}/>,
        <img src={university9} style={{width: '100%', height: '100%'}}/>,
        <img src={university10} style={{width: '100%', height: '100%'}}/>
        
        ]
 
    state = {
        currentIndex: 0,
        responsive: { 1024: { items: 3 } },
        galleryItems: this.galleryItems(),
        videoPlay: false,
    }
    
    slideTo = (i) => this.setState({ currentIndex: i })
    
    onSlideChanged = (e) => this.setState({ currentIndex: e.item })
    
    slideNext = () => {
        this.setState({ currentIndex: this.state.currentIndex + 1 })
        console.log("===========next===============", this.state.currentIndex+1)
    }
    
    slidePrev = () => {
        this.setState({ currentIndex: this.state.currentIndex - 1 })
        console.log("===========pre===============", this.state.currentIndex-1)
        
    }
 
    //   thumbItem = (item, i) => <span onClick={() => this.slideTo(i)}>* </span>
    
    galleryItems() {
        return this.items.map((i) => <h2 key={i}> {i}</h2>)
    }

    playVideo = () =>{
        this.setState({videoPlay: !this.state.videoPlay});
    }

    selectUniversityLogo = (currentIndex) => {
        this.setState({currentIndex});
    }

    render() {
        return (
            <div className="instructors-component">
                <div className="container instructors-container">
                    <div className="title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                    <div className="row main-row">
                        <div className="col-lg-8 left-area">
                            <div className="col-lg-7 video-img">
                                
                                {this.state.videoPlay?
                                <div>
                                    <div className="show-web">
                                        <Player autoPlay 
                                            fluid={false}
                                            width='100%'
                                            height={450}>
                                            <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                                            
                                        </Player>
                                        <div className="video-left-right-arrow center-item">                        
                                            {/* <div className="left-arrow center-item" onClick={() => this.slidePrev()}>
                                                <div className="" ><img src={left}/></div>
                                            </div> */}
                                            <div className="pause center-item" onClick={() => this.playVideo()}>
                                                <div className="pause-in" ></div>
                                                <div className="pause-in" ></div>
                                            </div>
                                            {/* <div className="right-arrow center-item" onClick={() => this.slideNext()}>
                                                <div className="" ><img src={right}/></div>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className="show-mobile">
                                        <Player autoPlay 
                                            fluid={false}
                                            width='100%'
                                            height={300}>
                                            <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                                            
                                        </Player>
                                        <div className="video-left-right-arrow center-item">                        
                                            {/* <div className="left-arrow center-item" onClick={() => this.slidePrev()}>
                                                <div className="" ><img src={left}/></div>
                                            </div> */}
                                            <div className="pause center-item" onClick={() => this.playVideo()}>
                                                <div className="pause-in" ></div>
                                                <div className="pause-in" ></div>
                                            </div>
                                            {/* <div className="right-arrow center-item" onClick={() => this.slideNext()}>
                                                <div className="" ><img src={right}/></div>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                                    :
                                    <div >
                                        <AliceCarousel
                                            dotsDisabled={true}
                                            buttonsDisabled={true}
                                            items={this.state.galleryItems}
                                            // responsive={this.state.responsive}
                                            slideToIndex={this.state.currentIndex}
                                            onSlideChanged={this.onSlideChanged}
                                            startIndex={this.state.currentIndex}
                                        />
                                        <div className="left-right-arrow">                        
                                            <div className="left-arrow center-item" onClick={() => this.slidePrev()}>
                                                <div className="" ><img src={left}/></div>
                                            </div>
                                            <div className="left-arrow center-item" onClick={() => this.playVideo()}>
                                                <div className="" ><img src={play}/></div>
                                            </div>
                                            <div className="right-arrow center-item" onClick={() => this.slideNext()}>
                                                <div className="" ><img src={right}/></div>
                                            </div>
                                        </div>
                                    </div>
                                }
                                
                                
                            </div>
                            <div className="col-lg-5">
                                <div className="right-side">
                                    {
                                        texts.map((item, index) => {
                                            return (
                                                <div className="core-explain" key={index}>
                                                    <img src={checkmark} alt="checkmark" />
                                                    <div className="explain">
                                                        {item}
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 right-area ">
                            <div className="logo-row">
                                <div className={`center-item ${this.state.currentIndex === 0 ? 'select-university' : 'university'}`} onClick={() => this.selectUniversityLogo(0)}>
                                    <img src={tuc} alt="checkmark" />
                                </div>
                                <div className={`center-item ${this.state.currentIndex === 1 ? 'select-university' : 'university'}`} onClick={() => this.selectUniversityLogo(1)}>
                                    <img src={harvard} alt="checkmark" />
                                </div>
                            </div>

                            <div className="logo-row">
                                <div className={`center-item ${this.state.currentIndex === 2 ? 'select-university' : 'university'}`} onClick={() => this.selectUniversityLogo(2)}>
                                    <img src={yale} alt="checkmark" />
                                </div>
                                <div className={`center-item ${this.state.currentIndex === 3 ? 'select-university' : 'university'}`} onClick={() => this.selectUniversityLogo(3)}>
                                    <img src={NYU} alt="checkmark" />
                                </div>
                            </div>

                            <div className="logo-row">
                                <div className={`center-item ${this.state.currentIndex === 4 ? 'select-university' : 'university'}`} onClick={() => this.selectUniversityLogo(4)}>
                                    <img src={TEXAS} alt="checkmark" />
                                </div>
                                <div className={`center-item ${this.state.currentIndex === 5 ? 'select-university' : 'university'}`} onClick={() => this.selectUniversityLogo(5)}>
                                    <img src={Princeton} alt="checkmark" />
                                </div>
                            </div>

                            <div className="logo-row">
                                <div className={`center-item ${this.state.currentIndex === 6 ? 'select-university' : 'university'}`} onClick={() => this.selectUniversityLogo(6)}>
                                    <img src={LSU} alt="checkmark" />
                                </div>
                                <div className={`center-item ${this.state.currentIndex === 7 ? 'select-university' : 'university'}`} onClick={() => this.selectUniversityLogo(7)}>
                                    <img src={Stanford} alt="checkmark" />
                                </div>
                            </div>

                            <div className="logo-row">
                                <div className={`center-item ${this.state.currentIndex === 8 ? 'select-university' : 'university'}`} onClick={() => this.selectUniversityLogo(8)}>
                                    <img src={USC} alt="checkmark" />
                                </div>
                                <div className={`center-item ${this.state.currentIndex === 9 ? 'select-university' : 'university'}`} onClick={() => this.selectUniversityLogo(9)}>
                                    <img src={columbia} alt="checkmark" />
                                </div>
                            </div>

                            
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
