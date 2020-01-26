import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import image from '../assets/images/stairs.jpg';
import App from './components/App';
import json from './resume.json';

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Raleway', sans-serif;
        overflow-x: hidden;
    }
`;

ReactDOM.render(
    <>
        <GlobalStyle/>
        <App resume={json}/>
    </>,
    document.getElementById('root')
);