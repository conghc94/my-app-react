import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import State from './State';
import './index.css';
import Exercise from "./Exercise";

ReactDOM.render(
    <Exercise />,
    document.getElementById('root')
);

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
ReactDOM.render(
    <State />,
    document.getElementById('state')
);
