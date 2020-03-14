import React from 'react';
import './Home.styles.scss'
import FontAwesome from 'react-fontawesome';
import ComputerToWorld from '../../assets/ComputerToWorld.png';
import Card from '../../components/card/Card.component';

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

            <section className="projects">
                <div className="projects-container">
                    <h2>My Latest Work</h2>
                    <hr/>
                    <p>Some of my greatest and latest projects.</p>
                    <div className="cards">
                        <Card imgUrl="http://www.abwtechnologies.com/images/film-cloud-summary.png"/>
                        <Card imgUrl="http://www.abwtechnologies.com/images/space-xplorer-summary.png"/>
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
                        <p className="react">React</p>
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

            <section className="testimonials">
                <div className="testimonials-container">
                    <h2>Client Testimonials</h2>
                    <hr/>
                    <p>Client feedback on great experiences</p>

                    <div className="clients-container">
                        <div className="client-box">
                            <p>"Albert Valdes has generously offered his skills in building websites to me free of charge multiple times and has shown a great level of progress each time. He has shown me that he is able to create attractive and enjoyable websites with what he has learned over the past several months. If I were to get Albert to help me build a stunning website for my projects, I know I couldn't go wrong." <br/> <span>-Michelle Jimenez</span></p>
                        </div>
                        
                        <div className="client-box">
                        <p>"Albert Valdes is someone who is capable of adaptively learning a new skill due to ability to challenge himself and know his limits and how they can be pushed further. He is patient with himself and knows when to step away from coding bugs, take a well-needed mental break, and get right back to work better and more efficiently than ever despite any pressure lingering around him." <br/> <span>-Allen Flores</span></p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </React.Fragment>
);

export default Home;