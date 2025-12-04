import React from 'react';
import { ContactasStyle } from './contactas-style';
const ContactasComponent = () => {
    return (
        <ContactasStyle>
                <div className="contact">
                    <h1 className="getintouch">GET IN TOUCH</h1>
                    <p className="sub__heading">Have questions or feedback? We're here to help. Send us a message and we'll respond soon.</p>
                    <span className="button">Contact Us</span>
                </div>
                <div className="image">
                    <img src='get-in-touch.8c521c235d4bd711343c.jpg'></img>
                </div>
        </ContactasStyle>
    )
}
export default ContactasComponent;