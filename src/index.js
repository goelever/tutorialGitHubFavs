import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
//import App from './components/App'; Warum geht das nicht mehr?
//Importing modules using require, and exporting using module.exports and exports.foo.
var App = require('./components/popular');

ReactDOM.render(
    <App />,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
