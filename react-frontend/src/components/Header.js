import React from 'react';
import { useLocation } from 'react-router-dom';
import Button from "./Button";


const Header = ({ onAdd, showAdd, title }) => {
    const location = useLocation();
    return (
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname === "/" && (
                <>
                <Button
                    color={showAdd ? "red" : "green"}
                    text={showAdd ? "Close" : "Login"}
                    onClick={onAdd} />
                <Button
                    color={showAdd ? "red" : "green"}
                    text={showAdd ? "Close" : "➕Survey"}
                    />
                </>
            )}
        </header>
    );
};

export default Header;