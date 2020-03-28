import React, { useEffect } from 'react';
import './ProjectOverview.styles.scss';

import HeroSection from '../../components/hero-section/HeroSection.component';
import Footer from '../../components/footer/Footer.component';
import FontAwesome from 'react-fontawesome';

import { Link } from 'react-router-dom';

const ProjectOverview = () => {
    useEffect(() => {
        window.scrollTo(0, 650);
    }, []);

    return(
        <React.Fragment>
            <HeroSection/>
            <main>
                <section className='overview'>
                    <h2>Overview:</h2>
                    <hr/>

                    <div className="overview-container">
                        <div className="overview-p">
                            <p>Browse your favorite Movies, TV shows, and actors. Search for specific movies, shows or actors by date, rating, region and other categories. Browse the latest and greatest films and to find information about its actors, crew, and reviews. Rate and favorite Movies, TV shows and actors while having access to them through a user account. Login / Authentication.</p>
                        </div>
                        <div className="overview-img">
                            <img src="http://www.abwtechnologies.com/images/film-cloud-summary.png" alt="Project image"/>
                        </div>
                    </div>

                    <div className="overview-btns">
                        <button>View Project <FontAwesome className="fas fa-angle-double-right" name="angle-double-right"/></button>
                        <button>View Code <FontAwesome className="fas fa-angle-double-right" name="angle-double-right"/></button>
                    </div>
                </section>

                <section className="tech-used">
                    <h2>Technologies Used:</h2>
                    <hr/>

                    <div className="tech-used-container">
                        <div className="tech-used-img">
                            <img src="https://media.giphy.com/media/IgAS8mUgG6FZuWN9V1/giphy.gif" alt="Project image"/>
                        </div>

                        <div className="tech-used-ul">
                            <ul>
                                <li>React</li>
                                <li>Redux</li>
                                <li>Hooks</li>
                                <li>TMDB API</li>
                                <li>Sass</li>
                                <li>React Router</li>
                            </ul>
                        </div>
                    </div>

                    <div className="tech-used-btn">
                        <Link to="/"><button><FontAwesome className="fas fa-angle-double-left" name="angle-double-left"/> Go back to projects</button></Link>
                    </div>
                </section>
            </main>
            <Footer/>
        </React.Fragment>
    );
};

export default ProjectOverview;