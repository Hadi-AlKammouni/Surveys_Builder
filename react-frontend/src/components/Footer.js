import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <p>Footer</p>
            <Link to="/about">About</Link>
        </footer>
    );
};

export default Footer;