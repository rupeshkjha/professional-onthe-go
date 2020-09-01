import React from 'react';
import './TutorHomePage.scss';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { TutorStartArea, TutorFeatures, TutorJobs } from '../../Components';

class TutorHomePage extends React.Component {

    getStarted = (formobject) => {
        this.props.history.push({
            pathname : '/tutor-signup',
            state: formobject
        })
    } 
    render() {
        return (
            <div className="tutorhome-page v-r">
                <TutorStartArea onNext={this.getStarted} />
                <TutorFeatures />
                <TutorJobs onNext={this.getStarted}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
    }
}
  
export default connect(mapStateToProps, { })(withRouter(TutorHomePage));