import React from 'react';
import './StartButton.scss';
import arrow from '../../../Assets/Common/arrow.svg';
import { ReactSVG } from 'react-svg'

export default class StartButton extends React.Component {

     constructor(props){
        super(props);
        this.state = {
            btnText: ""
        }
     }
    
    render() {
        const { className, height, startText, onClick } = this.props;
        let btnHeight = height || '63px';
        let btnText = startText || 'Get Started';

        return (
            <div className={`startbutton-component ${className}`} onClick={onClick}>
                <div className="btn-area" style={{height: btnHeight}}>
                    <div className="btn-text btn-element">{btnText}</div>
                    <div className="btn-arrow btn-element" style={{width: btnHeight}}>
                        <ReactSVG src={arrow} style={{fill: 'white'}} />
                    </div>
                </div>
                <div className="bg-dot" style={{height: btnHeight}} />
            </div>
        );
    }
}
