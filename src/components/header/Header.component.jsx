import React, { useState } from 'react';
import './Header.styles.scss';
import Logo from '../../assets/Logo.svg';

import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

import BurgerMenu from '../burger-menu/BurgerMenu.component';
import Resume from '../../assets/AlbertResume.pdf';

const Header = ({ home }) => {
    const [hidden, setHidden] = useState(true);

    const toggleMenu = () => {
        setHidden(!hidden);
    }

    return(
        <div className="header-container">
            <Link to="/"><img src={Logo} alt="logo"/></Link>

            <FontAwesome className="fa-bars" onClick={toggleMenu} name="bars" size="2x"/>
            {home ? 
                <ul className="nav-options">
                    <a href="#about"><li>About</li></a>
                    <a href="#project"><li>Projects</li></a>
                    <a href="#testimonial"><li>Testimonials</li></a>
                    <a href="#footer"><li>Contact</li></a>
                    <a href={Resume} download><li>Resume <FontAwesome className="fa-download" name="resume-download-button"/></li></a>
                    <a href="https://github.com/albert-anthony6" target="_blank" rel="noopener noreferrer"><li>GitHub <FontAwesome className="fa-github" name="github"/></li></a>
                    <a href="https://www.linkedin.com/in/avaldes21/" target="_blank" rel="noopener noreferrer"><li>LinkedIn <FontAwesome className="fa-linkedin" name="linkedin"/></li></a>
                </ul>
                :
                <ul className="nav-options">
                    <Link to="/"><li>Home</li></Link>
                    <a href="#about"><li>About</li></a>
                    <a href="#technologies"><li>Technologies</li></a>
                    <a href="#footer"><li>Contact</li></a>
                    <a href={Resume} download><li>Resume <FontAwesome className="fa-download" name="resume-download-button"/></li></a>
                    <a href="https://github.com/albert-anthony6" target="_blank" rel="noopener noreferrer"><li>GitHub <FontAwesome className="fa-github" name="github"/></li></a>
                    <a href="https://www.linkedin.com/in/avaldes21/" target="_blank" rel="noopener noreferrer"><li>LinkedIn <FontAwesome className="fa-linkedin" name="linkedin"/></li></a>
                </ul>
            }
            {!hidden ? <BurgerMenu home={home} toggleMenu={toggleMenu}/> : null}
        </div>
    );
};

export default Header;