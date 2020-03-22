import React from 'react';
import './ProjectOverview.styles.scss';

import FontAwesome from 'react-fontawesome';

const ProjectOverview = () => (
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
    </main>
);

export default ProjectOverview;