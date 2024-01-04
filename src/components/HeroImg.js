import './HeroImgStyle.css';
import introImg from '../assets/Nature.jpeg'
import { Link } from 'react-router-dom';
const HeroImg = () => {
    return (
        <>
            <div className='hero'>
                <div className='mask'>
                    <img className="intro-img" src={introImg} alt=''></img>
                </div>
                <div className='content'>
                    <p>Hi I am SDE</p>
                    <h1>Full Stack Developer</h1>

                    <Link to="/project" className='btn'>Projects</Link>
                    <Link to="/contact" className='btn-light'>Contact</Link>
                </div>
            </div>

        </>
    )
}
export default HeroImg;