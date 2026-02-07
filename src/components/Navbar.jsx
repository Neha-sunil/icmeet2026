import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/tjit-logo.png';
import icmeetLogo from '../assets/ICMEET logo.png';
import '../index.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <div className="container">
                <nav>
                    <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '0' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <img src={icmeetLogo} alt="IC-MEET Logo" style={{ height: '45px', width: 'auto' }} />
                            <div style={{ whiteSpace: 'nowrap', fontSize: '1.4rem', fontWeight: 'bold' }}>
                                <span style={{ color: 'var(--secondary-blue)' }}>IC-MEET</span> 2026
                            </div>
                        </div>
                        <div style={{ width: '1px', height: '25px', backgroundColor: '#ddd', margin: '0 15px' }}></div>
                        <img src={logo} alt="TJIT Logo" style={{ height: '45px', width: 'auto' }} />
                    </div>
                    <button className="hamburger" onClick={toggleMenu}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                    <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                        <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
                        <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
                        <NavLink to="/committees" onClick={() => setIsOpen(false)}>Committees</NavLink>
                        <NavLink to="/department" onClick={() => setIsOpen(false)}>Department</NavLink>
                        <NavLink to="/sponsors" onClick={() => setIsOpen(false)}>Sponsors</NavLink>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
