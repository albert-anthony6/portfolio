import React from 'react';
import './Header.styles.scss';
import Logo from '../../assets/Logo.svg';

import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

const Header = () => (
    <div className="header-container">
        <Link to="/"><img src={Logo} alt="logo"/></Link>

        <FontAwesome className="fa-bars" name="bars" size="2x"/>
        <ul>
            <li>About</li>
            <li>Projects</li>
            <li>Connect With Me</li>
            <li>Testimonials</li>
            <li>Contact</li>
            <li>Resume <FontAwesome className="fa-download" name="resume-download-button"/></li>
            <li>GitHub <FontAwesome className="fa-github" name="github"/></li>
        </ul>
    </div>
);

export default Header;