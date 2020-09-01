import React from 'react';
import './Sidebar.scss';
import logo from '../../../Assets/Header/logo.svg';
import add from '../../../Assets/Common/add.svg';
import { NavLink, withRouter } from 'react-router-dom';
import { StartButton } from '../../';
import { ReactSVG } from 'react-svg'

class Sidebar extends React.Component {

    state = {
        isOpen: false,
        isPrevOpen: false,
    }

    static getDerivedStateFromProps(props, state) {
        return {
            isOpen: props.isOpen,
            isPrevOpen: state.isOpen,
        }
    }

    closeSidebar = () => {
        this.props.toggleSidebar(false);
    }

    render() {
        const { isOpen, isPrevOpen } = this.state;
        return (
            <div className={`sidebar-component ${isOpen ? 'active' : isPrevOpen ? 'inactive' : ''}`}>
                <div className="sidebar-wrapper">
                    <div className="sidebar-content">
                        <div className="logo-area">
                            <img src={logo} alt="logo" />
                            <ReactSVG src={add} className='icon-close' onClick={() => this.closeSidebar()} />
                        </div>
                        <div className="menu">
                            <NavLink className="menu-item" exact to="/" onClick={this.closeSidebar}>Buissness Setup</NavLink>
                            <a className="menu-item" href="/#section-1-4" onClick={this.closeSidebar}>
                                Why Us
                            </a>
                            <NavLink className="menu-item" exact to="/features" onClick={this.closeSidebar}>Tax & Compliance</NavLink>
                            <a className="menu-item" href="/#section-1-9" onClick={this.closeSidebar}>Trademark & IP</a>
                            <a className="menu-item" href="/#section-1-7" onClick={this.closeSidebar}>Fundraising</a>

                            <NavLink className="menu-item" exact to="/demo" onClick={this.closeSidebar}>Contracts</NavLink>
                            <NavLink className="menu-item" exact to="/values" onClick={this.closeSidebar}>NGO</NavLink>
                            <a className="menu-item" href="/#section-1-5" onClick={this.closeSidebar}>Property & personal</a>

                            <NavLink className="menu-item" exact to="/share" onClick={this.closeSidebar}>Partner With Us</NavLink>
                            <div className="sub-menu">
                                <NavLink className="menu-item" exact to="/sign-in" onClick={this.closeSidebar}>Log In</NavLink>
                                <NavLink className="menu-item" exact to="/sign-up" onClick={this.closeSidebar}>SIGN UP </NavLink>
                            </div>
                            <StartButton className="start-btn" height="45px" />
                        </div>
                    </div>
                    <div className="sidebar-block" onClick={() => this.closeSidebar()}></div>
                </div>
            </div>
        );
    }
}


export default (withRouter(Sidebar));