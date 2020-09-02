import React from 'react';
import './AuthPage.scss';
import arrow from '../../Assets/Common/arrow.svg';
import { ReactSVG } from 'react-svg'
import cbs from '../../Assets/Home/CBS.png';
import cnn from '../../Assets/Home/CNN.png';
import fox from '../../Assets/Home/FOX.png';
import boston from '../../Assets/Home/The_Boston_Globe.png';
import { LogIn, ForgotPassword, NewPassword } from '../../Components';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import SignUp from '../../Components/Auth/SignUp';

class AuthPage extends React.Component {
    render() {
        const pathName = this.props.location.pathname;
        return (
            <div className="auth-page">
                <div className="ads-area">
                    <p className="subtitle">Top article from blog</p>
                    <h1 className="show-web">6 Simple Ways You Can Use Neuroscience to Increase</h1>
                    <p className="explain show-web">The tutor will reinforce key concepts the student may have missed to ensure student is never left behind. </p>
                    <div className="read-btn show-web">
                        <div className="btn-text btn-element">Read now</div>
                        <div className="btn-arrow btn-element"><ReactSVG src={arrow} style={{fill: 'white'}} /></div>
                    </div>
                    <div className="explain-mobile show-mobile-flex">
                        <h1>6 Simple Ways You Can Use Neuroscience to Increase</h1>
                        <div className="btn-arrow btn-element"><ReactSVG src={arrow} style={{fill: 'white'}} /></div>
                    </div>
                    <div className="support-area show-web-flex">
                        <img src={cnn} alt="cnn" />
                        <img src={cbs} alt="cbs" />
                        <img src={fox} alt="fox" />
                        <img src={boston} alt="boston" />
                    </div>
                </div>
                <div className="auth-content">
                    <div className="main-col">
                        {pathName === '/sign-up' && <SignUp />}
                        {pathName === '/sign-in' && <LogIn />}
                        {pathName === '/forgot-password' && <ForgotPassword />}
                        {pathName === '/new-password' && <NewPassword />}
                    </div>
                </div>
            </div>
        );
    }
}


  
export default (withRouter(AuthPage));