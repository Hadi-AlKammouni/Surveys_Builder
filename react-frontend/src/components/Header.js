import React from 'react';
import { useLocation } from 'react-router-dom';
import Button from "./Button";


const Header = ({onAddSurvey ,onLogin, showAddL, showAddS, title }) => {
    const location = useLocation();
    return (
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname === "/" && (
                <>
                <Button
                    color={showAddL ? "red" : "green"}
                    text={showAddL ? "Close" : "Login"}
                    onClick={onLogin} />
                <Button
                    color={showAddS ? "red" : "green"}
                    text={showAddS ? "Close" : "➕Survey"}
                    onClick={onAddSurvey}/>
                </>
            )}
        </header>
    );
};

export default Header;