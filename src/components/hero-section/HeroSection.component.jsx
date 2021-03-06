import React from 'react';
import './HeroSection.styles.scss';

import FontAwesome from 'react-fontawesome';

const HeroSection = () => (
    <header>
        <div className="heroimage-text-container">
            <span>
                <h1>A|V Technologies</h1>
                <h2>People work better together</h2>
                <p>The power of one, if fearless and focused, is formidable, but the power of many working together is better.
                    <br/>-Gloria Macapagal Arroyo</p>
            </span>
            <span>
                <p>Want to get in touch with me? I'm always looking for a new project or a coding buddy. Don't be shy, get in touch.</p>
                <a href="#footer"><button>Get in touch</button></a>
            </span>
        </div>
        <a href="#about"><FontAwesome className="fa-chevron-down" name="chevron-down" size="2x"/></a>
    </header>
);

export default HeroSection;