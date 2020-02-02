import React, { useState } from "react";
import './Login.scss';

const Login = (props) => {
  document.title = `Login Demo`;
  const theme = props.theme;
  const isLight = theme === "light";

  return (
    <>
      <h4 style={{ textAlign: isLight ? 'left' : 'right' }}>The theme is {isLight ? 'LIGHT' : 'DARK'}</h4>
    </>
  );
};

export default Login;