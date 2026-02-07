import React from 'react';
import { tjitAbout, tjitVision, tjitMission, leadership } from '../data/content';
import '../index.css';

const Home = () => {
    return (
        <div className="home-page">
            <div className="hero">
                <h2 style={{ fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '20px' }}>International Conference on</h2>
                <h1>Recent Trends in Materials, Engineering <br /> and Emerging Technology (IC-MEET 2026)</h1>
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
                <h3 className="date">17th April 2026</h3>

                <div className="cta-buttons">
                    <button className="btn btn-primary">Register Now</button>
                    <button className="btn btn-secondary">Download Brochure</button>
                </div>
            </div>

            <section className="section container" style={{ paddingTop: '80px', paddingBottom: '20px' }}>
                <div className="section-title" style={{ marginBottom: '30px' }}>Welcome to IC-MEET 2026</div>
                <p style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto', fontSize: '1.2rem', lineHeight: '1.8', color: '#555' }}>
                    Join us for a global gathering of minds in the fields of materials, engineering, and emerging technologies.
                    T. John Institute of Technology welcomes you to explore the future of innovation and collaborative research at our 2026 international conference.
                </p>
            </section>

            {/* About TJIT Split Section */}
            <div className="container" style={{ marginTop: '50px' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(280px, 30%) 1fr',
                    alignItems: 'stretch',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.08)'
                }}>
                    <div style={{
                        backgroundColor: 'var(--primary-blue)',
                        color: 'white',
                        padding: '40px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        textAlign: 'center'
                    }}>
                        <h2 style={{ fontSize: '2.2rem', fontWeight: 'bold', margin: 0 }}>About <br /> TJIT</h2>
                    </div>
                    <div style={{ backgroundColor: 'white', padding: '40px' }}>
                        <div style={{ maxWidth: '800px' }}>
                            {tjitAbout.map((paragraph, index) => (
                                <p key={index} style={{ marginBottom: '15px', fontSize: '1.05rem', lineHeight: '1.7', color: '#444' }}>{paragraph}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <section className="section container" style={{ paddingTop: '60px' }}>
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

                <div style={{ marginTop: '80px' }}>
                    <div className="section-title">Conference Patrons & Conveners</div>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '20px',
                        textAlign: 'center',
                        justifyContent: 'center'
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
                                <p style={{ color: 'var(--text-gray)', fontSize: '0.9rem', lineHeight: '1.4', maxWidth: '200px' }}>{leader.designation}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </section>
        </div>
    );
};

export default Home;
