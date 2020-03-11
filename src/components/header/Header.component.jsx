import React from 'react';
import './Header.styles.scss';
import Logo from '../../assets/Logo.svg';

import { Link } from 'react-router-dom';

const Header = () => (
    <div className="header-container">
        <Link to="/"><img src={Logo} alt="logo"/></Link>

        <ul>
            <li>About</li>
            <li>Projects</li>
            <li>Connect With Me</li>
            <li>Testimonials</li>
            <li>Contact</li>
            <li>Resume</li>
            <li>GitHub</li>
        </ul>
    </div>
);

export default Header;