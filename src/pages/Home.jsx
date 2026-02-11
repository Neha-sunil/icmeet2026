import React from 'react';
import { tjitAbout, tjitVision, tjitMission, leadership } from '../data/content';
import '../index.css';

const Home = () => {
    return (
        <div className="home-page">
            <div className="hero">
                <h2 style={{ fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '20px' }}>International Conference on</h2>
                <h1>Recent Trends in <span style={{ color: '#FFD700' }}>M</span>aterials, <span style={{ color: '#FFD700' }}>E</span>ngineering <br /> and <span style={{ color: '#FFD700' }}>E</span>merging <span style={{ color: '#FFD700' }}>T</span>echnology (IC-MEET 2026)</h1>
                <div style={{
                    fontSize: '0.85rem',
                    fontWeight: '300',
                    letterSpacing: '4px',
                    textTransform: 'uppercase',
                    color: 'rgba(255, 255, 255, 0.9)',
                    marginTop: '10px',
                    marginBottom: '20px',
                    fontStyle: 'italic'
                }}>
                    "INTERDISCIPLINARY INNOVATION IN ENGINEERING AND TECHNOLOGY"
                </div>
                <h2 style={{ color: '#e3f2fd', marginTop: '10px' }}>Organized by Department of Electronics and Communication Engineering</h2>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    alignItems: 'center',
                    marginTop: '20px',
                    marginBottom: '30px'
                }}>
                    <div className="date" style={{ margin: 0 }}>Date: 17th April 2026</div>
                    <div className="date" style={{ margin: 0, backgroundColor: 'rgba(0, 51, 102, 0.4)' }}>Mode: Hybrid (Online & Offline)</div>
                </div>

                <div className="cta-buttons">
                    <button className="btn btn-primary" onClick={() => window.open('https://forms.gle/Bsia1xqWdA68qmVE9', '_blank')}>Register Now</button>
                    <a href="/IC MEET 2026 - Conference Brochure(final).pdf" download="IC_MEET_2026_Brochure.pdf" className="btn btn-secondary" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        Download Brochure
                    </a>
                </div>
            </div>

            <section className="section container" style={{ paddingTop: '40px', paddingBottom: '20px' }}>
                <div className="section-title" style={{ marginBottom: '30px' }}>Welcome to IC-MEET 2026</div>
                <p style={{ maxWidth: '900px', margin: '0 auto', lineHeight: '1.8', color: '#555', textAlign: 'center' }}>
                    Join us for a global gathering of minds in the fields of Materials, Engineering, and Merging Technologies.
                    T. John Institute of Technology welcomes you to explore the future of innovation and collaborative research at our international conference 2026.
                </p>
            </section>

            {/* About TJIT Split Section */}
            <div className="container" style={{ marginTop: '30px' }}>
                <div className="about-split">
                    <div className="about-split-sidebar">
                        <h2 style={{ fontSize: '2.2rem', fontWeight: 'bold', margin: 0 }}>About <br /> TJIT</h2>
                    </div>
                    <div className="about-split-content">
                        <div style={{ maxWidth: '800px' }}>
                            {tjitAbout.map((paragraph, index) => (
                                <p key={index} style={{ marginBottom: '15px', lineHeight: '1.7', color: '#444' }}>{paragraph}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <section className="section container" style={{ paddingTop: '40px' }}>
                <div className="vm-grid">
                    <div className="vm-box">
                        <h3>Vision</h3>
                        <p>{tjitVision}</p>
                    </div>
                    <div className="vm-box">
                        <h3>Mission</h3>
                        <ul className="mission-list">
                            {tjitMission.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div style={{ marginTop: '40px' }}>
                    <div className="section-title">Conference Patrons & Conveners</div>
                    <div className="patrons-grid" style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '40px 60px',
                        paddingBottom: '20px'
                    }}>
                        {leadership.map((leader, index) => (
                            <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <h4 style={{ color: 'var(--secondary-blue)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '15px', fontSize: '1rem', fontWeight: 'bold', height: '40px', display: 'flex', alignItems: 'center' }}>
                                    {leader.role}
                                </h4>
                                <div style={{
                                    width: '200px',
                                    height: '250px',
                                    backgroundColor: '#eee',
                                    borderRadius: '8px',
                                    marginBottom: '15px',
                                    overflow: 'hidden',
                                    border: '1px solid #ddd',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    color: '#aaa',
                                    fontSize: '0.9rem',
                                    boxShadow: '0 5px 15px rgba(0,0,0,0.08)'
                                }}>
                                    {leader.image ?
                                        <img
                                            src={leader.image}
                                            alt={leader.name}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                transform: leader.role === "CHIEF PATRON" ? 'scale(1.6)' : 'none',
                                                transformOrigin: 'center 30%'
                                            }}
                                        /> : 'Photo'}
                                </div>
                                <h3 style={{ marginBottom: '5px', color: 'var(--primary-blue)', fontSize: '1.1rem' }}>{leader.name}</h3>
                                <p style={{ color: 'var(--text-gray)', lineHeight: '1.4', maxWidth: '200px' }}>{leader.designation}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </section>
        </div>
    );
};

export default Home;
