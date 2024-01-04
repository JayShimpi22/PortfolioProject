import React from 'react';
import './HeroImg2style.css';

const HeroImg2 = (props) => {
    return (
        <div className='hero-img'>
            <div className='heading'>
                <h1>This is {props.heading}</h1>
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default HeroImg2