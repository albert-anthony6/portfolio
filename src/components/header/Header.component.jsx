import React, { useState } from 'react';
import './Header.styles.scss';
import Logo from '../../assets/Logo.svg';

import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

import BurgerMenu from '../burger-menu/BurgerMenu.component';
import Resume from '../../assets/WebResume.pdf';

const Header = ({ home }) => {
    const [hidden, setHidden] = useState(true);

    return(
        <div className="header-container">
            <Link to="/"><img src={Logo} alt="logo"/></Link>

            <FontAwesome className="fa-bars" onClick={() => setHidden(!hidden)} name="bars" size="2x"/>
            {
                home ? 
                <ul className="nav-options">
                    <a href="#about"><li>About</li></a>
                    <a href="#project"><li>Projects</li></a>
                    <a href="#testimonial"><li>Testimonials</li></a>
                    <a href="#footer"><li>Contact</li></a>
                    <a href={Resume} download><li>Resume <FontAwesome className="fa-download" name="resume-download-button"/></li></a>
                    <a href="https://github.com/albert-anthony6" target="_blank"><li>GitHub <FontAwesome className="fa-github" name="github"/></li></a>
                    <a href="https://www.linkedin.com/in/avaldes21/" target="_blank"><li>LinkedIn <FontAwesome className="fa-linkedin" name="linkedin"/></li></a>
                </ul>
                :
                <ul className="nav-options">
                    <Link to="/"><li>Home</li></Link>
                    <a href="#about"><li>About</li></a>
                    <a href="#technologies"><li>Technologies</li></a>
                    <a href="#footer"><li>Contact</li></a>
                    <a href={Resume} download><li>Resume <FontAwesome className="fa-download" name="resume-download-button"/></li></a>
                    <a href="https://github.com/albert-anthony6" target="_blank"><li>GitHub <FontAwesome className="fa-github" name="github"/></li></a>
                    <a href="https://www.linkedin.com/in/avaldes21/" target="_blank"><li>LinkedIn <FontAwesome className="fa-linkedin" name="linkedin"/></li></a>
                </ul>
            }
            {!hidden ? <BurgerMenu/> : null}
        </div>
    );
};

export default Header;