import React from 'react';
import './Card.styles.scss';

import { Link } from 'react-router-dom';

const Card = ({ imgUrl, name }) => (
    <div className="card">
        <div className="img-overlay">
            <Link to={name}><img src={imgUrl} alt="project-thumbnail"/></Link>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus suscipit sint quam molestias...</p>
    </div>
);

export default Card;