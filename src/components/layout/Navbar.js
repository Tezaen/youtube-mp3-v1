import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = ({ title, icon}) => {
    return (
        <nav className="navbar bg-dark">
            <h1>
                <i className={icon} />   {title}
            </h1>

            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    )
}

Navbar.defaultProps = {
    title: "Youtube to MP3",
    icon: "fab fa-youtube"
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Navbar;
