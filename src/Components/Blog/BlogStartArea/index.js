import React from 'react';
import './BlogStartArea.scss';
import blogHeaderBG from '../../../Assets/Blog/headerbg.png'

export default class BlogStartArea extends React.Component {
    render() {
        return (
            <div className="blogstartarea-component">
                <img src={blogHeaderBG} alt="right-bg" className="blog-header-bg show-web" />
                <div className="container blogstartarea-container">
                    <div className="col-lg-7 left-area">
                        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</h1>
                        <div className="form-area">
                            <div className="email-area">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                <div className="send-box">
                                    <input className="email-input" placeholder="Enter your Email"/>
                                    <button className="send-btn">Get Started</button>
                                    <div className="bg-dot" alt="bgdot"/>
                                </div>
                            </div>
                        </div>
                        <img src={blogHeaderBG} alt="right-bg" className="blog-header-bg show-mobile" />
                    </div>
                </div>
            </div>
        );
    }
}
