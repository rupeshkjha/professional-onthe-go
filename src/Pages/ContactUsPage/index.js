import React from 'react';
import './ContactUsPage.scss';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

export class ContactUsPage extends React.Component {
    render() {
        return (
            <div className="contactus-page">
                <div className="container contactus-container">
                    <div className="title">Contact Us</div>
                    <div className="row shadow-object main-row">
                        <div className="col-lg-6 left-area">
                            Frog Tutoring Corporate Office <br />
                            1751 River Run Suite 200 <br />
                            Fort Worth, TX 76107 <br /> <br />
                            <b>Phone: (877) 904 0134</b><br />
                            <b>Email: hello@gradegetter.com</b>
                        </div>
                        <div className="col-lg-6 right-area">
                            <div className="map-wrapper">
                                <div className="map-container">
                                    <Map
                                        google={this.props.google}
                                        zoom={8}
                                        style={{
                                            width: '100%',
                                            height: '100%'
                                        }}
                                        initialCenter={{ lat: 32.726789, lng: -97.359885 }}
                                    >
                                        <Marker position={{ lat: 32.726789, lng: -97.359885 }} />
                                    </Map>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GoogleApiWrapper(
    (props) => ({
        apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
        language: 'en',
        region: 'us'
    }
))(ContactUsPage)