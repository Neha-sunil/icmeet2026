import React from 'react';
import { peos, psos, keynoteSpeakers, advisoryCommittee } from '../data/content';
import '../index.css';

const About = () => {
    return (
        <div style={{ paddingBottom: '80px' }}>
            <div className="container" style={{ marginTop: '40px' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(280px, 30%) 1fr',
                    minHeight: '380px',
                    alignItems: 'stretch',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.08)'
                }}>
                    <div style={{
                        backgroundColor: 'var(--primary-blue)',
                        color: 'white',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '40px',
                        textAlign: 'center'
                    }}>
                        <div style={{ fontSize: '3.5rem', fontWeight: 'bold', lineHeight: '1.2' }}>
                            IC-MEET <br /> 2026
                        </div>
                    </div>
                    <div style={{ backgroundColor: 'white', padding: '40px', display: 'flex', alignItems: 'center' }}>
                        <div style={{ maxWidth: '800px', borderLeft: '6px solid var(--accent-blue)', paddingLeft: '30px' }}>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#333', margin: 0 }}>
                                The International Conference on Recent Trends in Materials, Engineering and Emerging Technology (IC-MEET 2026) is a premier global platform designed to bring together researchers, academicians, industry experts, and students from around the world.
                                <br /><br />
                                Our mission is to facilitate the exchange of ideas and discuss the latest advancements in the fields of materials science, engineering disciplines, and cutting-edge emerging technologies. This conference aims to foster collaborative research and provide an opportunity for delegates to share their knowledge and experiences.
                                <br /><br />
                                Join us on 17th April 2026 for an engaging and insightful experience that contributes to the growth of technology and innovation.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">

                <div style={{ marginTop: '80px' }}>
                    <div className="section-title">Keynote Speakers</div>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '40px'
                    }}>
                        {keynoteSpeakers.map((speaker, index) => (
                            <div key={index} style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '30px',
                                backgroundColor: 'white',
                                padding: '25px',
                                borderRadius: '8px',
                                boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                                border: '1px solid #f0f0f0'
                            }}>
                                <div style={{
                                    width: '200px',
                                    height: '250px',
                                    flexShrink: 0,
                                    backgroundColor: '#eee',
                                    borderRadius: '8px',
                                    overflow: 'hidden',
                                    border: '1px solid #ddd',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    color: '#aaa',
                                    fontSize: '0.9rem',
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
                                }}>
                                    {speaker.image ? <img src={speaker.image} alt={speaker.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : 'Photo'}
                                </div>
                                <div style={{ textAlign: 'left' }}>
                                    <h3 style={{ marginBottom: '10px', color: 'var(--primary-blue)', fontSize: '1.25rem' }}>{speaker.name}</h3>
                                    <p style={{ color: 'var(--text-gray)', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>{speaker.designation}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ marginTop: '80px' }}>
                    <div className="section-title">Advisory Committee</div>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                        gap: '30px'
                    }}>
                        {advisoryCommittee.map((member, index) => (
                            <div key={index} style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '20px',
                                backgroundColor: 'white',
                                padding: '20px',
                                borderRadius: '8px',
                                boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
                                border: '1px solid #f0f0f0'
                            }}>
                                <div style={{
                                    width: '200px',
                                    height: '250px',
                                    flexShrink: 0,
                                    backgroundColor: '#f9f9f9',
                                    borderRadius: '8px',
                                    overflow: 'hidden',
                                    border: '1px solid #eee',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    color: '#ccc',
                                    fontSize: '0.9rem',
                                    boxShadow: '0 4px 10px rgba(0,0,0,0.04)'
                                }}>
                                    {member.image ? <img src={member.image} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : 'Photo'}
                                </div>
                                <div style={{ textAlign: 'left' }}>
                                    <h4 style={{ marginBottom: '5px', color: 'var(--primary-blue)', fontSize: '1.1rem' }}>{member.name}</h4>
                                    <p style={{ color: 'var(--accent-blue)', fontSize: '0.9rem', fontWeight: '500', marginBottom: '3px' }}>{member.role}</p>
                                    <p style={{ color: '#666', fontSize: '0.85rem', lineHeight: '1.4', margin: 0 }}>{member.organization}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ marginTop: '80px' }}>
                    <div className="section-title">Program Educational Objectives (PEOs)</div>
                    <div className="card-grid">
                        {peos.map((peo, index) => (
                            <div className="card peo-card" key={index}>
                                <div className="peo-item">
                                    <p>{peo}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ marginTop: '80px' }}>
                    <div className="section-title">Program Specific Outcomes (PSOs)</div>
                    <div className="card-grid">
                        {psos.map((pso, index) => (
                            <div className="card pso-card" key={index}>
                                <div className="pso-item" style={{ background: '#007bff0a', padding: '20px', borderRadius: '8px', borderLeft: '5px solid #007bff' }}>
                                    <p>{pso}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


            </div>
        </div>
    );
};

export default About;
