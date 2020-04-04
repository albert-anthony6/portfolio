import React from 'react';
import './Footer.styles.scss';

import FontAwesome from 'react-fontawesome';

const Footer = () => (
    <footer id="footer">
        <div className="footer-container">
            <div className="footer-about-me">
                <h2>About ALBERT</h2>
                <p>Hello there! My name is Albert and I'm a Front End Developer.</p> 
                <p>I started my journey as a self-taught web developer during senior year of High School when I first discovered the biggest HTML, CSS, and JavaScript. Ever since I have fallen in love with web development and spend most of my days taking my craft to the next level.</p> 
                <p>Nowadays I tend to code all of my projects from scratch in order to deliver a unique experience to every company.</p> 
                <p>Like many other people, I enjoy spending my free time increasing my knowledge of Web Development and building new and challenging projects.</p> 
                <p>Some of my favorite things to do include:</p> 
            </div>

            <div className="contact">
                <h2>Say hello:</h2>
                <p><FontAwesome className="fa-map-marker" name="map-marker"/> Address: Memphis, TN 38122</p>
                <p><FontAwesome className="fa-envelope" name="envelope"/> Email: albert.anthony1999@gmail.com</p>
                <p><FontAwesome className="fa-phone" name="phone"/> Phone: (901) 265-2710</p>
            </div>
        </div>

        <div className="footer-hobbies">
            <p><FontAwesome className="fas fa-users" name="user-friends"/> Tutoring AP Computer Science students on programming</p>
            <p><FontAwesome className="fas fa-code" name="code"/> Learning modern standards and best practices of the industry</p>
            <p><FontAwesome className="fas fa-cogs" name="cogs"/> Volunteering as a Vex Robotics coach at my local former high school</p>
        </div>

        <div className="footer-links">
            <a href="https://github.com/albert-anthony6" target="_blank"><FontAwesome className="fas fa-github" name="github" size="2x"/></a>
            <a href="https://www.linkedin.com/in/avaldes21/" target="_blank"><FontAwesome className="fas fa-linkedin" name="linkedin" size="2x"/></a>
        </div>

        <div className="copyright">© 2018 Albert Valdes</div>
    </footer>
);

export default Footer;