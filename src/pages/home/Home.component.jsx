import React, { useEffect } from 'react';
import './Home.styles.scss'

import FontAwesome from 'react-fontawesome';
import ComputerToWorld from '../../assets/ComputerToWorld.png';

import Card from '../../components/card/Card.component';
import HeroSection from '../../components/hero-section/HeroSection.component';
import Footer from '../../components/footer/Footer.component';
import MoviesThumb from '../../assets/MoviesThumb.png';
import CrwnThumb from '../../assets/CrwnThumb.png';

const Home = ({ changeHome }) => {
    useEffect(() => {
        changeHome(true);
    }, []);

    return(
        <React.Fragment>
            <HeroSection/>
            <main className="main-container">
                <section className="about-me" id="about">
                    <div className="about-me-container">
                        <h2>Who am I...</h2>
                        <hr/>
                        <p>Hello there! My name is Albert and I'm a Front End Developer</p>
                        <p>Like many other people, I enjoy spending my free time increasing my knowledge of Web Development and building new and challenging projects.</p>
                        <a href="#footer"><button>Find out more</button></a>
                    </div>

                    <div className="about-me-image">
                        <img src={ComputerToWorld} alt="computer-to-world"/>
                    </div>
                </section>

                <section className="projects" id="project">
                    <div className="projects-container">
                        <h2>My Latest Work</h2>
                        <hr/>
                        <p>Some of my greatest and latest projects.</p>
                        <div className="cards">
                            <Card name="/project/movie" info="Browse for your favorite Movies and actors. Browse the latest and greatest films and..." imgUrl={MoviesThumb}/>
                            <Card name="/project/ecommerce" info="Browse the Crown store for any clothing coming from a firebase database. Select items..." imgUrl={CrwnThumb}/>
                        </div>
                    </div>
                </section>

                <section className="tech-skills">
                    <div className="tech-skills-container">
                        <h2>Technological Skills</h2>
                        <hr/>
                        <p>I always enjoy learning new things. Especially the technologies that make your company special.</p>

                        <div className="skills-grid">
                            <p className="html">Semantic HTML5</p>
                            <p className="css">Responsive CSS3</p>
                            <p className="js">Interactive JavaScript</p>
                            <p className="sass">Sass</p>
                            <p className="bootstrap">Bootstrap</p>
                            <p className="adobe">Adobe XD</p>
                            <p className="react">React/React Hooks</p>
                            <p className="redux">Redux</p>
                            <p className="git">git</p>
                            <p className="github">github</p>
                            <p className="problem-solver">Problem Solver</p>
                        </div>
                    </div>
                </section>

                <section className="why-me">
                    <div className="why-me-container">
                        <h2>Why work with me?</h2>
                        <hr/>
                        <p>There are many advantages to working with me. Here are a few:</p>

                        <div className="reasons">
                            <div className="reason">
                                <FontAwesome className="fa fa-code" name="code" size="3x"/>
                                <h3>Passionate about development</h3>
                                <p>Big believer in the fact that the greatest work is done by passionate people.</p>
                            </div>
                            
                            <div className="reason">
                                <FontAwesome className="fa fa-leanpub" name="leanpub" size="3x"/>
                                <h3>Quick learner</h3>
                                <p>Confident in my ability to learn something new and put it into production. Thrive in fast-paced and competitive environments.</p>
                            </div>

                            <div className="reason">
                                <FontAwesome className="fa fa-users" name="users" size="3x"/>
                                <h3>Adaptable</h3>
                                <p>Always excited to learn new things. The most valuable thing I can provide to your company is the ability to be molded to your stack.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="testimonials" id="testimonial">
                    <div className="testimonials-container">
                        <h2>Client Testimonials</h2>
                        <hr/>
                        <p>Client feedback on great experiences</p>

                        <div className="clients-container">
                            <div className="client-box">
                                <p>"Albert Valdes has generously offered his skills in building websites to me free of charge multiple times and has shown a great level of progress each time. He has shown me that he is able to create attractive and enjoyable websites with what he has learned. He's shown great potential as a web developer. If I were to get Albert to help me build a stunning website for my projects, I know I couldn't go wrong." <br/> <span>-Michelle Jimenez</span></p>
                            </div>
                            
                            <div className="client-box">
                            <p>"Albert Valdes is someone who is capable of adaptively learning a new skill due to his willingness to challenge himself, know his limits, and how they can be pushed further. He is patient with himself and knows when to step away from coding bugs, take a well-needed mental break, and get right back to work with more efficiency than ever despite any pressure lingering around him." <br/> <span>-Allen Flores</span></p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </React.Fragment>
    );
};

export default Home;