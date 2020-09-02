import React from 'react';
import './AuthPage.scss';
import arrow from '../../Assets/Common/arrow.svg';
import { ReactSVG } from 'react-svg'
import { LogIn, ForgotPassword, NewPassword } from '../../Components';
import { withRouter } from 'react-router-dom';
import SignUp from '../../Components/Auth/SignUp';

class AuthPage extends React.Component {
    render() {
        const pathName = this.props.location.pathname;
        return (
            <div className="auth-page">
                <div className="ads-area">
                    <p className="subtitle">Professional on the Go</p>
                    <h1 className="show-web">Hello There, Join Us</h1>
                    <p className="explain show-web">Enter your personal details and join the learning community </p>
                    <div className="read-btn show-web">
                        <div className="btn-text btn-element">SignUp</div>
                        <div className="btn-arrow btn-element"><ReactSVG src={arrow} style={{fill: 'white'}} /></div>
                    </div>
                    <div className="explain-mobile show-mobile-flex">
                        <h1>Hello There, Join Us</h1>
                        <div className="btn-arrow btn-element"><ReactSVG src={arrow} style={{fill: 'white'}} /></div>
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