import React from 'react';
import { sponsors } from '../data/content';
import '../index.css';

const Sponsors = () => {
    return (
        <div style={{ paddingBottom: '80px' }}>
            <div className="subpage-header">
                <div className="container">
                    <h1>Sponsors – IC-MEET 2026</h1>
                </div>
            </div>

            <div className="container">
                <p style={{
                    fontSize: '1.2rem',
                    textAlign: 'center',
                    maxWidth: '900px',
                    margin: '0 auto 30px',
                    color: '#555',
                    lineHeight: '1.8'
                }}>
                    We gratefully acknowledge the support of our sponsors whose contributions have made IC-MEET 2026 possible.
                    Their partnership strengthens research, innovation, and academic collaboration.
                </p>

                <div className="responsive-grid">
                    {sponsors.map((sponsor, index) => (
                        <div key={index} className="card" style={{
                            textAlign: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            padding: '40px'
                        }}>
                            <div style={{
                                width: '100%',
                                height: '150px',
                                marginBottom: '25px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                overflow: 'hidden'
                            }}>
                                {sponsor.logo ? (
                                    <img src={sponsor.logo} alt={sponsor.name} style={{ maxWidth: '90%', maxHeight: '90%', objectFit: 'contain' }} />
                                ) : (
                                    <div style={{ textAlign: 'center', color: '#ccc' }}>
                                        <div style={{ fontSize: '3rem', marginBottom: '10px' }}>🏢</div>
                                        <div style={{ fontSize: '0.9rem', fontWeight: '500' }}>Logo Placeholder</div>
                                    </div>
                                )}
                            </div>
                            <h3 style={{
                                color: 'var(--primary-blue)',
                                fontSize: '1.5rem',
                                marginBottom: '20px',
                                minHeight: '3.6rem',
                                display: 'flex',
                                alignItems: 'center'
                            }}>
                                {sponsor.name}
                            </h3>
                            <p style={{
                                color: '#666',
                                fontSize: '1rem',
                                lineHeight: '1.7',
                                textAlign: 'justify'
                            }}>
                                {sponsor.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sponsors;
