import React from 'react';
import './Card.styles.scss';

import { Link } from 'react-router-dom';

const Card = ({ imgUrl, name, info }) => (
    <div className="card">
        <div className="img-overlay">
            <Link to={name}><img src={imgUrl} alt="project-thumbnail"/></Link>
        </div>
        <p>{info}</p>
    </div>
);

export default Card;