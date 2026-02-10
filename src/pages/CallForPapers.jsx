import React from 'react';
import { callForPapers } from '../data/content';
import registrationQr from '../assets/registration.jpeg';
import paymentQr from '../assets/payment.jpeg';
import '../index.css';

const CallForPapers = () => {
    return (
        <div style={{ paddingBottom: '80px' }}>
            <div className="subpage-header">
                <div className="container">
                    <h1>Call For Papers</h1>
                </div>
            </div>

            <div className="container">
                <div style={{ marginBottom: '40px' }}>
                    <p style={{ marginBottom: '20px' }}>{callForPapers.intro}</p>
                    <p style={{ marginBottom: '30px' }}>{callForPapers.submissionInfo}</p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '25px',
                        justifyContent: 'center',
                        maxWidth: '900px',
                        margin: '30px auto 0'
                    }}>
                        {/* Abstract Section */}
                        <div style={{
                            backgroundColor: 'white',
                            padding: '30px',
                            borderRadius: '15px',
                            boxShadow: '0 8px 25px rgba(0,0,0,0.05)',
                            borderTop: '6px solid var(--primary-blue)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            textAlign: 'center'
                        }}>
                            <div>
                                <h4 style={{ color: 'var(--primary-blue)', marginBottom: '15px', fontSize: '1.2rem' }}>Abstract Format</h4>
                                <p style={{ fontSize: '1rem', color: '#555', marginBottom: '25px', fontStyle: 'italic', lineHeight: '1.5' }}>
                                    The abstract should be concise and clearly summarize the objectives, methodology, and key outcomes of the work.
                                </p>
                            </div>
                            <a
                                href="/IC-MEET abstract Format.docx"
                                download="IC_MEET_2026_Abstract_Format.docx"
                                className="btn btn-primary"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    textDecoration: 'none',
                                    padding: '12px 25px',
                                    fontSize: '0.95rem',
                                    backgroundColor: 'var(--primary-blue)',
                                    color: 'white',
                                    width: '100%',
                                    justifyContent: 'center',
                                    transition: 'transform 0.2s ease'
                                }}
                            >
                                Download (.docx)
                            </a>
                        </div>

                        {/* Full Paper Section */}
                        <div style={{
                            backgroundColor: 'white',
                            padding: '30px',
                            borderRadius: '15px',
                            boxShadow: '0 8px 25px rgba(0,0,0,0.05)',
                            borderTop: '6px solid var(--primary-blue)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            textAlign: 'center'
                        }}>
                            <div>
                                <h4 style={{ color: 'var(--primary-blue)', marginBottom: '15px', fontSize: '1.2rem' }}>Full Paper Format</h4>
                                <p style={{ fontSize: '1rem', color: '#555', marginBottom: '25px', fontStyle: 'italic', lineHeight: '1.5' }}>
                                    The full paper must strictly follow the prescribed format and should not exceed six pages.
                                </p>
                            </div>
                            <a
                                href="/IC MEET 2026 Paper Format.docx"
                                download="IC_MEET_2026_Paper_Format.docx"
                                className="btn btn-primary"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    textDecoration: 'none',
                                    padding: '12px 25px',
                                    fontSize: '0.95rem',
                                    backgroundColor: 'var(--primary-blue)',
                                    color: 'white',
                                    width: '100%',
                                    justifyContent: 'center',
                                    transition: 'transform 0.2s ease'
                                }}
                            >
                                Download (.docx)
                            </a>
                        </div>
                    </div>
                </div>

                {/* Themes and Dates Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '40px',
                    marginBottom: '40px'
                }}>
                    {/* Themes */}
                    <div className="card">
                        <h3 style={{ borderBottom: '2px solid var(--accent-blue)', paddingBottom: '10px', marginBottom: '20px' }}>
                            CALL FOR PAPER/POSTER GUIDELINES:
                        </h3>
                        <p style={{ fontWeight: 'bold', marginBottom: '15px' }}>The research paper can be on the following themes:</p>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {callForPapers.themes.map((theme, index) => (
                                <li key={index} style={{
                                    marginBottom: '10px',
                                    display: 'flex',
                                    alignItems: 'flex-start'
                                }}>
                                    <span style={{ color: 'var(--accent-blue)', marginRight: '10px' }}>➤</span>
                                    {theme}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Key Dates */}
                    <div className="card" style={{ backgroundColor: 'var(--light-blue)', borderLeft: '5px solid var(--primary-blue)' }}>
                        <h3 style={{ marginBottom: '20px' }}>IMPORTANT KEY DATES:</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {callForPapers.importantDates.map((item, index) => (
                                <div key={index} style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    padding: '5px 0',
                                    borderBottom: '1px solid rgba(0,0,0,0.05)'
                                }}>
                                    <span style={{ fontWeight: '600' }}>{item.event}</span>
                                    <span style={{ fontWeight: '700', color: 'var(--primary-blue)' }}>{item.date}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Registration Fees */}
                <div className="card" style={{ marginBottom: '40px' }}>
                    <div className="section-title" style={{ textAlign: 'center', marginBottom: '20px' }}>
                        REGISTRATION FEE (INCLUDING GST):
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '12px'
                    }}>
                        {callForPapers.registrationFees.map((item, index) => (
                            <div key={index} style={{
                                padding: '12px 20px',
                                border: '1px solid #eee',
                                borderRadius: '8px',
                                backgroundColor: '#fdfdfd',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                                <h4 style={{ color: 'var(--secondary-blue)', margin: 0 }}>{item.category}</h4>
                                <div style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'var(--primary-blue)' }}>{item.fee}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* QR Codes Section */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '40px',
                    marginTop: '50px'
                }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <h3 style={{ marginBottom: '20px', color: 'var(--primary-blue)' }}>SCAN TO REGISTER</h3>
                        <div style={{
                            width: '200px',
                            height: '200px',
                            backgroundColor: 'white',
                            marginBottom: '15px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '1px solid #eee',
                            borderRadius: '12px',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                            overflow: 'hidden'
                        }}>
                            <img src={registrationQr} alt="Registration QR Code" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        </div>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.95rem', fontWeight: '600', textAlign: 'center' }}>
                            Scan to open registration form
                        </p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <h3 style={{ marginBottom: '20px', color: 'var(--primary-blue)' }}>SCAN TO PAY</h3>
                        <div style={{
                            width: '200px',
                            height: '200px',
                            backgroundColor: 'white',
                            marginBottom: '15px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '1px solid #eee',
                            borderRadius: '12px',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                            overflow: 'hidden'
                        }}>
                            <img src={paymentQr} alt="Payment QR Code" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        </div>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.95rem', fontWeight: '600', textAlign: 'center' }}>
                            Scan to complete payment
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CallForPapers;
