import React from 'react';
import './BurgerMenu.styles.scss';

import FontAwesome from 'react-fontawesome';

const BurgerMenu = () => (
    <div className="burger-menu">
        <ul>
            <a href="#about"><li>About</li></a>
            <a href="#project"><li>Projects</li></a>
            <a href="#testimonial"><li>Testimonials</li></a>
            <a href="#footer"><li>Contact</li></a>
            <a href="#"><li>Resume <FontAwesome className="fa-download" name="resume-download-button"/></li></a>
            <a href="https://github.com/albert-anthony6" target="_blank"><li>GitHub <FontAwesome className="fa-github" name="github"/></li></a>
            <a href="https://www.linkedin.com/in/avaldes21/" target="_blank"><li>LinkedIn <FontAwesome className="fa-linkedin" name="linkedin"/></li></a>
        </ul>
    </div>
);

export default BurgerMenu;