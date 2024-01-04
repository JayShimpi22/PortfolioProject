import './FooterStyle.css';
import React from 'react';
import { FaFacebook, FaHome, FaInstagram, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
                        <div>
                            <p>Pune</p>
                            <p>India</p>
                        </div>
                    </div>
                    <div className='phone'>
                        <h4>
                            <FaPhone size={20} style={{ color: "white", marginRight: "2rem" }} />
                            9373123867
                        </h4>
                    </div>
                    <div className='email'>
                        <h4>
                            <FaMailBulk size={20} style={{ color: "white", marginRight: "2rem" }} />
                            shimpi.jay264@gmail.com
                        </h4>
                    </div>
                </div>
                <div className='right'>
                    <h4>About the Company</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, vel?</p>
                    <div className='social'>
                        <FaFacebook size={20} style={{ color: "white", marginRight: "2rem" }} />
                        <FaTwitter size={20} style={{ color: "white", marginRight: "2rem" }} />
                        <FaInstagram size={20} style={{ color: "white", marginRight: "2rem" }} />

                    </div>
                </div>
            </div>
        </div >
    )
}

export default Footer;
