import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright, faHeart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

export default function Footer() {
    return (
        <React.Fragment>
            <div id="upper-footer">
                <div id="upper-footer-content">
                    <div id="upper-footer-left">
                        <h5 className="footer-heading">Features</h5>
                        <p><a href="#dashboard-feature" className="footer-links">Dashboards</a></p>
                        <p><a href="#suggestion-feature" className="footer-links">Song suggestions</a></p>
                        <p><a href="#forum-feature" className="footer-links">Music forum</a></p>
                    </div>
                    <div id="upper-footer-right">
                        <button id="footer-sign-up-button" className="coolBeans"><a href="https://app.shutupanddance.io/signup">START FOR FREE</a></button>
                    </div>
                </div>
            </div>
            <div id="lower-footer">
                <div id="lower-footer-content">
                    <p id="copyright">Made with <FontAwesomeIcon icon={faHeart} /> by Shut Up And Dance Ltd. <FontAwesomeIcon icon={faCopyright} /> All rights reserved.</p>
                </div>
            </div>
        </React.Fragment>
    );
};