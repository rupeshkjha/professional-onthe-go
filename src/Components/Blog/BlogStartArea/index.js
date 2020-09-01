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
                        <h1>The Best Education Articles!</h1>
                        <div className="form-area">
                            <div className="email-area">
                                <p>Subscribe and get our weekly newsletter in your index.</p>
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
