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
                    <p style={{ lineHeight: '1.6' }}>International Conference on Recent Trends in Materials, Engineering and Emerging Technology.</p>
                </div>
                <div className="footer-section">
                    <h3>Contact</h3>
                    <p style={{ marginBottom: '15px' }}>
                        Department of Electronics and Communication Engineering <br />
                        T. John Institute of Technology
                    </p>
                    <a href="mailto:tjitecemeet@gmail.com">tjitecemeet@gmail.com</a>
                </div>
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <a href="/">Home</a>
                    <a href="/department">Department</a>
                    <a href="/about">IC-MEET 2026</a>
                    <a href="/committees">Committees</a>
                    <a href="/call-for-papers">Call For Papers</a>
                    <a href="/sponsors">Sponsors</a>
                </div>
                <div className="footer-section">
                    <h3>Our Sponsors</h3>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '15px',
                        marginTop: '10px',
                        alignItems: 'center'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <img src={sponsorSMPImg} alt="SMP" style={{ height: '30px', width: 'auto', filter: 'brightness(0) invert(1)' }} />
                            <span style={{ fontSize: '0.9rem', opacity: 0.8 }}>SMP</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <img src={sponsorSamsonImg} alt="Samson Pharma" style={{ height: '30px', width: 'auto', filter: 'brightness(0) invert(1)' }} />
                            <span style={{ fontSize: '0.9rem', opacity: 0.8 }}>Samson Pharma</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <img src={sponsorSANImg} alt="SAN International" style={{ height: '30px', width: 'auto', filter: 'brightness(0) invert(1)' }} />
                            <span style={{ fontSize: '0.9rem', opacity: 0.8 }}>SAN International</span>
                        </div>
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
