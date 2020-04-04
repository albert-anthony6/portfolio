import React, { useEffect } from 'react';
import './ProjectOverview.styles.scss';

import HeroSection from '../../components/hero-section/HeroSection.component';
import Footer from '../../components/footer/Footer.component';
import FontAwesome from 'react-fontawesome';
import MoviesImg from '../../assets/Movies.png';
import CrwnImg from '../../assets/CrwnImg.png';

import { Link, withRouter } from 'react-router-dom';

const ProjectOverview = ({ match, changeHome }) => {
    useEffect(() => {
        window.scrollTo(0, 650);
        changeHome(false);
    }, []);

    let project = {};

    if(match.params.projectId === 'movie'){
        project = {
            p: 'Browse for your favorite Movies and actors. Browse the latest and greatest films and find information about their budget, crew, rating, and runtime. Users have the ability to scroll through any category until they find a movie that catch their interest, go to specific category pages to search for a movie that would be under a specific category, or simply search for any movie within TMDB API by title.',
            img: MoviesImg,
            gif: 'https://media.giphy.com/media/IgAS8mUgG6FZuWN9V1/giphy.gif',
            list: ['React', 'Redux', 'Hooks', 'TMDB API', 'Sass', 'React Router']
        }
    } else if(match.params.projectId === 'ecommerce'){
        project = {
            p: 'Browse the Crown store for any clothing coming from a firebase database. Select items to add them to your cart and proceed to customize your cart before checking out with the provided test credit card information. Users who log in will have their cart items stored and remembered for the next time they visit the store. User accounts are put into the firebase database and users have the ability to sign in with their Google accounts instead if they prefer.',
            img: CrwnImg,
            gif: 'https://media.giphy.com/media/MBx1WEvDLgZ0S9XoN7/giphy.gif',
            list: ['React', 'Redux', 'Redux Saga', 'firebase', 'Sass', 'React Router']
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