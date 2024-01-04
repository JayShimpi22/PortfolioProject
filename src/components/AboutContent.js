import React from 'react'
import { Link } from 'react-router-dom'
import './AboutContentStyle.css';
const AboutContent = () => {
    return (
        <div className='about'>
            <div className='left'>
                <h1>Who Am I?</h1>
                <p>I am a Full Stack Developer with expertise in DSA and ML/AI Stuff</p>
                <Link to="/contact">
                    <button className='btn'>Contact</button>
                </Link>
            </div>

            <div className='right'>
                <div className='img-container'>
                    <div className='img-stack top'>
                        <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9" alt='#'/>
                    </div>
                    

                </div>
            </div>
        </div>
    )
}

export default AboutContent