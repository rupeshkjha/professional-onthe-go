import React from 'react';
import './SiteInfoPage.scss';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Privacy, Refund, Term } from './infos';

function innerFunc(item) {
    return {__html: item.content}
}

class SiteInfoPage extends React.Component { 
    render() {
        let title = '';
        let infos = [];

        if (this.props.location.pathname === '/privacy') {
            title = 'Privacy';
            infos = Privacy;
        } else if (this.props.location.pathname === '/refund') {
            title = 'Refund';
            infos = Refund;
        } else if (this.props.location.pathname === '/terms') {
            title = 'Terms And Conditions';
            infos = Term;
        }

        return (
            <div className="siteinfo-page">
                <div className="container siteinfo-container">
                    <div className="title">{title}</div>
                    <div className="siteinfo-list shadow-object">
                        {
                            infos.map((item, index) => {
                                return (
                                    <div className="siteinfo" key={index}>
                                        <div className="siteinfo-title">{item.title}</div>
                                        <div className="siteinfo-content" dangerouslySetInnerHTML={innerFunc(item)}></div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
    }
}
  
export default connect(mapStateToProps, { })(withRouter(SiteInfoPage));