import { Link } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa'

import { useState } from "react";
import './NavbarStyle.css'


const Navbar = () => {
    const [click, setClick] = useState(true);
    const handleClick = () => {
        setClick(!click);
    }
    const [color, setColor] = useState(false);

    const changeColor = function () {
        if (window.scrollY >= 1) {
            setColor(true);
        }
        else {
            setColor(false);
        }
    }

    window.addEventListener("scroll", changeColor);

    return (
        <>
            <div className={color ? "header header-bg" : "header"}>
                <Link to="/">
                    <h1>Portfolio Project</h1>
                </Link>
                <ul className={!click ? "nav-menu active" : "nav-menu"}>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/project">Project</Link></li>
                    <li><Link to="/contact">Contact</Link></li>

                </ul>
                <div className="hamburger" onClick={handleClick}>
                    {
                        click ? <FaBars size={20} style={{ color: "white" }} /> :
                            <FaTimes size={20} style={{ color: "white" }} />
                    }

                </div>
            </div>
        </>
    )
}

export default Navbar;