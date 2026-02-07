import React from 'react';
import { contactInfo } from '../data/content';
import '../index.css';

const Contact = () => {
    return (
        <div style={{ paddingBottom: '80px' }}>
            <div className="subpage-header">
                <div className="container">
                    <h1>Contact Us</h1>
                </div>
            </div>

            <div className="container">
                <div className="card" style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
                    <h3>{contactInfo.department}</h3>
                    <h4 style={{ marginBottom: '20px', color: '#555' }}>{contactInfo.institute}</h4>

                    <div style={{ marginTop: '30px' }}>
                        <p style={{ marginBottom: '10px' }}>
                            <strong>Email:</strong> <a href={`mailto:${contactInfo.email}`} style={{ color: 'var(--accent-blue)' }}>{contactInfo.email}</a>
                        </p>
                        <p>
                            <strong>Phone:</strong> <a href={`tel:${contactInfo.phone}`} style={{ color: 'var(--accent-blue)' }}>{contactInfo.phone}</a>
                        </p>
                    </div>

                    <div style={{ marginTop: '40px' }}>
                        <p>For any queries regarding the conference, please feel free to reach out to us.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
