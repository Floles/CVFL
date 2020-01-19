import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import image from '../assets/images/stairs.jpg';

import App from './components/App';

const GlobalStyle = createGlobalStyle`
    body {
        background-image: linear-gradient(to bottom, rgba(255,255,255,0.5),rgba(255,255,255,0.3)), url(${image});
        background-size: contain;
        background-attachment: fixed;
    }
`;

ReactDOM.render(
    <>
        <GlobalStyle/>
        <App />
    </>,
    document.getElementById('root')
);