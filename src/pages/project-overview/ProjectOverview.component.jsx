import React, { useEffect } from 'react';
import './ProjectOverview.styles.scss';

import HeroSection from '../../components/hero-section/HeroSection.component';
import Footer from '../../components/footer/Footer.component';
import FontAwesome from 'react-fontawesome';

import { Link, withRouter } from 'react-router-dom';

const ProjectOverview = ({ match, changeHome }) => {
    useEffect(() => {
        window.scrollTo(0, 650);
        changeHome(false);
    }, []);

    let project = {};

    if(match.params.projectId === 'movie'){
        project = {
            p: 'Browse your favorite Movies, TV shows, and actors. Search for specific movies, shows or actors by date, rating, region and other categories. Browse the latest and greatest films and to find information about its actors, crew, and reviews. Rate and favorite Movies, TV shows and actors while having access to them through a user account. Login / Authentication.',
            img: 'http://www.abwtechnologies.com/images/film-cloud-summary.png',
            gif: 'https://media.giphy.com/media/IgAS8mUgG6FZuWN9V1/giphy.gif',
            list: ['React', 'Redux', 'Hooks', 'TMDB API', 'Sass', 'React Router']
        }
    } else if(match.params.projectId === 'ecommerce'){
        project = {
            p: 'Something else',
            img: 'http://www.abwtechnologies.com/images/film-cloud-summary.png',
            gif: 'https://media.giphy.com/media/IgAS8mUgG6FZuWN9V1/giphy.gif',
            list: ['React', 'Redux', 'Hooks', 'TMDB API', 'Sass', 'React Router']
        }
    }
    
    return(
        <React.Fragment>
            <HeroSection/>
            <main>
                <section className='overview' id="about">
                    <h2>Overview:</h2>
                    <hr/>

                    <div className="overview-container">
                        <div className="overview-p">
                            <p>{project.p}</p>
                        </div>
                        <div className="overview-img">
                            <img src={project.img} alt="Project image"/>
                        </div>
                    </div>

                    <div className="overview-btns">
                        <a href="https://react-theater.herokuapp.com" target="_blank"><button>View Project <FontAwesome className="fas fa-angle-double-right" name="angle-double-right"/></button></a>
                        <a href="https://github.com/albert-anthony6/react-films" target="_blank"><button>View Code <FontAwesome className="fas fa-angle-double-right" name="angle-double-right"/></button></a>
                    </div>
                </section>

                <section className="tech-used" id="technologies">
                    <h2>Technologies Used:</h2>
                    <hr/>

                    <div className="tech-used-container">
                        <div className="tech-used-img">
                            <img src={project.gif} alt="Project image"/>
                        </div>

                        <div className="tech-used-ul">
                            <ul>
                                {project.list.map((tech) => (
                                    <li>{tech}</li>
                                ))}
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

export default withRouter(ProjectOverview);