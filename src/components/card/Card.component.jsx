import React from 'react';
import './Card.styles.scss';

const Card = ({imgUrl}) => (
    <div className="card">
        <div className="img-overlay">
            <img src={imgUrl} alt="project-thumbnail"/>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus suscipit sint quam molestias...</p>
    </div>
);

export default Card;