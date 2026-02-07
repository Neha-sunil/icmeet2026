import React from 'react';
import sponsorSamsonImg from '../assets/SamsonPharma.png';
import sponsorSMPImg from '../assets/SMP_logo.png';
import sponsorSANImg from '../assets/SAN_internationals.png';
import '../index.css';

const Footer = () => {
    return (
        <footer>
            <div className="container footer-content">
                <div className="footer-section">
                    <h3>IC-MEET 2026</h3>
                    <p>International Conference on Recent Trends in Materials, Engineering and Emerging Technology.</p>
                </div>
                <div className="footer-section">
                    <h3>Contact</h3>
                    <p>Department of ECE <br /> T. John Institute of Technology</p>
                    <div style={{ marginTop: '10px' }}>
                        <a href="mailto:tjitecemeet@outlook.com" style={{ display: 'block' }}>tjitecemeet@outlook.com</a>
                        <a href="tel:+919876543210" style={{ display: 'block' }}>+91 9876543210</a>
                    </div>
                </div>
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/committees">Committees</a>
                    <a href="/department">Department</a>
                    <a href="/sponsors">Sponsors</a>
                </div>
                <div className="footer-section">
                    <h3>Our Sponsors</h3>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '15px',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        marginTop: '15px',
                        flexWrap: 'nowrap'
                    }}>
                        <img src={sponsorSMPImg} alt="SMP" style={{ height: '40px', width: 'auto', filter: 'brightness(0) invert(1)', opacity: 1 }} />
                        <img src={sponsorSamsonImg} alt="Samson Pharma" style={{ height: '40px', width: 'auto', filter: 'brightness(0) invert(1)', opacity: 1 }} />
                        <img src={sponsorSANImg} alt="SAN International" style={{ height: '40px', width: 'auto', filter: 'brightness(0) invert(1)', opacity: 1 }} />
                    </div>
                </div>
            </div>

            <div className="copyright">
                &copy; 2026 IC-MEET. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
