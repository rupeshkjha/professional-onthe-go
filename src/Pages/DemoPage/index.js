import React from 'react';
import './DemoPage.scss';
import bg from '../../Assets/Demo/demobg.png'
import { StartButton } from '../../Components';

export default class DemoPage extends React.Component { 
    render() {
        return (
            <div className="demo-page">
                <div className="container demo-container">
                    <div className="title">Best Online Tutoring Platform. Try It!</div>
                    <div className="send-box">
                        <input className="email-input" placeholder="Enter your Email"/>
                        <button className="send-btn">Get Started</button>
                        <div className="bg-dot" alt="bgdot"/>
                    </div>
                    <div className="demo-list shadow-object">
                        <img src={bg} alt="bg" />
                    </div>
                    <StartButton className="start-btn" />
                </div>
            </div>
        );
    }
}