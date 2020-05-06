import React from 'react';
import './BurgerMenu.styles.scss';

import FontAwesome from 'react-fontawesome';
import Resume from '../../assets/ResumeAlbertV.pdf';
import { Link } from 'react-router-dom';

const BurgerMenu = ({ toggleMenu, home }) => (
    <div className="burger-menu">
    {home ? 
        <ul>
            <a href="#about"><li onClick={toggleMenu}>About</li></a>
            <a href="#project"><li onClick={toggleMenu}>Projects</li></a>
            <a href="#testimonial"><li onClick={toggleMenu}>Testimonials</li></a>
            <a href="#footer"><li onClick={toggleMenu}>Contact</li></a>
            <a href={Resume} target="_blank" rel="noopener noreferrer"><li onClick={toggleMenu}>Resume <FontAwesome className="fa-download" name="resume-download-button"/></li></a>
            <a href="https://github.com/albert-anthony6" target="_blank" rel="noopener noreferrer"><li onClick={toggleMenu}>GitHub <FontAwesome className="fa-github" name="github"/></li></a>
            <a href="https://www.linkedin.com/in/avaldes21/" target="_blank" rel="noopener noreferrer"><li onClick={toggleMenu}>LinkedIn <FontAwesome className="fa-linkedin" name="linkedin"/></li></a>
        </ul>
        :
        <ul>
            <Link to="/"><li onClick={toggleMenu}>Home</li></Link>
            <a href="#about"><li onClick={toggleMenu}>About</li></a>
            <a href="#technologies"><li onClick={toggleMenu}>Technologies</li></a>
            <a href="#footer"><li onClick={toggleMenu}>Contact</li></a>
            <a href={Resume} target="_blank" rel="noopener noreferrer"><li onClick={toggleMenu}>Resume <FontAwesome className="fa-download" name="resume-download-button"/></li></a>
            <a href="https://github.com/albert-anthony6" target="_blank" rel="noopener noreferrer"><li onClick={toggleMenu}>GitHub <FontAwesome className="fa-github" name="github"/></li></a>
            <a href="https://www.linkedin.com/in/avaldes21/" target="_blank" rel="noopener noreferrer"><li onClick={toggleMenu}>LinkedIn <FontAwesome className="fa-linkedin" name="linkedin"/></li></a>
        </ul>   
    }
    </div>
);

export default BurgerMenu;