import React from 'react';
import { departmentVision, departmentMission, faculty } from '../data/content';
import '../index.css';

const Department = () => {
    return (
        <div style={{ paddingBottom: '80px' }}>
            <div className="subpage-header">
                <div className="container">
                    <h1 style={{ fontSize: '3rem', margin: 0 }}>Department of Electronics and Communication Engineering</h1>
                </div>
            </div>

            <div className="container">
                <div className="about-section">
                    <div className="about-section-heading">
                        <h2 style={{
                            fontSize: '2.5rem',
                            color: 'var(--primary-blue)',
                            lineHeight: '1.2',
                            margin: 0,
                            position: 'relative',
                            paddingLeft: '25px',
                            borderLeft: '6px solid var(--accent-blue)'
                        }}>
                            About the <br /> Department
                        </h2>
                    </div>
                    <div style={{
                        backgroundColor: 'white',
                        padding: '40px',
                        borderRadius: '15px',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                        border: '1px solid #f0f0f0'
                    }}>
                        <p style={{
                            lineHeight: '1.9',
                            color: '#444',
                            margin: 0
                        }}>
                            The Department of Electronics & Communication Engineering was established at T. John Institute of Technology in 2006. Since its inception, the department has grown meteorically. The department seeks to excel as a technology hub processing research and educating Students in current technological developments. It is equipped with the state-of-the-art infrastructure and supported by a team of dedicated and qualified Staff members. Our department's Faculty members bring state-of-the-art Research, Development, and design experience into the classroom, ensuring that our Students are able to apply and recognize as Professional Engineers in all parts of the global engineering and technical community.
                        </p>
                    </div>
                </div>


                <div className="vm-grid">
                    <div className="vm-box">
                        <h3>Department Vision</h3>
                        <p>{departmentVision}</p>
                    </div>

                    <div className="vm-box">
                        <h3>Department Mission</h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {departmentMission.map((point, index) => {
                                const [marker, ...rest] = point.split(':');
                                return (
                                    <li key={index} style={{ marginBottom: '15px', textAlign: 'justify' }}>
                                        <strong>{marker}:</strong> {rest.join(':')}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>

                <div style={{ marginTop: '40px' }}>
                    <div className="section-title">Faculty Members</div>
                    <div className="responsive-grid" style={{ textAlign: 'center', gap: '60px' }}>
                        {faculty.map((member, index) => (
                            <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <div style={{
                                    width: '200px',
                                    height: '250px',
                                    backgroundColor: '#f5f7fa',
                                    borderRadius: '12px',
                                    marginBottom: '18px',
                                    overflow: 'hidden',
                                    border: '1px solid #e1e8ed',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    boxShadow: '0 8px 20px rgba(0,0,0,0.06)',
                                    position: 'relative',
                                    transition: 'transform 0.3s ease'
                                }} className="faculty-img-container">
                                    {member.image ? (
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                display: 'block'
                                            }}
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.nextSibling.style.display = 'flex';
                                            }}
                                        />
                                    ) : null}
                                    <div style={{
                                        position: 'absolute',
                                        inset: 0,
                                        display: member.image ? 'none' : 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: '#f0f4f8',
                                        color: 'var(--primary-blue)',
                                        gap: '10px'
                                    }}>
                                        <div style={{
                                            width: '60px',
                                            height: '60px',
                                            borderRadius: '50%',
                                            backgroundColor: 'var(--light-blue)',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            fontSize: '1.5rem',
                                            fontWeight: 'bold',
                                            color: 'var(--primary-blue)',
                                            border: '2px solid white'
                                        }}>
                                            {member.name.split(' ').map(n => n[0]).filter(c => c !== '.').slice(0, 2).join('')}
                                        </div>
                                        <span style={{ fontSize: '0.8rem', opacity: 0.6, fontWeight: '500' }}>Photo Pending</span>
                                    </div>
                                </div>
                                <h3 style={{ marginBottom: '5px', color: 'var(--primary-blue)', fontSize: '1.15rem', fontWeight: '700' }}>{member.name}</h3>
                                <p style={{ color: 'var(--text-gray)', fontStyle: 'italic', fontWeight: '500' }}>{member.designation}</p>
                            </div>
                        ))}
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Department;
