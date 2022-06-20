import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <p>Footer</p>
            <Link to="/about">About</Link>
            {/* <br/>
            <Link to="/displaysurveys">sho surveys</Link> */}
        </footer>
    );
};

export default Footer;