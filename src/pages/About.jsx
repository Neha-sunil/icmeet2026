import React from 'react';
import { peos, psos, keynoteSpeakers, advisoryCommittee } from '../data/content';
import '../index.css';

const About = () => {
    return (
        <div style={{ paddingBottom: '80px' }}>
            <div className="container" style={{ marginTop: '30px' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(280px, 30%) 1fr',
                    alignItems: 'stretch',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.08)'
                }}>
                    <div style={{
                        background: 'linear-gradient(135deg, rgba(0, 51, 102, 0.85) 0%, rgba(0, 86, 179, 0.85) 100%), url("/src/assets/tjit.jpg")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        color: 'white',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '30px',
                        textAlign: 'center'
                    }}>
                        <div style={{ fontSize: '3rem', fontWeight: 'bold', lineHeight: '1.0' }}>
                            IC-MEET <br /> 2026
                        </div>
                    </div>
                    <div style={{ backgroundColor: 'white', padding: '30px', display: 'flex', alignItems: 'center' }}>
                        <div style={{ maxWidth: '800px', borderLeft: '6px solid var(--accent-blue)', paddingLeft: '25px' }}>
                            <p style={{ lineHeight: '1.6', color: '#333', margin: 0 }}>
                                The International Conference on Recent Trends in Materials, Engineering, and Emerging Technology (IC MEET 2026) provides an international platform for researchers, academicians, industry professionals, and students to present original research and exchange innovative ideas in the areas of materials science, engineering, and emerging technologies.
                                <br /><br />
                                The conference emphasizes recent advancements in flexible electronics, artificial intelligence and machine learning, biomedical and healthcare technologies, cybersecurity, nanotechnology, and smart systems, with a focus on both theoretical developments and practical applications.
                                <br /><br />
                                The event aims to promote interdisciplinary collaboration, foster high-quality research, and encourage knowledge dissemination addressing current and future technological challenges.
                                <br /><br />
                                The theme of the conference, "Interdisciplinary Innovation in Engineering and Technology," promotes the integration of diverse engineering and technological disciplines to address complex real-world challenges. It invites academics, researchers, and industry professionals to share pioneering research and engage in collaborative discussions that bridge fields such as engineering, computer science, materials science, healthcare, and environmental technology.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">

                <div style={{ marginTop: '20px' }}>
                    <div className="section-title" style={{ marginBottom: '15px' }}>Keynote Speakers</div>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                        gap: '60px'
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
                                    <p style={{ color: 'var(--text-gray)', lineHeight: '1.6', margin: 0, textAlign: 'left' }}>{speaker.designation}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ marginTop: '20px' }}>
                    <div className="section-title" style={{ marginBottom: '15px' }}>Advisory Committee</div>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                        gap: '50px'
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
                                    <p style={{ color: 'var(--accent-blue)', fontWeight: '500', marginBottom: '3px', textAlign: 'left' }}>{member.role}</p>
                                    <p style={{ color: '#666', lineHeight: '1.4', margin: 0, textAlign: 'left' }}>{member.organization}</p>
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
