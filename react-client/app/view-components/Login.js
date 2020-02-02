import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import './Login.scss';

const Login = (props) => {
    document.title = `Login`;
    const context = useContext(AppContext);
    const theme = context.theme;
    const isLight = theme === "light";

    return (
        <>
            <h4 style={{ textAlign: isLight ? 'left' : 'right' }}>The theme is {isLight ? 'LIGHT' : 'DARK'}</h4>
        </>
    );
};

export default Login;