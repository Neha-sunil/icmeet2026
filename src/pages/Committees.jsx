import React from 'react';
import { committees } from '../data/content';
import '../index.css';

const Committees = () => {
    return (
        <div style={{ paddingBottom: '80px' }}>
            <div className="container">

                <h2 className="section-title">Organizing Committees</h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '40px'
                }}>
                    {committees.map((committee) => (
                        <div key={committee.id} style={{
                            padding: '30px',
                            borderLeft: '4px solid var(--accent-blue)',
                            backgroundColor: 'white',
                            height: '100%',
                            boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
                        }}>
                            <h3 style={{ color: 'var(--primary-blue)', marginBottom: '15px' }}>{committee.name}</h3>
                            <div style={{ marginBottom: '15px' }}>
                                <h4 style={{ color: 'var(--secondary-blue)', fontSize: '0.9rem', textTransform: 'uppercase', marginBottom: '8px' }}>Coordinator(s)</h4>
                                <ul style={{ paddingLeft: '0' }}>
                                    {committee.coordinators.map((coordinator, index) => (
                                        <li key={index} style={{ marginBottom: '5px', fontWeight: '500', display: 'flex', alignItems: 'flex-start' }}>
                                            <span style={{ color: 'var(--accent-blue)', marginRight: '8px' }}>•</span>
                                            {coordinator}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Committees;
