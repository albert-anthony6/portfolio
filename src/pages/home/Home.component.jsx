import React from 'react';
import './Home.styles.scss'
import FontAwesome from 'react-fontawesome';
import ComputerToWorld from '../../assets/ComputerToWorld.png';

const Home = () => (
    <React.Fragment>
        <header>
            <div className="heroimage-text-container">
                <FontAwesome className="fa-chevron-down" name="chevron-down" size="2x"/>
                <span>
                    <h1>A|V Technologies</h1>
                    <h2>People work better together</h2>
                    <p>The power of one, if fearless and focused, is formidable, but the power of many working together is better.
                        <br/>-Gloria Macapagal Arroyo</p>
                </span>
                <span>
                    <p>Want to get in touch with me? I'm always looking for a new project or a coding buddy. Don't be shy, get in touch.</p>
                    <button>Get in touch</button>
                </span>
            </div>
        </header>

        <main className="main-container">
            <section className="about-me">
                <div className="about-me-container">
                    <h2>Who am I...</h2>
                    <hr/>
                    <p>Hello there! My name is Albert and I'm a Front End Developer</p>
                    <p>Like many other people, I enjoy spending my free time increasing my knowledge of Web Development and building new and challenging projects.</p>
                    <button>Find out more</button>
                </div>

                <div className="about-me-image">
                    <img src={ComputerToWorld} alt="computer-to-world"/>
                </div>
            </section>
        </main>
    </React.Fragment>
);

export default Home;