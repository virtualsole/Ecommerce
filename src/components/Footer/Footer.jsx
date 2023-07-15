import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from 'react-icons/fa'
import Payment from "../../assets/payments.png"
import "./Footer.scss";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                    The essence of the Claude aesthetic combines the contrasts of edgy and classic styles—reaching for the beautiful and accessible, with captivating end results.
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                        184 Main Rd E, St Albans
VIC 3021, Australia
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">
                          +001 2233 456

                        </div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">
                             contact@company.com
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text">Formal
                    </span>
                    <span className="text">Semiformal</span>
                    <span className="text">New arrivals
                    </span>
                    <span className="text">Casual</span>
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Returns</span>
                    <span className="text">Terms & Conditions</span>
                    <span className="text">Contact Us</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <div className="text">
                    © 2023 Copyright By Virtual Tech
                    </div>
                    <img src={Payment} alt="" />
                </div>
            </div>
        </footer>

    );
};

export default Footer;
